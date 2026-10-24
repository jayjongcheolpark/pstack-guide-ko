# 진행 상황

재시작해도 이어서 작업할 수 있도록 남기는 파일입니다. 원본은 `SOURCE.md`, 문체와 절 구성은 `STYLE.md`, 용어는 `manuscript/92-app-glossary.md`를 봅니다.

## 원본

`cursor/plugins`의 `pstack/`, 커밋 `e73df471cd4bd918367e99f3dd9c51bd53ddf5f0` (0.15.32) 한 가지입니다. 다른 판이나 포팅 자료는 쓰지 않았습니다. 자세한 내용은 `SOURCE.md`. 아래 사실 확인 기록의 2026-09-28 절은 그때의 핀 `adf3218`(0.15.5)을, 0.15.9 절은 그때의 핀 `e43c7ee`를, 0.15.10 절은 그때의 핀 `4e5b1cf`를, 0.15.15 절은 그때의 핀 `df58112`를, 0.15.17 절은 그때의 핀 `978ca6e`를, 0.15.20 절은 그때의 핀 `1b6d44f`를, 0.15.21 절은 그때의 핀 `997ffc7`를, 0.15.23 절은 그때의 핀 `dbf4981`을, 0.15.24 절은 그때의 핀 `1e5c90a`를, 0.15.25 절은 그때의 핀 `e5136d8`를, 0.15.25-ko.1 절은 그때의 핀 `99743e9`를, 0.15.25-ko.2 절은 그때의 핀 `182f2ce`를, 0.15.26 절은 그때의 핀 `0b8e952`를, 0.15.28 절은 그때의 핀 `d457567`를, 0.15.29 절은 그때의 핀 `88d4751`을, 0.15.30 절은 그때의 핀 `eb4db2b`를, 0.15.30-ko.1 절은 그때의 핀 `4ec7ffa`를, 0.15.32 절은 그때의 핀 `e73df47`을 적은 기록입니다.

## 빌드와 검사

```shell
bun install
bun tools/build.mjs        # dist/pstack-guide-<버전>.epub, dist/pstack-guide-<버전>.pdf
PSTACK_SRC=<클론 경로>/pstack bun tools/check.mjs   # 원고 규칙, 링크, 스킬 58개와 플레이북 23개의 절 존재, epubcheck
bun tools/check-layout.mjs                          # EPUB을 390px 폭에서 열어 가로 넘침 검사
bun tools/pdf-inspect.mjs dist/pstack-guide-<버전>.pdf <출력 디렉터리> 2,10,300   # PDF 페이지 수, 개요, 글꼴, 한글 텍스트, 선택한 페이지를 PNG로
```

## 장 목록

상태: todo, drafted (초고), checked (원문 대조 완료).

| 파일 | 내용 | 상태 |
| --- | --- | --- |
| 01-front-colophon | 이 책에 대하여, 기준 버전 | | checked |
| 02-front-howto | 이 책을 읽는 방법 | | checked |
| 10-part-start | 1부 시작하기 | | checked |
| 11-ch-what-is-pstack | pstack이란 무엇인가 (README, 매니페스트, 구성) | | checked |
| 12-ch-setup | 설치와 첫 사용 (`setup-pstack`, `poteto-help`, `in-your-own-words`, `sharpen`) | | checked |
| 20-part-entry | 2부 진입점 | | checked |
| 21-ch-poteto-mode | `poteto-mode` 본체와 `poteto-agent` | | checked |
| 22-ch-playbooks-work | 작업 플레이북 12개 (조사, 버그, 성능, 기능 등) | | checked |
| 23-ch-playbooks-pr | PR 플레이북 (opening-a-pr, babysit, shipping, bugbot-triage) | | checked |
| 24-ch-playbooks-long | 장시간, 대규모 플레이북 8개 | | checked |
| 30-part-understand | 3부 이해하기 | | checked |
| 31-ch-how | `how` | | checked |
| 32-ch-why | `why` | | checked |
| 33-ch-teach-recall | `teach`, `recall`, `ketchup`, `ketchup-video` | | checked |
| 40-part-design | 4부 설계하기 | | checked |
| 41-ch-architect | `architect` | | checked |
| 42-ch-arena-swarm | `arena`, `swarm`, `figure-it-out` | | checked |
| 43-ch-principles | `principle-*` 24개 | | checked |
| 50-part-fix | 5부 고치고 검증하기 | | checked |
| 51-ch-tdd-blast | `tdd`, `blast-radius` | | checked |
| 52-ch-interrogate | `interrogate` | | checked |
| 53-ch-verification | `benchmark-checklist`, `create-verification-skill`, `maintain-verification-skill`, `create-formal-verification-skill`, `maintain-formal-verification-skill`, `statechart` | | checked |
| 60-part-clean | 6부 글과 코드 정리 | | checked |
| 61-ch-writing | `unslop`, `technical-writing` | | checked |
| 62-ch-code-hygiene | `no-comments`, `typescript-best-practices` | | checked |
| 70-part-yours | 7부 나만의 방식과 유틸리티 | | checked |
| 71-ch-personal | `automate-me`, `reflect`, `correct`, `show-me-your-work` | | checked |
| 72-ch-utility | `bro` | | checked |
| 80-part-automation | 8부 자동화 | | checked |
| 81-ch-benny | `make-bot-ui`, `automations/benny` | | checked |
| 85-part-practice | 9부 실전 | | checked |
| 86-ch-overnight | 밤새 돌리기 | | checked |
| 87-ch-recipes | 레시피와 함정 | | checked |
| 91-app-quickref | 부록 A 스킬 빠른 참조표 | | checked |
| 92-app-glossary | 부록 B 용어집 | | checked |
| 93-app-decision-flow | 부록 C 스킬 선택 흐름도 | | checked |
| 94-app-attribution | 부록 D 저작권 표기 | | checked |

## 구성 변경과 이유

- 원본의 `docs/guide`는 10장짜리 사용 안내서입니다. 이 책은 스킬을 주제별로 묶는 구성을 유지하되, 가이드의 흐름(설정, 라우팅, 이해, 설계, 빌드와 정리, 검증과 배포, 밤새 돌리기, 원칙, 나만의 방식, 레시피)을 각 부에 나눠 담았습니다.
- 원본의 `docs/harness/claude-code.md`는 설치와 Cursor 이름 대응이므로 시작하기 부의 설치 장에서 다룹니다. `docs/guide/01-setup.md`와 같은 자리입니다.
- `poteto-mode`는 SKILL.md와 플레이북 23개, references, scripts로 분량이 가장 큽니다. 다른 부의 항목으로 두면 균형이 무너져서 시작하기 다음에 독립된 부(진입점)로 세웠습니다.
- `setup-pstack`은 설치와 설정이 주제라서 시작하기 부의 설치 장에서 스킬 절로 다룹니다.
- `principle-*` 스킬은 독립된 장(설계하기 부)으로 묶었습니다.
- 검증 스킬(`benchmark-checklist`, `create-verification-skill`, `maintain-verification-skill`, `create-formal-verification-skill`, `maintain-formal-verification-skill`, `statechart`)은 버그 수정과 검증이 같은 흐름이라서 고치고 검증하기 부의 마지막 장에 뒀습니다. `benchmark-checklist`는 플레이북이 아니라 스킬이라 플레이북 장이 아니라 이 장에 절이 있습니다. `create-formal-verification-skill`은 앱을 구동하는 검증 스킬이 아니라 테스트가 잘 닿지 않는 속성 하나를 형식 검증(formal verification)하는 프로젝트 전용 스킬을 남기므로 같은 장에 절을 뒀고, `maintain-formal-verification-skill`은 그 검사가 덮는 코드가 바뀐 뒤의 유지 루프라 그 옆에 뒀습니다. `statechart`는 TLA+ 모델에서 사용자가 보는 것을 차트로 그리고 안내서 6장이 형식 검증 다음에 두므로 그 둘 다음에 뒀습니다.
- cursor-team-kit의 스킬은 장으로 쓰지 않았습니다. 이 저장소의 pstack 파일이 그것을 부르는 자리에서 한두 문장으로만 언급합니다. 그래서 fix-ci, fix-merge-conflicts, PR 준비 스킬 장은 없고, PR 흐름은 poteto-mode 플레이북 장에서 다룹니다.
- 원본의 `automations/benny`는 슬래시 스킬로 등록되지 않은 자동화 팩이라 별도 부(자동화)로 뒀습니다.
- `ketchup`은 `/recall`과 가까운 짝이라 이해하기 부의 teach/recall 장에 절을 뒀습니다. `ketchup-video`는 그 따라잡기를 영상으로 보여 주므로 같은 장에 절을 뒀습니다. README와 `/poteto-help`가 이 채팅의 마지막 메시지 이후(`/ketchup`, `/ketchup-video`)와 최근 채팅을 가로지르는 맥락(`/recall`)과 특정 채팅 이어받기(Session pickup)를 나란히 구분합니다.

## 해석한 부분 (원문이 모호했던 곳)

