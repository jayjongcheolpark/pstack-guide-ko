# 글쓰기: unslop과 technical-writing

## unslop {#skill-unslop}

원문: {{src:skills/unslop/SKILL.md}} {{src:docs/guide/05-build-and-clean.md}}

> 어떤 글에서든 AI가 쓴 티를 걷어 냅니다. 원문의 `description`은 "Must always apply"라고 덧붙입니다.

### 언제 쓰는가

글이 나오는 모든 표면입니다. `poteto-mode`는 "글이 나오는 모든 표면"에서 이 스킬을 요구하고, 응답 자체도 글이라서 응답을 쓸 때 이 스킬의 규칙(rule)으로 씁니다. `technical-writing`, `teach`, `recall`, `blast-radius`, `automate-me`도 결과물을 이 스킬을 거쳐 쓰라고 합니다. Opening a PR 플레이북은 PR 제목, 설명, 커밋 본문을 `/technical-writing`으로 쓴 다음 `/unslop`을 적용하게 합니다. 안내서는 사용자가 대상과 추가 규칙을 줄 수 있다고 소개합니다.

```text
/unslop 읽기 문서 변경분에서, 긴 줄표는 쓰지 마
```

스킬은 짧은 지시("unslop that, tighten it")도 잘 알아듣는다고 안내서는 적습니다. 코드의 슬롭은 `/deslop`(cursor-team-kit)이, 글의 슬롭은 `/unslop`이 맡고, 주석은 `/no-comments`가 그것을 쓰지 않은 리뷰어에게 넘깁니다.

### 동작 방식

과정은 둘입니다. 아래 패턴을 스캔하고, 다시 씁니다. 의미를 보존하고 의도한 톤에 맞춥니다. 규칙 번호는 다른 스킬이 인용하는 안정된 식별자이며, 삭제된 규칙은 빈 번호로 남습니다. 그래서 번호가 연속하지 않습니다.

**내용**

| 규칙 | 패턴 | 고치는 법 |
| --- | --- | --- |
| 3 | 겉치레 -ing 구문. "highlighting...", "ensuring...", "reflecting...", "showcasing...", "fostering..." | 삭제하거나 실제 출처와 함께 확장 |
| 5 | 모호한 출처 표시. "Experts believe", "Industry reports suggest", "Some critics argue" | 출처를 밝히거나 삭제 |

**언어**

| 규칙 | 패턴 | 고치는 법 |
| --- | --- | --- |
| 7 | AI 어휘. Additionally, crucial, delve, enduring, enhance, fostering, garner, interplay, intricate, landscape(추상), pivotal, showcase, tapestry(추상), testament, underscore, vibrant | 평이한 낱말로 |
| 8 | "is"를 멋부려 말하기. "serves as", "stands as", "boasts", "features" | 그냥 "is"나 "has" |
| 9 | "Not just X, but Y." | 요점을 직접 말함 |
| 10 | 3의 법칙. 생각을 억지로 셋씩 묶기 | 자연스러운 수를 씀 |
| 11 | 동의어 돌려쓰기. 한 문단에 protagonist, main character, central figure, hero | 하나를 골라 반복 |
| 12 | 거짓 범위. 의미 있는 척도 위에 있지 않은 "from X to Y" | 주제를 직접 나열 |

**문체**

| 규칙 | 패턴 | 고치는 법 |
| --- | --- | --- |
| 13 | 긴 줄표 남용 | 긴 줄표를 아예 쓰지 않습니다. 마침표나 쉼표만 씁니다(괄호도, 짧은 줄표도, 줄표 대용 하이픈도 안 됨). 생각을 나눌 필요가 있으면 문장을 끝내거나 쉼표를 씁니다 |
| 14 | 콜론 남용 | 콜론은 목록이나 예 앞에서는 괜찮습니다. 문장 중간의 연결어로는 안 됩니다. "If you're coming from traditional automation: instead of registering event handlers, you describe conditions"는 콜론이 아무것도 더하지 않습니다. 비교 틀 없이 요점이 서게 다시 씁니다 |
| 15 | 볼드체 남용 | 모든 고유명사나 약어를 굵게 하지 않음 |
| 16 | 인라인 머리말 목록. 굵은 라벨과 콜론이 줄의 내용을 되풀이하는 것("**Performance:** Performance improved...") | 산문으로. 마침표로 끝나고 항목 이름을 밝히며 진짜 새 세부가 뒤따르는 굵은 도입("**Schema in TypeScript.** Tables live in one file.")은 티가 아니라 괜찮음 |
| 17 | 제목 대문자 | 문장형 대소문자 |
| 18 | 장식용 이모지 | 제목과 불릿에서 제거 |
| 19 | 곡선 따옴표 | 곧은 따옴표로 |

