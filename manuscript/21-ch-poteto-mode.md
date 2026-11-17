# poteto-mode

![대합실 전광판 아래에서 분기기를 당겨 로봇 수레를 각 관문으로 보내는 그림](images/router.jpg)

## poteto-mode {#skill-poteto-mode}

원문: {{src:skills/poteto-mode/SKILL.md}} {{src:docs/guide/02-poteto-mode.md}} {{src:docs/guide/01-setup.md}} {{src:README.md}} {{src:agents/poteto-agent.md}}

> 요청을 읽고 플레이북 하나를 골라, 필요한 스킬을 단계마다 불러 가며 엄밀하게 끝내는 진입점 스킬입니다.

### 언제 쓰는가

엄밀함이 필요한 작업을 시작할 때 씁니다. 원문의 `description`은 "poteto의 에이전트 스타일: 간결하고 상세한 응답, 신중한 서브에이전트, 슬롭을 뺀 글, 단순한 코드, 검증(verification)된 작업"이라고 하고, `poteto`, `/poteto-mode`, 이 스타일로 일해 달라는 요청을 트리거로 듭니다.

프런트매터에는 `disable-model-invocation: true`가 있습니다. 모델이 알아서 이 스킬을 부르지 않고, 사용자가 `/poteto-mode`로 부릅니다. `mode`와 `reminder` 키는 없습니다.

README는 유지 방법을 이렇게 말합니다. 작업을 치기 전에 `/` 메뉴에서 `/poteto-mode`를 고르면 Cursor가 그 메시지에 스킬을 붙입니다. `/` 메뉴에서 Option+Enter(Mac) 또는 Alt+Enter(Windows)로 Custom Mode를 켜면 모드를 나갈 때까지 매 턴 컨텍스트에 남습니다. Enter만 치면 그 메시지 하나에만 붙고 대화가 이어지면 사라집니다. Custom Mode는 Agents Window와 CLI에서 쓸 수 있습니다.

### 동작 방식

`SKILL.md` 제목 바로 아래에 한 줄이 있습니다. 함께 실린 스킬은 이 파일 기준으로 `../<name>/SKILL.md`에 있으므로, 모든 `poteto-agent` 프롬프트에 이 파일의 절대 경로를 넣으라고 합니다. 그 아래는 여섯 부분으로 이루어집니다. 위에서부터 순서대로 봅니다.

#### 1. Non-negotiables (지켜야 할 규칙)

먼저 원칙(principle) 색인이 모든 트리거의 근거라는 규칙(non-negotiable)이 있습니다. 응답에서 결정에 영향을 준 원칙과 그 원칙이 바꾼 구체적 선택을 밝혀야 하고, 그 세션에서 리프 `SKILL.md`를 읽은 원칙만 인용할 수 있습니다.

나머지 트리거는 이 절에만 있습니다. "상황"이 오면 오른쪽 스킬이나 행동으로 갑니다.

| 상황 | 하는 일 |
| --- | --- |
| 작업의 첫 메시지 | 사용자의 목표와 그것을 채우는 가장 작은 변경을 다시 말한 뒤 진행합니다. 서브에이전트 브리프, PR의 `## Why`, 최종 보고를 모두 그 목표로 엽니다 |
| Task 서브에이전트든 Project 워커든 에이전트를 시작할 때 | 킥오프의 첫 줄은 `Read <path>/worker.md before anything else.`이고, `<path>`는 이 스킬 폴더의 절대 경로입니다. 운영자의 규칙은 슬래시 명령으로만 불러오는 스킬에 있어서, 다른 길로는 다른 에이전트에게 닿지 않기 때문입니다. 킥오프의 나머지는 목표와 과업, 그리고 `poteto-agent`라면 이 파일의 절대 경로만 둡니다 |
| 무언가를 돌려서 풀 수 있는 갈림길 | 묻지 말고 `playbooks/prototype.md`대로 프로토타입을 만듭니다 |
| 코드 | 먼저 데이터 모양의 이름을 정합니다. 함수 경계를 넘으면 `architect`, 팬아웃은 `swarm`, 대결은 `arena`, 논쟁적인 설계는 `interrogate`입니다. `swarm`의 설명은 병렬 커버리지, 경주, 관문 시험(gauntlet), 탐색을 듭니다 |
| 응답을 포함한 모든 글 | `unslop`. 문서, PR 설명, 커밋 메시지는 `technical-writing` |
| 커밋 전, 리뷰 전 | 커밋 전에는 cursor-team-kit 플러그인의 `/deslop`, 리뷰 전에는 `no-comments` |
| UI, IDE, CLI를 배포할 때 | cursor-team-kit의 `control-ui`나 `control-cli` |
| 직접 측정한 숫자 | `benchmark-checklist` |
| PR 상태 | Cursor 내장 babysit 스킬이 아니라 Babysit 플레이북. 초록 스택의 랜딩은 Shipping 플레이북 |
| 봇의 리뷰 댓글 | 하나씩 그 자체의 타당성으로 판단합니다 |
| 길거나 자리를 비운 사이에 도는 작업 | `show-me-your-work` |

