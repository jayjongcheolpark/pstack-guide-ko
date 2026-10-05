# 레시피와 함정

![그녀가 완성된 요리를 맛보는 동안 로봇들이 레시피 상자에서 요리하고, 조리대 위에 /how, /tdd, /loop 카드가 핀으로 꽂혀 있는 일러스트](images/recipes.jpg)

원문: {{src:docs/guide/10-recipes-and-pitfalls.md}} {{src:docs/guide/02-poteto-mode.md}} {{src:docs/guide/05-build-and-clean.md}} {{src:docs/guide/09-make-it-yours.md}} {{src:skills/poteto-help/SKILL.md}}

바로 복사해 쓸 프롬프트와, 누구나 한 번은 저지르는 실수를 모았습니다. 경로와 끝 조건은 자기 것으로 바꾸십시오. 레시피는 일부러 격식이 없습니다. 실제로 그렇게 입력되고, 스킬은 의도를 잘 알아듣기 때문입니다.

## 레시피

**낯선 서브시스템을 이해하기.**

```text
먼저 /how로 이 초기화가 어떻게 동작하는지 이해하고, 그다음 /why로 최근에 왜 깨졌는지 알아내 줘.
```

메커니즘이 먼저이고 이력이 그다음입니다. 각 스킬의 보고는 어느 출처를 검색했는지 알려 주므로 답이 무엇에 근거했는지 압니다. → [`how`](how.md#skill-how), [`why`](why.md#skill-why)

**설계에 대한 두 번째 의견 얻기.**

```text
이 스레드와 우리 접근에 대해 /arena에게 두 번째 의견을 구해 줘
```

현재 설계가 여러 후보 중 하나가 되고, 종합은 패널이 더 나은 것을 찾았는지 이미 가진 것을 확인했는지 알려 줍니다. 비싼 약속 전의 값싼 보험입니다. → [`arena`](arena-swarm.md#skill-arena)

**독립된 조각을 병렬로 검사하기.**

```text
/swarm packages/ 아래의 모든 패키지를 각자의 check.sh로 검사해 줘. 패키지마다 작업자 하나. 보고서는 하나.
```

작업자마다 패키지 하나를 맡습니다. 부모는 모든 조각을 기다려 원시 덤프 대신 `PASS`, `ISSUES`, `BLOCKED` 보고서 하나를 돌려줍니다. → [`swarm`](arena-swarm.md#skill-swarm)

**브랜치를 회의적으로 리뷰하기.**

```text
/interrogate 브랜치 전체를 회의적으로. 아직 아무것도 바꾸지 마. 동작의 실제 버그나 회귀가 아니면 사소한 지적은 하지 마.
```

한정어가 실제로 일합니다. "아무것도 바꾸지 마"는 읽기 전용을 유지하고, 사소한 지적 규칙(rule)은 잡음을 미리 걸러서 `Act on` 발견이 시간을 쓸 가치가 있게 합니다. → [`interrogate`](interrogate.md#skill-interrogate)

**실패하는 테스트로 버그 고치기.**

```text
/poteto-mode 중복 쓰기를 먼저 재현해 줘. 값싼 테스트 경로가 있으면 /tdd로 하고, 그다음 고치고 다시 돌려.
```

"값싼 테스트 경로가 있으면"이 중요합니다. 깨지기 쉬운 목으로 테스트를 억지로 끼워 넣는 것은 실제 명령을 돌리는 것보다 증명하는 바가 적고, 플레이북은 그렇다고 말해도 됩니다. → [`tdd`](tdd-blast.md#skill-tdd), [Bug fix](playbooks-work.md#playbook-bug-fix)

**자리를 비운 동안 정직하게 유지하기.**

```text
자러 갈게. 모든 픽스처가 통과할 때까지 자율적으로 계속해 줘. 멈추지 마. 아침에 감사할 수 있는 결정 기록을 남겨 줘.
```

전체 계약은 [밤새 돌리기](overnight.md)에 있습니다. 작업과 끝 조건이 이미 대화에 있으면 짧은 형태로도 통합니다.

**흐르는 실행을 다시 돌리기.** 조향 프롬프트는 한 줄입니다.

```text
목표는 재현이라고 했잖아. 아직 고쳐 달라고는 안 했어.
```

```text
prove it works를 적용해. 빌드 로그가 아니라 실제 출력을 보여 줘.
```

```text
/unslop 그거, 긴 줄표는 쓰지 마
```

말이 많이 필요하지 않습니다. 필요한 것은 올바른 이름이고, [원칙 장](principles.md)이 그 어휘입니다.

**어느 스킬인지 모르겠을 때.**

```text
/poteto-help which skill should i use to review this branch?
```

일을 시키지 않고 길을 묻습니다. 스킬은 그 부분만 답하고, 보낼 프롬프트 하나와 공개 링크를 줍니다. → [`poteto-help`](setup.md#skill-poteto-help)

**응답을 평이한 말로 받기.**

```text
/bro
```

그것이 프롬프트 전체입니다. `/bro`는 마지막 메시지를 사람 둘이 이야기하듯 전문 용어 없이 더 짧게 다시 말합니다. 응답이 기술적으로는 충실한데 무슨 말인지 모르겠을 때 씁니다. → [`bro`](utility.md#skill-bro)

## 단계별 프롬프트의 모양

원본의 사용 안내서가 각 단계별로 제안하는 프롬프트의 모양을 정리하면 다음과 같습니다.

| 목적 | 프롬프트의 모양 | 참고 |
| --- | --- | --- |
| 버그 | 증상을 말하고 먼저 재현하라고 함 | [Bug fix](playbooks-work.md#playbook-bug-fix) |
| 기능 | 동작과 바뀌면 안 되는 것을 말함 ("텍스트 출력은 바이트 단위로 그대로") | [Feature](playbooks-work.md#playbook-feature) |
| 리팩터링 | 구조를 옮기기 전에 동작을 고정하라고 함 ("현재 출력을 먼저 기록하고 바뀌지 않았음을 증명해 줘") | [Refactoring](playbooks-work.md#playbook-refactoring) |
| 성능 | 느낌이 아니라 측정을 말함 ("이 픽스처에서 시작이 1.8초 걸려. 트레이스로 측정된 원인을 고치고 전후를 보여 줘") | [Perf issue](playbooks-work.md#playbook-perf-issue) |
| 새 작업 | "new task"라고 말해 이전 플레이북을 잇지 않게 함 | [poteto-mode](poteto-mode.md#skill-poteto-mode) |
| 병렬 작업 | 처음부터 격리를 요청 ("새 워크트리에서") | [poteto-mode](poteto-mode.md#skill-poteto-mode), [Opening a PR](playbooks-pr.md#playbook-opening-a-pr) |

## 함정

안내서가 꼽은 함정을 그대로 모읍니다.

- **Enter만 치고 모드가 남는 줄 알기.** `/poteto-mode`에서 Enter는 그 메시지 하나에만 붙습니다. 매 턴 유지하려면 Option+Enter(Mac) 또는 Alt+Enter(Windows)로 Custom Mode를 켭니다. [`poteto-help`](setup.md#skill-poteto-help)의 "잘못된 실행" 표가 같은 증상을 적습니다.
- **프롬프트에 스킬을 나열하기.** "/how 그다음 /architect 그다음 /arena를 써"는 플레이북이 이미 정해 둔 단계를 뒤섞습니다. 목표와 제약을 말하고, 기본값을 덮어쓸 때만 스킬 이름을 씁니다.
- **모호한 끝 조건.** "더 낫게 만들어"는 `/loop`에게 확인할 것을 주지 않습니다. 통과나 실패가 가능한 명령이나 산출물(artifact)을 줍니다.
- **한 워크트리에서 병렬 에이전트.** 서로 덮어쓰고 diff가 고고학이 됩니다. "시도마다 자기 워크트리"라고 말하면 격리는 공짜입니다.
- **커버리지에 `/arena` 쓰기.** `/arena`는 설계나 코드 지시 하나를 반복해 기준안을 고르고 좋은 부분을 이식합니다. `/swarm`은 조각이나 선언된 경주 팔을 나누고 보고서 하나로 집계합니다.
- **모든 리뷰 댓글 수용하기.** 봇과 사람은 진짜 발견과 잡음을 한 목록에 올립니다. `/interrogate`는 발견을 이유가 있는 act-on과 dismissed 통으로 나누고, 사용자는 양쪽 어느 쪽으로든 뒤집을 수 있습니다.
- **`auto`를 모델 슬러그로 취급하기.** `auto`와 `inherit-parent`는 "모델 필드를 생략해 서브에이전트가 부모 채팅 모델을 물려받게 한다"는 뜻입니다. [설치와 첫 사용](setup.md)이 역할을 다룹니다.
- **초록 빌드로 성공을 보고하기.** 빌드는 컴파일된다는 것을 증명할 뿐입니다. 실제 명령, 흐름, 저장된 값, 프로파일을 요구하고 응답에 증거가 있기를 기대합니다.
- **`SKILL.md`를 즉흥으로 쓰기.** [Authoring or modifying a skill](playbooks-work.md#playbook-authoring-a-skill) 플레이북으로 보내 검증(validation)과 리뷰가 일어나게 합니다.
- **작업 중에 스킬이 오작동한다고 그 자리에서 고치기.** 별도 PR로 고치고 작업은 계속 진행합니다. 기능 작업에 엉킨 스킬 수정은 리뷰에서 보이지 않고 평가할 수도 없습니다.
- **정리를 선택적 광택으로 여기기.** 서술하는 주석과 방어적인 죽은 무게가 있는 diff는 리뷰어에게 미완성으로 읽히고, 군더더기 코드가 다음 버그가 숨는 곳입니다. diff가 부풀었다는 느낌이 들면 리뷰가 지적하기 전에, 커밋하기 전에 "deslop해 줘"라고 말합니다.

안내서의 맺음말을 옮기면 이렇습니다. 건너뛰어 읽었다면 설정으로 돌아가 실제 작업 하나를 돌려 보십시오. 습관은 읽는 것이 아니라 쓰는 것에서 붙습니다.
