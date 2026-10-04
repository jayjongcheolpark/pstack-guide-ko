# 용어집

이 책이 쓰는 용어의 표기를 정합니다. 집필할 때 이 표를 기준으로 삼았고, 앞으로 원고를 더할 때도 같은 표기를 씁니다. 영어 용어는 본문에 처음 나올 때 한국어 풀이를 붙이고, 그 뒤로는 아래 표기를 씁니다. 한국어 단어 하나가 영어 용어 여럿을 옮긴 곳은 먼저 나오는 표에 따로 모았습니다. 스킬 이름, 명령어, 파일 이름, 식별자는 번역하지 않고 원문 그대로 씁니다.

## 일대일로 옮겨지지 않는 용어 {#terms-not-one-to-one}

이 표의 한국어 단어는 원문의 영어 용어와 일대일로 맞지 않습니다. 한 단어가 영어 용어 둘 이상을 옮겼거나 원문에 없는 낱말로 옮긴 곳이 있어서, 본문에서는 `한국어(영어)` 꼴로 영어를 붙였습니다. "처음 표기하는 장"은 그 짝을 처음 붙인 장의 슬러그이고, `tools/check.mjs`가 검사합니다.

| 한국어 | 영어 | 처음 표기하는 장 | 구분이 필요한 곳과 예 |
| --- | --- | --- | --- |
| 원칙 | principle | colophon | `principle-*` 스킬 24개는 "principle" 스킬이고, `poteto-mode`의 Principles 절(원칙 색인)은 "principles"입니다. 그 밖의 뜻은 표 아래에 적었습니다. 원문은 원칙의 내용을 "rule"이라 부릅니다. 예: `prove-it-works` 원칙(principle) |
| 규칙 | rule | what-is-pstack | 원문이 "rule"이라 부르는 것입니다. 원칙 스킬이 담은 rule, Cursor의 rule 파일(`pstack-models.mdc`), lint rule, `unslop`의 번호 붙은 rule, patch-id rule이 모두 여기에 듭니다. 원칙(principle)과 함께 나오는 곳에서는 둘을 나란히 적었습니다. 예: 원칙(principle)이 가리키는 규칙(rule) |
| 규칙 | non-negotiable | poteto-mode | `poteto-mode`의 Non-negotiables 절을 이 책이 규칙으로 옮긴 곳입니다. 원문에 rule이라는 말이 없는 다른 곳은 규칙(Autonomy section), 규칙(Stack safety), 규칙(mandatory), 규칙(mapping), 규칙(bucket)처럼 원문의 절 이름이나 낱말을 붙였습니다. 예: 규칙(non-negotiable) 위반 |
| 기준 | criteria | playbooks-work | 채점하거나 받아들이는 조건입니다. rubric의 criteria, acceptance criteria, success criteria. 예: 성공 기준(criteria) |
| 기준 | bar | playbooks-work | 넘어야 하는 문턱입니다. verification bar, approval bar, "a high bar". 예: 검증 기준(bar) |
| 기준 | standard | interrogate | 엄격하게 적용하는 표준입니다. code-quality lens의 "strict standard", `technical-writing`의 "layered standard". 예: 층화된 기준(standard) |
| 기준 | rubric | playbooks-pr | 판정하는 틀입니다. Bugbot triage의 Decision rubric. 채점용 루브릭(rubric)과 같은 낱말입니다. 예: Bugbot 분류 기준(rubric) |
| 기준 | base | poteto-mode | 브랜치를 따는 바탕입니다. 워크트리를 만들 때의 base이고, `arena`의 기준안도 base입니다. 예: 특정 기준(base) |
| 기준 | baseline | verification | 변경 전에 잡아 두는 비교 대상입니다. 기능 지도의 baseline preconditions. 기준선은 baseline을 옮긴 합성어입니다. 예: 기준(baseline) 사전 조건 |
| 검증 | verification | howto | 실제 산출물로 결과를 확인하는 일입니다. verify, verification, verified. 예: 검증(verification) 스킬 |
| 검증 | validation | setup | 입력이나 설정이 유효한지 따지는 일입니다. `boundary-discipline`이 경계에 두라는 validation, `setup-pstack`의 Validate 단계. 두 뜻이 한 장에 함께 나오면 뜻이 바뀌는 곳마다 영어를 붙였습니다. 예: 경계 검증(validation) |
| 검증기 | validator | playbooks-work | 값이 유효한지 따지는 코드입니다. `subtract-before-you-add`가 지우라는 redundant validators, SKILL.md validator. 예: 중복 검증기(validator) |
| 검증기 | verifier | playbooks-long | 결과를 확인하는 쪽입니다. `autonomous-run`의 "flaky verifiers". 예: 불안정한 검증기(verifier) |
| 뼈대 | scaffold | playbooks-long | 뒤따르는 작업을 돕는 기반입니다. `foundational-thinking`의 "scaffold first", 임시 scaffolding. 예: 뼈대(scaffold) 먼저 |
| 뼈대 | skeleton | playbooks-work | 채워 넣는 틀입니다. multi-phase plan의 skeleton, eval의 project skeleton. 예: 계획서 뼈대(skeleton) |
| 관문 | gate | poteto-mode | gate입니다. 사람이 정하는 지점과 통과해야 나아가는 검사 둘 다 gate입니다. 예: 회귀 관문(gate) |
| 게이트 | gate | playbooks-work | 같은 gate를 소리 나는 대로 적은 말입니다. 기능 게이트처럼 코드 안의 분기 조건을 가리키거나 병합 사유를 가리킬 때 씁니다. 예: 기능 게이트(gate) |
| 관문 시험 | gauntlet | poteto-mode | `swarm`의 gauntlet입니다. gate와는 다른 낱말입니다. 예: 관문 시험(gauntlet) |
| 지침 | guideline | personal | `create-skill`의 writing guidelines입니다. 예: 글쓰기 지침(guideline) |
| 지침 | guide | why | epistemics 문서의 phrasing guide입니다. 예: 표현 지침(guide) |
| 지침 | instruction | principles | "instructions and conventions"의 instructions입니다. 이 책이 지시라고도 옮기는 같은 낱말입니다. 예: 지침(instruction)과 관례 |
| 절차 | procedure | writing | 글자 그대로 따르는 단계입니다. `technical-writing`의 procedure. 예: 절차(procedure) 안의 "simply" |
| 절차 | playbook | design | 이 책이 playbook을 "절차"로 옮긴 곳입니다. `figure-it-out`이 설계하는 것은 절차 자체, 곧 playbook입니다. 예: 큰 작업의 절차(playbook) |
| 규약 | contract | verification | 기능 지도의 "Feature entry contract"입니다. 예: 기능 항목 규약(contract) |
| 규약 | shape | verification | 원문이 "Follow the shape in ..."이라 한 곳을 이 책이 규약으로 옮겼습니다. 예: 규약(shape) |
| 산출물 | artifact | what-is-pstack | 에이전트가 만들거나 확인하는 파일, 로그, 프로파일 같은 실물입니다. "verify against the real artifact". 산출물의 세 영어 낱말은 뜻이 가까워서 장마다 처음 나올 때만 붙였습니다. 예: 실제 산출물(artifact) |
| 산출물 | deliverable | poteto-mode | 작업이 끝나면 내놓는 결과입니다. "The deliverable is a synthesized verdict". 예: 산출물(deliverable) |
| 산출물 | output | personal | 스킬이 내는 출력입니다. `automate-me`의 "The output is one -mode skill". 예: 산출물(output) |
| 예시 | example | playbooks-pr | 원문에 있는 예입니다. "Example signal", `*.example.yaml`. 이 책의 저자가 만든 것은 첫 줄에 라벨이 붙은 예시(worked example)로 따로 표시합니다. 예: 예시(example) 신호 |