여기서 `deslop`, `control-ui`, `control-cli`, 내장 babysit은 pstack이 아니라 cursor-team-kit 플러그인이나 Cursor 내장 기능입니다. 킥오프 첫 줄이 가리키는 파일은 아래 [worker.md](#ref-worker) 절에서 다룹니다.

#### 2. Principles (원칙 색인)

리프 스킬을 전부 읽어야 적용할 수 있고, 항목마다 언제 적용하는지 적혀 있습니다. 각 리프는 제목을 kebab-case로 바꾼 `principle-<제목>` 스킬입니다. 하이픈은 남기고 다른 문장 부호는 뗍니다. 항목이 이름을 따로 밝히면 그 이름을 씁니다. 색인의 불릿은 제목만 두고 `principle-*`를 매 줄에 반복하지 않습니다. 원칙은 핵심(Core), 아키텍처(Architecture), 검증(Verification), 위임(Delegation), 메타(Meta) 다섯 묶음으로 나뉩니다. 24개의 내용은 [원칙 장](principles.md)에서 하나씩 다룹니다. 검증 묶음에는 측정하기 전에 적용하고, 측정한 숫자를 믿거나 보고하거나 그 숫자로 행동하기 전에 무엇이 그 숫자를 제한하는지 밝히라는 `principle-explain-the-number`가 있습니다.

#### 3. Autonomy (자율성)

- **그냥 한다.** 어떤 MCP 도구든 씁니다. 되돌릴 수 있는 작업과 외부 행동(팀 채팅, 티켓 갱신, eval 시작)은 묻지 않고 진행합니다.
- **반드시 멈춘다.** 되돌릴 수 없는 쓰기(공유 브랜치 강제 푸시, 배포, 데이터 삭제, 고객 메시지)는 사용자를 기다립니다.
- **세션 오버라이드.** "Don't stop", "going to bed", "run until done", "be fully autonomous" 같은 말은 계속 진행하라는 뜻입니다.
- **"아니오"도 답이다.** 무엇을 해도 되는지 묻거나 범위를 더하라고 하거나 접근을 보여 줄 때, 진짜 판단을 말합니다. 거절하고, 반박하고, 맞다면 "이건 넣을 가치가 없다"고 말합니다. 추천은 판단이지 동의가 아닙니다. 기본값은 동의가 아니라 솔직함입니다.

#### 4. Subagents (서브에이전트)

- 플레이북 단계 안에서 직접 띄우는 서브에이전트는 `subagent_type: "poteto-agent"`를 씁니다. `/poteto-mode`를 받은 채팅이 플레이북을 직접 돌립니다. 라우팅되는 워크플로 스킬 `interrogate`와 `swarm`은 자기 `subagent_type`을 정해 두므로 그것을 따릅니다.
- **모든 `Task` 호출의 기본값.** `run_in_background: true`, 에이전트 모드(읽기 전용은 MCP를 벗겨 냄), 맥락을 붙여 넣지 않고 파일 포인터를 넘김, 그리고 Project 워커까지 포함해 역할별 명시적 모델입니다. `/setup-pstack`은 `~/.cursor/rules/pstack-models.mdc`를 쓰고, 그 규칙(rule)의 역할별 줄은 아래 기본값과 라우팅되는 스킬(`arena`, `swarm`, `interrogate`)의 역할 모델보다 우선합니다. 줄이 없는 역할은 기본값을 유지합니다. 값이 `inherit-parent`나 `auto`인 줄은 그 역할을 부모 모델로 돌립니다. 그때는 `model`을 생략하고 `generalPurpose`를 띄웁니다. `poteto-agent`는 기본이 Opus 5.5이기 때문입니다. 코드 플레이북은 각자의 줄(`feature, refactoring`, `bug-fix`, `perf-issue`, `hillclimb`)을, 글과 판단은 `judgment and prose` 줄을, 사소한 기계적 수정은 `swarm workers` 줄을 읽습니다. 규칙에 `# defaults: 3` 줄이 없으면 옛 설정이 쓴 규칙입니다. 그 줄들을 계속 따르되, 세션마다 한 번 사용자에게 `/setup-pstack`을 다시 실행하라고 알립니다.

  | 역할 | 기본 모델 |
  | --- | --- |
  | 코드, 글, 판단 | `claude-opus-5-5-xhigh-fast` |
  | 사소한 기계적 수정 | `claude-opus-5-5-high-fast` |
  | 다양한 리뷰와 설계 패널 | `claude-fable-5-2-high`, `claude-opus-5-5-high-fast`, `gemini-4-carbon-high`에 러너 하나씩 |

- **Fable 5.2는 예외입니다.** 패널 밖에서는 사용자가 이 작업에 그 모델을 지정했거나, 같은 브리프로 돌린 Opus 5.5 xhigh 두 번이 모두 검사를 통과하지 못했을 때만 돕니다. 어느 쪽인지 말합니다. 난이도만으로는 해당하지 않습니다.
- **일에 모델을 맞춥니다.** 역할의 줄이나 기본값에서 시작해 계열은 유지하고, 그 일이 필요로 하는 강도를 정합니다. `/setup-pstack` 예산이 역할마다 시작 강도를 정합니다. 패널의 자리는 적힌 강도를 유지합니다. 그 밖의 역할은 가장 어렵거나 미묘한 일에 한 단계 올리되 xhigh까지이고, 판단에는 한 단계, 일상 일에는 두 단계 이상 내립니다. 어떤 역할도 xhigh 위로 돌지 않습니다. Opus 5.5는 언제나 `-fast` 슬러그로 돕니다. 검증은 언제나 `swarm workers` 모델로 돌고, 기본은 `claude-opus-5-5-high-fast`입니다. Gemini 자리는 그 최상위 슬러그인 `gemini-4-carbon-high` 위로 돌지 않습니다. Task 도구가 슬러그를 거부하면 그 슬러그를 다시 넘기지 않습니다. 역할의 줄이나 기본값, 부르는 스킬의 폴백, 같은 계열에서 가장 가까운 유효 슬러그 순으로 물러서고, 그래도 안 되면 `model`을 생략합니다. 그렇게 했다고 말합니다.
- 부모가 모든 서브에이전트의 작업을 책임집니다. diff를 검토하고 요약은 직접 씁니다. 두 번째 의견은 같은 프롬프트를 다른 벤더의 모델에 주는 것입니다.
- **기본은 새 서브에이전트입니다.** 수정 라운드, 후속, 재시도, 대기열의 다음 항목은 처음 브리프, 그 뒤의 모든 지시, 이전 에이전트의 보고와 브랜치를 가진 새 서브에이전트에게 줍니다. 기존 서브에이전트를 재개하는 것은 일이 그 에이전트 안에 있고 옮기기 비싼 상태를 필요로 할 때뿐입니다. 그 에이전트의 체크아웃, 커밋하지 않은 변경, 아직 돌리고 있는 프로세스가 그런 상태입니다.

#### 5. Writing the reply (응답 쓰기)

짧은 서술문으로 쓰고, 긴 줄표 문자와 연결용 콜론을 쓰지 않습니다. 사용자에게 무엇이 바뀌는지를 앞세웁니다. 모든 주장에 근거나 라벨(측정함, 추론함, 추측)을 답니다. 직접 돌릴 수 있는 확인을 사람에게 넘기지 않습니다.

#### 6. Playbooks (플레이북 고르기)

작업을 플레이북 하나에 맞추고 그 단계를 `playbooks/<제목>.md`에서 엽니다. 제목은 kebab-case로 바꿉니다. 먼저 그 단계를 할 일 목록 도구에 복사합니다. 크거나, 여러 곳에 걸치거나, 자리를 비운 사이에 도는 작업, 그리고 맞는 플레이북이 없는 작업은 `figure-it-out` 스킬로 갑니다. `figure-it-out`은 코드보다 먼저 내놓는 산출물(deliverable)이 워크플로 자체라고 말합니다.

원문은 플레이북 22개의 짧은 이름을 한 줄로 나열하고, 그 이름이 파일 이름이 됩니다. 예를 들어 Authoring a skill은 `playbooks/authoring-a-skill.md`, Worktree cleanup은 `playbooks/worktree-cleanup.md`입니다. 이 책의 절 제목은 각 파일 첫 줄의 긴 제목(Authoring or modifying a skill, Multi-phase or multi-PR plan, Worktree and simulator cleanup)을 씁니다. 22개는 이 부의 나머지 장에서 하나씩 설명하고, 언제 쓰는지는 각 절의 "언제 쓰는가"에 있습니다.

| 장 | 플레이북 |
| --- | --- |
| [작업 플레이북](playbooks-work.md) | [Investigation](playbooks-work.md#playbook-investigation), [Bug fix](playbooks-work.md#playbook-bug-fix), [Perf issue](playbooks-work.md#playbook-perf-issue), [Hillclimb](playbooks-work.md#playbook-hillclimb), [Runtime forensics](playbooks-work.md#playbook-runtime-forensics), [Trace forensics](playbooks-work.md#playbook-trace-forensics), [Feature](playbooks-work.md#playbook-feature), [Refactoring](playbooks-work.md#playbook-refactoring), [Prototype](playbooks-work.md#playbook-prototype), [Visual parity](playbooks-work.md#playbook-visual-parity), [Authoring or modifying a skill](playbooks-work.md#playbook-authoring-a-skill), [Eval](playbooks-work.md#playbook-eval) |
| [PR 플레이북](playbooks-pr.md) | [Opening a PR](playbooks-pr.md#playbook-opening-a-pr), [Babysit](playbooks-pr.md#playbook-babysit), [Shipping](playbooks-pr.md#playbook-shipping) |
| [장시간 플레이북](playbooks-long.md) | [Autonomous run](playbooks-long.md#playbook-autonomous-run), [Session pickup](playbooks-long.md#playbook-session-pickup), [Pause safely](playbooks-long.md#playbook-pause-safely), [Worktree and simulator cleanup](playbooks-long.md#playbook-worktree-cleanup), [Multi-phase or multi-PR plan](playbooks-long.md#playbook-multi-phase-plan), [Autopilot-full](playbooks-long.md#playbook-autopilot-full), [Autopilot-stack](playbooks-long.md#playbook-autopilot-stack) |

### 사용 예

**목표를 말하고 의식은 생략합니다.** 명세를 쓸 필요는 없습니다. 무엇이 잘못됐는지, 무엇을 원하는지와 에이전트의 시간을 아껴 줄 알고 있는 사실만 말합니다.

```text
/poteto-mode 재시도 뒤에 알림이 두 번 옵니다. 먼저 재현하고, 고치고, 검증해 줘.
```

이것은 Bug fix 프롬프트입니다. "먼저 재현"은 예의가 아니라 실제 제약이고 플레이북이 그것을 지킵니다. 할 일 목록에 Bug fix의 단계가 채워지는 것을 보십시오.

**프롬프트에 넣을 것.** 안내서는 유용한 프롬프트가 다섯까지 싣고, 각각이 한 문장에 들어간다고 합니다.

- **목표.** 무엇이 잘못됐는지, 무엇을 원하는지.
- **끝난 확인.** 통과하거나 실패할 수 있어야 합니다. "더 낫게 만들어"와 "한 시간 작업해"는 확인이 아닙니다.
- **보고 싶은 증명.** 실제 명령 출력, 흐름의 영상, 저장된 값, 전후 숫자를 요구합니다.
- **이미 아는 것.** 증상, 재현 단계, 로그 한 줄, 링크가 에이전트의 검색을 아낍니다.
- **실제 제약.** "먼저 재현", "아직 코드는 바꾸지 마", "동작 변경 없음", "진행하기 전에 내가 검토할게"가 각각 에이전트가 하는 일을 바꿉니다.

안내서의 다섯을 다 담은 예입니다.

```text
/poteto-mode 어제 배포 뒤 csv 내보내기가 마지막 행을 빠뜨립니다. 실패한 잡 id는 4812입니다. 먼저 재현한 뒤 고치세요. 끝은 6만 행 픽스처가 모든 행을 내보내는 것입니다. 전후 행 수를 보여 주세요.
```

빼도 되는 것은 둘입니다.

- **방법.** 무엇을 이룰지만 말하고, 에이전트가 더 나은 길을 찾을 자리를 남깁니다. 스킬 목록도 같습니다. 아래 함정을 봅니다.
- **원인의 가설, 처음에는.** 찍은 짐작은 검색을 그쪽으로 좁힙니다. 에이전트가 문제를 다시 말한 뒤에 자기 추측을 나눕니다.

시끄러운 제보, 긴 스레드나 흐린 버그에서는 다시 말하기를 첫 단계로 둡니다.

```text
/poteto-mode 이 스레드를 읽어. 밑의 문제를 평이한 영어로 네 말로 다시 말해. 아직 코드는 바꾸지 마.
```

오독은 코드가 생기기 전, 다시 말한 자리에서 드러납니다. 거기서 고치면 메시지 하나이고, 틀린 수정 하나가 아닙니다. 그 한 가지만 시키려면 [`/in-your-own-words`](setup.md#skill-in-your-own-words)입니다. 레시피는 `/in-your-own-words <long or messy ask>`입니다.

프롬프트가 맞는지 확신이 없으면 보내기 전에 [`/sharpen`](setup.md#skill-sharpen)을 칩니다.

```text
/sharpen v2 설정 형식의 마이그레이션 가이드를 써 줘.
```

에이전트는 최상위 전문가가 묻지 않은 것, 그들이 시작할 가장 날것의 자료, 방법과 도구, 사용자나 에이전트가 아닌 무엇이 결과가 맞다는 것을 보여 줄지를 말합니다. 그다음 바로 그것을 묻는 프롬프트로 다시 씁니다. 더 깊게 쓰되 더 크게 쓰지는 않습니다. 다시 쓴 프롬프트는 실험으로 가릴 수 있는 선택을 에이전트가 프로토타입하고 관찰한 것으로 한 선택지를 추천하게 하며, 제품과 취향의 선택은 사용자에게 남깁니다. 과업은 하지 않습니다. 안내서는 다시 쓴 것을 읽고, 맞으면 보내라고 합니다. 예는 `/poteto-mode`입니다.

대화에 맥락이 이미 있으면 프롬프트는 거의 없어도 됩니다. 아래는 모두 충분합니다.

```text
/poteto-mode do it
```

```text
continue
```

```text
keep going until done
```

짧아도 되는 이유는 구조는 플레이북이 갖고, Custom Mode가 `/poteto-mode`를 매 턴 컨텍스트에 두기 때문입니다. 켜는 방법은 [설치와 첫 사용](setup.md)에 있습니다. 말은 의도를 싣고 스킬은 엄밀함을 싣습니다.

**작업을 바꿀 때는 "new task"라고 말합니다.** 긴 채팅에는 지난 작업의 맥락이 쌓입니다. 주제를 바꿀 때는 그렇게 말합니다.

```text
/poteto-mode new task. 로그아웃 뒤에도 캐시 항목이 남는 이유를 알아내 줘. 아직 코드는 바꾸지 마.
```

"new task"는 이전 플레이북을 이어 가지 말고 다시 맞추라는 뜻이고, "코드는 바꾸지 마"는 이 작업을 Investigation에 못 박습니다. 이 두 표현이 없으면 Feature 중간에 있던 모드는 질문을 다음 기능 단계로 취급하기 쉽습니다.

**병렬 작업에는 각자의 머신을 줍니다.** 한 컴퓨터의 한 저장소에 에이전트 여러 개를 돌리면 작업 트리와 포트와 빌드 출력을 두고 다툽니다. 안내서가 가장 깨끗한 격리로 드는 것은 [클라우드 서브에이전트](https://cursor.com/docs/subagents#cloud-subagents)입니다. 각자 VM과 브랜치를 받아 의존성을 설치하고 앱을 돌리고 결과를 영상으로 남기며 사용자 머신을 건드리지 않습니다. 작업 앞에 `/in-cloud`를 치거나, 부모 채팅에 클라우드 서브에이전트에게 넘기라고 합니다.

로컬에 둬야 하면 처음부터 워크트리를 요청하십시오.

```text
/poteto-mode new task. <base>에서 새 워크트리로 분기해서 거기에 파서 변경을 옮겨 줘.
```

작업마다 브랜치와 워크트리가 따로 있으면 서로의 파일을 덮어쓰지 않습니다. 워크트리는 디스크와 머신 자원을 쓰므로 노트북은 한 손에 꼽을 만큼만 돌립니다. Opening a PR 플레이북은 코드 변경에서 이미 워크트리에서 일하므로, 특정 기준(base)이나 위치가 중요할 때만 말하면 됩니다. 워크트리는 쌓입니다. 디스크가 부족하면 이렇게 묻습니다.

```text
/poteto-mode 디스크를 뭐가 먹고 있어? 지워도 안전한 워크트리는 정리해 줘.
```

**자리를 뜰 때.** 무엇이 끝인지 말하고 떠납니다. 나중에 검토할 작업은 `figure-it-out`으로 라우팅되고 `show-me-your-work` 결정 기록이 붙습니다. 자세한 계약은 [밤새 돌리기](overnight.md)에서 다룹니다.

### 함정과 주의점

- **프롬프트에 스킬을 나열하지 않습니다.** "/architect, 그다음 /arena, 그다음 /interrogate를 써 줘"처럼 쓰면 플레이북이 이미 정해 둔 순서를 뒤섞거나 단계를 빠뜨리기 쉽습니다. 특정 선택을 덮어쓰고 싶을 때만 스킬 이름을 씁니다.
- 원칙(principle)을 인용하려면 그 세션에서 리프 `SKILL.md`를 읽어야 합니다. 읽지 않은 원칙을 이름만 들먹이는 것은 규칙(non-negotiable) 위반입니다.
- 서브에이전트의 "끝났다"는 보고를 그대로 전달하지 않습니다. 부모가 diff를 검토하고 직접 요약합니다.
- 다른 에이전트를 시작하는 킥오프에 `worker.md` 첫 줄을 빼지 않습니다. 빼면 운영자의 규칙이 그 에이전트에게 닿지 않습니다.

### 관련 스킬

플레이북이 부르는 스킬은 [이해하기](why.md#skill-why), [설계하기](architect.md#skill-architect), [고치고 검증하기](tdd-blast.md#skill-tdd) 부에서 다룹니다. 모델 설정은 [`setup-pstack`](setup.md#skill-setup-pstack)에서, 원칙은 [원칙 장](principles.md)에서 다룹니다. 어느 스킬이나 플레이북이 맞는지 모르겠으면 [`poteto-help`](setup.md#skill-poteto-help)가 이 장을 가리킵니다. 일을 시작하기 전에 목표와 문제를 다시 듣기는 [`in-your-own-words`](setup.md#skill-in-your-own-words)입니다. 보내기 전에 프롬프트를 다시 쓰는 것은 [`sharpen`](setup.md#skill-sharpen)입니다.

## worker.md {#ref-worker}

원문: {{src:skills/poteto-mode/worker.md}}

> 실행이 일해 주는 사람, 곧 운영자의 규칙입니다. `poteto-mode`가 시작하는 모든 에이전트가 킥오프 첫 줄에서 이 파일을 읽습니다.

`poteto-mode`의 규칙은 슬래시 명령으로 불러야 읽히므로, 그 명령 없이 시작된 에이전트에게는 닿지 않습니다. 그래서 Task 서브에이전트든 Project 워커든 킥오프의 첫 줄이 `Read <path>/worker.md before anything else.`입니다. 이 규칙들은 모든 과업에 적용되고, 킥오프가 그중 하나를 덮으려면 그렇다고 분명히 말해야 합니다.

- **다른 에이전트를 시작할 때.** 그 킥오프의 첫 줄은 `Read <path>/worker.md before anything else.`이고, `<path>`는 이 파일이 있는 폴더의 절대 경로입니다.
- **기준.** 킥오프에 적힌 기준(bar)이 기준의 전부입니다. 그 위에 검사, 관문(gate), 승인, 리뷰 라운드를 더하지 않습니다. 기준이 적혀 있지 않으면 변경이 그 바탕보다 나쁘지 않고 자기 테스트를 통과하면 됩니다.
- **막기.** 이 헤드에서 실패하는 실행이나 사용자가 겪을 버그가 있을 때만 붙잡거나 막습니다. 바탕이 이미 가진 문제는 한 줄로 보고합니다.
- **질문.** 사람에게 질문을 보여 주는 도구를 부르지 않습니다. 되돌릴 수 있는 선택은 직접 하고, 무엇을 왜 골랐는지 말합니다.
- **멈춤.** 배포, 데이터 삭제, 공유 브랜치 강제 푸시, 실행 밖의 사람에게 보내는 메시지 앞에서만 멈춥니다.
- **PR.** 모든 PR을 초안이 아닌 리뷰 준비 상태로 엽니다. 제목은 `type(scope): subject`입니다. 본문은 40줄 이하이고, `##` 제목 Why, What changed, Scope, Tradeoffs, Blast Radius, Verification을 이 순서로 두며 빈 절은 뺍니다.
- **증거.** 증거 로그, 실행 이력, 긴 표는 파일이나 PR 댓글에 두고 링크합니다.

PR 규칙은 [Opening a PR](playbooks-pr.md#playbook-opening-a-pr) 플레이북과 같은 형식입니다.

## poteto-agent {#agent-poteto-agent}

원문: {{src:agents/poteto-agent.md}}

> `/poteto-mode` 실행 중에 띄우는 위임 서브에이전트입니다. 플레이북 러너가 아닙니다.

pstack은 실행 중 코드를 쓰거나 돕는 위임용 서브에이전트를 함께 싣습니다. `/poteto-mode`를 받은 채팅이 플레이북과 할 일 목록과 모든 `Task` 호출을 소유하고, `poteto-agent`는 그 위임 하나입니다. 플레이북 자체를 돌리려고 이 에이전트를 띄우지 않습니다. 부모 에이전트가 `subagent_type: "poteto-agent"`로 띄웁니다. 정의 파일은 짧습니다. 프런트매터의 `description`은 이 에이전트가 `/poteto-mode` 실행 중의 위임이며 러너가 아니고, 새 작업마다 새 `poteto-agent`를 띄우고, 재개는 poteto-mode의 Subagents 절이 이름 붙인 좁은 경우에만 하라고 말합니다. 그리고 `generalPurpose`로 바꿔 치면 읽기 단계를 건너뛰어 스타일이 어긋난다고 경고합니다. `is_background: true`이고 `model: claude-opus-5-5-xhigh-fast`입니다. 이 기본 모델 때문에 `poteto-mode`의 Subagents 절은 역할의 줄이 `inherit-parent`나 `auto`이면 `model`을 생략하고 `generalPurpose`를 띄우라고 합니다. 본문은 이렇습니다. `/poteto-mode`를 받은 채팅이 플레이북과 할 일 목록과 모든 `Task` 호출을 소유하고 이 에이전트는 그 위임 하나이며, 어떤 작업이든 시작하기 전에 `poteto-mode`의 `SKILL.md`를 인라인 원칙 색인까지 전부 읽고, 원칙을 적용할 때마다 리프 `principle-*` 스킬로 들어가라는 것입니다. `SKILL.md`를 읽을 때는 부모가 준 절대 경로를 씁니다.

경로가 없으면, 다른 어떤 일보다 먼저 `~/.cursor/plugins/`에서 경로가 `skills/poteto-mode/SKILL.md`로 끝나는 파일을 찾습니다. 둘 이상이 맞으면 `.cursor-plugin/plugin.json`의 `version`이 가장 높은 사본을 씁니다. 스킬 목록에 이 스킬이 없다고 해서 pstack이 없는 것은 아닙니다. 그런 파일이 없으면 멈추고 부모에게 말합니다.

**해설 (이 책의 해석, 원본에 없음).** 프런트매터의 경고와 Subagents 절의 지시는 맞서지 않습니다. 부모 모델로 돌려야 하는 역할만 `generalPurpose`로 가고, 그 경우에는 프런트매터가 경고한 대로 `poteto-mode`를 읽는 단계가 빠집니다.

같은 저장소의 다른 서브에이전트 `Comment Sicko`는 [코드 위생 장](code-hygiene.md#agent-comment-sicko)에서 다룹니다.