**소통 잔재**

| 규칙 | 패턴 | 고치는 법 |
| --- | --- | --- |
| 20 | 챗봇 문구. "I hope this helps!", "Let me know if...", "Of course!", "Certainly!", "Found the smoking gun!" | 제거 |
| 22 | 아부하는 어조. "Great question! You're absolutely right!" | 직접 응답 |

**군더더기**

| 규칙 | 패턴 | 고치는 법 |
| --- | --- | --- |
| 23 | 군더더기 문구. "In order to"는 "To"로, "Due to the fact that"는 "Because"로, "It is important to note that"은 삭제 | |
| 24 | 과한 헤지. "could potentially possibly be argued that it might"는 "may"로 | |
| 25 | 상투적 결론. "The future looks bright." | 구체적 계획이나 사실을 말함 |

**전문 용어**

| 규칙 | 패턴 | 고치는 법 |
| --- | --- | --- |
| 26 | 추상적 은유 명사. substrate, wedge, vector, locus, vantage, nexus, primitive(명사), harness(은유), surface("API surface"처럼), bedrock, scaffolding(은유), modality, paradigm, gold-plating, ratchet(은유), evacuate(코드를 옮길 때), endgame, north star, flywheel | 기술적으로 읽히지만 대개 더 평범하고 구체적인 낱말이 있습니다. "Substrate"는 "base", "Wedge in"은 "add", "Vector"는 "way"나 "method", "Gold-plating"은 "more than the job needs", "Ratchet"은 메커니즘의 실제 이름이나 "a limit that only tightens", "Evacuate"는 "move out", "Endgame"은 "the last phase". 구체적인 낱말을 고릅니다 |

**평이한 말**

| 규칙 | 패턴 | 고치는 법 |
| --- | --- | --- |
| 27 | 느낌을 말하지 말고 하는 일을 말하기. "the database stays close at hand", "SQL you can read", "types that follow your schema"는 느낌에 이름을 붙임 | 메커니즘이나 수를 씁니다. "`.toSQL()` returns the exact string sent to the database", "a column rename fails the build". 문장이 독자에게 하라고 하거나 알라고 하는 것이 무엇인지 묻고 그것을 씁니다. 구체적 지시, 사실, 수로 다시 말할 수 없으면 자릅니다. 한 가지 더 검사: 문장이 다른 프로젝트의 문서에 그대로 나올 수 있다면 이 프로젝트에 대해 아무 말도 안 하는 것이니 자릅니다 |
| 28 | 빽빽한 문장을 줄이거나 나누기 | 독자가 되돌아가야 문장을 파싱하면 둘로 나누거나 절을 뺍니다. 문장당 한 생각 |
| 29 | 능동태 | "is/are/was/were + 과거분사"를 잡아 행위자를 밝힙니다. "queries are validated"는 "the compiler validates queries", "the file is parsed by the loader"는 "the loader parses the file". 수동은 행위자를 모르거나 정말 중요하지 않을 때만 괜찮음 |
| 30 | 부사를 자르거나 더 강한 동사를 씀 | "runs quickly"는 "is fast"나 수치로, "significantly improves"는 측정된 차이로. 약한 동사를 떠받치는 부사는 동사가 틀렸다는 뜻 |
| 31 | 평범한 낱말 선호 | "utilize"는 "use", "leverage"는 "use", "facilitate"는 "help", "numerous"는 "many", "in the event that"은 "if". 더 멋진 동의어가 더 명확한 일은 드묾 |
| 32 | 꾸민 문체. 문자 그대로의 표현이 있는데 은유나 수사를 쓰는 것: 격언("wire it or delete it"), 효과를 노린 수사적 파편, 의인화된 코드("the plan holds it"), 비유적 동사("rides along", "stands on"), 상투적 틀 짓기 | "A dial worth turning"은 "a parameter worth varying". 말하려는 것을 말합니다. 규칙 26이 은유 명사를 다룹니다 |
| 33 | 과압축. 관사 빠짐, 동사 없는 파편, 기호 말투, 독자가 읽는 대신 해독하게 만드는 약어 | "Parser rejects bad date → exit 2, no write"는 "The parser rejects a bad date, exits with code 2, and writes nothing." 관사와 동사가 있는 완전한 문장으로 쓰고 화살표와 약어를 풀어 씁니다 |