**원칙의 그 밖의 뜻.** `interrogate`의 리드 판단 틀에 있는 Filtering Principles(리드가 발견을 거르는 원칙), `reflect` 리뷰어가 적는 "Principle:" 항목(세션에서 일반화한 배움 한 문장), `automate-me`의 "principles cited"와 README의 "engineering principles"(스킬이 아닌 일반적인 원칙)입니다. 이때도 영어는 모두 principle이라 무엇을 가리키는지는 문맥으로 가립니다.

## pstack의 구성 개념

| 영어 | 이 책의 표기 | 설명 |
| --- | --- | --- |
| skill | 스킬 | `SKILL.md`를 가진 디렉터리 하나. 에이전트가 따르는 워크플로 문서 |
| plugin | 플러그인 | 스킬, 에이전트를 묶어 설치하는 단위. pstack은 `/add-plugin pstack`으로 설치 |
| playbook | 플레이북 | `poteto-mode`가 작업 유형별로 고르는 절차서. 23개 |
| principle | 원칙 | `principle-*` 스킬 하나. 24개. 다른 뜻은 위 표에 있음 |
| mode / sticky mode | 모드 / 스티키 모드 | 한 번 켜면 여러 턴 동안 유지되는 스킬(`poteto-mode`) |
| agent / subagent | 에이전트 / 서브에이전트 | 작업하는 모델 인스턴스 / 부모가 띄워 일을 맡기는 에이전트 |
| harness | 하니스 | 앱을 구동해 검사하거나 지표를 재는 테스트 도구 |
| role | 역할 | 자기 모델 선택을 가진 위임 작업 단위(`arena runners` 등) |
| panel | 패널 | 다중 모델 스킬이 쓰는 서로 다른 모델의 묶음. 기본은 opus, sol, grok |
| model slug | 모델 슬러그 | 모델을 가리키는 식별 문자열(`claude-opus-5-5-max` 등) |
| reasoning budget / effort | 추론 예산 / 추론 강도 | `/setup-pstack`이 정하는 unlimited, large, medium, small과 모델 이름의 `max`, `xhigh` 같은 등급 |
| rule file | 규칙 파일 | `~/.cursor/rules/pstack-models.mdc`. 역할별 모델을 정하는 항상 적용 규칙 |
| inherit-parent / auto | inherit-parent / auto | 모델 필드를 생략해 서브에이전트가 부모 모델을 쓰게 하는 별칭 |
| control skill | control 스킬 | UI, CLI를 구동해 증명하는 스킬. cursor-team-kit의 `control-cli`, `control-ui` |
| cursor-team-kit | cursor-team-kit | pstack과 별개인 Cursor 플러그인. `deslop` 등이 여기 있음 |
| automation | 자동화 | 외부 신호(슬랙 제보 등)에 반응해 도는 Cursor 자동화. `automations/benny` |

