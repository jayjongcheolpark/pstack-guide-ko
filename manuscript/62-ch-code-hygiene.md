# 코드 정리: no-comments와 typescript-best-practices

## no-comments {#skill-no-comments}

원문: {{src:skills/no-comments/SKILL.md}} {{src:agents/comment-sicko.md}} {{src:docs/guide/05-build-and-clean.md}}

> Comment Sicko를 띄우고, 수용한 발견을 처리하고, 제약을 주장하는 주석에 인코딩을 제안합니다.

### 언제 쓰는가

리뷰 전에 씁니다. `poteto-mode`는 "리뷰 전"에 이 스킬을 요구하고, Opening a PR 플레이북은 리뷰 전에 `/no-comments`를 돌립니다. PR을 열거나 소유하는 에이전트가 모두 돌립니다. `disable-model-invocation: true`입니다.

```text
/no-comments diff를 봐 줘
```

안내서의 근거는 이것입니다. 주석은 별도의 패스가 필요하고, 그것을 쓴 에이전트가 하면 안 됩니다. 저자는 자기 주석을 사람이 자기 주석을 변호하듯 변호합니다. 그래서 리뷰 전에 새로운 눈에 맡깁니다. 안내서는 `/deslop`이 코드에서 슬롭을 걷어 내고, `/unslop`이 글에서 걷어 내고, `/no-comments`가 주석을 그것을 쓰지 않은 리뷰어에게 넘긴다는 분업을 기억하라고 합니다. 그리고 정리는 선택적 광택이 아니라고 경고합니다. 서술하는 주석과 방어적인 죽은 무게가 있는 diff는 리뷰어에게 미완성으로 읽히고, 군더더기 코드가 다음 버그가 숨는 곳입니다.

### 동작 방식

Comment Sicko를 띄우고 수용한 발견에 행동합니다. Comment Sicko의 새로운 관점을 따릅니다.

**범위.** 호출자의 파일이나 diff를 씁니다. 없으면 워킹 트리를 포함한 베이스 브랜치(기본 `main`) 대비 현재 diff를 씁니다.

**단계.**

1. `Task`를 `subagent_type: "Comment Sicko"`로 띄우고 범위를 넘깁니다. Comment Sicko의 규칙(rule)을 다시 말하지 않습니다.
2. 보고서와 diff를 점검합니다. 애플리케이션 코드 편집, 범위 이탈, 예외로 보호된 삭제, 잘못 서술된 `MUST KILL` 사유, 의도적으로 유지된 코드를 유죄로 취급하는 플래그는 거부합니다. 우리 코드의 놀라움에 대한 재구성(reshape) 플래그는 여전히 실행 대상이고 그 주석을 복원하지 않습니다. 유지는 우리가 바꿀 수 없는 것에 관한 것이라는 증명이 있어야만 살아남습니다. 놓친 범위 안의 린트와 TypeScript 억제(suppression)를 감사합니다. 정확성이나 안전 억제는 실행 대상인 `MUST KILL`로 남습니다. 삭제를 복원하는 것은 정확한 예외와 범위 증명이 있을 때뿐입니다. 얇은 `IMPORTANT`나 `do not remove` 삭제나 유지를 수용하기 전에 그 심볼에 `/how`나 `/why`를 돌립니다. 삭제가 애매하면 복원하지 않습니다. 유지가 반박되었거나 여전히 애매하면 삭제합니다. 거부된 보고서 하나는 실패를 이름 붙여 되돌리고 다시 돌립니다. 두 번째도 거부하면 열린 채로 보고하고 `/no-comments`를 실패시킵니다.
3. 사소한 수용된 플래그는 죽은 경로 삭제, 매개변수 제거, 실제 API 사용으로 직접 고칩니다. 어느 수정이든 모양이 필요하면 수용된 집합과 주변 코드에 대해 `/architect`를 한 번 돌립니다. 스케치에서 멈춥니다. architect가 모양을 만들고 4단계가 구현합니다.
4. 범위 안에서 가장 작은 근본 원인 수정을 구현합니다. 이름 붙은 우회책을 모두 제거합니다. 근본 원인이 범위 밖이면 범위 안의 가장 작은 수정을 랜딩하고 나머지는 열린 채로 보고합니다. `principle-fix-root-causes`와 `principle-redesign-from-first-principles`는 의도만 안내하고, 울타리를 넓히거나 밖의 인스턴스를 고칠 권한을 주지 않습니다. 증상 가드를 덧붙이지 않습니다.
5. 제약 주석은 `do not remove`, `do not change wording`, `talk to X before changing`이라고 말합니다. 우리가 바꿀 수 없는 것에 대한 유지는 남깁니다. 범위 안의 가장 값싼 타입, 런타임, 테스트, CI 린트를 제안합니다. 대화형에서는 승인을 기다리고 무인과 eval은 호출자의 사전 승인이 필요합니다. 승인되면 인코딩한 뒤 주석을 삭제합니다. 아니면 삭제하고, 제약을 열린 채로 보고하고, 범위 밖 작업을 스케치합니다.
6. 삭제 수, 복원된 주석, 재실행, architect 스케치, 수정, 인코딩 제안, 인코딩, 강제되지 않은 제약, 그 밖의 열린 작업을 보고합니다.

