import { readFileSync, readdirSync, existsSync } from "node:fs";
import JSZip from "jszip";
import { BOOK, BOOK_VERSION, SOURCE, chapterFragment, escapeHtml } from "./manuscript.mjs";
import { buildToc, renderToc } from "./toc.mjs";

const XHTML_HEAD = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" xml:lang="ko" lang="ko">`;

const page = (title, body) => `${XHTML_HEAD}
<head>
<meta charset="utf-8" />
<title>${escapeHtml(title)}</title>
<link rel="stylesheet" type="text/css" href="style.css" />
</head>
<body>
${body}
</body>
</html>
`;

export async function buildEpub({ items, coverPng, css }) {
  const zip = new JSZip();
  zip.file("mimetype", "application/epub+zip", { compression: "STORE" });
  zip.file(
    "META-INF/container.xml",
    `<?xml version="1.0" encoding="UTF-8"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
  <rootfiles><rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/></rootfiles>
</container>
`,
  );

  const oebps = zip.folder("OEBPS");
  oebps.file("style.css", css);
  oebps.file("cover.png", coverPng);
  oebps.file(
    "cover.xhtml",
    page(
      "표지",
      `<section epub:type="cover" style="text-align:center"><img src="cover.png" alt="${escapeHtml(BOOK.title)} 표지" style="max-height:100%;max-width:100%" /></section>`,
    ),
  );
  for (const item of items) oebps.file(item.href, page(item.fullTitle, chapterFragment(item)));

  const images = existsSync("manuscript/images") ? readdirSync("manuscript/images").sort() : [];
  for (const name of images) oebps.file(`images/${name}`, readFileSync(`manuscript/images/${name}`));

  const toc = buildToc(items);
  const hrefOf = (item, frag) => `${item.href}${frag ? `#${frag}` : ""}`;
  oebps.file(
    "nav.xhtml",
    page(
      "차례",
      `<nav epub:type="toc" id="toc"><h1>차례</h1>
${renderToc(toc, hrefOf)}
</nav>
<nav epub:type="landmarks" hidden="hidden"><h2>Landmarks</h2><ol>
<li><a epub:type="cover" href="cover.xhtml">표지</a></li>
<li><a epub:type="toc" href="nav.xhtml">차례</a></li>
<li><a epub:type="bodymatter" href="${items.find((i) => i.kind === "part" || i.kind === "ch").href}">본문</a></li>
</ol></nav>`,
    ),
  );

  let play = 0;
  const navPoint = (label, src, kids = "") =>
    `<navPoint id="np${++play}" playOrder="${play}"><navLabel><text>${escapeHtml(label)}</text></navLabel><content src="${src}"/>${kids}</navPoint>`;
  const ncxEntry = (e) => {
    const kids = e.children.length
      ? e.children.map(ncxEntry).join("")
      : e.item.kind === "part"
        ? ""
        : e.item.headings.filter((h) => h.level === 2).map((h) => navPoint(h.text, hrefOf(e.item, h.id))).join("");
    return navPoint(e.item.fullTitle, hrefOf(e.item), kids);
  };
  oebps.file(
    "toc.ncx",
    `<?xml version="1.0" encoding="UTF-8"?>
<ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1">
<head><meta name="dtb:uid" content="${BOOK.identifier}"/><meta name="dtb:depth" content="3"/><meta name="dtb:totalPageCount" content="0"/><meta name="dtb:maxPageNumber" content="0"/></head>
<docTitle><text>${escapeHtml(BOOK.title)}</text></docTitle>
<navMap>${toc.map(ncxEntry).join("")}</navMap>
</ncx>
`,
  );

  const manifest = [
    `<item id="nav" href="nav.xhtml" media-type="application/xhtml+xml" properties="nav"/>`,
    `<item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml"/>`,
    `<item id="css" href="style.css" media-type="text/css"/>`,
    `<item id="cover-image" href="cover.png" media-type="image/png" properties="cover-image"/>`,
    `<item id="cover" href="cover.xhtml" media-type="application/xhtml+xml"/>`,
    ...items.map((i) => `<item id="${i.id}" href="${i.href}" media-type="application/xhtml+xml"${i.html.includes("<svg") ? ' properties="svg"' : ""}/>`),
    ...images.map((n, k) => `<item id="img${k}" href="images/${n}" media-type="image/jpeg"/>`),
  ];
  const spine = [`<itemref idref="cover" linear="no"/>`, `<itemref idref="nav"/>`, ...items.map((i) => `<itemref idref="${i.id}"/>`)];
  oebps.file(
    "content.opf",
    `<?xml version="1.0" encoding="UTF-8"?>
<package xmlns="http://www.idpf.org/2007/opf" version="3.0" unique-identifier="bookid" xml:lang="ko" prefix="schema: http://schema.org/">
<metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
<dc:identifier id="bookid">${BOOK.identifier}</dc:identifier>
<dc:title>${escapeHtml(BOOK.title)}: ${escapeHtml(BOOK.subtitle)}</dc:title>
<dc:language>ko</dc:language>
<dc:creator>비공식 한국어 해설 (원저 pstack: Lauren Tan)</dc:creator>
<dc:rights>MIT License. See the attribution appendix.</dc:rights>
<dc:description>Cursor 플러그인 pstack(${SOURCE.version})의 스킬 51종을 한국어로 해설한 기술서. 비공식판.</dc:description>
<meta property="schema:version">${BOOK_VERSION}</meta>
<meta property="dcterms:modified">${BOOK.date}T00:00:00Z</meta>
<meta name="cover" content="cover-image"/>
</metadata>
<manifest>
${manifest.join("\n")}
</manifest>
<spine toc="ncx">
${spine.join("\n")}
</spine>
</package>
`,
  );

  return zip.generateAsync({ type: "nodebuffer", mimeType: "application/epub+zip", compression: "DEFLATE", compressionOptions: { level: 9 } });
}