## 작업 흐름 개념

| 영어 | 이 책의 표기 | 설명 |
| --- | --- | --- |
| fan-out | 팬아웃 | 작업을 서브에이전트 여러 개로 나눠 병렬로 돌림 |
| worker | 작업자 | `swarm`이나 팬아웃에서 조각을 맡는 서브에이전트 |
| runner | 러너 | `arena`, `architect`에서 후보를 만드는 서브에이전트 |
| explorer / explainer | 탐색자 / 설명자 | `how`의 서브에이전트. 사실을 모으는 쪽 / 설명을 쓰는 쪽 |
| investigator / synthesizer | 조사자 / 종합자 | `why`, `reflect`의 서브에이전트. 증거를 모으는 쪽 / 종합하는 쪽 |
| reviewer / judge | 리뷰어 / 심사자 | `interrogate`의 리뷰어. `arena`의 교차 심사자 |
| cross-judge | 교차 심사 | 후보와 다른 모델 계열의 심사자가 루브릭으로 채점 |
| rubric | 루브릭 | 채점 기준 3~6개 |
| candidate / base / graft | 후보 / 기준안 / 이식 | `arena`에서 후보를 만들고, 하나를 기준으로 고르고, 나머지의 좋은 부분을 옮겨 붙임 |
| race | 경주 | 같은 지시로 작업자 여럿을 돌리고 선언한 규칙(first pass, rank all, best-of)으로 고름 |
| slice | 조각 | `swarm`이 나누는 독립된 작업 단위 |
| worktree | 워크트리 | 같은 저장소의 브랜치를 별도 디렉터리로 체크아웃한 것. 병렬 작업의 격리 단위 |
| stack | 스택 | 부모 브랜치를 베이스로 하는 PR의 사슬. 루트 PR만 트렁크를 대상으로 함 |
| trunk | 트렁크 | 기본 브랜치(main) |
| merge frontier | 병합 프런티어 | 스택에서 가장 낮은 미병합 PR |
| merge-ready | 병합 준비 | 포지가 PR을 병합할 수 있다고 동의하는 상태 |
| babysit | babysit | PR을 병합 준비까지 끌고 가는 일. 플레이북 이름이라 영어 그대로 |
| forge | 포지 | PR을 다루는 서비스나 도구(GitHub의 `gh`, `origin` 등) |
| verdict | 판정 | 검증자나 리뷰어가 내린 결과(`PASS`, `PASS+NOTES`, `FAIL` 등) |
| patch-id | patch-id | `git patch-id`. 패치 내용의 안정적인 식별자. 리베이스로 SHA가 바뀌어도 같은 값 |
| todo list | 할 일 목록 | 플레이북 단계를 그대로 복사해 여는 에이전트의 작업 목록 |
| throughput checkpoint | 처리량 점검표 | Feature 플레이북 3단계의 네 항목(blocking first steps 등) |
| decision trail / log | 결정 기록 | `show-me-your-work`가 남기는 TSV |
| operator | 운영자 | 자율 플레이북을 부리는 사람 |
| coordinator | 조정자 | Orchestrate에서 브리프를 쓰고 대기열을 비우는 채팅 |
| brief | 브리프 | 에이전트에게 주는 프롬프트. GOAL, SCOPE 등 필드가 있음 |
| ledger | 장부 | Orchestrate의 검증 판정 기록(`ledger.tsv`) |
| gate | 관문 | 사람의 결정이 필요한 지점이거나 검증을 통과해야 나아가는 조건 |

