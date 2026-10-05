# 스킬 빠른 참조표

원문: {{src:README.md}} {{src:skills/poteto-mode/SKILL.md}}

이 표는 pstack 0.15.10(커밋 `4e5b1cf`)의 스킬 51개, 에이전트 2개, `poteto-mode` 플레이북 23개를 한곳에 모았습니다. 트리거 문구는 각 스킬의 `description`에 있는 문구를 그대로 두었고(`no-comments`처럼 `description`에 없는 곳은 `poteto-mode`의 규칙(non-negotiable)을 적었고), 영어 원문이 없는 곳(원칙(principle) 스킬 등)은 "언제 적용하는가"를 한국어로 적었습니다. 이름을 누르면 해당 절로 갑니다.

## 일반 스킬 27개

| 스킬 | 한 줄 목적 | 트리거 문구 |
| --- | --- | --- |
| [`poteto-mode`](poteto-mode.md#skill-poteto-mode) | 진입점. 요청에 맞는 플레이북을 골라 필요한 스킬을 부르며 엄밀하게 끝냄 | `poteto`, `/poteto-mode`, 이 스타일로 일해 달라는 요청 |
| [`poteto-help`](setup.md#skill-poteto-help) | pstack 사용법과 스킬 선택을 안내하고, 보낼 프롬프트를 건넴. 일은 시작하지 않음 | `/poteto-help`, 설치나 설정이나 쓰는 법, 어느 스킬이 맞는지. 일을 시키는 요청은 아님 |
| [`setup-pstack`](setup.md#skill-setup-pstack) | 역할별 모델과 추론 예산을 정하고 규칙(rule) 파일을 씀 | `/setup-pstack`, "configure pstack models", "pstack budget" |
| [`how`](how.md#skill-how) | 코드가 어떻게 동작하는지, 어디에 두어야 하는지 설명 | "how does X work", 변경 전 코드 워크스루, "where should this live", "which package owns this", "is this the right layer" |
| [`why`](why.md#skill-why) | 코드의 동기와 의도를 MCP 증거 범주별로 병렬 조사 | "why does X work this way", "why we picked Y", 설계 근거, 회귀, 포스트모템, 데이터로 뒷받침된 임계값 |
| [`teach`](teach-recall.md#skill-teach) | `how`와 `why`를 엮어 사람이 이해하도록 평이하게 설명 | "teach me this", "help me really understand X", "explain this change or subsystem to me" |
| [`recall`](teach-recall.md#skill-recall) | 자신의 채팅 기록과 공유 기록에서 최근 맥락을 복원해 브리프로 | "recall my work on X", "catch me up", "what have I been working on", "where did I leave off" |
| [`architect`](architect.md#skill-architect) | 코드 전에 타입, 시그니처, 모듈 구조를 스케치 | `/architect`, "architect this", "design this", 코드로 뛰어들면 잘못된 모양이 굳을 작업 |
| [`arena`](arena-swarm.md#skill-arena) | 같은 과업에 후보 N개를 만들고 기준안을 고르고 이식 | `/arena`, "arena this", "throw it in the arena" |
| [`swarm`](arena-swarm.md#skill-swarm) | 병렬 작업자 N명을 띄우고 보고서 하나로 집계 | `/swarm`, "swarm this", 병렬 커버리지, 경주, 관문 시험(gauntlet), 탐색 |
| [`figure-it-out`](arena-swarm.md#skill-figure-it-out) | 맞는 플레이북이 없는 큰 작업의 감사 가능한 플레이북을 설계 | `/figure-it-out`, "figure it out", 큰 마이그레이션, 좁은 플레이북이 맞지 않을 때 |
| [`tdd`](tdd-blast.md#skill-tdd) | 버그를 실패하는 테스트로 먼저 고정하고 고침 | 사용자가 TDD, 실패하는 테스트, 회귀 테스트를 요청했을 때, 또는 버그에 값싼 로컬 테스트 대상이 있을 때 |
| [`blast-radius`](tdd-blast.md#skill-blast-radius) | 변경이 다른 곳에서 깨뜨릴 것을 찾고 안전 근거를 실행으로 증명 | "blast radius of X", "what could this break", 믿지 못하는 작은 diff |
| [`interrogate`](interrogate.md#skill-interrogate) | 여러 모델이 diff를 적대적으로 리뷰하고 판정을 냄 | "interrogate", "adversarial review", "multi-model review", "challenge this", "stress test this code", "find blind spots", "tear this apart" |
| [`benchmark-checklist`](verification.md#skill-benchmark-checklist) | 성능 숫자를 보고하거나 그 숫자로 행동하기 전에 걸러 냄 | 벤치마크를 돌리거나, 자신이 측정한 속도 향상이나 회귀를 보고할 때 |
| [`create-verification-skill`](verification.md#skill-create-verification-skill) | 앱을 사용자처럼 구동하는 프로젝트 전용 검증(verification) 스킬 생성 | `/create-verification-skill`, "make a control skill for this repo", 앱 동작을 증명할 스크립트된 방법이 없을 때 |
| [`maintain-verification-skill`](verification.md#skill-maintain-verification-skill) | 검증 스킬과 기능 지도를 정직하게 유지 | `/maintain-verification-skill`, "audit the verify skill" |
| [`unslop`](writing.md#skill-unslop) | 글에서 AI가 쓴 티를 걷어 냄 | 원문: "Must always apply" |
| [`technical-writing`](writing.md#skill-technical-writing) | 문서를 Diátaxis, Google 스타일, STE, Global English 층으로 씀 | `/technical-writing`, 문서, RFC, README, PR 설명, 커밋 메시지 쓰기와 리뷰 |
| [`no-comments`](code-hygiene.md#skill-no-comments) | Comment Sicko로 주석을 걷어 내고 제약 주석에 인코딩을 제안 | 리뷰 전 (`poteto-mode`의 트리거) |
| [`typescript-best-practices`](code-hygiene.md#skill-typescript-best-practices) | 타입 시스템 원칙을 TypeScript 문법으로 구체화 | `.ts`나 `.tsx` 파일을 읽거나 편집할 때. 스스로 로드되지 않으므로 `/typescript-best-practices`를 침 |
| [`automate-me`](personal.md#skill-automate-me) | 자신의 작업 방식에서 `-mode` 스킬을 만듦 | "automate me", "create/update/refresh my -mode skill", "turn/capture my preferences or working style into a skill" |
| [`reflect`](personal.md#skill-reflect) | 대화 기록에서 배운 것을 스킬 수정으로 라우팅 | "reflect", `/reflect` |
| [`correct`](personal.md#skill-correct) | 되풀이되는 에이전트 실수를 찾아 각각을 불가능하게 만듦 | `/correct` |
| [`show-me-your-work`](personal.md#skill-show-me-your-work) | 오래 걸리거나 무인인 작업의 결정 기록을 TSV로 남김 | `/show-me-your-work`, 자율 또는 여러 단계 실행, 사람이 자리를 뜬 뒤 검토하는 작업 |
| [`bro`](utility.md#skill-bro) | 마지막 메시지를 전문 용어 없이 다시 말함 | `/bro` |
| [`make-bot-ui`](benny.md#skill-make-bot-ui) | 웹훅으로 Grok Bot을 깨우는 버튼이 있는 UI를 만듦 | 커스텀 UI(페이지, 대시보드, 버튼)로 Grok Bot을 깨울 때, 웹훅 발신자 키가 필요할 때, Tailscale로 노출할 때 |

## 원칙 스킬 24개

모두 [원칙 장](principles.md)에 절이 있고, 절마다 적용하는 때와 아닌 때, 예시, 함정, 함께 보는 원칙이 붙어 있습니다. 원칙이 서로 당길 때는 [그 장의 끝 절](principles.md#principles-interactions)에 모았습니다. 트리거 문구는 영어 `description`의 "Apply when ..."을 옮긴 것입니다.

| 스킬 | 묶음 | 언제 적용하는가 |
| --- | --- | --- |
| [`principle-laziness-protocol`](principles.md#skill-principle-laziness-protocol) | 핵심 | 리팩터링, diff 크기 판단, 추상화나 계층이나 신호 전달을 더하고 싶을 때 |
| [`principle-foundational-thinking`](principles.md#skill-principle-foundational-thinking) | 핵심 | 로직을 쓰기 전: 핵심 타입과 데이터 구조, 뼈대(scaffold) 대 기능 순서, 동시 행위자가 공유하는 것 |
| [`principle-redesign-from-first-principles`](principles.md#skill-principle-redesign-from-first-principles) | 핵심 | 기존 설계에 새 요구를 통합할 때 |
| [`principle-attack-the-premise`](principles.md#skill-principle-attack-the-premise) | 핵심 | 같은 전제를 공유하는 수정 둘 이상이 같은 관문(gate)에서 실패했을 때 |
| [`principle-subtract-before-you-add`](principles.md#skill-principle-subtract-before-you-add) | 핵심 | 추가, 리팩터링, 재작성의 순서를 정할 때 |
| [`principle-minimize-reader-load`](principles.md#skill-principle-minimize-reader-load) | 핵심 | 따라가기 어려운 코드를 리뷰하거나 다듬을 때 |
| [`principle-outcome-oriented-execution`](principles.md#skill-principle-outcome-oriented-execution) | 핵심 | 단계 경계가 분명한 계획된 재작성과 마이그레이션 |
| [`principle-experience-first`](principles.md#skill-principle-experience-first) | 핵심 | 제품, UX, 기능 범위의 트레이드오프 |
| [`principle-exhaust-the-design-space`](principles.md#skill-principle-exhaust-the-design-space) | 핵심 | 코드베이스에 선례가 없는 새 UI 상호작용이나 아키텍처 결정 |
| [`principle-build-the-lever`](principles.md#skill-principle-build-the-lever) | 핵심 | 대량 작업만이 아니라 사소하지 않은 모든 작업 |
| [`principle-model-the-domain`](principles.md#skill-principle-model-the-domain) | 아키텍처 | 상태가 있는 로직, 분기가 많거나 모양 가정이 파일마다 반복되는 코드 |
| [`principle-boundary-discipline`](principles.md#skill-principle-boundary-discipline) | 아키텍처 | 검증(validation), 오류 처리, 프레임워크 어댑터를 연결할 때 |
| [`principle-type-system-discipline`](principles.md#skill-principle-type-system-discipline) | 아키텍처 | 타입을 설계하거나 함수 시그니처를 리뷰하거나 정적 타입 언어로 코드를 쓸 때 |
| [`principle-make-operations-idempotent`](principles.md#skill-principle-make-operations-idempotent) | 아키텍처 | 충돌, 재시작, 재시도 속에서 도는 명령, 수명 주기 단계, 처리 루프를 설계할 때 |
| [`principle-migrate-callers-then-delete-legacy-apis`](principles.md#skill-principle-migrate-callers-then-delete-legacy-apis) | 아키텍처 | 옛 호출자가 남은 채 새 내부 API를 도입할 때 |
| [`principle-separate-before-serializing-shared-state`](principles.md#skill-principle-separate-before-serializing-shared-state) | 아키텍처 | 동시 행위자가 같은 파일, 브랜치, 키, 상태 객체에 쓸 수 있을 때 |
| [`principle-prove-it-works`](principles.md#skill-principle-prove-it-works) | 검증(verification) | 작업을 끝낸 뒤, 끝났다고 선언하기 전 |
| [`principle-fix-root-causes`](principles.md#skill-principle-fix-root-causes) | 검증 | 디버깅할 때 |
| [`principle-sequence-verifiable-units`](principles.md#skill-principle-sequence-verifiable-units) | 검증 | 여러 단계 작업(스윕, 마이그레이션, 비슷한 수정의 연속)과 커밋과 PR을 쌓는 방식 |
| [`principle-test-behavior-not-implementation`](principles.md#skill-principle-test-behavior-not-implementation) | 검증 | 테스트를 쓰거나 바꾸거나 남길 때 |
| [`principle-explain-the-number`](principles.md#skill-principle-explain-the-number) | 검증 | 측정한 숫자(속도 향상, 회귀, 처리량, 지연, eval 결과)를 믿거나 보고하거나 그 숫자로 행동하기 전 |
| [`principle-guard-the-context-window`](principles.md#skill-principle-guard-the-context-window) | 위임 | 대용량 출력, 긴 파일, 반복 읽기, 팬아웃 계획으로 컨텍스트가 차오를 때 |
| [`principle-never-block-on-the-human`](principles.md#skill-principle-never-block-on-the-human) | 위임 | 되돌릴 수 있는 일에서 "X를 할까요?"라고 묻고 싶을 때 |
| [`principle-encode-lessons-in-structure`](principles.md#skill-principle-encode-lessons-in-structure) | 메타 | 같은 지시를 두 번째로 쓰는 자신을 발견했거나 반복되는 교정을 알아챘을 때 |

## poteto-mode 플레이북 23개

플레이북마다 절 끝에 흐름도, 단계별 산출물, 예시, 실패와 중단 처리, 호출하는 스킬과 스크립트의 표가 붙어 있습니다.

| 플레이북 | 트리거와 용도 | 절 |
| --- | --- | --- |
| Investigation | 읽기 전용 질문 (how does X work, why was Y built this way, are we sure about Z, should we do X or Y) | [작업 플레이북](playbooks-work.md#playbook-investigation) |
| Bug fix | 재현하고 근본 원인을 찾아 런타임 증거로 고칠 결함 | [작업 플레이북](playbooks-work.md#playbook-bug-fix) |
| Perf issue | 기준선에 대해 추적하고 개선할 측정된 느림 | [작업 플레이북](playbooks-work.md#playbook-perf-issue) |
| Hillclimb | 지표 하나를 목표까지 지속적으로 개선 | [작업 플레이북](playbooks-work.md#playbook-hillclimb) |
| Runtime forensics | 실행 중 증상(누수, 유휴 CPU 스핀, 글리치) 진단. 산출물(deliverable)은 진단 | [작업 플레이북](playbooks-work.md#playbook-runtime-forensics) |
| Trace forensics | 캡처된 프로파일링 산출물(cpuprofile, 트레이스, spindump, 힙 스냅숏) 진단 | [작업 플레이북](playbooks-work.md#playbook-trace-forensics) |
| Feature | 이름 붙인 데이터 모양에서 만드는 새 동작이나 바뀐 동작 | [작업 플레이북](playbooks-work.md#playbook-feature) |
| Refactoring | 동작을 보존하는 구조 변경 (이름 바꾸기, 추출, 인라인, 중복 제거, 이동) | [작업 플레이북](playbooks-work.md#playbook-refactoring) |
| Prototype | "prototype", "mock it up", "try this layout", "sketch it to decide" | [작업 플레이북](playbooks-work.md#playbook-prototype) |
| Visual parity | 두 구현 사이의 픽셀 단위 UI 동등성 | [작업 플레이북](playbooks-work.md#playbook-visual-parity) |
| Authoring or modifying a skill | `SKILL.md`를 쓰거나 고칠 때 | [작업 플레이북](playbooks-work.md#playbook-authoring-a-skill) |
| Eval | 스킬, 구조, 프롬프트 변경이 에이전트 행동에 미치는 영향 시험 | [작업 플레이북](playbooks-work.md#playbook-eval) |
| Babysit | "babysit this", "get it green", "address the bugbot comments", "check on PR X", "anything outstanding on X" | [PR 플레이북](playbooks-pr.md#playbook-babysit) |
| Shipping | 초록불 스택을 검증한 뒤 병합해 달라는 요청 | [PR 플레이북](playbooks-pr.md#playbook-shipping) |
| Opening a PR | 다른 모든 플레이북의 끝에서 호출됨 | [PR 플레이북](playbooks-pr.md#playbook-opening-a-pr) |
| Autonomous run | "run until done", "/loop until X" | [장시간 플레이북](playbooks-long.md#playbook-autonomous-run) |
| Orchestrate | "run this whole project", "own this migration until it lands" | [장시간 플레이북](playbooks-long.md#playbook-orchestrate) |
| Autopilot-full | "autopilot this queue", "full autopilot", PR마다 소유자 하나 | [장시간 플레이북](playbooks-long.md#playbook-autopilot-full) |
| Autopilot-stack | "autopilot-stack", "stack them, don't ship", "build the stack, I'll land it" | [장시간 플레이북](playbooks-long.md#playbook-autopilot-stack) |
| Session pickup | 대화 기록, 클라우드 에이전트 URL, 푸시된 브랜치에서 이전 작업 이어받기 | [장시간 플레이북](playbooks-long.md#playbook-session-pickup) |
| Pause safely | 명시적 일시 정지, 오프라인, Cursor 재시작, 컨텍스트 압축 임박 | [장시간 플레이북](playbooks-long.md#playbook-pause-safely) |
| Multi-phase or multi-PR plan | 여러 단계나 스택된 PR에 걸친 작업의 계획서 | [장시간 플레이북](playbooks-long.md#playbook-multi-phase-plan) |
| Worktree and simulator cleanup | "what's using my disk", "clean up worktrees", "prune safe-to-prune worktrees", "free up space", "delete old simulators" | [장시간 플레이북](playbooks-long.md#playbook-worktree-cleanup) |

## 에이전트와 자동화

| 이름 | 종류 | 절 |
| --- | --- | --- |
| `poteto-agent` | 서브에이전트. `poteto-mode`의 전체 스타일로 일함 | [poteto-mode](poteto-mode.md#agent-poteto-agent) |
| `Comment Sicko` | 서브에이전트. 주석 리뷰어(애플리케이션 코드는 쓰지 않음) | [코드 정리](code-hygiene.md#agent-comment-sicko) |
| `benny` | 자동화 팩. 슬랙 이슈 제보 분류, 재현, 초안 수정 | [자동화](benny.md#automation-benny) |

## 슬래시 명령 요약

README의 "모든 스킬" 표가 스킬마다 붙인 한 줄 설명입니다(원문을 옮김).

| 명령 | 쓸 때 |
| --- | --- |
| `/poteto-mode` | 사소하지 않은 모든 작업의 기본 진입점 |
| `/poteto-help` | pstack이 낯설거나 어느 스킬, 플레이북, 원칙이 맞는지 모르겠을 때. 무엇을 하려는지 알아내고 그 부분만 답하며, 칠 프롬프트를 건넴. pstack 사용법을 물으면 스스로도 로드됨 |
| `/how` | 서브시스템이 어떻게 동작하는지 워크스루를 원할 때 |
| `/why` | 왜 이렇게 만들었는지 알고 싶을 때. 런타임에 MCP를 발견하고 각 증거 범주를 병렬로 조회 |
| `/recall` | 작업을 시작하거나 재개하며 주제에 대한 최근 맥락을 자신의 채팅 기록과 공유 기록에서 다시 세워 빡빡한 현재 상태 브리프로 받고 싶을 때 |
| `/blast-radius` | 작아 보이는 변경이 다른 곳에서 무엇을 깨뜨릴 수 있는지, 안전하게 하는 사실 하나를 주장이 아니라 코드 실행으로 증명해서 알고 싶을 때 |
| `/architect` | 함수 경계를 넘는 코드를 쓰기 전에 호출자의 사용, 타입, 모듈 모양을 먼저 정하고 싶을 때 |
| `/arena` | 같은 일에 병렬 시도 N개를 만들고 각각의 좋은 부분을 가져오고 싶을 때 |
| `/swarm` | 서로 다른 조각이나 경주에 병렬 작업자 N명을 두고 집계 보고서 하나를 받고 싶을 때 |
| `/interrogate` | diff에 대해 서로 다른 모델 여럿이 엄격한 코드 품질 렌즈를 포함해 깨뜨려 보기를 원할 때 |
| `/automate-me` | 실제로 일한 방식에서 초안한 자신만의 `-mode` 스킬을 원할 때 |
| `/make-bot-ui` | 버튼이 웹훅으로 Grok Bot을 깨우는 페이지나 대시보드를 원할 때 |
| `/setup-pstack` | pstack이 역할별로 쓸 모델을 고르고 싶을 때. 모델을 감지하고 설정 규칙을 씀 |
| `/reflect` | 긴 작업이 끝났고 그 레시피를 스킬 수정으로 남기고 싶을 때 |
| `/correct` | 같은 실수로 에이전트를 계속 고치고 있을 때. 이력에서 실수 부류를 찾고, 통하는 가장 높은 수준(아키텍처, 그다음 타입, 린트와 CI, 그다음 테스트, 문서는 마지막)에서 고치고, 규칙마다 무엇이 강제하는지를 짝지은 표를 유지 |
| `/teach` | 변경이나 서브시스템을 요약이 아니라 실제로 이해하고 싶을 때. `how`와 `why`를 돌려 그림을 한 장씩 쌓아 가며 평이한 설명 하나로 엮음 |
| `/tdd` | 버그를 고치는데 값싼 로컬 테스트 경로가 있을 때. 실패하는 테스트를 먼저, 그다음 수정 |
| `/benchmark-checklist` | 벤치마크를 돌렸거나 속도 향상이나 회귀를 측정했을 때. 보고하거나 그 숫자로 행동하기 전에 숫자(제한 요인, 조율, 오류, 반복 실행, 종단 관련성)를 걸러 냄 |
| `/no-comments` | 리뷰 전에 주석을 걷어 내려는 때. Comment Sicko를 띄우고 수용한 발견을 고치고 제약 주장에 인코딩을 제안 |
| `/typescript-best-practices` | TypeScript를 읽거나 편집할 때. 스스로 로드되지 않으므로 명령을 침. `type-system-discipline` 원칙을 문법에 접지 |
| `/figure-it-out` | 맞는 번들 플레이북이 없을 때. 과업에 맞는 엄밀하고 감사 가능한 플레이북을 설계 |
| `/show-me-your-work` | 검토 가능한 결정 기록을 원할 때. 커밋할 수 있는 TSV에 결정을 기록 |
| `/create-verification-skill` | 프로젝트에 앱 동작을 증명할 스크립트된 방법이 없을 때. 기능 지도가 있는 프로젝트 전용 verify 스킬을 생성 |
| `/maintain-verification-skill` | verify 스킬의 기능 지도가 앱과 어긋났을 때. 소스 웨이브와 라이브 패스 한 번, 최대 증명된 교정 PR 하나 |
| `/unslop` | 글을 다듬을 때. AI의 티를 제거 |
| `/bro` | 마지막 메시지를 전문 용어 없이 사람 말로 다시 듣고 싶을 때 |
| `/technical-writing` | 문서, RFC, README, PR 설명, 커밋 메시지를 위한 층화된 문서 기준(standard). Diátaxis + Google 개발자 스타일 + STE + Global English |
