# 원본 (Source)

이 책의 유일한 원본입니다. pstack을 다른 환경으로 옮긴 포팅이나 다른 판은 원본으로 쓰지 않았습니다.

| 항목 | 값 |
| --- | --- |
| 저장소 | https://github.com/cursor/plugins |
| 디렉터리 | `pstack/` |
| 커밋 (전체 SHA) | `4e5b1cf2ccb0ea3716f08c8ee0a5856b5ab93536` |
| 플러그인 버전 | 0.15.10 (`pstack/.cursor-plugin/plugin.json`). 이 책의 버전은 이 값에서 시작합니다. 같은 pstack 버전에서 이 책만 고치면 `0.15.10-ko.N`처럼 개정 번호가 붙습니다(`tools/lib/manuscript.mjs`의 `BOOK_REVISION`. 0이면 접미사 없음). 현재 책 버전은 `0.15.10`입니다 |
| 기본 브랜치 | `main` |
| 클론 날짜 | 2026-10-05 |
| 저작권 | MIT, Copyright (c) 2026 Lauren Tan (`pstack/LICENSE`) |

범위는 `pstack/` 아래 전부입니다: `skills/`(51개), `agents/`, `automations/`, `docs/`, `README.md`, `.cursor-plugin/plugin.json`, `LICENSE`. 별개 플러그인인 `cursor-team-kit`(deslop, fix-ci, fix-merge-conflicts, get-pr-comments, make-pr-easy-to-review, thermo-nuclear-code-quality-review, what-did-i-get-done 등)은 장으로 다루지 않고, pstack 파일이 그것을 부르는 곳에서 한두 문장으로 언급합니다.

## 읽는 방법

원본은 이 저장소 밖에 읽기 전용으로 클론해서 읽습니다. 이 저장소에 복사하거나 서브모듈로 넣지 않습니다.

```shell
git clone https://github.com/cursor/plugins.git <저장소 밖 임시 경로>/cursor-plugins
cd <저장소 밖 임시 경로>/cursor-plugins
git checkout 4e5b1cf2ccb0ea3716f08c8ee0a5856b5ab93536
chmod -R a-w .
```

## 원문 링크 형식

각 스킬 절 제목 아래의 `원문` 줄은 이 커밋에 고정한 GitHub permalink입니다.

```text
https://github.com/cursor/plugins/blob/4e5b1cf2ccb0ea3716f08c8ee0a5856b5ab93536/pstack/skills/<name>/SKILL.md
```

글에서 다룬 다른 파일(`references/`, `playbooks/`, `scripts/`, `agents/`, `docs/`, `automations/`)도 같은 커밋의 permalink로 적습니다.
