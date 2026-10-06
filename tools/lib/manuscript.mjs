// Loads manuscript/*.md and renders each file to an XHTML fragment.
//
// File names: NN-kind-slug.md with kind in front | part | ch | app.
//   front: unnumbered front matter    part: part divider (numbered 제 N부)
//   ch: numbered chapter (제 N장)     app: appendix (부록 A, B, ...)
// Heading ids: "## text {#id}" sets an explicit id, otherwise ids are derived from the text.
// Links to other chapters: [text](slug.md#anchor) where slug is the file name after kind.
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import MarkdownIt from "markdown-it";
import hljs from "highlight.js";
import { renderFlow } from "./flow.mjs";

export const SOURCE = {
  repo: "https://github.com/cursor/plugins",
  sha: "df581122cde17e6e27686b5a448bde23e4ad4318",
  version: "0.15.15",
  dir: "pstack",
};
// The book version starts from the pstack version it covers. A book-only fix, while
// pstack stays at the same version, sets BOOK_REVISION to 1, 2, ... and the version
// becomes ${SOURCE.version}-ko.${BOOK_REVISION}. BOOK_REVISION 0 means this release
// is the pstack version itself. SOURCE.version and BOOK_REVISION are the only places
// either is written down.
export const BOOK_REVISION = 0;
export const BOOK_VERSION = BOOK_REVISION > 0 ? `${SOURCE.version}-ko.${BOOK_REVISION}` : SOURCE.version;
export const bookFile = (ext) => `pstack-guide-${BOOK_VERSION}.${ext}`;
export const srcUrl = (path) => `${SOURCE.repo}/blob/${SOURCE.sha}/${SOURCE.dir}/${path}`;

export const BOOK = {
  title: "pstack 가이드",
  subtitle: "Cursor 플러그인 스킬 51종 해설",
  language: "ko",
  identifier: "urn:uuid:5f6d1c1e-4a0b-4c7e-9a52-7d1b3c0e9a11",
  date: "2026-10-06",
};

// Worked examples written for this book (not from the source) open with this label.
export const EXAMPLE_LABEL = "예시 (이 책의 저자가 만든 것, 원본에 없음)";
// Commentary blocks (interpretation that is not in the source) open with this label.
export const COMMENTARY_LABEL = "해설 (이 책의 해석, 원본에 없음)";

const KINDS = new Set(["front", "part", "ch", "app"]);

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/[`*_~]/g, "")
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "") || "section";
}

const md = new MarkdownIt({
  html: false,
  linkify: false,
  typographer: false,
  xhtmlOut: true,
  highlight(code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(code, { language: lang, ignoreIllegals: true }).value;
      } catch {}
    }
    return "";
  },
});

const escapeHtml = (s) => md.utils.escapeHtml(s);

const defaultFence = md.renderer.rules.fence;
md.renderer.rules.fence = (tokens, idx, options, env, self) => {
  const token = tokens[idx];
  const [lang, ...name] = token.info.trim().split(/\s+/);
  if (lang === "flow") return renderFlow(token.content, name.join(" "));
  return defaultFence(tokens, idx, options, env, self);
};

function renderChapter(source, ctx) {
  const env = { headings: [], usedIds: new Set(), links: [] };
  const tokens = md.parse(source, env);
  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    if (t.type === "heading_open") {
      const inline = tokens[i + 1];
      let text = inline.content;
      let id;
      const m = text.match(/\s*\{#([\w-]+)\}\s*$/);
      if (m) {
        id = m[1];
        text = text.slice(0, m.index);
        inline.content = text;
        const last = inline.children[inline.children.length - 1];
        if (last && last.type === "text") last.content = last.content.replace(/\s*\{#[\w-]+\}\s*$/, "");
      }
      if (!id) id = `${ctx.slug}-${slugify(text)}`;
      let unique = id;
      for (let n = 2; env.usedIds.has(unique); n++) unique = `${id}-${n}`;
      env.usedIds.add(unique);
      t.attrSet("id", unique);
      env.headings.push({ level: Number(t.tag.slice(1)), id: unique, text });
    }
    if (t.type === "inline") {
      for (const c of t.children) {
        if (c.type === "link_open") {
          const href = c.attrGet("href");
          env.links.push(href);
        }
      }
    }
  }
  let html = md.renderer.render(tokens, md.options, env);
  for (const label of [EXAMPLE_LABEL, COMMENTARY_LABEL]) {
    html = html.replaceAll(`<blockquote>\n<p><strong>${label}`, `<blockquote class="example">\n<p><strong>${label}`);
  }
  return { html, headings: env.headings, links: env.links };
}

export function loadManuscript(dir = "manuscript") {
  const files = readdirSync(dir).filter((f) => f.endsWith(".md")).sort();
  const items = [];
  const counters = { part: 0, ch: 0, app: 0 };
  for (const file of files) {
    const m = file.match(/^(\d+)-(front|part|ch|app)-(.+)\.md$/);
    if (!m || !KINDS.has(m[2])) throw new Error(`bad manuscript file name: ${file}`);
    const [, order, kind, slug] = m;
    const srcPaths = [];
    const source = readFileSync(join(dir, file), "utf8").replaceAll("{{version}}", SOURCE.version).replaceAll("{{bookVersion}}", BOOK_VERSION).replace(/\{\{src:([^}\s]+)\}\}/g, (_, path) => {
      srcPaths.push(path);
      return `[\`${path}\`](${srcUrl(path)})`;
    });
    const first = source.match(/^#\s+(.+?)\s*$/m);
    if (!first) throw new Error(`${file}: missing h1`);
    let label = "";
    if (kind === "part") label = `제 ${++counters.part}부`;
    if (kind === "ch") label = `제 ${++counters.ch}장`;
    if (kind === "app") label = `부록 ${String.fromCharCode(64 + ++counters.app)}`;
    items.push({ file, order: Number(order), kind, slug, label, title: first[1], source, srcPaths });
  }
  const bySlug = new Map(items.map((i) => [i.slug, i]));
  for (const item of items) {
    const body = item.source.replace(/^#\s+.+\n/, "");
    const out = renderChapter(body, item);
    item.html = out.html;
    item.headings = out.headings;
    item.links = out.links;
    item.id = `${item.kind}-${item.slug}`;
    item.href = `${item.id}.xhtml`;
    item.fullTitle = item.label ? `${item.label} ${item.title}` : item.title;
  }
  for (const item of items) {
    item.html = item.html.replace(/href="([^"#:/]+)\.md(#[^"]*)?"/g, (whole, slug, frag = "") => {
      const target = bySlug.get(slug);
      if (!target) throw new Error(`${item.file}: link to unknown chapter "${slug}.md"`);
      return `href="${target.href}${frag}"`;
    });
  }
  return { items, bySlug };
}

export function chapterFragment(item) {
  const head = item.label
    ? `<p class="label">${escapeHtml(item.label)}</p>\n`
    : "";
  return `<section class="${item.kind}" id="${item.id}" epub:type="${item.kind === "part" ? "part" : item.kind === "app" ? "appendix" : item.kind === "front" ? "frontmatter" : "chapter"}">
${head}<h1>${escapeHtml(item.title)}</h1>
${item.html}</section>`;
}

export { escapeHtml };
