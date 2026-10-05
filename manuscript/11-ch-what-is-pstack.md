# pstack이란 무엇인가

![/poteto-mode가 작업 요청을 BUG FIX, FEATURE, INVESTIGATION 관문으로 분기시키는 장면을 그린 일러스트](images/router.jpg)

원문: {{src:README.md}} {{src:.cursor-plugin/plugin.json}} {{src:docs/guide/README.md}}

## 한 문단 요약

pstack은 Cursor 에이전트에게 "어떻게 일할지"를 알려 주는 스킬 묶음입니다. 매니페스트의 작성자는 Lauren Tan이고, README는 1인칭으로 자신을 poteto라고 소개합니다. 플러그인 설명문은 이렇게 요약합니다. "if you want to go fast, go deep first." 빠르게 가려면 먼저 깊이 들어가라는 뜻입니다. 코드를 더 많이 쓰게 하는 도구가 아니라, 더 적게 쓰되 더 높은 품질의 코드를 쓰게 돕는 도구라는 것이 README의 요점입니다.

## 왜 만들었는가

README는 저자의 소개로 시작합니다. 저자는 Meta, Netflix, Cursor에서 수백만 줄 규모의 코드를 다뤘고, React 코어 팀에서 React Compiler를 만들고 유지보수합니다. 그런 사람이 이 도구를 만든 동기를 이렇게 적습니다.

- AI가 슬롭(slop, 조잡하게 양산된 코드)을 너무 많이 쓴다는 우려가 커지고 있고, 저자도 동의합니다.
- 슬롭 제작자 스무 명으로 이루어진 팀처럼 배포하고 싶지 않습니다. 품질 없는 처리량은 목표가 아닙니다.
- 그래서 저자가 Cursor에서 매일 코드를 배포하는 데 쓰는 스킬을 그대로 공개했습니다. 코드 줄 수를 최대화하는 것이 목표가 아니고, 오히려 반대입니다.

README가 내세우는 약속은 세 가지입니다.

| 약속 | README의 설명 |
| --- | --- |
| 더 적게, 더 좋게 | 스킬이 에이전트를 실제 엔지니어링 팀처럼 일하게 만듭니다. 목표는 코드량이 아니라 품질입니다 |
| 두려움 없는 병렬성 | 에이전트 하나를 깊이 파고들게 하고 그 결과를 믿을 수 있으면, 자신 있게 병렬화할 수 있습니다. `poteto-mode`로 에이전트 여러 개를 시작하면 각자 엄격한 엔지니어링 원칙(principle)을 적용합니다 |
| 모델을 가리지 않음 | 모든 프런티어 모델에는 강점과 약점이 있습니다. pstack은 어떤 모델과도 쓸 수 있고, 많은 스킬이 모델별 강점을 활용하려고 여러 모델을 섞는 워크플로를 씁니다 |

README는 "포크하고, 개선하고, 자기 것으로 만들라"고 권하고, PR을 환영한다고 적습니다.

## 무엇으로 이루어져 있는가

`pstack/` 디렉터리에는 다음이 있습니다.

| 구성 요소 | 내용 |
| --- | --- |
| `skills/` | 스킬 50개. 일반 스킬 26개와 `principle-*` 스킬 24개 |
| `agents/` | 서브에이전트 정의 2개: `poteto-agent`, `Comment Sicko` |
| `automations/` | 휴면 상태의 자동화 팩 `benny` |
| `docs/guide/` | 열 장으로 된 사용 안내서와 삽화 |
| `.cursor-plugin/plugin.json` | 플러그인 매니페스트 |
| `README.md`, `LICENSE` | 소개와 MIT 라이선스 |

매니페스트는 이름 `pstack`, 버전 `{{version}}`, 작성자 Lauren Tan, 라이선스 MIT, 분류 `developer-tools`를 선언하고 `skills`와 `agents` 디렉터리를 가리킵니다. 태그는 `workflow`, `principles`, `review`, `planning`입니다. 훅이나 규칙(rule) 파일 같은 자동 실행 요소는 플러그인에 들어 있지 않습니다. 모델 설정 규칙은 `/setup-pstack`을 실행할 때 사용자 쪽에 생성됩니다. 자세한 내용은 [설치와 첫 사용](setup.md)에서 다룹니다.

스킬은 하나의 디렉터리이고 그 안의 `SKILL.md`가 본문입니다. 어떤 스킬은 `references/`에 하위 프롬프트와 판단 기준을, `playbooks/`에 절차를, `scripts/`에 실행 도구를 함께 둡니다.

## 사용 방식

두 단계면 됩니다. README는 이렇게 안내합니다.

1. `/setup-pstack`을 실행하고 추론 예산(reasoning budget)을 고르고 쓸 모델을 정합니다.
2. 엄밀함이 필요한 작업을 할 때마다 `/poteto-mode`를 씁니다.

나머지 스킬은 상황에 따라 쓰는 것이고, 모드 스킬이 필요할 때 알아서 부릅니다. `/poteto-mode`는 요청을 읽고 플레이북(playbook, 작업 유형별 절차서) 중 하나를 고르고, 단계가 필요로 하는 다른 스킬을 실행합니다. 호출되면 세 가지를 합니다.

1. 작업을 플레이북과 맞춰 보고, 첫 항목이 그 플레이북의 단계(그대로 복사한 것)인 할 일 목록을 엽니다.
2. 단계가 진행되면서 필요한 스킬로 넘어갑니다.
3. 슬롭을 뺀 응답을 씁니다. 응답은 사용하는 사람과 유지보수하는 사람의 입장에서 씁니다.

