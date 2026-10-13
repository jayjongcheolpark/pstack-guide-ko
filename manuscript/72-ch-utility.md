# bro: 평이한 말로 다시 듣기

![요리한 음식을 맛보는 사람과 레시피 상자에서 요리하는 로봇들, 조리대 위에 /how, /tdd, /loop 카드가 붙어 있는 일러스트](images/recipes.jpg)

## bro {#skill-bro}

원문: {{src:skills/bro/SKILL.md}} {{src:docs/guide/10-recipes-and-pitfalls.md}}

> 마지막 메시지를 전문 용어 없이 사람 말로 다시 말합니다.

### 언제 쓰는가

응답이 기술적으로는 충실한데 무슨 말인지 모르겠을 때 씁니다. 원문의 `description`은 "마지막 메시지를 평이한 사람의 말로, 전문 용어 없이 다시 말하기"입니다. `disable-model-invocation: true`입니다. 안내서는 이렇게 씁니다.

```text
/bro
```

그것이 프롬프트 전체입니다.

### 동작 방식

스킬 본문은 한 문장 지시입니다. 마지막 메시지를 다시 말합니다. 전문 용어를 그만 쓰고 앞뒤가 맞게 말합니다. 더 단순하고 간결하게, 사람 둘이 이야기하듯이. 안내서는 이것이 마지막 메시지를 사람 둘이 이야기하듯, 전문 용어 없이, 더 짧게 다시 말한다고 요약합니다.

### 사용 예

```text
/bro
```

직전에 에이전트가 낸 긴 진단이나 보고를 이해하지 못했을 때, 이 한 줄이면 같은 내용을 더 짧고 평이하게 다시 듣습니다. 별도 인자는 필요 없습니다.

### 함정과 주의점

- 이 스킬은 새 조사를 하지 않고 마지막 메시지를 다시 말하는 것뿐입니다. (저자 주) 내용을 더 캐내려면 `how`나 `why`가 맞을 수 있습니다.
- 안내서는 응답이 기술적으로는 충실한데 무슨 말인지 모르겠을 때 쓰라고 소개합니다. (저자 주) 응답 자체를 처음부터 평이하게 쓰게 하는 규칙(rule)은 [`unslop`](writing.md#skill-unslop)이 맡습니다.

### 관련 스킬

[`unslop`](writing.md#skill-unslop), 더 깊이 이해시키는 [`teach`](teach-recall.md#skill-teach)입니다. 이 채팅의 마지막 메시지 이후를 같은 평이한 목소리로 따라잡는 것은 [`ketchup`](teach-recall.md#skill-ketchup)입니다. `/ketchup`은 `/bro`의 다시 말하기 단계를 건너뜁니다. 일을 시작하기 전에 목표와 문제를 자기 말로 다시 듣는 것은 [`in-your-own-words`](setup.md#skill-in-your-own-words)입니다.
