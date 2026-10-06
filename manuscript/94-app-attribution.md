# 저작권 표기와 라이선스

원문: {{src:LICENSE}} {{src:.cursor-plugin/plugin.json}} {{src:README.md}}

## 이 책의 성격

이 책은 pstack에 대한 **비공식 한국어 해설서**입니다. 원저자 Lauren Tan(X: @poteto)은 2026년 9월 28일 이 안내서를 무료로 배포해도 좋다고 허락했습니다(https://x.com/poteto/status/2104671461827055941). 원저자는 내용을 검토하지 않았으며, 원저자와 Cursor는 이 책을 보증하거나 후원하거나 품질을 보장하지 않습니다. 원문을 줄 단위로 번역한 책이 아니라, 소스를 읽고 스킬이 무엇을 위한 것이고 언제 쓰며 어떻게 동작하는지를 다시 설명한 글입니다. 정확한 문구가 필요하면 각 절의 `원문` 링크로 원본을 읽으십시오. 이 책은 AI의 도움을 받아 쓰고 원문과 대조해 확인했지만 오류가 있을 수 있으므로, 원본이 항상 기준입니다. 오류는 https://github.com/jayjongcheolpark/pstack-guide-ko 의 GitHub Issues로 제보해 주십시오.

## 이 책의 저작권과 라이선스

이 한국어 해설서(원고, 구성, 빌드 도구)의 저작권은 Copyright (c) 2026 Jay Park이고 MIT 라이선스로 공개합니다. 원저작물인 pstack의 저작권은 Copyright (c) 2026 Lauren Tan이고 역시 MIT입니다. 저장소 루트의 `LICENSE`에 두 저작권 고지가 함께 있고, `NOTICE.md`가 출처를 밝힙니다.

## 원저작물

| 항목 | 값 |
| --- | --- |
| 이름 | pstack |
| 원저자 | Lauren Tan (매니페스트의 작성자). README는 1인칭으로 poteto라고 밝힙니다 |
| 저작권 | Copyright (c) 2026 Lauren Tan |
| 라이선스 | MIT |
| 원본 저장소 | https://github.com/cursor/plugins 의 `pstack/` 디렉터리 |
| 이 책의 버전 | {{bookVersion}} (pstack {{version}}과 같습니다. 같은 pstack 버전에서 이 책만 고치면 `-ko.N`을 붙입니다), 커밋 `df581122cde17e6e27686b5a448bde23e4ad4318` |

pstack의 매니페스트(`.cursor-plugin/plugin.json`)는 작성자를 Lauren Tan, 라이선스를 MIT로 밝히고 저장소를 `https://github.com/cursor/plugins`로 가리킵니다. README는 "포크하고, 개선하고, 자기 것으로 만들라. PR을 환영한다"고 적습니다.

## MIT 라이선스 전문

아래는 `pstack/LICENSE`(위 커밋)의 전문입니다. 라이선스 조건에 따라 이 책은 저작권 고지와 허가 고지를 함께 싣습니다.

```text
MIT License

Copyright (c) 2026 Lauren Tan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 이 책이 인용하거나 옮긴 것

- 스킬, 플레이북, 에이전트, 문서에서 짧게 인용한 문장, 코드 예, 표, 프롬프트 예는 pstack의 저작물이며 위 MIT 라이선스에 따릅니다. 각 절의 `원문` 줄이 어느 파일에서 왔는지 고정된 커밋의 링크로 밝힙니다.
- 책의 삽화 여섯 장(`images/router.jpg` 등)은 pstack의 `docs/guide/images/`에 있는 사용 안내서의 삽화를 폭 1000픽셀로 줄여 옮긴 것입니다. 마찬가지로 pstack의 저작물입니다.
- 한국어 문장과 구성은 이 책의 것입니다. 원문의 설명을 옮길 때는 한국어로 다시 썼고, 스킬 이름, 명령어, 파일 이름, 코드는 원문 그대로 남겼습니다.

## 언급만 하고 다루지 않은 것

- `cursor-team-kit`은 같은 저장소(`cursor/plugins`)의 별개 플러그인입니다. pstack의 파일이 그 스킬(`deslop`, `control-cli`, `control-ui` 등)을 부르는 자리에서 그 출처를 밝히며 언급했을 뿐, 이 책은 그 플러그인의 스킬을 장으로 다루거나 옮기지 않았습니다.
- pstack을 Claude Code로 옮긴 포팅(`michael-denyer/pstack-claude`)이 별도로 존재한다고 알려져 있습니다. 이 사실은 이 책의 원본(`cursor/plugins`의 `pstack/`)에는 나오지 않는 외부 정보이며 원본에서 확인하지 않았습니다. 이 책은 그 포팅을 원본으로 쓰지 않았고 그 동작을 설명하지 않습니다. Cursor용 원본만을 다룹니다.
- Cursor, Slack, Linear, Notion, Datadog, Sentry, Databricks, Tailscale, GitHub 등의 이름은 각 소유자의 상표이며 해당 도구를 가리킬 때만 썼습니다.

## 빌드 도구와 글꼴

이 책의 EPUB과 PDF는 저장소 안의 도구(`tools/`)로 만듭니다. 글꼴은 PDF에만 쓰이고 오픈 소스 글꼴입니다. 본문에 Noto Serif KR, 제목에 Noto Sans KR, 코드에 JetBrains Mono를 쓰고 모두 SIL Open Font License를 따릅니다. 글꼴은 npm 패키지(`@fontsource/*`)로 저장소 안에 설치해 씁니다. EPUB에는 글꼴을 넣지 않고 리더가 제공하는 한국어 글꼴을 씁니다.