`/poteto-mode`는 스티키 모드(sticky mode)이기도 합니다. 한 번 들어가면 여러 턴에 걸쳐 유지되고, 플레이북이 맞거나 작업에 엄밀함이 필요할 때 적용됩니다. 그렇지 않을 때는 방해하지 않습니다. 사용자는 언제든 그만하라고 말해 빠져나올 수 있습니다. 또 Cursor의 `/loop` 명령과 잘 어울려서, 엄밀함을 잃지 않고 에이전트를 몇 시간씩 일하게 할 수 있다고 README는 말합니다.

스킬을 직접 부르는 예도 있습니다.

```text
/how 실행 취소는 어떻게 동작하나요? 취소할 실행을 하나씩 조회하면서 N+1이 생기지는 않나요?
```

```text
/interrogate 이 PR을 리뷰해 줘.
```

## 설계 아이디어

README와 `poteto-mode`의 `SKILL.md`에서 읽히는 설계 아이디어를 정리합니다. 각각은 이후 장에서 구체적인 스킬로 다시 나옵니다.

**하나의 입구, 여러 플레이북.** 대부분의 작업은 `poteto-mode`로 들어갑니다. 플레이북은 조사, 버그 수정, 성능, 기능, 리팩터링, PR 유지, 배포처럼 작업 유형마다 있습니다. 어느 플레이북도 맞지 않는 큰 작업은 `figure-it-out`이 그 작업만의 플레이북을 새로 설계합니다.

**원칙이 결정의 근거가 된다.** `poteto-mode`는 원칙 24개의 색인을 내장하고 있고, 응답에서 결정에 영향을 준 원칙과 그 원칙이 바꾼 구체적 선택을 밝히라고 요구합니다. 원칙 하나하나는 짧은 스킬입니다. 사용자는 원칙 이름으로 에이전트를 조향할 수도 있습니다.

**깊이 파고들고 나서 만든다.** 코드가 함수 경계를 넘으면 구현 전에 `architect`로 병렬 설계 탐색을 하고, 논쟁적인 설계는 배포 전에 `interrogate`로 여러 모델이 공격합니다. 이해가 필요하면 `how`와 `why`로 먼저 조사합니다.

**위임하되 결과에 책임진다.** 서브에이전트에게 일을 나누되, 각 서브에이전트의 작업은 부모가 책임지고 diff를 직접 검토합니다. "두 번째 의견은 같은 프롬프트를 다른 모델에 준 것"이고, 두 모델이 일치하면 신호가 강하다고 봅니다.

**검증(verification)은 실제 산출물로 한다.** "컴파일된다"는 증거가 아닙니다. 버그 수정은 같은 표면에서 먼저 재현하고, 끝났다고 말하기 전에 실제 산출물(artifact)을 확인합니다.

**동의가 기본값이 아니다.** `poteto-mode`는 "아니오도 받아들일 수 있는 답"이라고 적습니다. 요청이나 접근에 대해 진짜 판단을 말하고, 필요하면 반대하거나 "이건 넣을 가치가 없다"고 말하라는 뜻입니다. 추천은 판단이지 인정이 아닙니다.

## 왜 계획 스킬이 없는가

README에는 "왜 계획 스킬이 없는가"라는 절이 있습니다. Cursor에는 이미 훌륭한 계획 모드가 있고 pstack과 잘 어울립니다. 저자는 개인적으로 계획을 믿지 않고, 최고의 명세는 코드라고 말합니다. 계획을 세우고 싶다면 `/poteto-mode`가 다루지만 기본값은 아닙니다.

## pstack에 들어 있지 않은 것

`poteto-mode`가 참조하지만 pstack이 함께 싣지 않는 것이 몇 가지 있습니다. README가 밝히는 목록입니다.

- `/deslop`과 `deslop` 스킬은 `cursor-team-kit` 플러그인에 있습니다.
- CLI와 TUI를 다루는 `control-cli`, 브라우저, Electron, 웹을 다루는 `control-ui`도 `cursor-team-kit`에 있습니다.
- `/create-skill`은 Cursor의 내장 기능입니다. Cursor에는 내장 `/babysit`도 있는데, `poteto-mode` 안에서는 PR 상태 요청에 대해 babysit 플레이북이 내장 스킬보다 우선합니다.

전체 세트를 쓰려면 pstack과 함께 `cursor-team-kit`을 설치하라고 README는 안내합니다. 이 책은 `cursor-team-kit`의 스킬을 장으로 다루지 않고, 언급이 필요한 자리에서만 그 출처를 밝힙니다.

## 스킬 지도

50개 스킬을 이 책은 다음과 같이 나눕니다. 전체 목록과 트리거 문구는 [부록의 빠른 참조표](quickref.md)에 있습니다.

| 부 | 스킬 |
| --- | --- |
| 시작하기 | `setup-pstack` |
| 진입점 | `poteto-mode` (플레이북 23개 포함) |
| 이해하기 | `how`, `why`, `teach`, `recall` |
| 설계하기 | `architect`, `arena`, `swarm`, `figure-it-out`, `principle-*` 24개 |
| 고치고 검증하기 | `tdd`, `blast-radius`, `interrogate`, `benchmark-checklist`, `create-verification-skill`, `maintain-verification-skill` |
| 글과 코드 정리 | `unslop`, `technical-writing`, `no-comments`, `typescript-best-practices` |
| 나만의 방식과 유틸리티 | `automate-me`, `reflect`, `correct`, `show-me-your-work`, `bro` |
| 자동화 | `make-bot-ui` |

수를 세면 1 + 1 + 4 + 28 + 6 + 4 + 5 + 1 = 50개입니다. 표의 설계하기 행은 일반 스킬 4개와 원칙 24개를 합쳐 28개입니다.