### 사용 예

안내서가 설명하는 흐름입니다. `/no-comments`는 Comment Sicko를 띄웁니다. 짧은 유지 목록(라이선스 헤더, 공개 API의 문서 주석, 코드가 말할 수 없는 것을 설명하는 링크, 바꿀 수 없는 외부 의존성이 강제한 동작)을 가진 리뷰어입니다. 나머지는 모두 갑니다. 우리 코드의 놀라움은 그런 예외를 받지 못합니다. 그 주석은 재구성 플래그로 돌아오고 `/no-comments`가 수용한 플래그를 근본 원인에서 고칩니다. 주석이 "do not remove" 같은 제약을 주장하면 스킬은 그 주장을 타입, 테스트, 린트로 인코딩하겠다고 제안합니다. 어느 쪽이든 주석은 사라집니다.

### 함정과 주의점

- Comment Sicko의 규칙을 다시 말하지 않고 범위만 넘깁니다.
- 애플리케이션 코드를 편집한 보고서, 범위를 벗어난 보고서는 거부합니다.
- 우리 코드의 놀라움을 이유로 주석을 복원하지 않습니다. 유지는 우리가 바꿀 수 없는 것에 관한 증명이 있을 때만입니다.
- 범위 밖의 근본 원인은 범위 안의 가장 작은 수정만 하고 나머지는 열린 채로 보고합니다. 증상 가드를 덧붙이지 않습니다.
- 제약을 인코딩하려면 대화형 승인을 기다립니다. 무인과 eval은 호출자의 사전 승인이 있어야 합니다.

### 관련 스킬

