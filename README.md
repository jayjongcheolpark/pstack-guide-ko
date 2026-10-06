# pstack 가이드 (한국어 해설서)

Lauren Tan의 Cursor 플러그인 [pstack](https://github.com/cursor/plugins/tree/main/pstack)(0.15.15, 커밋 `df581122cde17e6e27686b5a448bde23e4ad4318`)을 한국어로 설명한 기술서입니다.

> **비공식 해설서입니다.** 이 책은 AI의 도움을 받아 쓰고 원문과 대조해 확인했지만 오류가 있을 수 있습니다. 원본이 항상 기준이므로 이 책과 원본이 다르면 원본을 따르십시오. 원저자 Lauren Tan(X: @poteto)은 2026년 9월 28일 이 안내서를 무료로 배포해도 좋다고 허락했습니다([X 답글](https://x.com/poteto/status/2104671461827055941)). 원저자는 내용을 검토하지 않았으며, 원저자와 Cursor는 이 책을 보증하거나 품질을 보장하지 않습니다.

## 버전

pstack 0.15.15(커밋 `df581122cde17e6e27686b5a448bde23e4ad4318`)를 기준으로 합니다. 이 책의 버전은 pstack의 버전에서 시작하고, 첫 릴리스는 `v0.15.5`입니다. pstack 버전이 그대로일 때 이 책만 고치면 릴리스 태그에 `v0.15.5-ko.3`처럼 접미사가 붙습니다. 이 책의 현재 버전은 `0.15.15`입니다.

예시는 이 책의 저자가 만든 것이고 원본에 없습니다. 점선 테두리 블록의 첫 줄에 "예시 (이 책의 저자가 만든 것, 원본에 없음)"이라고 밝혔고, 원문에 없는 해석은 "해설 (이 책의 해석, 원본에 없음)"으로 표시했습니다.

## 내려받기

[최신 릴리스](https://github.com/jayjongcheolpark/pstack-guide-ko/releases/latest)에서 EPUB와 PDF를 내려받을 수 있습니다.

- `pstack-guide-0.15.15.epub`: 전자책 리더용
- `pstack-guide-0.15.15.pdf`: 가로 152mm, 세로 225mm(국내 단행본에서 흔한 크기), 인쇄와 화면 읽기용

## 차례

- 이 책에 대하여
- 이 책을 읽는 방법
- 제 1부 시작하기
  - 제 1장 pstack이란 무엇인가
  - 제 2장 설치와 첫 사용: setup-pstack, poteto-help
- 제 2부 진입점
  - 제 3장 poteto-mode
  - 제 4장 작업 플레이북
  - 제 5장 PR 플레이북
  - 제 6장 장시간, 대규모 플레이북
- 제 3부 이해하기
  - 제 7장 how: 코드가 어떻게 동작하는가
  - 제 8장 why: 왜 이런 모양인가
  - 제 9장 teach와 recall: 이해시키기와 맥락 복원
- 제 4부 설계하기
  - 제 10장 architect: 코드 전에 모양을 정한다
  - 제 11장 arena, swarm, figure-it-out
  - 제 12장 원칙 스킬 24개
- 제 5부 고치고 검증하기
  - 제 13장 tdd와 blast-radius
  - 제 14장 interrogate: 여러 모델이 diff를 깨뜨린다
  - 제 15장 검증 스킬: benchmark-checklist, create-verification-skill, maintain-verification-skill
- 제 6부 글과 코드 정리
  - 제 16장 글쓰기: unslop과 technical-writing
  - 제 17장 코드 정리: no-comments와 typescript-best-practices
- 제 7부 나만의 방식과 유틸리티
  - 제 18장 automate-me, reflect, correct, show-me-your-work
  - 제 19장 bro: 평이한 말로 다시 듣기
- 제 8부 자동화
  - 제 20장 make-bot-ui와 benny 자동화 팩
- 제 9부 실전
  - 제 21장 밤새 돌리기
  - 제 22장 레시피와 함정
- 부록 A 스킬 빠른 참조표
- 부록 B 용어집
- 부록 C 스킬 선택 흐름도
- 부록 D 저작권 표기와 라이선스

## 다루는 범위

- 스킬 51개 (일반 스킬 27개와 `principle-*` 원칙 스킬 24개)
- `poteto-mode`의 플레이북 23개와 그 references, scripts
- 에이전트 2개(`poteto-agent`, `Comment Sicko`)
- 자동화 팩 `benny`와 `make-bot-ui`
- 원본의 사용 안내서(`docs/guide`), README, 플러그인 매니페스트

같은 저장소의 별개 플러그인 `cursor-team-kit`은 다루지 않고, pstack이 그것을 부르는 자리에서만 출처를 밝히며 언급합니다. 각 스킬 절 제목 아래에는 고정한 커밋의 원문 링크가 있습니다.

## 빌드하는 방법

[Bun](https://bun.sh)과 Google Chrome이 필요합니다. 모든 도구는 저장소 안에 설치되며 시스템 전역 설치는 필요 없습니다.

```shell
bun install
bun tools/build.mjs        # dist/pstack-guide-0.15.15.epub, dist/pstack-guide-0.15.15.pdf
```

검사는 원본의 고정 커밋을 저장소 밖에 클론한 뒤 실행합니다.

```shell
git clone https://github.com/cursor/plugins.git ../cursor-plugins
git -C ../cursor-plugins checkout df581122cde17e6e27686b5a448bde23e4ad4318
PSTACK_SRC=../cursor-plugins/pstack bun tools/check.mjs   # 원고 규칙, 링크, 스킬 51개와 플레이북 23개의 절 존재, epubcheck
bun tools/check-layout.mjs                                # EPUB을 좁은 폭에서 열어 가로 넘침 검사
```

## 어떻게 만들었는가

AI의 도움으로 고정한 커밋의 원문을 읽고 한국어로 다시 설명했고, 스킬과 플레이북마다 원문을 다시 열어 대조했습니다. 절의 존재와 링크, EPUB 유효성(epubcheck), 레이아웃은 위의 검사 스크립트가 기계로 확인합니다. 집필 규칙은 `STYLE.md`, 진행과 사실 확인 기록은 `PROGRESS.md`, 원본 정보는 `SOURCE.md`에 있습니다.

## 오류 제보

틀린 곳을 발견하면 [GitHub Issues](https://github.com/jayjongcheolpark/pstack-guide-ko/issues)에 알려 주십시오. 위치(장과 절)와 원문의 해당 문장을 함께 적어 주시면 확인이 빠릅니다.

## 기여하는 방법

`main` 브랜치는 보호되어 있어 변경은 모두 풀 리퀘스트(PR)로 받습니다. 정정은 Issue나 PR로 환영합니다. 유지관리자가 검토하고 병합합니다.

- 정정에는 장과 절을 밝히고, 고정한 커밋의 원문 permalink를 함께 적어 주십시오.
- "예시"와 "해설" 라벨은 그대로 유지합니다.
- PR을 열기 전에 위 빌드 절의 검사 두 가지(`tools/check.mjs`를 `PSTACK_SRC`와 함께, `tools/check-layout.mjs`)를 실행합니다.
- 한국어 문장은 합니다체로 쓰고 영어 식별자는 바꾸지 않습니다. 자세한 규칙은 `STYLE.md`에 있습니다.
- PR의 제목과 설명은 한국어나 영어로 쓰면 됩니다.

## 라이선스

MIT입니다. 원저작물 pstack은 Copyright (c) 2026 Lauren Tan, 이 한국어 해설서는 Copyright (c) 2026 Jay Park입니다. 전문은 [LICENSE](LICENSE), 출처와 삽화 표기는 [NOTICE.md](NOTICE.md)에 있습니다. 책의 여섯 삽화는 pstack의 `docs/guide/images/`에서 가져왔습니다.

---

# pstack Guide (Korean)

An unofficial Korean explanation of [pstack](https://github.com/cursor/plugins/tree/main/pstack), Lauren Tan's Cursor plugin (0.15.15, commit `df581122cde17e6e27686b5a448bde23e4ad4318`). It covers all 51 skills, the 23 `poteto-mode` playbooks, the agents, the `benny` automation pack and the guide docs, with a permalink to the pinned source at each skill section.

The book version starts from the pstack version it covers (0.15.15), and the first release was `v0.15.5`. If the book alone is fixed while pstack stays at the same version, the release tag gets a suffix such as `v0.15.5-ko.3`. The current book version is `0.15.15`. Files are on the [Releases](https://github.com/jayjongcheolpark/pstack-guide-ko/releases) page: `pstack-guide-0.15.15.epub` and `pstack-guide-0.15.15.pdf` (152 x 225 mm, a common Korean paperback size).

Examples written for this book are not in the original and are labeled `예시 (이 책의 저자가 만든 것, 원본에 없음)`; interpretation the source does not state is labeled `해설 (이 책의 해석, 원본에 없음)`.

**This book is unofficial and was written with AI assistance. It may contain errors, and the original is authoritative.** The original author, Lauren Tan (X: @poteto), gave permission on 2026-09-28 to distribute the guide for free ([reply on X](https://x.com/poteto/status/2104671461827055941)). The author has not reviewed the content, and neither the author nor Cursor endorses or guarantees it.

- Download the EPUB and PDF from the [latest release](https://github.com/jayjongcheolpark/pstack-guide-ko/releases/latest).
- Build: `bun install`, then `bun tools/build.mjs` (needs Bun and Google Chrome). Checks are described in the Korean section above.
- Report errors through [GitHub Issues](https://github.com/jayjongcheolpark/pstack-guide-ko/issues).
- Contribute: `main` is protected, so changes come through pull requests, and the maintainer reviews and merges them. Corrections are welcome as Issues or PRs. Name the chapter and section and cite the original permalink at the pinned commit, keep the example and commentary labels, and run `tools/check.mjs` (with `PSTACK_SRC`) and `tools/check-layout.mjs` before opening a PR. Korean text stays in 합니다체 and English identifiers stay unchanged (see `STYLE.md`). PR titles and descriptions may be in Korean or English.
- License: MIT. Copyright (c) 2026 Lauren Tan (original pstack) and Copyright (c) 2026 Jay Park (this explanation). See [LICENSE](LICENSE) and [NOTICE.md](NOTICE.md). The six illustrations come from pstack's `docs/guide/images/`.
