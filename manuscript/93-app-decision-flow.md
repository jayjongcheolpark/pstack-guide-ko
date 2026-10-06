# 스킬 선택 흐름도

원문: {{src:skills/poteto-mode/SKILL.md}} {{src:docs/guide/02-poteto-mode.md}} {{src:docs/guide/04-design.md}} {{src:skills/poteto-help/SKILL.md}}

어떤 스킬을 써야 할지 모를 때 위에서부터 질문에 답하며 내려갑니다. 대부분은 첫 질문에서 끝납니다. 원문이 강조하듯 스킬을 손으로 나열하지 않아도 `poteto-mode`가 플레이북을 고르고 필요한 스킬을 부릅니다. 이 흐름도는 `poteto-mode`가 하는 선택을 사람이 따라가 볼 수 있게 풀어 쓴 것입니다. Cursor 안에서 막혔거나 어느 스킬이 맞는지 모르겠으면 [`/poteto-help`](setup.md#skill-poteto-help)를 질문과 함께 칩니다. 이 질문을 대신 묻고 보낼 프롬프트를 주며, 칠 때만 돕니다.

## 1단계: 그냥 `poteto-mode`로 시작해도 되는가

**사소하지 않은 작업이고 엄밀함이 필요하다면 `/poteto-mode`로 목표와 확인 방법을 말합니다.** 이것이 기본 답입니다. 프롬프트에 스킬 이름을 나열하지 않습니다.

```text
/poteto-mode 내보내기가 재시도 중간에 중복 행을 씁니다. 먼저 재현하고, 고치고, 검증해 줘.
```

플레이북과 스킬을 직접 고르고 싶다면 아래로 내려갑니다.

## 2단계: 무엇을 하려는가

**코드를 이해하고 싶다.**

| 질문 | 스킬 |
| --- | --- |
| 이것이 어떻게 동작하는가, 어느 계층이나 패키지가 소유해야 하는가 | [`how`](how.md#skill-how) |
| 왜 이렇게 만들었는가, 이 임계값은 어디서 왔는가 | [`why`](why.md#skill-why) |
| 요약이 아니라 실제로 이해하고 싶다, 평이하게 풀어서 설명해 줬으면 한다 | [`teach`](teach-recall.md#skill-teach) |
| 내 최근 작업 맥락을 되살리고 싶다 | [`recall`](teach-recall.md#skill-recall) |
| 특정 채팅 하나를 이어받고 싶다 | [Session pickup](playbooks-long.md#playbook-session-pickup) |
| 작은 diff가 다른 곳을 깨뜨릴까 걱정된다 | [`blast-radius`](tdd-blast.md#skill-blast-radius) |
| 읽기 전용으로 질문에 답만 받고 싶다 | [Investigation](playbooks-work.md#playbook-investigation) |
| 방금 답이 무슨 말인지 모르겠다 | [`bro`](utility.md#skill-bro) |

**설계하고 싶다.**

| 상황 | 스킬 |
| --- | --- |
| 함수 경계를 넘는 코드를 쓰기 전에 타입과 모듈 모양을 정하고 싶다 | [`architect`](architect.md#skill-architect) (`arena`를 함께 씀) |
| 같은 지시에 여러 시도를 돌려 좋은 부분을 합치고 싶다 (이름, 형식, 알고리즘) | [`arena`](arena-swarm.md#skill-arena) |
| 조각을 나눠 커버하거나 같은 지시로 경주시키고 싶다 | [`swarm`](arena-swarm.md#skill-swarm) |
| 맞는 플레이북이 없는 큰 마이그레이션이거나 자리를 뜨고 나중에 믿어야 한다 | [`figure-it-out`](arena-swarm.md#skill-figure-it-out) |
| 며칠에 걸친 프로그램을 조정자 한 명에게 맡기고 싶다 | [Orchestrate](playbooks-long.md#playbook-orchestrate) |
| 새 요구를 기존 설계에 통합해야 한다 | [`principle-redesign-from-first-principles`](principles.md#skill-principle-redesign-from-first-principles) |
| 여러 단계나 여러 PR에 걸친 작업의 계획서가 필요하다 | [Multi-phase plan](playbooks-long.md#playbook-multi-phase-plan) |
| 결정을 위한 일회용 스케치가 필요하다 | [Prototype](playbooks-work.md#playbook-prototype) |

**만들고 고치고 싶다.**

| 작업 | 플레이북 |
| --- | --- |
| 결함이 보고되었다 | [Bug fix](playbooks-work.md#playbook-bug-fix) (값싼 테스트 경로가 있으면 [`tdd`](tdd-blast.md#skill-tdd)) |
| 측정된 느림이 있다 | [Perf issue](playbooks-work.md#playbook-perf-issue) |
| 지표 하나를 목표까지 끌어올리고 싶다 | [Hillclimb](playbooks-work.md#playbook-hillclimb) |
| 실행 중인 프로세스의 누수나 스핀을 진단하고 싶다 | [Runtime forensics](playbooks-work.md#playbook-runtime-forensics) |
| 이미 캡처된 트레이스나 힙 스냅숏을 진단하고 싶다 | [Trace forensics](playbooks-work.md#playbook-trace-forensics) |
| 새 기능이나 바뀐 동작 | [Feature](playbooks-work.md#playbook-feature) |
| 구조만 바꾸고 동작은 그대로 | [Refactoring](playbooks-work.md#playbook-refactoring) |
| 픽셀 단위로 두 UI를 일치시키고 싶다 | [Visual parity](playbooks-work.md#playbook-visual-parity) |
| `SKILL.md`를 쓰거나 고친다 | [Authoring or modifying a skill](playbooks-work.md#playbook-authoring-a-skill) |
| 스킬이나 프롬프트 변경의 영향을 시험하고 싶다 | [Eval](playbooks-work.md#playbook-eval) |

**검증(verification)하고 싶다.**

| 상황 | 스킬 |
| --- | --- |
| diff를 여러 모델이 깨뜨려 보게 하고 싶다 | [`interrogate`](interrogate.md#skill-interrogate) |
| 프로젝트에 앱을 구동해 증명할 방법이 없다 | [`create-verification-skill`](verification.md#skill-create-verification-skill) |
| 검증 스킬의 기능 지도가 낡았다 | [`maintain-verification-skill`](verification.md#skill-maintain-verification-skill) |
| 끝났다고 선언하기 전이다 | [`principle-prove-it-works`](principles.md#skill-principle-prove-it-works) |
| 테스트를 쓰거나 남기려 한다 | [`principle-test-behavior-not-implementation`](principles.md#skill-principle-test-behavior-not-implementation) |
| 측정한 숫자를 믿거나 보고하거나 그 숫자로 행동하기 전이다 | [`benchmark-checklist`](verification.md#skill-benchmark-checklist), [`principle-explain-the-number`](principles.md#skill-principle-explain-the-number) |

**PR을 다루고 싶다.**

| 상황 | 플레이북 |
| --- | --- |
| PR을 열 때 | [Opening a PR](playbooks-pr.md#playbook-opening-a-pr) |
| PR 상태를 묻거나 병합 준비까지 끌고 가고 싶다 | [Babysit](playbooks-pr.md#playbook-babysit) |
| 초록불 스택을 병합하고 싶다 | [Shipping](playbooks-pr.md#playbook-shipping) |
| 독립된 PR 대기열을 병합까지 자율로 돌리고 싶다 | [Autopilot-full](playbooks-long.md#playbook-autopilot-full) |
| 병합 없이 리뷰할 스택만 만들어 두고 싶다 | [Autopilot-stack](playbooks-long.md#playbook-autopilot-stack) |
| 봇의 리뷰 댓글을 분류해야 한다 | [Bugbot 분류 기준](playbooks-pr.md#ref-bugbot-triage) |

**글과 코드를 다듬고 싶다.**

| 대상 | 스킬 |
| --- | --- |
| 글에서 AI의 티를 걷어 내고 싶다 | [`unslop`](writing.md#skill-unslop) |
| 문서, RFC, README, PR 설명, 커밋 메시지를 쓰거나 리뷰한다 | [`technical-writing`](writing.md#skill-technical-writing) |
| 리뷰 전에 주석을 정리하고 싶다 | [`no-comments`](code-hygiene.md#skill-no-comments) |
| TypeScript 파일을 읽거나 편집한다 | [`typescript-best-practices`](code-hygiene.md#skill-typescript-best-practices) (`/typescript-best-practices`를 직접 침) |
| 코드의 슬롭(불필요한 방어, 죽은 경로)을 걷어 내고 싶다 | cursor-team-kit의 `/deslop` (이 책의 범위 밖) |

**오래 걸리거나 자리를 뜨는 작업이다.**

| 상황 | 스킬 |
| --- | --- |
| 끝 조건이 있는 작업 하나를 멈추지 않고 돌리고 싶다 | [Autonomous run](playbooks-long.md#playbook-autonomous-run) |
| 결정 기록을 감사할 수 있게 남기고 싶다 | [`show-me-your-work`](personal.md#skill-show-me-your-work) |
| 작업을 안전하게 멈추고 나중에 이어 가고 싶다 | [Pause safely](playbooks-long.md#playbook-pause-safely) |
| 디스크가 부족하다 | [Worktree and simulator cleanup](playbooks-long.md#playbook-worktree-cleanup) |

**나만의 방식과 설정.**

| 하고 싶은 것 | 스킬 |
| --- | --- |
| pstack이 낯설거나 어느 스킬이 맞는지 모르겠다 | [`poteto-help`](setup.md#skill-poteto-help) |
| 쓸 모델을 정하고 싶다 | [`setup-pstack`](setup.md#skill-setup-pstack) |
| 내 작업 방식에서 나만의 모드 스킬을 만들고 싶다 | [`automate-me`](personal.md#skill-automate-me) |
| 긴 작업의 교훈을 스킬 수정으로 남기고 싶다 | [`reflect`](personal.md#skill-reflect) |
| 에이전트가 같은 실수를 되풀이한다 | [`correct`](personal.md#skill-correct) |
| 슬랙 이슈 제보를 자동으로 분류하고 재현하고 싶다 | [benny 자동화 팩](benny.md#automation-benny) |
| 웹훅으로 봇을 깨우는 버튼 UI가 필요하다 | [`make-bot-ui`](benny.md#skill-make-bot-ui) |

## 3단계: 어느 정도의 설계 작업이 알맞은가

안내서가 제시하는 대략의 사다리입니다. 대부분의 변경은 이 중 아무것도 필요 없고, `/poteto-mode`가 이 사다리를 이미 적용합니다. 함수 경계를 넘는 작업은 스스로 `/architect`를 부릅니다. 기본보다 더 많은 또는 더 적은 검증을 원할 때만 직접 부릅니다.

| 상황 | 쓸 것 |
| --- | --- |
| 작고 끝난 변경이 미덥지 않다 | `interrogate`만 |
| 함수 경계를 넘거나 소유권을 옮긴다 | `architect` (`arena`가 함께 옴) |
| 독립된 시도가 도움이 될 단독 결정(이름, 형식, 알고리즘) | `arena` 직접 |
| 커버리지 행렬, 병렬 검사 모음, 선언된 팔이 있는 경주 | `swarm` |
| 논쟁적이고 되돌리기 비싼 설계 | `architect`, 그다음 배포 전 `interrogate` |

## 4단계: 하지 말아야 할 것

- 스킬 이름을 순서대로 프롬프트에 나열하지 않습니다.
- 커버리지에 `arena`를 쓰지 않습니다.
- 끝 조건이 없는 "몇 시간 동안"으로 자리를 뜨지 않습니다.
- 병렬 에이전트를 한 워크트리에서 돌리지 않습니다.