### 사용 예

```text
/unslop 읽기 문서 변경분 다듬어 줘, 긴 줄표는 쓰지 마
```

스킬은 대상 글을 위 규칙에 맞춰 스캔하고 의미와 톤을 보존하며 다시 씁니다. 이 규칙은 다른 스킬에도 그대로 걸립니다. `poteto-mode`의 응답 쓰기 규칙(긴 줄표 금지, 문장 중간 콜론 금지)이 규칙 13과 14의 적용이고, `teach`는 응답 밀도의 목표를 이 스킬로 잡습니다.

### 함정과 주의점

- 다 쓴 뒤의 정리 패스로는 이 패턴이 빠지지 않는다고 `poteto-mode`는 말합니다. 초안을 쓰는 순간부터 깨끗하게 씁니다.
- 규칙 16의 예외를 기억합니다. 마침표로 끝나고 항목 이름을 밝히며 새 세부가 뒤따르는 굵은 도입은 티가 아닙니다.
- 규칙 번호는 안정 식별자입니다. 삭제된 규칙은 번호가 비므로 번호를 당겨 다시 매기지 않습니다.
- 은유 명사(규칙 26)를 새로 발견하면 `technical-writing`은 이 스킬을 고치지 말고 답에서 위반 낱말과 대체어를 추가 제안(diff 포함)으로 내라고 합니다.

### 관련 스킬