[Comment Sicko 에이전트](#agent-comment-sicko), 필요할 때 부르는 `how`와 `why`, 모양이 필요할 때의 `architect`입니다. 코드 슬롭 정리는 cursor-team-kit의 `deslop`, 글은 [`unslop`](writing.md#skill-unslop)입니다.

## Comment Sicko {#agent-comment-sicko}

원문: {{src:agents/comment-sicko.md}} {{src:README.md}}

> 삭제를 즐기고 우회 코드를 단죄하는 주석 혐오자. 애플리케이션 코드는 쓰지 않고 주석만 만지는 리뷰어입니다.

pstack은 `Comment Sicko`라는 주석 리뷰어(README는 읽기 전용이라고 소개)를 서브에이전트로 함께 싣고, `subagent_type: "Comment Sicko"`로 쓸 수 있습니다. README는 보통 직접 부르지 말고 `/no-comments`를 통해 부르라고 안내합니다. 정의 파일의 목소리는 일부러 과장되어 있습니다. 시작하면 첫 출력은 정확히 "Yes... Ha ha ha... Yes!"입니다. 그다음 규칙은 다음과 같습니다.

- 입력은 부모가 준 범위 파일이나 diff입니다. 없으면 `main` 대비 현재 diff입니다. 서술, 배너, 주석 처리된 시체, 우회책 설교를 모두 노립니다.
- **살아남는 예외는 다섯 가지뿐입니다.**
  - 법적 헤더나 라이선스 헤더.
  - 우리가 모양을 바꿀 수 없는 외부 의존성, 플랫폼, 벤더, 프로토콜이 강제한 자명하지 않은 동작. 우리 코드의 놀라움은 고기입니다. 지우고, 이름 변경, 추출, 타입, 재설계로 산문 없이도 동작이 자명해지도록 그 심볼에 `MUST KILL`을 표시합니다.
  - `// prettier-ignore`. 린트 억제는 그 규칙이 결함이 있거나 지나치게 꼼꼼하거나 스타일뿐일 때만 살아남습니다.
  - 공개 API 계약을 정의하는 문서 주석.
  - 코드로는 표현할 수 없는 제약을 설명하는 이슈나 RFC 링크.
- 이 목록이 유일한 끈입니다. 유지 조항이 적용되는지 확신이 없으면 그 주석은 죽습니다.
- `eslint-disable`, `@ts-ignore`, `@ts-expect-error`와 비슷한 억제는 냄새가 납니다. 규칙을 찾아봅니다. 진짜 버그를 잡거나 정확성이나 안전을 지키는 규칙이면 억제를 죽이고 그 죄 있는 심볼에 `MUST KILL`을 표시합니다.
- `IMPORTANT`, `do not remove`, `too risky`, `fine for now`, 긴 정당화는 확신이 아니라 냄새입니다. 판단하기 전에 근처 코드를 읽고, 그 주장이 거기서 자명하지 않으면 지명된 심볼이나 호출에 `how`와 `why` 스킬의 `/how`, `/why`(또는 둘 다)를 돌립니다. 오늘 살아 있는 경로에서 참으로 증명된 외부의 유지 목록 함정만 살아남고, 우리 코드의 놀라움은 위 재구성 플래그와 함께 죽습니다. 사냥 뒤에도 의심스러우면 고기입니다.
- 유지 목록의 증명된 예외가 없는 긴 정당화는 자백입니다. 죽이고, 고기를 더 짧은 알리바이로 다듬지 않으며, 죄 있는 심볼에 `MUST KILL`을 표시합니다. 이 리뷰어의 처형은 거기서 끝납니다. 코드는 건드리지 않습니다.
- 모든 플래그는 범위 안의 코드를 이름 붙이고 사실을 말합니다. 아무것도 지어내지 않습니다. 주석을 만지고 리팩터링 대상을 식별하며 애플리케이션 코드는 절대 쓰지 않습니다.
- 보고만 합니다. 만진 파일, 삭제 수, 한 줄씩의 `MUST KILL` 플래그, 건너뜀을 이름 붙입니다.

`/no-comments` 스킬이 이 에이전트의 보고를 검사하고, 애플리케이션 코드 편집 같은 규칙 위반은 거부하며 수용한 플래그를 직접 처리합니다. Comment Sicko는 주석을 직접 지우고 삭제 수를 보고하지만 애플리케이션 코드는 쓰지 않습니다. 코드를 바꿔야 하는 곳은 `MUST KILL`로 표시만 하고, 그 수정은 `/no-comments`가 맡습니다. README와 안내서는 이 에이전트를 "읽기 전용"이라고 부르지만, 정의 파일은 스스로 "주석을 만지고 리팩터링 대상을 식별한다"고 말합니다. 이 책은 정의 파일의 표현을 따릅니다.

## typescript-best-practices {#skill-typescript-best-practices}

원문: {{src:skills/typescript-best-practices/SKILL.md}} {{src:skills/typescript-best-practices/references/patterns.md}} {{src:docs/guide/05-build-and-clean.md}}

> `type-system-discipline` 원칙을 TypeScript 문법에 접지하는 규칙 열여섯 개입니다.

### 언제 쓰는가

원문의 `description`은 ".ts나 .tsx 파일을 읽거나 편집할 때"이고 프런트매터에 `paths: ["**/*.ts", "**/*.tsx"]`가 있습니다. 안내서는 이 스킬이 워크플로에 슬래시 명령이 없고 에이전트가 `.ts`나 `.tsx` 파일을 건드릴 때마다 스스로 로드되어 타입 시스템 원칙(principle)을 구체적 규칙(rule)으로 바꾼다고 설명합니다. 판별 유니온, 경계의 `unknown`, 완전한 변형 매칭, 스키마에서 도출한 타입입니다. 프런트매터에는 다른 스킬처럼 `disable-model-invocation: true`도 있습니다. 원문이 이 스킬의 첫 지시로 두는 것은 `type-system-discipline` 원칙을 먼저 적용하라는 것입니다.

### 동작 방식

이 스킬 본문은 규칙 표 하나이고, 코드 예제는 `references/patterns.md`에 있습니다.

| 규칙 | 요약 |
| --- | --- |
| Discriminated unions | 불가능한 상태가 표현될 수 없도록 `kind` 리터럴 판별자로 변형을 모델링합니다. 선택 필드 주머니는 안 됩니다 |
| Branded types | 원시 타입을 `& { readonly __brand: "X" }`로 브랜딩해 서로 섞이지 않게 합니다. 경계에서 한 번 검증(validation)합니다 |
| Constructive modeling | 불법 값을 만들 수 없게 모양을 짭니다. 비어 있지 않음은 `[T, ...T[]]`, 짝수 길이는 `[T, T][]`, 범위는 `start`와 `duration`. 런타임 가드도 정제 타입에 대한 소망도 아닙니다 |
| Simplest total type | 모든 연산이 전체(total)인 동안은 `T[]`를 유지합니다. 느슨한 타입이 `!`, 캐스트, "일어나면 안 되는" throw를 강제하는 곳에서만 `NonEmpty<T>`로 강화합니다 |
| `unknown` over `any` | 외부 데이터는 `unknown`입니다 |
| Schemas before guards | 속성별 타입 가드를 손으로 쓰기 전에 저장소의 런타임 스키마 라이브러리를 쓰고 `z.infer`처럼 스키마에서 타입을 추론합니다 |
| No `as` casts | 모든 `as`는 런타임 충돌이 기다리는 것입니다. 캐스트는 타입 시스템이 주장을 검증한 뒤에만 하고, 경계는 그 모양을 소유한 스키마로 파싱합니다 |
| Narrowing hierarchy | 판별자 switch > `in` 연산자 > `typeof`/`instanceof` > 사용자 정의 타입 가드 > `as` |
| Type guards | 주장을 실제로 검증해야 합니다. 거짓말하는 가드는 `as`보다 나쁩니다. 안전하다고 말하는 이름 뒤에 버그가 숨기 때문입니다. `isX`나 `hasX`로 이름 붙입니다 |
| Exhaustiveness | default 분기에 `const _exhaustive: never = x;`를 인라인으로 두어 새 변형이 추가되면 컴파일러가 오류를 냅니다 |
| `satisfies` over `as` | 리터럴 타입을 넓히지 않고 값을 검증합니다 |
| Boundary validation | 데이터가 들어오는 곳에서 이름 붙은 도메인 타입으로 파싱합니다. `Record<string, unknown>`(어떻게 쓰든)은 그 파싱에서 멈춥니다. 안쪽에서는 타입을 믿습니다 |
| Schema-derived types | 새 인터페이스를 선언하기 전에 `Pick`, `Omit`, `Parameters`, `ReturnType`, `Awaited`, `typeof`를 씁니다 |
| Object args | 위치 인자가 아니라 객체를 넘겨 인자 순서가 스스로 설명되게 합니다. 핫 경로(프레임마다 렌더, 토크나이저, 파서)에서는 건너뜁니다 |
| Real tests | 돌릴 수 있는 것을 목으로 대체하지 않습니다. 누수와 dispose 검사가 있는 프레임워크의 실제 테스트 기본 요소를 선호하고, UI는 실행 중인 빌드에서 검증(verification)합니다. 로컬에서 돌릴 수 없는 것만 목으로 만듭니다 |
| Structured telemetry | 아이디로 디버그할 만큼 충분한 맥락이 있는 구조화된 로거 진단을 선호합니다. 출하되는 코드에 `console.log`는 없습니다 |

#### 코드 예제(`references/patterns.md`)

**브랜드 타입.** `AgentId`는 밑바닥이 문자열이지만 섞이면 안 됩니다. 경계에서 한 번 검증(validation)하고 아래에서는 타입을 믿습니다. `readonly __brand: 'X'` 모양을 맞추고 새 관례를 만들지 않습니다.

```ts
type AgentId = string & { readonly __brand: "AgentId" };

function parseAgentId(input: string): AgentId {
  if (!isUUID(input)) throw new Error(`Invalid agent id: ${input}`);
  return input as AgentId;
}

function focusAgent(id: AgentId): void {
  /* input is trusted */
}
```

**판별 유니온.** 모든 변형이 같은 필드 이름을 공유하고 각 변형의 값이 유일해 불가능한 조합을 표현할 수 없습니다. 판별자 이름(`kind`, `type`, `tag`) 하나를 골라 고수합니다.

```ts
// Don't. Boolean + optionals lets contradictory states exist.
type DiffState = { loading: boolean; diff?: GitDiff; error?: string };

// Do. Only valid states exist.
type DiffState =
  | { kind: "loading" }
  | { kind: "ready"; diff: GitDiff }
  | { kind: "error"; error: string };
```

**구성적 모델링.** 런타임 검사로 느슨한 타입을 제한하는 대신 모두 합법인 부분으로 타입을 짓습니다. 비어 있지 않음은 가변 튜플로 표현합니다.

```ts
type NonEmpty<T> = [T, ...T[]];

// Don't: T[] plus a length check every caller must repeat
function pickWinner(entries: string[]): string {
  if (entries.length === 0) throw new Error("no entries");
  return entries[Math.floor(Math.random() * entries.length)];
}

// Do: an empty value of the type can't exist
function pickWinner(entries: NonEmpty<string>): string {
  return entries[Math.floor(Math.random() * entries.length)];
}
```

평범한 `T[]`가 들어오면 가드로 한 번 좁힙니다. 그러면 사실이 타입을 타고 이동합니다. `const isNonEmpty = <T>(arr: T[]): arr is NonEmpty<T> => arr.length > 0;`입니다. 짝수 길이는 `type Pairs<T> = [T, T][];`로, 시간 범위는 `{ start: Date; end: Date }`에 주석으로 `start <= end`를 적는 대신 `{ start: Date; durationMs: number }`로 표현합니다. 그러면 음수 범위를 쓸 수 없고 끝은 필요할 때 도출합니다. `durationMs`는 평범한 숫자로 두고, 기간이 와야 할 자리에 원시 숫자가 넘어올 수 있을 때만 브랜딩합니다. 반사적으로 하지 않습니다. 나쁜 상태를 만들 수 없게 하는 표현을 고른 다음 필요한 읽기(`pairs.flat()`, `rangeEnd()` 헬퍼)를 그 위에 노출합니다.

**가장 단순한 전체 타입.** 모든 것을 강화하지 않습니다. 모든 연산이 전체이면 `T[]`를 유지합니다(`const sum = (xs: number[]) => xs.reduce((a, b) => a + b, 0);`에서 `[]`는 0이라 괜찮습니다). 느슨한 타입이 사용 지점에서 거짓말을 강제할 때 강화합니다. 징후는 `!`, `arr[0] as T`, "일어나면 안 되는" throw입니다.

```ts
// Don't: partiality smuggled past the compiler
function newestSession(sessions: Session[]): Session {
  return sessions.at(0)!;
}

// Do: strengthen the input; the assertion disappears
function newestSession(sessions: NonEmpty<Session>): Session {
  return sessions[0];
}
```

결과를 `Session | undefined`로 약화하는 것이 다른 전체 시그니처입니다.

**`unknown`이 `any`보다.** 외부 데이터(RPC 페이로드, `JSON.parse`, `postMessage`, IPC, 파일 내용, 환경변수, 데이터베이스 결과)는 언제나 `unknown`이고 사용 전에 좁힙니다.

```ts
// Don't
function handle(input: any) {
  return input.foo.bar;
}

// Do
function handle(input: unknown) {
  if (typeof input === "object" && input !== null && "foo" in input) {
    // narrowed; compiler verifies access
  }
}
```

**손으로 쓴 가드보다 스키마.** 외부 데이터에 속성별 타입 가드를 쓰기 전에 저장소의 런타임 스키마 라이브러리와 기존 스키마를 찾습니다. 스키마 하나가 검증을 소유하게 하고 TypeScript 타입은 거기서 도출합니다. 스키마, 중복 인터페이스, 서로 어긋날 수 있는 가드를 함께 유지하지 않습니다.

```ts
import { z } from "zod";

const UserSchema = z.object({
  id: z.string().uuid(),
  role: z.enum(["admin", "member"]),
});

type User = z.infer<typeof UserSchema>;

function parseUser(input: unknown): User {
  return UserSchema.parse(input);
}
```

실패가 예상된 분기이면 `safeParse`를, 저장소가 다른 스키마 라이브러리를 쓰면 그것의 추론 헬퍼를 씁니다. 가드 하나 때문에 새 스키마 의존성을 추가하지 않습니다. 코드베이스가 이미 믿는 스키마 시스템을 선호하는 규칙입니다.

**`as` 캐스트 금지.** 모든 `as`는 잠재적 런타임 충돌입니다. 타입 시스템이 주장을 검증한 뒤에만 캐스트합니다. 존재만 보는 타입 술어(`"id" in data`처럼)로 캐스트를 얻어 내지 않습니다. 경계는 그 모양을 소유한 스키마로 파싱합니다.

```ts
import { z } from "zod";

const userSchema = z.object({ id: z.string(), name: z.string() });
type User = z.infer<typeof userSchema>;

function parseUser(data: unknown): User {
  return userSchema.parse(data);
}
```

타입이 먼저 오면 스키마에 그 타입이 증명하는 주석을 답니다. 아래 객체에서 `name`을 빼면 대입이 컴파일되지 않습니다.

```ts
type User = { id: string; name: string };

const userSchema: z.ZodType<User> = z.object({ id: z.string(), name: z.string() });
```

기존 코드에서 `as`를 걷어 낼 때는 TypeScript가 왜 추론하지 못하는지 찾습니다. 판별자가 없으면 추가하고 판별 유니온으로 바꿉니다. 소스 타입이 너무 넓으면(예: `Record<string, unknown>`) 좁힙니다. 경계가 타입 없이 열려 있으면 그 모양을 소유한 스키마로 파싱합니다. 스키마는 없는 곳에만 더합니다. 정말 표현할 수 없으면 브랜드 타입이나 `satisfies`를 씁니다.

**좁히기 위계.** 최선에서 최후 수단까지 다음 순서입니다. (1) 판별 유니온 switch나 if, 컴파일러가 자동으로 좁힙니다. (2) `in` 연산자, `"key" in obj`가 그 키를 가진 변형으로 좁힙니다. (3) `typeof`와 `instanceof`, 원시 타입과 클래스 인스턴스용. (4) 사용자 정의 타입 가드, 위가 부족할 때. (5) `as` 캐스트, 검증 뒤에만.

**타입 가드.** 가드는 주장을 실제로 검증해야 하고 거짓말하는 가드는 `as`보다 나쁩니다. 가능하면 판별자 좁히기를 선호합니다.

**완전성 검사.** default 분기에서 판별자를 `never` 타입의 지역 변수에 대입합니다. 값을 반환하는 switch에서는 `default: { const _exhaustive: never = s; return _exhaustive; }`, 문장 switch에서는 `default: { const _exhaustive: never = s; void _exhaustive; }`입니다. 값을 반환하는 switch에는 반환 방식, 문장 switch에는 void 방식을 씁니다.

**`satisfies`가 `as`보다.** `satisfies`는 리터럴 타입을 넓히지 않고 검증합니다. `const config = { theme: "dark", cols: 3 } as Config;`은 넓혀서 리터럴 타입을 잃지만, `const config = { theme: "dark", cols: 3 } satisfies Config;`는 검증하면서 리터럴 타입을 보존합니다(`config.theme`은 `string`이 아니라 `"dark"`).

**경계 검증.** 데이터가 들어오는 곳에서 한 번 검증하고 안쪽에서는 타입을 믿습니다. wire 형식(proto, JSON-RPC)은 순방향 호환 변경이 옛 클라이언트를 깨지 않도록 `ignoreUnknownFields`로 파싱합니다. 영속된 JSON은 파싱을 try/catch로 감싼 버전 있는 blob으로 둡니다. 호출 사슬 깊은 곳에서 재검증하지 않습니다.

**스키마에서 도출한 타입.** `.proto`, OpenAPI 명세, GraphQL 스키마, 데이터베이스 마이그레이션이 이미 모양을 정의하면 복제하지 말고 생성된 타입에서 도출합니다. 복제한 모양은 스키마가 바뀔 때 표류합니다. `Pick<ChecksMessage, "totalCount" | "checks">`처럼 생성된 스키마 타입에서 도출하고, 새 인터페이스를 쓰기 전에 `Pick`, `Omit`, `Parameters`, `ReturnType`, `Awaited`, `typeof`를 씁니다.

**객체 인자.** 위치 인자를 섞어도 컴파일되는 `openFile(uri, { startLineNumber: 10, ... })` 대신 `openFile({ uri, selection: { ... } })`처럼 순서에 무관하고 스스로 설명하는 형태를 씁니다. 프레임마다 렌더, 토크나이저, 파서, 할당 비용이 중요한 빡빡한 루프 안에서는 건너뜁니다.

### 사용 예

`.ts`나 `.tsx` 파일을 건드리면 에이전트가 이 규칙을 스스로 씁니다. 따로 부를 필요는 없습니다. 예를 들어 상태를 `{ loading: boolean; diff?: GitDiff; error?: string }`처럼 모델링한 코드를 리뷰하면 판별 유니온으로, `data as User`가 보이면 그 모양을 소유한 스키마의 파싱으로, switch의 default가 비어 있으면 `never` 완전성 검사로 바꾸게 됩니다.

### 함정과 주의점

- 규칙(rule)의 바탕은 언어에 무관한 [`type-system-discipline`](principles.md#skill-principle-type-system-discipline) 원칙(principle)입니다. 이 스킬은 그 원칙의 TypeScript 문법 접지일 뿐이고 원칙을 먼저 적용합니다.
- 브랜드는 반사적으로 붙이지 않습니다. 원시 값이 잘못 넘어올 수 있을 때만 붙입니다.
- 모든 타입을 `NonEmpty<T>`로 강화하지 않습니다. 느슨한 타입이 `!`, 캐스트, throw를 강제하는 곳만입니다.
- 스키마 라이브러리가 저장소에 없는데 가드 하나 때문에 새 의존성을 추가하지 않습니다.
- 객체 인자는 핫 경로에서 건너뜁니다.
- 거짓말하는 타입 가드는 `as`보다 나쁩니다.

### 관련 스킬

[`type-system-discipline`](principles.md#skill-principle-type-system-discipline), 경계 검증을 다루는 [`boundary-discipline`](principles.md#skill-principle-boundary-discipline), 스키마 도출을 뒷받침하는 [`encode-lessons-in-structure`](principles.md#skill-principle-encode-lessons-in-structure)입니다.