- **원문 개수.** principle 스킬은 24개입니다(스킬 총 58개 = 일반 34개 + principle 24개). README도 24개라고 합니다. 책은 고정한 커밋의 디렉터리를 세어 얻은 수를 따릅니다. 0.15.5 핀에서는 23개와 47개, 0.15.9 핀에서는 26개와 50개, 0.15.15 핀에서는 27개와 51개, 0.15.17부터 0.15.21까지는 28개와 52개, 0.15.23은 29개와 53개, 0.15.24부터 0.15.25까지는 30개와 54개, 0.15.26은 31개와 55개, 0.15.28부터 0.15.29까지는 32개와 56개, 0.15.30부터 0.15.30-ko.1까지는 33개와 57개였고, 그 기록은 아래 사실 확인에 남아 있습니다.
- **Comment Sicko의 읽기 전용 여부.** README와 안내서는 "read-only comment reviewer"라고 하지만 `agents/comment-sicko.md`는 스스로 주석을 지우고 삭제 수를 보고한다고 씁니다("I touch comments", "touched files, deletion count"). 애플리케이션 코드는 쓰지 않는다는 점은 일치합니다. 책은 정의 파일의 표현을 따르고 README의 표현을 함께 밝혔습니다.
- **`/setup-pstack` 재실행의 보존 범위.** README와 안내서는 "기본값과 다른 역할을 유지"라고 하고, `setup-pstack/SKILL.md` 3(b)는 계열, 목록, 별칭으로 바꾼 역할을 유지하고 강도 토큰은 새 예산에 맞춰 다시 계산한다고 합니다. 책은 정밀한 쪽(스킬 본문)을 따릅니다.
- **`poteto-mode`의 프런트매터 해석.** 0.15.22에서 `mode`와 `reminder` 키를 뺐습니다. 커밋 메시지(#597)는 Cursor가 두 키를 무시해 reminder 문구가 모델에 닿지 않았다고 합니다. `disable-model-invocation: true`는 남습니다. 0.15.10 README와 안내서는 더 이상 "sticky mode"라고 하지 않고, Enter는 한 메시지에만 붙고 Option+Enter/Alt+Enter(또는 Use as Mode)가 Custom Mode를 만든다고 적습니다. 책은 그 설명을 따릅니다. `disable-model-invocation`은 "모델이 자동으로 부르지 않는다"는 통상 뜻으로 적었습니다.
- **`benny`가 슬래시 스킬이 아니라는 점.** README가 "dormant", "not registered as slash skills"라고 밝힙니다. 책은 별도 부(자동화)에서 지시문의 내용을 원문 순서대로 옮겼습니다.
- **`cursor-team-kit`.** 별개 플러그인이라 장으로 다루지 않았습니다. `poteto-mode`와 플레이북이 부르는 자리(`deslop`, `control-cli`, `control-ui`, `create-skill` 내장 기능 등)에서 출처만 밝혔습니다.
- **Claude Code.** 원본 README와 `docs/harness/claude-code.md`가 공식 설치와 이름 대응을 밝히므로 설치 장에서 그 범위만 다룹니다. `/pstack:setup-pstack`은 `~/.claude/rules/pstack-models.md`를 씁니다. Cursor에만 있는 기능이 필요한 단계는 `Skipped in Claude Code: <step>. <reason>.` 한 줄과 함께 건너뜁니다. 생성 복사는 README와 안내서를 포함하고, GitHub main의 pstack 링크는 로컬 복사본으로 읽습니다. 비공식 포팅(`michael-denyer/pstack-claude`)은 원본에 없는 외부 정보라서 저작권 표기 부록에서 존재만 언급하고 원본에서 확인하지 않았다고 밝혔습니다. 저장소 루트의 생성 트리 `harness/pstack/`은 `pstack/` 밖이라 원문으로 쓰지 않았습니다.
- **`disable-model-invocation`.** `setup-pstack`만 이 프런트매터가 없고 나머지 56개 스킬에는 모두 있습니다. 0.15.11부터 `poteto-help`에도 붙었고, 사용자의 말만으로 로드되는 스킬은 `/setup-pstack`뿐입니다. 스킬 절에서는 있는 경우에 한해 언급했습니다.

## 열린 질문

- 없음.

## 사실 확인 기록

2026-09-28에 고정한 클론(`adf3218`)에서 스킬 47개, 플레이북 23개, 에이전트 2개, 자동화 팩, 안내서 10장을 원고와 대조했습니다.

- `bun tools/check.mjs`가 스킬 47개와 플레이북 23개마다 원고에 절이 있는지, `{{src:...}}` 링크가 가리키는 파일이 클론에 있는지, 내부 링크가 풀리는지 기계로 검사합니다.
- 전체 원고를 다섯 묶음으로 나눠 읽기 전용 AI 보조 에이전트 다섯 개가 원문을 다시 열어 대조했습니다. 묶음: (1) 시작하기와 poteto-mode와 작업 플레이북, (2) PR 플레이북과 장시간 플레이북과 스크립트, (3) how, why, teach, recall, architect, arena, swarm, figure-it-out, (4) 원칙 23개와 tdd, blast-radius, interrogate, 검증 스킬, unslop, technical-writing, no-comments, typescript-best-practices, (5) automate-me, reflect, show-me-your-work, bro, make-bot-ui, benny, 밤새 돌리기, 레시피, 부록.
- 보조 에이전트의 지적은 하나씩 원문에서 다시 확인한 뒤 고쳤습니다. 고친 것: 서브에이전트 모델 기본값에서 지어낸 "나머지는 단일 역할 기본값" 삭제, 역할별 줄의 우선순위와 `inherit-parent` 규칙 보강, 전면 자율 부여 규칙과 Babysit 모드 선언과 Shipping 병합 예약 규칙 추가, Feature의 "예외 없음" 과장 교정, `orch`와 `how`/`why`/`recall`이 원칙을 구현한다는 근거 없는 서술 삭제, 원칙 인용처 교정(guard-the-context-window, fix-root-causes), interrogate 코드 품질 렌즈가 0번부터 7번까지 여덟 개라는 점과 1번의 면제 조항, `maintain-verification-skill`의 `blocked` 조건 교정, reflect 기준 수 8개 교정, `watch-pr`의 READY 근거를 원문 문장으로 교정, `bugbotReviewPasses`가 PR 전체 값이라는 점, Bugbot 후보 학습이 네 가지라는 점, `inbox drain`이 4행 제한 밖이라는 점, teach의 문체 규칙과 예시 출처 교정, `Comment Sicko`의 읽기 전용 표현 정리, benny 관련 스킬 링크 문장 교정과 누락 규칙 보강, 저자 이름 표현 교정.
- 지적했지만 고치지 않은 것: 없음(전부 반영).

## 원칙과 플레이북 심화

처음 원고를 마친 뒤 원칙 장(`43-ch-principles`)과 플레이북 세 장(`22`, `23`, `24`)을 깊게 다뤘습니다. 다른 장은 다시 쓰지 않았고, 이 변경 때문에 바뀐 앞부분(`01`, `02`), 부록(`91`, `92`), README만 손봤습니다.

추가한 것:

- 원칙 23개 절마다 적용과 예외, 저자가 만든 전후 예시 하나, 함정, 함께 보는 원칙(원문이 서로 연결한 것만). 장 끝에 "원칙이 서로 당길 때" 절(원문이 밝힌 짝의 표와 해설 블록).
- 플레이북 23개 절마다 흐름도, 단계별 산출물, 저자가 만든 예시, 실패와 중단과 모호할 때, 호출하는 스킬과 스크립트 표.
- 흐름도는 마크다운의 ` ```flow ` 블록에서 빌드가 인라인 SVG로 그립니다(`tools/lib/flow.mjs`). 문법은 그 파일의 머리말에 있습니다.
- 표시 규칙: 저자가 만든 예시는 점선 테두리 인용 블록이고 첫 줄이 "예시 (이 책의 저자가 만든 것, 원본에 없음)"입니다. 원문에 없는 해석은 "해설 (이 책의 해석, 원본에 없음)"입니다. `tools/check.mjs`가 이 두 표지의 문구가 정확한지 검사합니다.

쪽수: 334쪽에서 419쪽으로 85쪽 늘었습니다(원칙 장 약 19쪽, 플레이북 세 장 약 65쪽). 흐름도는 상자 제목만 남겨 크기를 줄였고 표의 여백을 줄였으며 사소한 항목을 잘랐습니다.

### 해석한 부분 (심화)

- 흐름도의 `back` 화살표는 원문이 반복을 말하는 자리에만 그렸습니다(Hillclimb의 가설 루프, Visual parity의 diff 0 루프, Shipping의 병합 후 재계산, Orchestrate의 웨이브, Autopilot-full의 다음 항목, Autopilot-stack의 재검증 등). 화살표의 도착 단계는 원문의 서술에서 읽은 것입니다.
- Opening a PR은 원문에 번호 단계가 없어서 굵은 소제목 아홉 개의 순서를 흐름으로 그렸습니다.
- 원문이 정하지 않은 항목(예: 신호가 잡히지 않는 경우)은 "원문이 정하지 않았다"고 쓰거나 아예 넣지 않았습니다.
- 원칙 절의 "함께 보는 원칙"은 원문의 다른 파일이 그 원칙을 실제로 이름으로 부르는 경우만 적었습니다. 그렇지 않은 연결은 "해설" 표지를 붙였습니다.

### 사실 확인 기록 (심화)

2026-09-28에 고정한 클론(`adf3218`)에서 바뀐 절 전부를 다시 대조했습니다. 읽기 전용 AI 보조 에이전트 네 개가 원문을 다시 열어 대조했습니다. 묶음: (1) 작업 플레이북 12개, (2) Opening a PR, Babysit, Shipping, Autonomous run, Session pickup, Pause safely, Worktree cleanup, (3) Multi-phase plan, Orchestrate, Autopilot-full, Autopilot-stack, (4) 원칙 23개와 상호작용 절. 예시 블록은 이야기 자체를 대조하지 않고 플레이북 규칙과 어긋나는지만 봤습니다. 지적은 하나씩 원문에서 다시 확인한 뒤 고쳤습니다.

고친 것:

- Shipping 흐름에서 감시(8단계)가 재계산(7단계)보다 먼저 오도록 순서 교정, Babysit 호출 표에서 근거 없는 Opening a PR 행 삭제.
- Bug fix 표에 `/loop` 추가, Perf issue의 control 스킬 단계 교정, Runtime forensics 예시에 처리량 점검표 추가, Refactoring 표에 control 스킬 추가와 4단계 산출물 교정, Authoring의 "문체" 표현 삭제, Eval 예시를 모델마다 두 변형을 돌리도록 수정.
- Orchestrate: `orch` 하위 명령을 단계별로 정확히 나눔, 2단계 산출물 교정, 웨이브 루프 도착 단계 교정. Autopilot-full: 예시의 무조건적 "진술 후 대기" 삭제, 루프를 소유자의 병합 단계로 이동. Autopilot-stack: 재검증 루프 추가. `/goal`을 내장 명령이라고 부른 표현 교정.
- 원칙: 원문이 서로 연결하지 않은 원칙 연결(foundational-thinking과 separate-before-serializing, experience-first와 exhaust-the-design-space, model-the-domain과 type-system-discipline 등)을 삭제하거나 "해설"로 표시, 근거 없는 서술("판정 기준은 줄 수가 아니라")을 원문 표현으로 교정, benny `setup-benny` 서술 교정, Feature의 워크트리 서술 교정, Autonomy와 never-block-on-the-human의 연결을 해설로 표시하고 상호작용 표에서 그 행 삭제, fix-root-causes 예시 코드의 순서 오류 교정, 상호작용 해설의 "앞의 원칙이 이깁니다"를 "뒤의 원칙"으로 교정, 라벨만 있고 본문이 없던 "해설" 표시 정리.
- 용어 통일: 원장을 장부로, 드리프트를 표류로, 게이트를 관문으로, 레버를 지렛대로, 서브코디네이터를 하위 조정자로.

지적했지만 고치지 않은 것: Hillclimb와 Visual parity의 `back` 화살표 도착 단계(원문 서술에서 읽은 대로 의도한 것이라 유지).

### 산출물

- `dist/pstack-guide-<버전>.epub` (EPUB 3, epubcheck-ts 오류 0, 경고 0, 390px 폭 가로 넘침 없음, 흐름도는 인라인 SVG)
- `dist/pstack-guide-<버전>.pdf` (가로 152mm, 세로 225mm, 419쪽, 개요 560항목, 한글 텍스트 추출 확인, em dash 0)
- 저장소에는 넣지 않고 저장소 밖 릴리스 폴더에 SHA256SUMS와 함께 둡니다.

버전: 이 책의 버전은 기준으로 삼은 pstack의 버전(0.15.5)에 개정 번호를 붙인 `0.15.5-ko.2`입니다. 값은 `tools/lib/manuscript.mjs`의 `SOURCE.version`과 `BOOK_REVISION` 두 상수에만 적고, 표지와 서지 정보, EPUB 메타데이터, 산출물 파일 이름이 이 값을 읽습니다. `tools/check.mjs`가 어긋남을 검사합니다.

## 0.15.5-ko.2: 용어 병기와 감사

원문이 같은 pstack 0.15.5인 채로 책의 표기만 고친 개정입니다. 한국어 단어 하나가 원문의 서로 다른 영어 용어를 옮기거나, 원문에 없는 낱말로 옮긴 곳에 영어를 병기했습니다(`원칙(principle)`처럼). 표기 규칙은 `STYLE.md`의 "용어 병기", 짝의 목록은 용어집 "일대일로 옮겨지지 않는 용어" 표입니다.

### 방법

- 원본은 저장소 밖에 읽기 전용으로 클론하고 커밋 `adf3218ca2f5b9971eedc07a76bef22df7701539`로 고정해 읽었습니다(`PSTACK_SRC`).
- 한국어 단어마다 원고의 용례를 전부 뽑고(`원칙` 242곳, `규칙` 210곳, `기준` 132곳 등), 원문에서 그 자리가 어떤 영어 낱말인지 찾아 대조했습니다. 반대 방향으로는 원문의 영어 낱말(`principle` 266곳, `rule` 140곳 등)이 책에서 어떤 한국어로 옮겨졌는지 봤습니다.
- 한국어 단어 하나가 영어 용어 둘 이상에 대응하거나, 영어 용어 하나가 한국어 단어 둘 이상으로 옮겨진 것이 원문에서 확인될 때만 병기 대상으로 삼았습니다.

### 감사한 용어와 판정

병기 대상(용어집 표에 있음):

| 한국어 | 원문 영어 | 판정 |
| --- | --- | --- |
| 원칙 | principle | 영어는 하나이지만 가리키는 것이 여럿입니다. `principle-*` 스킬 23개, `poteto-mode`의 Principles 색인, `interrogate` 리드 판단 틀의 Filtering Principles, `reflect` 리뷰어의 "Principle:" 항목, `automate-me`의 "principles cited", README의 "engineering principles". 원문이 그 내용을 "rule"이라 부르므로 규칙과 나란히 나올 때 구분이 필요합니다 |
| 규칙 | rule, Non-negotiables, 절 이름 | 원문이 "rule"이라 한 곳(Cursor rule 파일, lint rule, unslop 규칙, patch-id rule, 원칙이 담은 rule)이 대부분입니다. `poteto-mode`의 Non-negotiables 절, Autonomy와 Stack safety 절, "Mandatory", request-to-mode mapping, bucket은 원문에 rule이라는 말이 없어서 그 낱말을 병기했습니다 |
| 기준 | criteria, bar, standard, base, baseline, rubric | 한 단어가 여섯 낱말에 대응합니다(acceptance criteria, verification bar, strict standard, worktree base, baseline preconditions, Bugbot triage의 Decision rubric). 합성어 기준안(base)과 기준선(baseline)은 이미 용어집에 있어서 그대로 뒀습니다 |
| 검증, 검증기 | verification, validation, validator, verifier | `boundary-discipline`의 validation과 `prove-it-works`의 verification을 모두 검증이라 옮겼습니다. 검증기도 redundant validators와 flaky verifiers 둘입니다 |
| 뼈대 | scaffold, skeleton | `foundational-thinking`의 scaffold, multi-phase plan의 skeleton, orchestrate의 "4KB scaffold", eval의 "project skeleton"을 모두 뼈대라 옮겼습니다 |
| 관문, 게이트, 관문 시험 | gate, gauntlet | gate를 관문과 게이트 둘로 옮겼고, `swarm`의 gauntlet도 관문 시험이라 옮겼습니다 |
| 지침 | guideline, guide, instruction | "instructions"를 지시와 지침 둘로 옮긴 곳(원칙 장 두 줄)이 있고, style guide의 guideline과 phrasing guide도 지침입니다 |
| 절차 | procedure, playbook | 이 책이 playbook 자체를 "절차"라 부른 곳이 있습니다(figure-it-out이 설계하는 것) |
| 규약 | contract, shape | 기능 지도의 "Feature entry contract"는 규약이고, "Follow the shape in"도 규약이라 옮겼습니다. 같은 영어 contract는 다른 곳에서 계약입니다 |
| 산출물 | artifact, deliverable, output | 세 영어 낱말이 하나로 옮겨졌습니다. 뜻이 가까워서 장마다 처음에만 병기했습니다 |
| 예시 | example | 원문의 예(Example signal, `*.example.yaml`)와 이 책의 저자가 만든 예시(worked example)를 같은 단어로 쓰므로, 원문의 예에는 병기했습니다 |

일대일이라 바꾸지 않은 용어(용례를 원문과 대조해 확인):

| 한국어 | 원문 영어 | 판정 |
| --- | --- | --- |
| 계약 | contract | 일대일입니다(triage contract, output contract, pinned contract). 예외인 규약은 위 표 |
| 정책 | policy | 일대일입니다(retention policy, special-purpose policy, 모델 정책) |
| 프로토콜 | protocol | 일대일입니다 |
| 관례 | convention | 일대일입니다(driving conventions, working conventions) |
| 표준 | standard | 형용사로 쓴 "표준 사례" 몇 곳뿐이고, 용어로서의 standard는 기준(standard)으로 병기했습니다 |
| 흐름, 흐름도 | flow, flow chart | 흐름은 flow(runtime flow, guided flow)이고 흐름도는 이 책이 붙인 flow chart입니다 |
| 위임 | delegate, delegation | 일대일입니다. 위임 원칙은 Delegation 묶음입니다 |
| 조향 | steer, steering | 일대일입니다(조향 프롬프트는 "steering prompt") |
| 플레이북 | playbook | 일대일입니다. 절차와 섞인 곳만 위 표에 |
| 스킬, 에이전트 | skill, agent | 일대일입니다. principle skill, control skill 같은 합성어는 영어를 그대로 드러내고 있습니다 |
| 하니스 | harness | 일대일입니다. 뜻은 검증, 측정, 시각 회귀, 동등성 하니스로 갈리지만 영어는 모두 harness입니다. 용어집의 "에이전트를 감싸 실행하는 도구" 풀이는 원고에 그 용례가 없어서 뺐습니다 |
| 훅, 웹훅 | hook, webhook | 일대일입니다(훅은 두 곳, git hooks와 플러그인 훅) |
| 조율, 조정, 조정자 | coordinated, coordinator, adjust | 조정자는 coordinator이고 일대일입니다. 조율은 coordinated breaking changes 등이고 조정은 일반 동사(adapt, resize)라 용어가 아닙니다 |
| 오케스트레이션, 워크플로, 규율 | orchestration, workflow, discipline | 일대일입니다 |
| 용어집의 나머지 항목 | 용어집 참고 | 판정, 조각, 단위, 브리프, 재현, 경계, 술어, 증명, 증거, 역할, 패널, 작업자, 표류, 전제, 트렁크, 장부, 운영자, 불안정, 포지, 루브릭, 워크트리는 원문 영어 낱말과 책의 한국어 낱말의 출현 수를 맞춰 보고 표본 용례를 대조했습니다. 다른 영어 용어를 옮긴 사례를 찾지 못했습니다. 전수 대조는 아닙니다 |

### 장별 병기 개수

새로 붙은 `한국어(영어)`의 수입니다. 본문은 30개 파일 206곳이고, 용어집은 표와 설명 38곳을 따로 셉니다. 원문에 그 뜻의 영어 낱말이 없는 자리(책이 만든 표제와 풀이)와 표의 좁은 칸은 건너뛰었습니다.

| 장 | 개수 |
| --- | --- |
| 이 책에 대하여, 이 책을 읽는 방법 | 1, 4 |
| 제 1부 시작하기: 11장 pstack이란 무엇인가, 12장 설치와 첫 사용 | 4, 3 |
| 제 2부 진입점: 부 소개, 3장 poteto-mode, 4장 작업 플레이북, 5장 PR 플레이북, 6장 장시간, 대규모 플레이북 | 1, 14, 19, 8, 19 |
| 제 3부 이해하기: 7장 how, 8장 why, 9장 teach와 recall | 1, 4, 3 |
| 제 4부 설계하기: 부 소개, 10장 architect, 11장 arena, swarm, figure-it-out, 12장 원칙 스킬 23개 | 2, 4, 10, 26 |
| 제 5부 고치고 검증하기: 부 소개, 13장 tdd와 blast-radius, 14장 interrogate, 15장 검증 스킬 | 2, 3, 9, 11 |
| 제 6부 글과 코드 정리: 부 소개, 16장 글쓰기, 17장 코드 정리 | 2, 4, 8 |
| 제 7부 나만의 방식과 유틸리티: 18장 automate-me, reflect, show-me-your-work, 19장 bro | 14, 1 |
| 제 8부 자동화: 20장 make-bot-ui와 benny | 12 |
| 제 9부 실전: 21장 밤새 돌리기, 22장 레시피와 함정 | 2, 3 |
| 부록 A 스킬 빠른 참조표, 부록 C 스킬 선택 흐름도 | 11, 1 |
| 부록 B 용어집 | 표와 설명 38 |

### 코드와 검사

- `tools/lib/manuscript.mjs`에 `BOOK_REVISION`과 `BOOK_VERSION`을 두고 표지, 서지 정보, EPUB 메타데이터, 파일 이름이 읽게 했습니다.
- 표지 제목이 "pstack 가 / 이드"로 낱말 가운데서 줄바꿈되던 것을 `word-break: keep-all`로 고쳤습니다.
- `tools/check.mjs`가 두 가지를 더 검사합니다. 용어집 표가 있고 첫 행이 원칙일 것, 표의 짝마다 "처음 표기하는 장"에 `한국어(영어)` 꼴이 있을 것(공백이 낀 꼴은 오류). 책의 버전이 colophon, README, EPUB 메타데이터, 파일 이름과 어긋나면 실패합니다.

### 실행한 검사

- `PSTACK_SRC=<클론>/pstack bun tools/check.mjs`: 스킬 47개와 플레이북 23개의 절 존재, 링크, 용어 병기 짝 29개, 버전 일치, epubcheck 오류 0, 경고 0.
- `bun tools/check-layout.mjs`: 390px 폭에서 가로 넘침 없음. 원칙 장의 표 칸에 병기를 넣었을 때 넘쳐서 그 칸들은 표 밖의 첫 용례로 옮겼습니다.
- `bun tools/pdf-inspect.mjs`: 425쪽, 개요 561항목, 한글 텍스트 추출 확인, em dash 0, 표지와 용어집 쪽을 PNG로 눈으로 확인했습니다.

## 0.15.9

원문을 `adf3218`(0.15.5)에서 `e43c7ee26e0038c6c1fa8380dd34ce86ff94cb2a`(0.15.9)로 올렸습니다. pstack 트리에 닿은 커밋은 네 개입니다.

- `23e4138` feat: explain-the-number 이식, 새 서브에이전트, 한 시간 감사 tick, PR 제목 절, 스키마를 앞에 두는 캐스트 (0.15.6)
- `9511e60` feat: `/correct` 스킬 (#494)
- `a586282` feat: `/architect` 설계가 에이전트의 실수를 견디게 (#495)
- `e43c7ee` refactor: perf-issue 2단계를 성능 만트라로 (#496)

책 버전은 `BOOK_REVISION = 0`이라 pstack 버전과 같은 `0.15.9`입니다. 산출물 이름은 `pstack-guide-0.15.9.epub`, `pstack-guide-0.15.9.pdf`입니다. 0.15.5-ko.3의 다크 모드 EPUB 팔레트는 그대로 둡니다.

원고에서 반영한 내용입니다.

- 스킬 50개(일반 26, 원칙 24). 새 절은 `benchmark-checklist`(검증 장), `correct`(나만의 방식), `principle-explain-the-number`(검증 묶음)입니다. `disable-model-invocation`은 `setup-pstack`을 뺀 49개에 있습니다.
- poteto-mode: AskQuestion은 짧은 부호를 되받아 치지 않습니다. 벤치마크 전에는 `benchmark-checklist`. 서브에이전트는 기본이 새 에이전트이고, 재개는 그 에이전트 안에만 있는 상태를 옮기기 비쌀 때로 한정합니다.
- architect: 선별 문장이 바뀌고 적신호가 네 개 늘었습니다(소유 분할, 한 일에 두 길, 가져올 수 있는 내부, 손으로 맞추는 목록). `correct`의 아키텍처 단계와 같은 모양이고, `correct`는 `encode-lessons-in-structure`를 이름으로 인용하지 않습니다.
- Perf issue 2단계는 만트라 일곱 개이고, 앞선 만트라가 목표를 충족하면 멈춥니다. Hillclimb는 그 순서만 빌리고 중단 규칙은 빌리지 않습니다. 기준선과 하니스 동결 전에 `benchmark-checklist`를 돌리고, 하니스는 오류 횟수와 일의 횟수를 찍습니다.
- Opening a PR 설명은 `## Why`, `## What changed`, `## Scope`(다루는 것과 빼 둔 것을 항상), `## Tradeoffs`, `## Blast Radius`, `## Verification`입니다. 굵은 소제목은 열 개이고, 내장 PR 도구가 있으면 생성, 수정, 재지정, 준비 상태 표시는 그 도구로 합니다.
- Autopilot-full과 Autopilot-stack은 `/goal` 무장과 30분 cloud-sleeper를 빼고, 운영자의 go에서 `/loop 1h`로 트렁크의 플레이북만 다시 읽습니다. 검증 가능한 단위마다 푸시합니다. 병합 직전 `git merge-tree`와 CI를 고르는 경로를 확인하고, 초록이고 patch-id가 같으면 그 뒤의 트렁크 이동만으로 다시 리베이스하지 않습니다. 다음 항목은 새 소유자가 잡습니다. `check-plan.mjs`의 프로그램 마커는 `git show origin/main:`, `/loop 1h`, `status message`입니다.
- swarm Phase C는 실패한 작업자를 다시 띄웁니다(respawn). technical-writing의 Source 줄 네 개는 원문에서 빠졌습니다. TypeScript의 `as` 캐스트는 존재만 보는 타입 술어로 얻지 않고, 타입이 먼저면 `z.ZodType<User>`로 스키마를 주석합니다.
- 0.15.5-ko.2 감사 절의 개수와 커밋은 그때의 기록으로 남겼습니다.

## 0.15.10

원문을 `e43c7ee26e0038c6c1fa8380dd34ce86ff94cb2a`(0.15.9)에서 `4e5b1cf2ccb0ea3716f08c8ee0a5856b5ab93536`(0.15.10)로 올렸습니다. pstack 트리에 닿은 커밋은 한 개입니다.

- `4e5b1cf` feat(pstack): add `/poteto-help` skill (#502)

책 버전은 `BOOK_REVISION = 0`이라 pstack 버전과 같은 `0.15.10`입니다. 산출물 이름은 `pstack-guide-0.15.10.epub`, `pstack-guide-0.15.10.pdf`입니다.

원고에서 반영한 내용입니다.

- 스킬 51개(일반 27, 원칙 24). 새 절은 `poteto-help`(설치 장)입니다. `disable-model-invocation`은 `setup-pstack`과 `poteto-help`를 뺀 49개에 있습니다.
- README와 안내서는 막혔거나 어느 스킬이 맞는지 모르겠으면 `/poteto-help`를 쓰라고 합니다. 도움 질문에서는 일을 시작하지 않고, 보낼 프롬프트와 공개 permalink를 줍니다. 일을 시키면 `poteto-mode`로 넘깁니다.
- `/poteto-mode`를 여러 턴 유지하려면 Custom Mode입니다. Enter는 한 메시지에만 붙습니다. Option+Enter(Mac) 또는 Alt+Enter(Windows), 또는 Use as Mode가 Custom Mode를 만듭니다. Agents Window와 CLI에서 쓸 수 있습니다.
- 안내서 5장은 TypeScript 규칙을 이름으로 로드하라고 바뀌었습니다. `typescript-best-practices`는 스스로 로드되지 않으므로 `/typescript-best-practices`를 칩니다. `poteto-help`도 사용자의 말만으로 로드되는 스킬은 `/setup-pstack`과 `/poteto-help`뿐이라고 적습니다.
- 0.15.9 절의 개수와 커밋은 그때의 기록으로 남겼습니다.

### 실행한 검사

- `PSTACK_SRC=/tmp/cursor-plugins/pstack bun tools/check.mjs`: 스킬 51개와 플레이북 23개의 절 존재, 용어 병기 짝 29개, dark palette 25색 25대비, epubcheck 오류 0, 경고 0.
- `bun tools/check-layout.mjs`: 390px 폭에서 가로 넘침 없음.
- `bun tools/build.mjs`: `pstack-guide-0.15.10.epub`, `pstack-guide-0.15.10.pdf` (450쪽).

## 0.15.15

원문을 `4e5b1cf2ccb0ea3716f08c8ee0a5856b5ab93536`(0.15.10)에서 `df581122cde17e6e27686b5a448bde23e4ad4318`(0.15.15)로 올렸습니다. pstack 트리에 닿은 커밋은 다섯 개입니다.

- `00b52d9` fix(pstack): make `/poteto-help` typed-only (#506) (0.15.11)
- `807c031` feat(pstack): add prompting references to `/poteto-help` (#507) (0.15.12)
- `2cbf585` docs(pstack): refresh guide for `/correct`, checklist, prompting tips (#508) (0.15.13)
- `1e56b29` feat(pstack): have `/poteto-help` ask about `/setup-pstack` when no model rule exists (#509) (0.15.14)
- `df58112` feat(pstack): drop Sol, default to Opus xhigh and Grok (#511) (0.15.15)

책 버전은 `BOOK_REVISION = 0`이라 pstack 버전과 같은 `0.15.15`입니다. 산출물 이름은 `pstack-guide-0.15.15.epub`, `pstack-guide-0.15.15.pdf`입니다.

원고에서 반영한 내용입니다.

- 스킬 수는 그대로 51개(일반 27, 원칙 24). `disable-model-invocation`은 `setup-pstack`만 없고 나머지 50개에 있습니다. 사용자의 말만으로 로드되는 스킬은 `/setup-pstack`뿐입니다. `/poteto-help`는 칠 때만 돕니다.
- `/poteto-help`에 `references/prompting.md`와 `references/recipes.md`가 붙었습니다. 예 프롬프트는 많아도 하나이고, 맞는 것이 있으면 레시피에서 고칩니다. 첫 프롬프트를 다듬기 전에 prompting을 읽습니다.
- 모델 규칙 파일이 없으면 `/poteto-help`가 `/setup-pstack`을 지금 돌릴지 한 번 묻습니다. 처음이거나, 질문이 설정이나 비용이거나, 답이 어떤 모델이 도는지에 달릴 때입니다.
- 기본 모델에서 Sol을 빼고 Opus는 `xhigh`, 코드 역할은 Grok입니다. 패널은 opus와 grok 둘입니다. 예산 `unlimited`는 강도 토큰을 `max`로 바꾸고, `large`는 `xhigh`이며 기본값과 같습니다. 옛 규칙 파일은 줄을 지우고 `/setup-pstack`을 다시 실행해야 새 기본값을 받습니다.
- 안내서 갱신: 프롬프트에 넣을 다섯, 클라우드 서브에이전트 격리, `/correct`와 점검표와 프로토타입과 계획, 밤새 돌리기의 신뢰 쌓기와 Cursor Project, 레시피와 함정 추가.
- 0.15.10 절의 개수와 커밋은 그때의 기록으로 남겼습니다.

### 실행한 검사

- `PSTACK_SRC=/tmp/cursor-plugins/pstack bun tools/check.mjs`: 스킬 51개와 플레이북 23개의 절 존재, 용어 병기 짝 29개, dark palette 25색 25대비, epubcheck 오류 0, 경고 0.
- `bun tools/check-layout.mjs`: 390px 폭에서 가로 넘침 없음.
- `bun tools/build.mjs`: `pstack-guide-0.15.15.epub`, `pstack-guide-0.15.15.pdf` (461쪽).

## 0.15.17

원문을 `df581122cde17e6e27686b5a448bde23e4ad4318`(0.15.15)에서 `978ca6e9c0e012047cd5058b8e829240336e704e`(0.15.17)로 올렸습니다. pstack 트리에 닿은 커밋은 두 개입니다.

- `00b14f1` refactor(pstack): distill skill prompts to cut tokens (#538) (0.15.16)
- `978ca6e` feat(pstack): add /ketchup skill (#539) (0.15.17)

책 버전은 `BOOK_REVISION = 0`이라 pstack 버전과 같은 `0.15.17`입니다. 산출물 이름은 `pstack-guide-0.15.17.epub`, `pstack-guide-0.15.17.pdf`입니다.

원고에서 반영한 내용입니다.

- 스킬 52개(일반 28, 원칙 24). 새 절은 `ketchup`(이해하기 부의 teach/recall 장)입니다. `disable-model-invocation`은 `setup-pstack`만 없고 나머지 51개에 있습니다. 사용자의 말만으로 로드되는 스킬은 `/setup-pstack`뿐입니다.
- `/ketchup`은 이 채팅에서 사용자가 `/ketchup` 직전에 쓴 마지막 메시지 이후만 따라잡습니다. 알림과 서브에이전트 결과는 사용자의 메시지가 아닙니다. 글은 `/bro`의 평이한 목소리로 쓰고 다시 말하기 단계는 건너뜁니다. 이 턴은 읽기 전용입니다. 할 일 항목은 사용자만 할 수 있는 결정이고, 항목마다 결정을 내릴 요약을 줍니다. `/recall`은 최근 채팅을 가로지르고, Session pickup은 특정 채팅 하나를 이어받습니다.
- 증류 리팩터(0.15.16)는 토큰을 줄이는 압축이 대부분입니다. 책에 반영한 규칙 변경은 이렇습니다. `interrogate` 루브릭 Complexity Budget에서 "중복 세 줄이 성급한 추상화보다 낫다"를 뺌. `technical-writing`은 코드 조각에 실제 경로만 요구하고 튜토리얼의 "가르치는 사람은 자신", "가르침의 멈춤" 문장을 뺌. `test-behavior-not-implementation` 검사는 `undefined`뿐 아니라 잘못된 값에도 적용. `explain-the-number` 후보에 실행되지 않은 코드와 기본 설정 그대로인 쪽을 명시. `poteto-mode` 색인은 `principle-<kebab-title>`과 `playbooks/<kebab-title>.md` 규칙을 밝히고, 경로를 따로 적는 플레이북은 세 개입니다.
- 0.15.15 절의 개수와 커밋은 그때의 기록으로 남겼습니다.

### 실행한 검사

- `PSTACK_SRC=/tmp/cursor-plugins/pstack bun tools/check.mjs`: 스킬 52개와 플레이북 23개의 절 존재, 용어 병기 짝 29개, dark palette 25색 25대비, epubcheck 오류 0, 경고 0.
- `bun tools/check-layout.mjs`: 390px 폭에서 가로 넘침 없음.
- `bun tools/build.mjs`: `pstack-guide-0.15.17.epub`, `pstack-guide-0.15.17.pdf` (465쪽).

## 0.15.20

원문을 `978ca6e9c0e012047cd5058b8e829240336e704e`(0.15.17)에서 `1b6d44ff26d4e242f4e8f68c391e6d2f7ca16def`(0.15.20)로 올렸습니다. pstack 트리에 닿은 커밋은 열한 개입니다.

- `ea32d95` feat(pstack): show /ketchup decisions as before/after visuals (#570)
- `08bd59b` refactor(pstack): cut unneeded sections from seven skills (#571)
- `de2dba6` fix(pstack): rename Comment Sicko agent id so Grok can spawn it (#486)
- `87c8103` fix(pstack): respect fenced code blocks in plan checks (#536)
- `ff8f83d` fix(watch-pr): paginate review threads instead of reading only the first 100 (#484)
- `bc697d0` fix(pstack): drop "Must always apply." from unslop description (#572)
- `cf9a111` fix(pstack): worktree-audit checks MERGED against the default branch, not origin/main (#574)
- `2bd5dd4` fix(pstack): make the /poteto-mode chat the runner, poteto-agent a delegate (#575)
- `e5a02f8` feat(pstack): add Agent Plugins v1 root manifest (#576)
- `c49b37a` fix(pstack): create-verification-skill readiness means the app is usable (#573)
- `1b6d44f` chore(pstack): bump to 0.15.20 (#581)

책 버전은 `BOOK_REVISION = 0`이라 pstack 버전과 같은 `0.15.20`입니다. 산출물 이름은 `pstack-guide-0.15.20.epub`, `pstack-guide-0.15.20.pdf`입니다.

원고에서 반영한 내용입니다.

- 스킬 수는 그대로 52개(일반 28, 원칙 24). `disable-model-invocation`은 `setup-pstack`만 없고 나머지 51개에 있습니다. 사용자의 말만으로 로드되는 스킬은 `/setup-pstack`뿐입니다.
- `/poteto-mode`를 받은 채팅이 플레이북과 할 일 목록과 모든 `Task` 호출을 소유합니다. `poteto-agent`는 실행 중 위임이고 플레이북 러너가 아닙니다.
- Comment Sicko의 `name`과 `subagent_type`은 `comment-sicko`입니다.
- `/ketchup`은 할 일 항목마다 전후를 나란히 보여 줍니다. 이 턴은 답에 넣을 시각화 외에는 읽기 전용입니다. 숫자를 지어내지 않고, 캡처하지 않은 화면을 만들지 않습니다.
- `create-verification-skill`의 준비됨은 쓸 수 있다는 뜻입니다. 빈 데이터 디렉터리에서 마이그레이션과 시드까지 가야 하고, 시드가 빠지면 여정을 약화하지 않으며, 대용 환경의 설정 단계는 진짜 대상에서 돌리기 전까지 검증되지 않은 채로 남습니다.
- `worktree-audit.sh`의 `MERGED` 기본 기준은 `origin/HEAD`입니다. PR 베이스가 다르면 `-b`를 넘깁니다.
- `unslop`의 `description`에서 "Must always apply."를 뺐습니다. `poteto-mode`는 글이 나오는 모든 표면에서 이 스킬을 그대로 요구합니다.
- 루트 `plugin.json`은 Agent Plugins v1 매니페스트입니다. Cursor용 레이아웃은 `.cursor-plugin/plugin.json`에 남습니다.
- `watch-pr`는 리뷰 스레드를 페이지당 100개씩 끝까지 읽고, `check-plan.mjs`는 펜스 코드 블록 안의 문체를 건너뜁니다.
- 일곱 스킬에서 토큰을 줄인 절 삭제는 리프 본문을 짧게 했습니다. `poteto-mode` 색인과 YAML `description`의 한 줄 트리거는 그대로입니다. 책은 리프에 남은 규칙과 색인의 한 줄을 구분해 적었습니다.
- 0.15.17 절의 개수와 커밋은 그때의 기록으로 남겼습니다.

### 실행한 검사

- `PSTACK_SRC=/tmp/cursor-plugins/pstack bun tools/check.mjs`: 스킬 52개와 플레이북 23개의 절 존재, 용어 병기 짝 29개, dark palette 25색 25대비, epubcheck 오류 0, 경고 0.
- `bun tools/check-layout.mjs`: 390px 폭에서 가로 넘침 없음.
- `bun tools/build.mjs`: `pstack-guide-0.15.20.epub`, `pstack-guide-0.15.20.pdf` (464쪽).

## 0.15.21

원문을 `1b6d44ff26d4e242f4e8f68c391e6d2f7ca16def`(0.15.20)에서 `997ffc7fe26bdaa6478a14e7f5b8d5f9ed747102`(0.15.21)로 올렸습니다. pstack 트리에 닿은 커밋은 두 개입니다.

- `364a77e` fix(pstack): tell agents where bundled leaf skills live (#577)
- `997ffc7` chore(pstack): bump to 0.15.21 (#584)

책 버전은 `BOOK_REVISION = 0`이라 pstack 버전과 같은 `0.15.21`입니다. 산출물 이름은 `pstack-guide-0.15.21.epub`, `pstack-guide-0.15.21.pdf`입니다.

원고에서 반영한 내용입니다.

- 스킬 수는 그대로 52개(일반 28, 원칙 24). `disable-model-invocation`은 `setup-pstack`만 없고 나머지 51개에 있습니다. 사용자의 말만으로 로드되는 스킬은 `/setup-pstack`뿐입니다.
- `poteto-mode`는 함께 실린 스킬이 자기 `SKILL.md` 기준으로 `../<name>/SKILL.md`에 있다고 밝히고, 모든 `poteto-agent` 프롬프트에 그 파일의 절대 경로를 넣으라고 합니다.
- `poteto-agent`는 `poteto-mode`를 읽을 때 부모가 준 절대 경로를 씁니다.
- 0.15.20 절의 개수와 커밋은 그때의 기록으로 남겼습니다.

### 해석한 부분

- 업스트림 커밋 메시지(#577)는 리프 스킬이 `disable-model-invocation`이라 경로가 보이지 않고, 띄운 `poteto-agent`도 `poteto-mode` 위치를 모른다고 설명합니다. `SKILL.md` 본문은 그 이유를 적지 않고 경로 규칙만 말합니다. 책은 경로 규칙만 옮겼습니다.

### 실행한 검사

- `PSTACK_SRC=/tmp/cursor-plugins/pstack bun tools/check.mjs`: 스킬 52개와 플레이북 23개의 절 존재, 용어 병기 짝 29개, dark palette 25색 25대비, epubcheck 오류 0, 경고 0.
- `bun tools/check-layout.mjs`: 390px 폭에서 가로 넘침 없음.
- `bun tools/build.mjs`: `pstack-guide-0.15.21.epub`, `pstack-guide-0.15.21.pdf` (464쪽).

## 0.15.23

원문을 `997ffc7fe26bdaa6478a14e7f5b8d5f9ed747102`(0.15.21)에서 `dbf49813a39c1a5389c5e28cb8e4c1c2379e2454`(0.15.23)로 올렸습니다. pstack 트리에 닿은 커밋은 여섯 개입니다.

- `b93e811` fix(pstack): let poteto-agent find poteto-mode, drop ignored frontmatter, document the / menu (#597)
- `7d8d909` feat(pstack): add /in-your-own-words to play back the goal before work (#602)
- `d00ba6e` feat(pstack): shorten /ketchup replies and build them on real visuals (#595)
- `36cecbf` feat(pstack): propose a cheap always-on signal after a deep debugging dig (#604)
- `3177dab` chore(pstack): bump to 0.15.22 (#605)
- `dbf4981` refactor(pstack): reword /in-your-own-words around goals and the problem (#606)

책 버전은 `BOOK_REVISION = 0`이라 pstack 버전과 같은 `0.15.23`입니다. 산출물 이름은 `pstack-guide-0.15.23.epub`, `pstack-guide-0.15.23.pdf`입니다.

원고에서 반영한 내용입니다.

- 스킬 53개(일반 29, 원칙 24). 새 절은 `in-your-own-words`(설치 장)입니다. `disable-model-invocation`은 `setup-pstack`만 없고 나머지 52개에 있습니다. 사용자의 말만으로 로드되는 스킬은 `/setup-pstack`뿐입니다.
- `/in-your-own-words`는 사용자의 목표가 무엇이고 어떤 문제를 풀려 한다고 이해한 바를 자기 말로 다시 말합니다. README와 `/poteto-help`는 쓸 때를 일을 시작하기 전이라고 하고, 칠 때만 돈다고 합니다. 레시피는 `/in-your-own-words <long or messy ask>`입니다.
- `/ketchup`은 글을 250단어 미만으로 두고, 마크다운 표도 글로 셉니다. 일어난 일은 상태 시각 하나와 한 줄 결과 세 개까지입니다. 할 일 항목은 세 줄(결정, 추천과 이유, 답하지 않으면)이고, 선택지와 비용은 전후 시각에 둡니다. 시각은 그림이고 표는 시각이 아닙니다. 보이는 변화에 스크린숏이 없으면 `No screenshot yet`입니다. 보여줄 숫자는 출처와 맞춰 보고, 고치면 그렇게 말합니다.
- `poteto-mode` 프런트매터에서 `mode`와 `reminder`를 뺐습니다. README는 작업을 치기 전에 `/` 메뉴에서 `/poteto-mode`를 고르라고 합니다. Custom Mode는 그대로입니다.
- `poteto-agent`는 경로가 없으면 `~/.cursor/plugins/`에서 `skills/poteto-mode/SKILL.md`로 끝나는 파일을 찾고, 여러 사본이면 `plugin.json`의 `version`이 가장 높은 것을 씁니다. 없으면 멈추고 부모에게 말합니다.
- `principle-fix-root-causes`는 깊게 파고들어서야 찾은 결정 사실에 대해, 처음 볼 때 그것을 보여 줬을 값싸고 항상 켜 두는 신호를 제안하라고 합니다.
- 0.15.21 절의 개수와 커밋은 그때의 기록으로 남겼습니다.

### 해석한 부분

- `/in-your-own-words`의 0.15.22 본문은 확인을 기다린 뒤 시작하라고 했지만, 0.15.23(#606)은 그 문장을 빼고 목표와 문제를 다시 말하라는 한 줄만 남겼습니다. README와 `/poteto-help`는 여전히 "일을 시작하기 전"이라고 합니다. 책은 본문의 동작과 README의 쓸 때를 구분해 적었습니다.
- 업스트림 커밋 메시지(#597)는 Cursor가 `mode`와 `reminder`를 무시한다고 설명합니다. `SKILL.md` 본문은 그 이유를 적지 않습니다. 책은 키가 없다는 사실과 README의 Custom Mode 안내만 옮겼습니다.

### 실행한 검사

- `PSTACK_SRC=/tmp/cursor-plugins/pstack bun tools/check.mjs`: 스킬 53개와 플레이북 23개의 절 존재, 용어 병기 짝 29개, dark palette 25색 25대비, epubcheck 오류 0, 경고 0.
- `bun tools/check-layout.mjs`: 390px 폭에서 가로 넘침 없음.
- `bun tools/build.mjs`: `pstack-guide-0.15.23.epub`, `pstack-guide-0.15.23.pdf` (468쪽).

## 0.15.24

원문을 `dbf49813a39c1a5389c5e28cb8e4c1c2379e2454`(0.15.23)에서 `1e5c90a4b6f249917bd21fe361b3a2a7deb741b8`(0.15.24)로 올렸습니다. pstack 트리에 닿은 커밋은 다섯 개입니다.

- `c86f349` refactor(pstack): make /ketchup read like /bro in 150 words (#609)
- `ce649c0` feat(pstack): match subagent effort to the job, drop Graphite from orchestrate, and cut playbooks to principles (#613)
- `8043881` pstack: autopilot loops catch the operator up with /ketchup (#616)
- `79afd75` feat(pstack): add /sharpen (#615)
- `1e5c90a` chore(pstack): bump to 0.15.24 (#617)

책 버전은 `BOOK_REVISION = 0`이라 pstack 버전과 같은 `0.15.24`입니다. 산출물 이름은 `pstack-guide-0.15.24.epub`, `pstack-guide-0.15.24.pdf`입니다.

원고에서 반영한 내용입니다.

- 스킬 54개(일반 30, 원칙 24). 새 절은 `sharpen`(설치 장, `in-your-own-words` 다음). `disable-model-invocation`은 `setup-pstack`만 없고 나머지 53개에 있습니다. `/sharpen`은 칠 때만 돕니다. `poteto-mode`가 자동으로 부르지 않습니다.
- `/ketchup`은 `/bro`의 목소리를 쓰고 다시 말하기 과업은 쓰지 않습니다. 답 전체는 150단어보다 훨씬 짧게 두고, 시각과 표 안의 단어도 셉니다. 일어난 일은 상자 넷까지인 시각 하나와 짧은 줄 세 개까지입니다. 할 일 항목은 두 줄이고, 묻지 않은 되돌릴 수 없는 단계는 한 줄이며 시각을 빼니다.
- `poteto-mode` Subagents에 "일에 모델을 맞춥니다"가 있습니다. 역할의 줄에서 시작해 추론 강도와 속도를 고르고, 검증은 `swarm workers`에 남습니다.
- `arena`와 `interrogate`의 grok 계열에 `cursor-grok-*`와 `composer-*`를 넣습니다. 거부된 `composer-*`는 arena에서 `grok-4.7-xhigh-fast`, interrogate에서 Reviewer B 기본값으로 돕니다.
- 여러 단계 PR의 전체 swarm은 코드 준비 헤드에서 한 번입니다. 리베이스, 병합 충돌 해결, 작은 수정은 검증자 하나입니다.
- Shipping과 Autopilot은 원칙으로 줄었습니다. 새 규칙에는 `--force-with-lease` 핀, 병합 결과 확인, 세 번째 리베이스에서 멈춤이 있습니다. Autopilot-stack은 네 단계이고 착륙만 빼면 Autopilot-full입니다.
- Orchestrate 프런티어는 Graphite가 아니라 PR 베이스 사슬에서 계산합니다. `orch frontier set --forge origin`입니다. stacker만 토폴로지를 바꿉니다.
- watch-pr는 이름이 정확히 `Code Review Gate`인 체크의 `ACTION_REQUIRED`를 소유자 승인 관문으로 봅니다.
- worktree-audit는 Origin PR을 읽고, `*/open`과 `*/draft`를 `hold-open-pr`로 붙듭니다.
- Autopilot tick이 운영자에게 바뀐 것을 말할 때 `/ketchup`을 씁니다.

### 해석한 부분

- `/sharpen`의 중간 커밋은 `poteto-mode`가 부르게 했지만, 핀 커밋의 최종 본문은 그렇지 않습니다. 책은 최종 본문을 따릅니다.
- Autopilot-full의 옛 `children.tsv`와 15분 규칙, 라운드마다 전체 swarm은 0.15.24 본문에서 빠졌습니다. 책은 빠진 절차를 되살리지 않았습니다.
- Orchestrate `frontier.json`의 초안은 `OPEN`으로 셉니다. `store.ts`가 `draft`를 `OPEN`으로 정규화합니다.

### 실행한 검사

- `PSTACK_SRC=/tmp/cursor-plugins/pstack bun tools/check.mjs`: 스킬 54개와 플레이북 23개의 절 존재, 용어 병기 짝 29개, dark palette 25색 25대비, epubcheck 오류 0, 경고 0.
- `bun tools/check-layout.mjs`: 390px 폭에서 가로 넘침 없음.
- `bun tools/build.mjs`: `pstack-guide-0.15.24.epub`, `pstack-guide-0.15.24.pdf` (471쪽).

## 0.15.25

원문을 `1e5c90a4b6f249917bd21fe361b3a2a7deb741b8`(0.15.24)에서 `e5136d82418d2db3165ea1050d17577cd618cc05`(0.15.25)로 올렸습니다. pstack 트리에 닿은 커밋은 세 개입니다.

- `afd51cf` feat(pstack): have /ketchup explain changes with screenshots, videos, and diagrams (#628)
- `6ce45c5` chore(pstack): bump to 0.15.25 (#614)
- `e5136d8` pstack: restate four overspecified principles as reasoning, not rules (#633)

책 버전은 `BOOK_REVISION = 0`이라 pstack 버전과 같은 `0.15.25`입니다. 산출물 이름은 `pstack-guide-0.15.25.epub`, `pstack-guide-0.15.25.pdf`입니다.

원고에서 반영한 내용입니다.

- 스킬 수는 그대로 54개(일반 30, 원칙 24). `disable-model-invocation`은 `setup-pstack`만 없고 나머지 53개에 있습니다. 사용자의 말만으로 로드되는 스킬은 `/setup-pstack`뿐입니다.
- `/ketchup`은 위치만이 아니라 각 변경을 이해하게 돕습니다. 답의 글은 150단어보다 훨씬 짧게 두고, 시각 안의 단어는 세지 않으며 표 안의 단어는 셉니다. 일어난 일은 그림부터 보여 줍니다. 작업이 만든 스크린숏과 영상을 인라인으로 넣고, 그림이 문장보다 빠르면 그립니다. 상태 목록이나 잇지 않은 상자는 그리지 않습니다. 요약은 짧은 불릿입니다. 할 일 항목은 평이한 불릿이고 다이어그램으로 그리지 않습니다. 선택은 목록 뒤에 두고, 스크린숏이 이미 선택지를 보여 주면 그 아래에 얻는 것과 비용을 씁니다. 보이는 변화에 스크린숏이 없으면 그 요약 줄에 `No screenshot yet`이라고 씁니다.
- `test-behavior-not-implementation`은 단언 이름 목록을 빼고, 동작을 깨는 편집과 내부를 바꾸는 편집 둘로 판단합니다. 동작은 사용자가 관찰하는 것이고, 계약이 단언의 모양보다 앞섭니다.
- `fix-root-causes`는 증상이 잘못된 상태가 보인 곳이고, 근본 원인은 시스템이 처음 틀린 곳입니다. 가드는 다루는 상태가 정당할 때만 수정입니다.
- `attack-the-premise`는 행위자별 센서스를 규칙으로 두지 않습니다. 전제를 적어 직접 시험하고, 증거가 전제를 깨면 원인을 다른 곳에서 찾습니다.
- `make-operations-idempotent`는 PID 잠금 같은 장치를 규칙으로 두지 않습니다. 지금 있는 상태에서 단계를 끌어내고, 남긴 것은 다음 실행이 낡은 것임을 판단할 수 있어야 합니다.
- `/correct`의 테스트 단계는 위 두 편집과 같은 말입니다. 검사하는 동작이 깨져도 통과하거나 내부만 바뀌면 실패하는 테스트를 고치거나 지웁니다.
- 원칙 색인, README, 안내서의 한 줄 요약이 위 네 원칙과 맞춰졌습니다.

### 해석한 부분

- `#628`의 중간 커밋은 할 일 항목을 전후 다이어그램으로 두거나, 요약 상자를 요구하거나, 시각 단어를 150단어에 넣었습니다. 핀 커밋의 최종 본문은 그렇지 않습니다. 책은 최종 본문을 따릅니다.
- 네 원칙은 특정 장치(matcher 이름, nil 검사 금지, 센서스, PID 잠금)를 빼고 에이전트가 이름을 붙이지 않은 자리에서도 끌어낼 생각으로 다시 적혔습니다. 책은 그 생각을 옮기고, 빠진 장치를 규칙으로 되살리지 않았습니다.

### 실행한 검사

- `PSTACK_SRC=/tmp/cursor-plugins/pstack bun tools/check.mjs`: 스킬 54개와 플레이북 23개의 절 존재, 용어 병기 짝 29개, dark palette 25색 25대비, epubcheck 오류 0, 경고 0.
- `bun tools/check-layout.mjs`: 390px 폭에서 가로 넘침 없음.
- `bun tools/build.mjs`: `pstack-guide-0.15.25.epub`, `pstack-guide-0.15.25.pdf` (470쪽).

## 0.15.25-ko.1

원문을 `e5136d82418d2db3165ea1050d17577cd618cc05`(0.15.25)에서 `99743e9c151c8537cbbf1f98bb38f34ef3368453`(0.15.25)로 올렸습니다. pstack 버전은 그대로이고, 핀과 책만 움직입니다. pstack 트리에 닿은 커밋은 하나입니다.

- `99743e9` refactor(pstack): cut marginal sections from four skills (#634)

책 버전은 `BOOK_REVISION = 1`이라 `0.15.25-ko.1`입니다. 산출물 이름은 `pstack-guide-0.15.25-ko.1.epub`, `pstack-guide-0.15.25-ko.1.pdf`입니다.

원고에서 반영한 내용입니다.

- 스킬 수는 그대로 54개(일반 30, 원칙 24). 플레이북 23개.
- `interrogate`의 `lead-judgment.md`에서 Why This Step Matters와 Verdict Calibration을 잘랐습니다. 걸러내는 원칙과 When Reviewers Are Right는 남습니다. SKILL.md의 리드 역할과 네 통, 안내서의 기각 읽기 권고는 그대로입니다. "Act On이 다섯을 넘으면" 문장은 잘린 절에서 왔으므로 함정에서도 뺐습니다.
- `swarm`은 본문 도입, A단계 3번(N을 사용자나 모양에서 도출), C단계의 "간결한 결과표를 유지" 문장을 잘랐습니다. A단계 1번과 2번은 남기고 번호 4, 5도 원문대로 둡니다. D단계의 표와 한 줄 문제와 빈틈 보고는 남습니다.
- `type-system-discipline`은 본문 패턴 다섯 개(불가능한 상태, 구성으로서의 타입, 거짓말 금지, 완전한 매칭, 부분성에서만 강화)를 잘랐습니다. 리프가 남긴 것은 브랜드, 경계 파싱, 스키마 도출입니다. `description`과 README 색인은 여전히 "불가능한 상태를 표현할 수 없게"와 "변형을 빠짐없이"를 말하지만 "refuse to lie to the compiler"는 빠졌습니다. 잘린 패턴을 규칙으로 되살리지 않았습니다.
- `migrate-callers-then-delete-legacy-apis`는 도입, 호출자 목록화/즉시 삭제/임시 어댑터 규칙, 이중 경로 경고를 잘랐습니다. 리프가 남긴 것은 테스트를 새 계약에 맞추는 한 줄과 적용 조건 세 가지입니다. `description`의 "같은 웨이브에서 옮기고 지운다"는 남습니다.

### 해석한 부분

- `#634`는 에이전트가 글 없이도 따르는 절을 잘랐습니다. 책은 남은 본문을 따르고, 잘린 장치를 함정이나 검사 질문으로 되살리지 않았습니다.
- `swarm` A단계 번호가 1, 2, 4, 5로 건너뜁니다. Phase B가 여전히 "step 4" 모델을 말하므로 책도 그 번호를 맞춥니다.

### 실행한 검사

- `PSTACK_SRC=/tmp/cursor-plugins/pstack bun tools/check.mjs`: 스킬 54개와 플레이북 23개의 절 존재, 용어 병기 짝 29개, dark palette 25색 25대비, epubcheck 오류 0, 경고 0.
- `CHROME_PATH=/usr/bin/google-chrome bun tools/check-layout.mjs`: 390px 폭에서 가로 넘침 없음.
- `CHROME_PATH=/usr/bin/google-chrome bun tools/build.mjs`: `pstack-guide-0.15.25-ko.1.epub`, `pstack-guide-0.15.25-ko.1.pdf` (469쪽, 0.15.25는 470쪽).

## 0.15.25-ko.2

원문을 `99743e9c151c8537cbbf1f98bb38f34ef3368453`(0.15.25)에서 `182f2ce414e83224915c190d2f63239c1608d0a5`(0.15.25)로 올렸습니다. pstack 버전은 그대로이고, 핀과 책만 움직입니다. pstack 트리에 닿은 커밋은 하나입니다.

- `182f2ce` feat(pstack): install pstack in Claude Code from a generated tree (#637), 2026-10-16

책 버전은 `BOOK_REVISION = 2`라 `0.15.25-ko.2`입니다. 산출물 이름은 `pstack-guide-0.15.25-ko.2.epub`, `pstack-guide-0.15.25-ko.2.pdf`입니다.

확인한 사실입니다. `plugin.json`과 `.cursor-plugin/plugin.json` 버전은 둘 다 0.15.25입니다. `#637`이 `pstack/`에서 바꾼 파일은 README와 새 `docs/harness/claude-code.md`입니다. 스킬, 플레이북, 매니페스트 본문은 바뀌지 않았습니다. 커밋은 저장소 루트에 생성 트리 `harness/pstack/claude-code/`와 생성 스크립트도 더했지만, 그 트리는 `pstack/` 밖이라 원문으로 쓰지 않았습니다.

원고에서 반영한 내용입니다.

- 스킬 수는 그대로 54개(일반 30, 원칙 24). 플레이북 23개.
- README 설치 절에 Claude Code 명령 두 줄이 붙었습니다. `/plugin marketplace add cursor/plugins`, `/plugin install pstack@cursor-plugins`. 명령과 에이전트 이름 앞에 접두사를 붙이므로 `/poteto-mode`는 `/pstack:poteto-mode`입니다. 나머지 Cursor 이름은 `docs/harness/claude-code.md`가 대응합니다. Claude Code가 설치하는 것은 저장소 루트 `harness/pstack/`의 생성 복사본입니다. `skills/`, `agents/`, `docs/harness/claude-code.md`, `plugin.json`을 바꾼 뒤에는 `node scripts/generate-pstack-harness-trees.mjs`를 실행하고 커밋합니다.
- README는 benny가 Cursor 자동화 위에서 돌므로 Cursor 전용이라고 한 줄을 더했습니다.
- `docs/harness/claude-code.md`는 세션마다 한 번 읽고 Cursor 이름을 표로 바꾸라고 합니다. 도구(`Task`는 `Agent`, `AskQuestion`은 `AskUserQuestion`, 스킬 실행은 `Read`와 `/pstack:<name>`), 서브에이전트 필드, 모델, 경로를 대응합니다. `pstack-models.mdc`는 Claude Code가 읽지 않으므로 `setup-pstack`은 쓸 것이 없고 멈춥니다. 역할 줄을 `CLAUDE.md`나 `AGENTS.md`에 넣지 않습니다. 자동화, Bugbot, Cursor 클라우드 에이전트, Cursor의 풀 리퀘스트 도구는 대응이 없으면 건너뜁니다.
- 하니스 문서는 설치 장에 두었습니다. `docs/guide`를 주제별 장에 나누는 것과 같고, `docs/guide/01-setup.md`와 같은 자리입니다.

### 해석한 부분

- 스킬 본문은 Cursor 이름을 그대로 둡니다. 책은 스킬 절을 Cursor로 설명하고, Claude Code 대응은 설치 장의 어댑터 절에만 모았습니다. 원문에 없는 Claude Code 동작은 짓지 않았습니다.
- `poteto-help`는 여전히 "pstack은 Cursor용입니다"라고 합니다. 스킬 본문이 바뀌지 않았으므로 그 문장을 유지하고, README가 별도로 Claude Code 설치를 밝힌다고 한 줄을 덧붙였습니다.
- 생성 트리와 마켓플레이스 매니페스트는 `pstack/` 밖입니다. README가 가리키는 설치 경로와 생성 명령만 적었습니다.

### 실행한 검사

- `PSTACK_SRC=/tmp/cursor-plugins/pstack bun tools/check.mjs`: 스킬 54개와 플레이북 23개의 절 존재, 용어 병기 짝 29개, dark palette 25색 25대비, epubcheck 오류 0, 경고 0.
- `CHROME_PATH=/usr/bin/google-chrome bun tools/check-layout.mjs`: 390px 폭에서 가로 넘침 없음.
- `CHROME_PATH=/usr/bin/google-chrome bun tools/build.mjs`: `pstack-guide-0.15.25-ko.2.epub`, `pstack-guide-0.15.25-ko.2.pdf` (474쪽, 0.15.25-ko.1은 469쪽).

## 0.15.26

원문을 `182f2ce414e83224915c190d2f63239c1608d0a5`(0.15.25)에서 `0b8e952052d482ee6de06deebf14d590d77b1b34`(0.15.26)로 올렸습니다. pstack 트리에 닿은 커밋은 여덟 개입니다.

- `0317eb8` fix(pstack): make a brand with a type guard, not as (#700)
- `a968159` fix(pstack): name every skill after its folder (#702)
- `1b80080` fix(pstack): close three gaps in the Claude Code plugin (#705)
- `019a6a2` pstack: refresh the docs and add a docs-vs-tree check (#704)
- `16541c6` fix(pstack): list every waiting item so each ketchup call is decidable (#692)
- `bc14437` fix(pstack): say outright that ketchup never cuts items to stay under a word count (#708)
- `4382e68` feat(pstack): add /create-formal-verification-skill (#709)
- `0b8e952` chore(pstack): bump to 0.15.26 (#710)

책 버전은 `BOOK_REVISION = 0`이라 pstack 버전과 같은 `0.15.26`입니다. 산출물 이름은 `pstack-guide-0.15.26.epub`, `pstack-guide-0.15.26.pdf`입니다.

원고에서 반영한 내용입니다.

- 스킬 55개(일반 31, 원칙 24). 새 절은 `create-formal-verification-skill`(검증 장). `disable-model-invocation`은 `setup-pstack`만 없고 나머지 54개에 있습니다.
- `/ketchup`은 사용자를 기다리는 항목을 답만으로 결정할 수 있게 모두 나열합니다. 단어는 결정에 쓰고, 일어난 일은 그림의 단어를 세지 않고 100단어 아래로 둡니다. 항목마다 약 30단어이고, 답은 항목 수와 함께 커집니다. 단어 수에 맞추려고 항목을 자르거나 줄이지 않습니다. 위험이 낮아도 항목마다 위험을 쓰고, 결정이 가리키는 PR마다 번호나 링크를 둡니다.
- `/create-formal-verification-skill`은 버그 비용이 크고 테스트가 잘 닿지 않는 속성 하나를, 질문에 맞는 도구로 형식 검증하고, 다음 에이전트가 다시 돌릴 프로젝트 전용 스킬을 남깁니다. 지금 코드가 속성을 깨면 발견으로 보고하고 속성을 약하게 만들지 않습니다.
- 브랜드 타입은 검증하는 타입 가드에서 오고 `as`에서는 오지 않습니다.
- Claude Code에서 `/pstack:setup-pstack`은 `~/.claude/rules/pstack-models.md`를 씁니다. Cursor에만 있는 단계는 `Skipped in Claude Code: <step>. <reason>.` 한 줄과 함께 건너뜁니다. 생성 복사는 README와 안내서를 포함합니다.
- Custom Mode는 모드를 나갈 때까지 매 턴 컨텍스트에 남습니다. README는 Cursor 내장 `/autopilot`이 PR을 감시하고, `poteto-mode` 안에서는 PR 상태 요청이 babysit 플레이북으로 간다고 합니다.
- `poteto-mode`와 `make-bot-ui`의 프런트매터 `name`은 폴더 이름과 같습니다.

### 해석한 부분

- `#704`의 `scripts/check-pstack-docs.mjs`는 저장소 루트에 있어 `pstack/` 밖입니다. 책은 원문으로 쓰지 않았습니다.
- `#702`는 표시 이름 `Poteto Mode`, `Make Bot UI`를 폴더 이름과 맞춥니다. 책은 스킬을 폴더 이름으로 부르므로 스킬 절 제목은 그대로입니다.
- `#709`의 핸드오프 증명은 지금 코드가 이미 속성을 깨면 그 발견에서만 실패하는 기준선을 받아들이라고 합니다. 책은 그 최종 본문을 따릅니다.

### 실행한 검사

- `PSTACK_SRC=/tmp/cursor-plugins/pstack bun tools/check.mjs`: 스킬 55개와 플레이북 23개의 절 존재, 용어 병기 짝 29개, dark palette 25색 25대비, epubcheck 오류 0, 경고 0.
- `CHROME_PATH=/usr/bin/google-chrome bun tools/check-layout.mjs`: 390px 폭에서 가로 넘침 없음.
- `CHROME_PATH=/usr/bin/google-chrome bun tools/build.mjs`: `pstack-guide-0.15.26.epub`, `pstack-guide-0.15.26.pdf` (483쪽, 0.15.25-ko.2는 474쪽).

## 0.15.28

원문을 `0b8e952052d482ee6de06deebf14d590d77b1b34`(0.15.26)에서 `d457567332aa6989e753ea289f30ea2bfbc80bc0`(0.15.28)로 올렸습니다. pstack 트리에 닿은 커밋은 여섯 개입니다.

- `75fabac` pstack: drop the rewritten-prompt ban from sharpen (#712)
- `f9be7aa` pstack: offer formal verification in setup, sync help and guide (#715)
- `0148b78` chore(pstack): bump to 0.15.27 (#713)
- `6b78e9f` fix(pstack): add TLA+ default and no-verifier fallback to create-formal-verification-skill (#721)
- `7b353f7` pstack: add maintain-formal-verification-skill (#716)
- `d457567` chore(pstack): bump to 0.15.28, sync guide with create-formal-verification-skill (#724)

책 버전은 `BOOK_REVISION = 0`이라 pstack 버전과 같은 `0.15.28`입니다. 산출물 이름은 `pstack-guide-0.15.28.epub`, `pstack-guide-0.15.28.pdf`입니다.

원고에서 반영한 내용입니다.

- 스킬 56개(일반 32, 원칙 24). 새 절은 `maintain-formal-verification-skill`(검증 장). `disable-model-invocation`은 `setup-pstack`만 없고 나머지 55개에 있습니다.
- `/setup-pstack` 8단계가 프로젝트에 형식 검증 스킬이 없으면 `/create-formal-verification-skill`을 한 번 제안합니다. `/poteto-help`는 그 상태와 유지 스킬을 말하고, 설정이 두 검증 스킬을 각각 한 번씩 제안한다고 적습니다.
- `/create-formal-verification-skill`은 사건 순서 질문에서 언어를 가리지 않고 TLA+를 기본으로 두고, 이 언어에서 도는 검증기가 없으면 손 모델이 아니라 생성한 입력으로 실제 코드를 시험합니다. 덮는 파일과 함수, 동기화 커밋을 스킬에 기록하고, 다시 검사하지 않은 변경 뒤에는 `/maintain-formal-verification-skill`을 가리킵니다.
- `/maintain-formal-verification-skill`은 덮는 코드를 건드린 커밋을 읽고, 모델이나 하니스나 속성을 지금 코드대로 고치고, 다시 돌린 뒤 실패가 검증의 표류인지 코드의 버그인지 말합니다. 결과는 `in sync`, `updated`, `bug`, `blocked`입니다. 제품 코드는 사용자가 시키지 않으면 편집하지 않습니다.
- `/sharpen`은 다시 쓴 프롬프트를 돌려주지 말라는 문장을 뺐습니다. 조인 뒤 일을 하고 틀을 설명하지 않는다는 본문은 남습니다.
- `/poteto-help`는 Claude Code 설치와 접두사, 어댑터, Cursor 전용 단계 건너뛰기를 본문에 둡니다.
- 안내서 1장은 설치에 Claude Code를 넣고, 설정이 형식 검증을 제안합니다. 2장은 Opening a PR을 경로에 넣고 `/sharpen`을 소개합니다. 6장은 Helpers와 정리 뒤 증거 확인, 형식 검증 절, Babysit의 Origin CLI를 넣습니다. 7장은 `/ketchup`으로 빠른 상태를 듣습니다. 9장은 생성기가 따로 있는 경우를 둘로 둡니다. 10장은 `/in-your-own-words`, `/sharpen`, 형식 검증, `/ketchup` 레시피를 넣습니다.

### 해석한 부분

- `#712`는 `/sharpen`에서 "Don't hand back a rewritten prompt"를 뺍니다. 책은 빠진 금지를 되살리지 않았습니다.
- `#715`의 안내서 동기화는 이미 책에 있던 ketchup, sharpen, in-your-own-words, Claude Code 설치, Opening a PR, Helpers, Babysit Origin 경로를 안내서에 맞춘 것입니다. 책은 안내서가 새로 밝힌 자리만 보강했습니다.
- `#721`의 손 모델 금지는 "test the real code with generated inputs, not a hand model of the function"입니다. 책은 그 최종 본문을 따릅니다.

### 실행한 검사

- `PSTACK_SRC=/tmp/cursor-plugins/pstack bun tools/check.mjs`: 스킬 56개와 플레이북 23개의 절 존재, 용어 병기 짝 29개, dark palette 25색 25대비, epubcheck 오류 0, 경고 0.
- `CHROME_PATH=/usr/bin/google-chrome bun tools/check-layout.mjs`: 390px에서 가로 넘침 없음.
- `CHROME_PATH=/usr/bin/google-chrome bun tools/build.mjs`: `pstack-guide-0.15.28.epub`, `pstack-guide-0.15.28.pdf` (491쪽, 0.15.26은 483쪽).

## 0.15.29

원문을 `d457567332aa6989e753ea289f30ea2bfbc80bc0`(0.15.28)에서 `88d47514b82e7c44f00f2b2a72ff6dd12158038c`(0.15.29)로 올렸습니다. pstack 트리에 닿은 커밋은 하나입니다.

- `88d4751` pstack: restore /sharpen to the original prompt, return only the rewrite (#729)

책 버전은 `BOOK_REVISION = 0`이라 pstack 버전과 같은 `0.15.29`입니다. 산출물 이름은 `pstack-guide-0.15.29.epub`, `pstack-guide-0.15.29.pdf`입니다.

원고에서 반영한 내용입니다.

- 스킬 수는 56개, 플레이북은 23개로 그대로입니다.
- `/sharpen`은 보내기 전에 프롬프트를 더 깊게, 더 크게는 아니게 다시 씁니다. 다시 쓰기 전에 네 가지를 말합니다. 최상위 전문가가 묻지 않은 것, 그들이 시작할 가장 날것의 자료, 구체적인 방법과 도구, 사용자나 에이전트가 아닌 무엇이 결과가 맞다는 것을 보여 줄지입니다. 다시 쓴 프롬프트를 돌려주고 과업은 하지 않습니다. 사용자의 선택은 열어 둡니다. README와 `/poteto-help`와 안내서 2장, 10장이 같은 뜻입니다. 레시피는 `/sharpen <the prompt you're about to send>`입니다.

### 해석한 부분

- `#729`의 커밋 메시지는 "restore /sharpen to the original prompt, return only the rewrite"입니다. 핀 커밋의 `SKILL.md`는 일을 시키지 않고 다시 쓴 프롬프트만 돌리라고 하므로 책은 그 최종 본문을 따릅니다. 0.15.28의 "조인 뒤 일을 한다"는 서술은 되돌렸습니다.

### 실행한 검사

- `PSTACK_SRC=/tmp/cursor-plugins/pstack bun tools/check.mjs`: 스킬 56개와 플레이북 23개의 절 존재, 용어 병기 짝 29개, dark palette 25색 25대비, epubcheck 오류 0, 경고 0.
- `CHROME_PATH=/usr/bin/google-chrome bun tools/check-layout.mjs`: 390px에서 가로 넘침 없음.
- `CHROME_PATH=/usr/bin/google-chrome bun tools/build.mjs`: `pstack-guide-0.15.29.epub`, `pstack-guide-0.15.29.pdf` (491쪽, 0.15.28과 같음).

## 0.15.30

원문을 `88d47514b82e7c44f00f2b2a72ff6dd12158038c`(0.15.29)에서 `eb4db2b55b2b7dec3d9282754cddf0a56bf4ff10`(0.15.30)로 올렸습니다. pstack 트리에 닿은 커밋은 하나입니다.

- `eb4db2b` feat(pstack): add the statechart skill to draw TLA+ models as charts (#741)

책 버전은 `BOOK_REVISION = 0`이라 pstack 버전과 같은 `0.15.30`입니다. 산출물 이름은 `pstack-guide-0.15.30.epub`, `pstack-guide-0.15.30.pdf`입니다.

원고에서 반영한 내용입니다.

- 스킬 57개(일반 33, 원칙 24), 플레이북 23개, 에이전트 2개. 새 절은 `statechart`(검증 장, `maintain-formal-verification-skill` 다음). `disable-model-invocation`은 `setup-pstack`만 없고 나머지 56개에 있습니다. 스킬 지도의 고치고 검증하기 행이 9개가 되어 수식은 4 + 1 + 5 + 28 + 9 + 4 + 5 + 1 = 57입니다.
- `/statechart`는 앱의 사용자가 보는 것을 TLA+ 모델에서 Mermaid statechart로 그립니다. 상태는 동작하면 회색, 아직 틀리면 빨강, 고쳐졌으면 초록이고, TLC가 찾은 버그는 번호 붙은 경로입니다. 방향은 `from-spec`과 `from-chart` 둘이고, 기존 명세에 비춰 코드를 감사할 때는 `--against`, 열린 수정은 `--fixed`로 넘깁니다. 버그마다 실제 코드에서 재현하고, 차트를 통과시키려고 규칙을 약하게 만들지 않으며, 넘길 때 개수는 `summary.json`에서 가져오고 `stories.md`를 붙입니다.
- README의 "모든 스킬" 표와 `/poteto-help`의 스킬 표에 `/statechart` 행이 더해졌습니다. 책은 빠른 참조표의 두 표, 설치 장의 스킬 고르기 표, 선택 흐름도의 검증 표에 행을 더했습니다.
- 안내서 6장에 "Show the behavior as a statechart" 절이 더해졌습니다. 책은 검증 장의 사용 예와 레시피 장에 그 프롬프트 `/statechart what the user sees when they edit a note offline`을 넣었습니다. 5부 표지와 검증 장 첫머리가 `statechart`를 소개하고, 형식 검증 두 절과 설치 장의 관련 스킬이 그 절로 링크합니다.

### 해석한 부분

- `SKILL.md`는 스크립트가 앱의 사용자를 reader라고 부른다고 합니다(`readerActions`). 안내서 6장의 "the reader"는 차트를 읽고 합의하는 사람, 곧 PM이나 디자이너입니다("agree on it with the reader"). 책은 `SKILL.md`에서 옮긴 동작 방식에서는 앱의 사용자로, 안내서에서 옮긴 사용 예에서는 "차트를 읽는 사람"으로 적었습니다.
- 상태의 색은 `description`의 회색, 빨강, 초록을 쓰고, README와 안내서의 works, still wrong, fixed by your open PR은 "동작함, 아직 틀림, 열린 PR이 고침"으로 옮겼습니다.
- `scripts/statechart.mjs`는 원문 줄에 넣었지만, 본문은 `SKILL.md`와 안내서가 이름 붙인 명령(`from-spec`, `from-chart`)과 옵션(`--against`, `--fixed`, `--png`), 그리고 `--help`가 명령과 차트 읽는 법을 알려 준다는 사실만 적었습니다. TLC를 돌리는 데 필요한 설치는 두 파일이 밝히지 않아 적지 않았습니다.

### 실행한 검사

- `PSTACK_SRC=/tmp/cursor-plugins/pstack bun tools/check.mjs`: 스킬 57개와 플레이북 23개의 절 존재, 용어 병기 짝 29개, dark palette 25색 25대비, epubcheck 오류 0, 경고 0.
- `CHROME_PATH=/usr/bin/google-chrome bun tools/check-layout.mjs`: 390px에서 가로 넘침 없음.
- `CHROME_PATH=/usr/bin/google-chrome bun tools/build.mjs`: `pstack-guide-0.15.30.epub`, `pstack-guide-0.15.30.pdf` (499쪽, 0.15.29는 491쪽).

## 0.15.30-ko.1

원문을 `eb4db2b55b2b7dec3d9282754cddf0a56bf4ff10`(0.15.30)에서 `4ec7ffa173eaa70d3d9467a627baf0954645a353`(0.15.30)로 올렸습니다. pstack 버전은 그대로이고, 핀과 책만 움직입니다. pstack 트리에 닿은 커밋은 두 개입니다.

- `7698375` fix(pstack): bring the statechart skill up to date with six fixes (#776)
- `4ec7ffa` refactor(pstack): delete statechart comments that repeat the code, and rename helpers (#779)

책 버전은 `BOOK_REVISION = 1`이라 `0.15.30-ko.1`입니다. 산출물 이름은 `pstack-guide-0.15.30-ko.1.epub`, `pstack-guide-0.15.30-ko.1.pdf`입니다.

확인한 사실입니다. `plugin.json`과 `.cursor-plugin/plugin.json` 버전은 둘 다 0.15.30입니다. `eb4db2b..4ec7ffa`에서 `pstack/`에 닿은 파일은 다섯 개이고, 모두 `skills/statechart/` 아래입니다. `SKILL.md`, `scripts/lib.mjs`, `scripts/statechart.mjs`, `scripts/tlc-to-chart.mjs`, `scripts/test/statechart.test.mjs`. README, `/poteto-help`, 안내서, 플레이북은 바뀌지 않았습니다. 스킬 수는 57개, 플레이북은 23개로 그대로입니다.

원고에서 반영한 내용입니다.

- 핀과 permalink, 산출물 이름을 `4ec7ffa` / `0.15.30-ko.1`로 올렸습니다.
- 검증 장의 `/statechart` 절을 새 `SKILL.md`에 맞췄습니다. 기존 명세에 비춰 코드를 감사할 때는 작성자가 통과한다고 한 설정으로 검사하고, 그 설정이 명세와 같은 파일 이름을 쓰지 않으면 `--against-config`로 넘깁니다. 매핑은 두 모델이 둘 다 가진 변수만 레이블합니다. 코드를 모델링하는 명세와 새 명세는 액션의 조건마다 파일과 줄 주석을 답니다. 원문의 예는 `\* pay.ts:120`입니다.
- 규칙마다 화면에서 사용자가 보는 것이나 요청에서 받는 것, 그리고 그것을 바꿀 수 있는 코드를 이름 붙입니다. 둘 중 하나가 없으면 그 규칙을 받지 않습니다.
- 재현은 사용자나 클라이언트가 닿는 진입점만 구동하고, 그들이 보는 것만 단언합니다. 스스로 세운 플래그를 단언하거나 소스 텍스트를 검색하는 테스트는 증명으로 치지 않습니다. 실행과 코드 읽기가 이야기의 다른 부분을 증명하면 어느 쪽인지 말합니다. 가져올 수 없어 복사한 코드는 커밋과 줄 범위, 빼 둔 것을 적습니다.
- `--against`로 넘길 때는 명세가 이미 그 버그를 적었는지도 말합니다. 명령이 파일과 줄이 없는 조건을 나열하는 동안에는 규칙이 성립한다고 보고하지 않습니다.

### 해석한 부분

- `#776`은 `--config`, `--fixed-config`, `--expect-broken`과 PROPERTY 검사, TLC 워커 수도 더합니다. `SKILL.md`가 이름 붙인 새 옵션은 `--against-config`뿐입니다. 책은 0.15.30과 같이 `SKILL.md`와 안내서가 이름 붙인 명령과 옵션만 적었습니다. `--help`가 나머지를 알려 줍니다.
- `#779`는 스크립트 헬퍼 이름을 바꿉니다. `checkTlcOutput`은 `tlcOutputWarning`, `quote`는 `escapeMermaidQuotes`입니다. `SKILL.md`의 `readerActions`는 그대로입니다. 책은 스크립트 내부 이름을 적지 않았습니다.
- 안내서와 README와 `/poteto-help`는 이 구간에서 바뀌지 않았습니다. 사용 예와 빠른 참조표와 레시피는 핀만 올렸습니다.

### 실행한 검사

- `PSTACK_SRC=/tmp/cursor-plugins/pstack bun tools/check.mjs`: 스킬 57개와 플레이북 23개의 절 존재, 용어 병기 짝 29개, dark palette 25색 25대비, epubcheck 오류 0, 경고 0.
- `CHROME_PATH=/usr/bin/google-chrome bun tools/check-layout.mjs`: 390px에서 가로 넘침 없음.
- `CHROME_PATH=/usr/bin/google-chrome bun tools/build.mjs`: `pstack-guide-0.15.30-ko.1.epub`, `pstack-guide-0.15.30-ko.1.pdf` (500쪽, 0.15.30은 499쪽).

## 0.15.32

원문을 `4ec7ffa173eaa70d3d9467a627baf0954645a353`(0.15.30)에서 `e73df471cd4bd918367e99f3dd9c51bd53ddf5f0`(0.15.32)로 올렸습니다. pstack 트리에 닿은 커밋은 열세 개입니다.

- `076f4b2` feat(pstack): bring the statechart skill up to date, with the Pele renderer (#791)
- `642289e` chore(pstack): bump to 0.15.31 (#792)
- `00d5dec` feat(pstack): tell generated verify skills to read each model-check result with /statechart (#794)
- `3c0fdb4` feat(pstack): add the ketchup-video skill (#797)
- `b1a1298` chore(pstack): bump to 0.15.32 (#798)
- `7054003` fix(pstack): route reflect edits out of the plugin cache (#800)
- `96dec8e` fix(watch-pr): distinguish fork heads during stack discovery (#801)
- `fe096ef` fix(watch-pr): cap polling sleeps at the deadline (#802)
- `86c2448` fix(pstack): recognize matching inline code delimiters (#803)
- `3c596e7` fix(orch): prefer active PR over branch history (#804)
- `f83fbe6` fix(pstack): read transcript mtimes with GNU stat and date in worktree-audit (#805)
- `a0b0ad9` docs(pstack): note Claude Code auto-update is off for third-party marketplaces (#806)
- `e73df47` fix(pstack): renumber swarm's Phase A and fix its dangling table reference (#807)

책 버전은 `BOOK_REVISION = 0`이라 pstack 버전과 같은 `0.15.32`입니다. 산출물 이름은 `pstack-guide-0.15.32.epub`, `pstack-guide-0.15.32.pdf`입니다.

확인한 사실입니다. `plugin.json`과 `.cursor-plugin/plugin.json` 버전은 둘 다 0.15.32입니다. `e73df47`은 `main`에서 `pstack/`에 닿은 최신 커밋이고 버전도 0.15.32입니다. 0.15.32를 처음 쓴 커밋은 `b1a1298`입니다. 스킬 수는 58개(일반 34, 원칙 24), 플레이북은 23개입니다. 새 절은 `ketchup-video`(이해하기 부의 teach/recall 장, `ketchup` 다음)입니다. `disable-model-invocation`은 `setup-pstack`만 없고 나머지 57개에 있습니다. 스킬 지도의 이해하기 행이 6개가 되어 수식은 4 + 1 + 6 + 28 + 9 + 4 + 5 + 1 = 58입니다.

원고에서 반영한 내용입니다.

- 핀과 permalink, 산출물 이름을 `e73df47` / `0.15.32`로 올렸습니다.
- 새 절은 `/ketchup-video`입니다. `/ketchup`을 따르되 일어난 일은 짧은 무음 슬라이드 영상으로 보이고, 기다리는 호출은 그 아래 글입니다. 창은 `/ketchup-video` 직전 메시지부터입니다. 저장소 밖에서 영상을 쓰는 일만 읽기 전용 규칙(rule)의 예외입니다. README와 `/poteto-help`와 안내서 10장, 빠른 참조표, 설치 장의 스킬 표, 선택 흐름도, 레시피에 행을 더했습니다.
- `/statechart`는 제품 흐름만이 아니라 프로토콜과 서비스도 그립니다. 읽는 사람은 PM, 엔지니어, 리뷰어일 수 있습니다. 버그는 규칙을 깨는 상태로 가는 번호 붙은 경로입니다. PNG에서 규칙을 깨는 상태는 묶음 색 대신 빨강입니다. 본문이 이름 붙인 새 옵션은 `--cover`와 `--expect-broken`입니다. 첫 실행은 mise로 TLC와 Java를 받습니다.
- `/create-formal-verification-skill`이 만든 TLA+ 검사는 결과마다 `/statechart`로 읽습니다. 명령과 경로는 생성한 스킬에 복사하지 않습니다.
- `swarm` A단계는 1, 2, 3, 4입니다. B단계는 3단계의 모델을 씁니다. D단계는 결과 표입니다.
- `reflect`는 `plugins/cache/`를 편집하지 않고, 승인 뒤 `.cursor/skills/`나 `~/.cursor/skills/`의 복사본을 고칩니다. PR을 열거나 푸시하지 않습니다.
- Claude Code는 서드파티 마켓플레이스의 자동 업데이트를 끕니다. 켜려면 `/plugin`의 marketplaces 탭에서 enable auto-update를 고르고, 한 번만 올리려면 `claude plugin update pstack@cursor-plugins`입니다.
- `check-plan.mjs`는 같은 길이의 열림과 닫힘 백틱만 인라인 코드로 벗깁니다. `worktree-audit.sh`는 GNU면 `stat -c`와 `date -d`를 씁니다. `orch`는 브랜치의 열린 PR을 이력보다 앞에 둡니다. `watch-pr`는 포크 헤드를 부모로 쓰지 않고, 잠드는 시간은 남은 기한을 넘지 않습니다.

### 해석한 부분

- README와 `/poteto-help`와 안내서 6장은 `/statechart`를 여전히 사용자가 보는 것과 동작함, 아직 틀림, 열린 PR이 고침으로 설명합니다. `SKILL.md`는 시스템 일반과 파란 테두리 경로로 다시 적혔습니다. 책은 절의 동작은 본문을 따르고, README와 안내서의 문구는 그 출처를 밝혀 적었습니다.
- `#791`은 Pele 렌더러와 스크립트를 많이 나눕니다. `SKILL.md`가 이름 붙인 새 옵션은 `--cover`와 `--expect-broken`입니다. 책은 본문과 안내서가 이름 붙인 명령과 옵션만 적었습니다. `--help`가 나머지를 알려 줍니다.
- `ketchup-video`는 영상을 저장소 밖에서 씁니다. 책은 그 예외만 옮기고, 렌더 도구 이름은 본문이 밝히지 않아 적지 않았습니다.

### 실행한 검사

- 빌드와 검사 결과는 이어서 적습니다.