[`technical-writing`](#skill-technical-writing)이 이 스킬 위에서 문서 구조와 문장 규율을 더합니다. [`bro`](utility.md#skill-bro)도 응답을 평이하게 되돌리는 스킬입니다.

## technical-writing {#skill-technical-writing}

원문: {{src:skills/technical-writing/SKILL.md}} {{src:docs/guide/09-make-it-yours.md}}

> 층화된 기술 문서 기준. Diátaxis 구조, Google 개발자 스타일 문장, STE 지시 규칙, Global English 구문.

### 언제 쓰는가

원문의 `description`이 든 트리거는 `/technical-writing`, 그리고 문서, RFC, README, PR 설명, 커밋 메시지를 쓰거나 리뷰할 때입니다. 안내서는 이 스킬을 이렇게 소개합니다. 지친 엔지니어가 한 번 읽고 이해하는 글이라는 하나의 목표를 가진 층화된 기준(standard)이고, 문서의 모드(튜토리얼, how-to, 레퍼런스, 설명)를 먼저 고른 뒤 문장별로 작업합니다. 누가 무엇을 하는지, 문장당 한 생각, 두 가지로 읽히는 것은 없게. 방금 자신이나 에이전트가 쓴 것을 리뷰하는 데 쓰거나 문서를 요청할 때 미리 지명합니다.

```text
/technical-writing README 변경분을 리뷰해 줘
```

`poteto-mode`는 문서, RFC, README, PR 설명, 커밋 메시지에서 이 스킬을 요구하고, Opening a PR은 PR 제목, 설명, 커밋 본문을 이 스킬로 쓰되 Diátaxis를 제외한 모든 층을 적용하라고 합니다. Multi-phase plan의 계획서 본문은 이 스킬 전체로 쓴 뒤 `/unslop`을 적용합니다.

### 동작 방식

목표는 지친 엔지니어가 첫 읽기에 이해하는 글입니다. 네 층이 거기에 이르게 하고 층마다 질문 하나입니다. 이 문서는 어떤 종류의 문서인가, 문장이 독자에게 어떻게 말을 거는가, 문장 하나가 얼마나 싣는가, 어떤 문장이 두 가지로 읽힐 수 있는가. 네 층을 모두 적용합니다.

**층 위의 세 규칙.**

- **일하지 않는 낱말은 모두 자릅니다.** 낱말 하나 없이도 문장이 살면 그 낱말은 갑니다. "In order to"는 "to", "It is important to note that"은 아무것도 아닙니다.
- **짧고 일상적인 낱말을 씁니다.** "utilize"가 아니라 "use", "facilitate"가 아니라 "help", "perform"이 아니라 "do". 긴 낱말은 정밀함으로 그 길이의 값을 치러야 합니다.
- **규칙이 문장을 더 나쁘게 만들면 문장을 다른 방식으로 고치거나 그대로 둡니다.** 규칙은 독자를 위해 있습니다. 모든 규칙을 따랐는데 기계가 쓴 것처럼 들리는 문장은 실패한 것입니다.

코드베이스가 낱말 목록입니다. 동의어나 설명이 아니라 실제 심볼, 파일, 플래그, 명령의 이름을 씁니다. 전문 용어를 지어내지 않습니다. 개발자가 소리 내어 말할 낱말("move", "delete", "a budget that only decreases")을 쓰고 "evacuate", "ratchet", "endgame"은 쓰지 않습니다. 이름 붙은 패턴은 문서가 처음에 그 뜻을 밝히면 괜찮습니다. 새 위반 낱말과 대체어는 diff와 함께 답에서 `unslop`의 추상 은유 규칙에 대한 추가로 제안하고, 그 스킬을 직접 고치지 않습니다.

**리듬을 다양하게.** 층은 문서가 무엇을 말하고 문장 하나가 얼마나 싣는지를 정합니다. 문서는 그것을 모두 지키고도 기계가 쓴 것처럼 읽힐 수 있습니다. 모든 문장이 짧게 끊기고, 어디에도 견해가 없고, 구체적인 것이 없을 때입니다.

- 문장 길이를 일부러 섞습니다. 짧은 문장은 요점을 꽂고, 시간을 들이는 긴 문장은 조건이나 결과를 단 사실을 나릅니다.
- 문장당 한 생각이 문장당 한 길이는 아닙니다. 생각 둘을 나르는 문장은 나누고, 생각 하나를 나르는 긴 문장은 둡니다.
- 모드가 허락하는 곳에서는 견해를 가집니다. 설명은 트레이드오프를 저울질하므로 찬반 목록 대신 자신의 판단을 말합니다. 레퍼런스는 건조하게 둡니다.
- 무균보다 구체적으로. "schema changes can cause issues"가 아니라 "a column rename fails the build".

**먼저 모드를 고릅니다(Diátaxis).** 문서 하나에 모드 하나입니다. 두 질문이 모드를 고릅니다. 내용이 행동(하기)에 정보를 주는가 이해(생각하기)에 정보를 주는가, 그리고 배움에 봉사하는가 일에 봉사하는가.

| 조합 | 모드 |
| --- | --- |
| 행동 + 배움 | 튜토리얼 |
| 행동 + 일 | how-to |
| 이해 + 일 | 레퍼런스 |
| 이해 + 배움 | 설명 |

이 나침반은 문서 전체에도 문장 하나에도 씁니다.

- **튜토리얼(하면서 배우기).** 가르치는 사람은 자신입니다. 학습자의 성공은 학습자가 아니라 자신의 일입니다. 학습자가 "배울" 것이 아니라 "만들" 것을 말하며 시작합니다. 단계마다 눈에 보이는 결과를 일찍, 자주 냅니다. 학습자가 보아야 할 것(기대 출력, 프롬프트 변화, 로그 줄)을 알려 줍니다. 설명은 한 절과 링크로 줄입니다. 가르침의 멈춤은 수업을 깹니다. 구체적으로 유지하고, "we"로, 명령으로 씁니다("First, do x. Now, do y.").
- **how-to(목표를 위한 단계).** 기계가 수행할 수 있는 연산이 아니라 사람이 가진 문제를 풉니다. 유능함을 가정하고 가르침은 건너뜁니다. 행동만: 곁길도, 배경도, 완결성 자체를 위한 완결성도 없이 그것들은 링크로 돌립니다. 갈림길과 판단은 허용합니다("If you want x, do y."). 안내서 이름은 과업으로 붙입니다("How to calibrate the radar array", "Radar array calibration"이 아니라).
- **레퍼런스(찾아보는 사실).** 기술만 합니다. 지시도, 설득도, 의견도 없이. 건조하고 완전하고 확실하게. 사실, 옵션, 한계, 오류를 헤지 없이 말합니다. 기술하는 대상의 구조를 그대로 따라 코드와 문서를 함께 탐색할 수 있게 합니다. 독자가 기대하는 곳에 자료를 둡니다. 참이 유지되도록 가능하면 코드에서 생성합니다.
- **설명(이해와 이유).** 제품과 떨어져서도 읽히는 경계 있는 주제 하나. 제목마다 암묵적인 "About..."을 앞에 붙여도 되어야 합니다. 진짜 why 질문에 닻을 내립니다. 맥락을 줍니다. 설계 결정, 역사, 제약, 대안. 의견은 여기서만 허용됩니다.

모드를 섞지 않습니다. 튜토리얼 안에 레퍼런스 표를 넣지 않고, 레퍼런스 안에 튜토리얼식 손잡이를 넣지 않고, how-to 안에서 논쟁하지 않습니다. 나누고 링크합니다.

**독자를 향해 문장을 씁니다(Google 개발자 스타일).**

- 독자에게 "you"로, 현재 시제로 말합니다. "Will"은 정말 나중에 일어나는 일에만.
- 누가 무엇을 하는지 말합니다. "the compiler checks"이지 "is checked"가 아닙니다. 수동은 행위자를 모르거나 중요하지 않을 때만.
- 지시는 명령으로 씁니다. "Click Submit." 사실은 담백하게. "should be done"은 절대 쓰지 않습니다.
- 조건을 지시 앞에 둡니다. "To delete the document, click Delete." 독자는 해당하지 않는 것을 건너뜁니다.
- 흔한 경우가 먼저, 예외는 뒤에.
- 아는 것이 많은 친구처럼 들리게 합니다. 유행어도, 비유적 표현도, 지시 안의 "please"도, 절차(procedure) 안의 "simply", "easy", "quickly"도 쓰지 않습니다. 정말 간단하다면 독자가 여기 있지 않을 것입니다.
- 미리 알리지 않고("we will soon support...") 연속한 문장을 같은 구문으로 시작하지 않습니다.
- 링크는 링크가 어디로 가는지 말하는 낱말(페이지 제목이나 짧은 설명)로 겁니다. "click here"는 절대 안 됩니다. 페이지를 떠나는 링크보다 페이지 위의 맥락 한 문장을 선호합니다.
- 제목은 주제만이 아니라 요점을 담습니다("Modes"가 아니라 "Pick the mode first"). 문장형 대소문자. 과업 제목은 맨동사구("Create an instance"), 개념 제목은 명사구. 페이지당 h1 하나, 건너뛴 수준 없음.
- 순서에는 번호 목록, 나머지에는 불릿. 목록은 완전한 문장으로 도입하고 항목은 병렬로.
- 코드는 코드 글꼴, UI 요소는 굵게. 시리얼 콤마를 씁니다. "etc."를 버리고 목록이 일부임을 앞에서 밝힙니다.

**진술을 하나씩 싣습니다(STE 규칙).**

- 지시는 문장당 하나. 그 밖의 곳은 문장당 생각 하나.
- 약 20 낱말보다 긴 지시와 약 25 낱말보다 긴 다른 문장은 나눕니다.
- 경고나 조건은 그것이 지키는 단계 앞에 둡니다. "If hot oil touches your skin, injuries can occur."
- "the"와 "a"를 남깁니다. "Remove backup file"은 두 가지로 읽히고 "Remove the backup file"은 한 가지로 읽힙니다.
- 낱말마다 뜻 하나와 일 하나를 주고 유지합니다. "check"가 점검을 뜻하면 억제의 뜻으로도 쓰지 않습니다.
- 행동마다 낱말 하나를 골라 고수합니다. 여기서 "start"라면 저기서 "initiate"가 아니라 "start".
- 절차는 직접 명령으로 쓰고 서술이나 수동으로는 쓰지 않습니다. "Install the component"이지 "the component must be installed"가 아닙니다.
- 가능하면 "-ing" 낱말을 피합니다. 문법적 일을 너무 많이 하고 오독을 낳습니다.

**어떤 문장도 두 가지로 읽히게 두지 않습니다(Global English).**

- "only", "not" 같은 낱말은 바꾸려는 낱말 옆에 둡니다. "only fails on growth"와 "fails only on growth"는 다른 말입니다.
- 긴 명사 열을 나눕니다. "the proto import budget check script"는 "the script that checks the proto-import budget"로.
- 모든 "it", "they", "this"가 뻔한 한 대상을 가리키게 합니다. 의심스러우면 명사를 반복합니다. "this"나 "which"로 절 전체를 가리키지 않습니다.
- 동사를 떨어뜨리지 않습니다. "Phase 1 moves the converters and Phase 2 the runtime"은 Phase 2에 동사가 없습니다. 하나 줍니다.
- 구조를 보여 주는 작은 낱말을 남깁니다. "Ensure that the switch is off"는 문장이 한 가지로 파싱되게 하는 "that"을 남깁니다. 낱말 수를 위해 명료함을 팔지 않습니다.
- 오독을 막을 때는 나열에서 관사를 반복합니다. 둘이라면 "the client and host"가 아니라 "the client and the host".
- 문장이 두 가지로 묶일 수 있을 때 "and"나 "or"이 무엇을 잇는지 말합니다. "Both...and", "either...or", "if...then"은 공짜 구별자입니다.
- 세미콜론이 아니라 마침표를 씁니다. 긴 줄표는 새 문장으로 바꿉니다.
- 괄호 안의 글은 완전한 문법 단위나 별도 문장으로 씁니다. "(s)"로 복수를 만들지 않습니다.
- 슬래시를 쓰지 않습니다. "a/b"나 "and/or" 대신 "a, b, or both"를 씁니다.
- 각 대상을 어디서나 하나의 이름으로 부릅니다. 같은 것에 "the gate", "the ratchet", "the budget check"라고 쓰는 문서는 세 가지를 가르칩니다. 바뀌지 않은 문장을 편집 사이에 다시 표현하는 것도 똑같은 비용을 치릅니다. 바뀌지 않은 것을 휘젓지 않습니다.
- 관용구, 구어체, 라틴어 약어, 은유를 건너뜁니다. 비원어민 독자, 번역가, 에이전트는 모두 평이한 구성을 가장 잘 파싱합니다.

**목소리와 저장소별 규칙.**

- 이 스킬이 건드리는 모든 문서에 **unslop** 스킬을 적용합니다. 그 스킬이 슬롭 패턴 목록(AI 어휘, 군더더기, 헤지, 서식 티)을 소유합니다.
- PR 설명과 커밋 메시지도 글쓰기입니다. Diátaxis를 제외한 모든 층이 적용됩니다. PR 본문은 리뷰어가 1분 안에 읽을 수 있는 브리핑입니다. swarm 로그, SHA 목록, 지표 표를 붙여 넣지 않고 링크합니다.
- 제품 UI 문자열은 문서가 아닙니다. 그런 것에는 제품의 카피 지침을 씁니다.
- 코드 조각은 탭으로 들여씁니다. 실제 경로와 실제 심볼을 씁니다. 개수나 트리에 대한 모든 주장이 그것을 랜딩하는 커밋에서 참이게 하고 그것을 다시 생성하는 명령을 포함합니다.

**예.**

전:

> Configuration of the proto import ratchet budget script parameters is performed via budget.json. Note that it's important to remember that running with --write, which updates the committed budget to reflect the current count, should only be done when lowering it. If exceeded, CI fails.

후:

> `budget.mjs` reads the committed budget from `budget.json` and counts the files that import protos. If the count exceeds the budget, CI fails. Run `budget.mjs --write` only to lower the budget.

### 사용 예

```text
/technical-writing README 변경분을 리뷰해 줘
```

스킬은 문서의 모드를 먼저 고르고, 문장별로 네 층을 적용해 리뷰합니다. 문서를 요청할 때 미리 이 스킬을 지명해도 됩니다.

### 함정과 주의점

- 한 문서에 모드를 섞지 않습니다. 튜토리얼 안의 레퍼런스 표, 레퍼런스 안의 손잡이, how-to 안의 논쟁을 피하고 나누고 링크합니다.
- 규칙이 문장을 나쁘게 만들면 규칙이 아니라 문장을 고칩니다.
- 모든 문장이 짧게 끊기고 견해도 구체성도 없으면 규칙을 다 지켜도 기계가 쓴 글로 읽힙니다.
- PR 본문에 swarm 로그, SHA 목록, 지표 표를 붙여 넣지 않고 링크합니다.
- 새 은유 명사를 발견해도 `unslop`을 직접 고치지 않고 답에서 diff로 제안합니다.

### 관련 스킬

[`unslop`](#skill-unslop)이 슬롭 패턴 목록을 소유합니다. PR 제목과 설명은 [Opening a PR](playbooks-pr.md#playbook-opening-a-pr) 플레이북에서 이 스킬로 씁니다.