## 품질과 검증 개념

| 영어 | 이 책의 표기 | 설명 |
| --- | --- | --- |
| slop | 슬롭 | AI가 양산한 조잡한 코드나 글 |
| verification / proof | 검증 / 증명 | 실제 산출물에서 확인하는 것. "컴파일된다"는 아님 |
| evidence | 증거 | 결과를 뒷받침하는 파일, 로그, 스크린숏, SHA 같은 포인터 |
| feature map | 기능 지도 | 검증 스킬이 사용자 관점으로 유지하는 기능 목록 |
| repro | 재현 | 결함을 실제로 다시 일으키는 것 |
| root cause | 근본 원인 | 증상이 아니라 그 뒤의 원인 |
| regression | 회귀 | 전에 되던 동작이 깨지는 것 |
| drift | 표류 | 문서나 지도가 실제와 어긋나는 것 |
| blast radius | 파급 범위 | 변경이 다른 곳에서 깨뜨릴 수 있는 범위 |
| characterization test | 특성화 테스트 | 현재 동작을 그대로 고정하는 테스트 |
| baseline | 기준선 | 변경 전의 측정값이나 스크린숏 |
| flake | 불안정(flake) | 코드와 무관하게 간헐적으로 실패하는 검사 |
| stale base | 낡은 베이스 | 트렁크가 앞서 갔는데 리베이스하지 않은 브랜치 |
| suppression | 억제 | `eslint-disable`, `@ts-ignore` 같은 검사 무력화 |
| bugbot | Bugbot | Cursor의 PR 리뷰 자동화. 영어 그대로 |
| hedge | 헤지 | "~로 보인다"처럼 확신을 낮추는 표현 |
| tier(evidence) | 신뢰도 등급 | `why`의 Direct, Supported, Inferred, Speculative, Unknown |
| fail closed | 안전하게 실패 | 불확실하면 동작하지 않고 멈춤 |

## 설계 개념

| 영어 | 이 책의 표기 | 설명 |
| --- | --- | --- |
| module depth / shallow module | 모듈 깊이 / 얕은 모듈 | 공개 표면 대비 숨긴 복잡도. 얕은 모듈은 큰 인터페이스에 숨기는 것이 적음 |
| information leakage | 정보 누수 | 여러 모듈이 같은 내부 결정에 의존함 |
| temporal decomposition | 시간적 분해 | 소유한 지식이 아니라 실행 순서로 모듈을 나눔 |
| pass-through method | 통과 메서드 | 같은 인자를 그대로 넘기기만 하는 메서드 |
| discriminated union | 판별 유니온 | 리터럴 판별자로 변형을 모델링한 합 타입 |
| branded type | 브랜드 타입 | 같은 원시 타입이 섞이지 않게 표지를 붙인 타입 |
| exhaustive matching | 완전한 매칭 | 새 변형이 추가되면 컴파일러가 실패하게 하는 매칭 |
| idempotent | 멱등 | 몇 번 돌려도 같은 끝 상태로 수렴함 |
| boundary | 경계 | 데이터가 시스템으로 들어오는 곳. 검증은 여기에 둠 |
| scaffold | 뼈대 | 이후 모든 단계에 도움이 되는 기반(CI, 린트, 테스트 인프라) |
| lever | 지렛대 | 작업을 하거나 증명하는 스크립트, 코드모드 같은 도구 |
| census | 센서스 | 행위자마다 불균형을 세는 스크립트(`attack-the-premise`) |
| premise | 전제 | 실패한 수정들이 모두 가정한 한 문장(`attack-the-premise`) |
| artifact | 산출물 | 단계가 만들어 내는 파일, 로그, 커밋, 보고 |
| flow chart | 흐름도 | 플레이북의 단계, 분기, 중단 조건을 그린 그림 |
| worked example | 예시 | 이 책의 저자가 만든 요청과 전후 코드나 대화. 원본에 없다는 표시가 붙음 |
| code judo | code judo | 동작을 보존하면서 구현을 극적으로 단순하게 만드는 재구성. 원문 표현 |
