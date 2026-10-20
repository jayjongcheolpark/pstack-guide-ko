# 설치와 첫 사용

원문: {{src:docs/guide/01-setup.md}} {{src:docs/guide/README.md}} {{src:skills/setup-pstack/SKILL.md}} {{src:skills/poteto-help/SKILL.md}} {{src:README.md}} {{src:docs/harness/claude-code.md}}

이 장에서는 플러그인을 설치하고, pstack이 쓸 모델을 고르고, 첫 작업을 실행합니다. 설정은 명령 한 줄과 짧은 대화면 끝납니다. 막혔거나 어느 스킬이 맞는지 모르겠으면 같은 장의 [`poteto-help`](#skill-poteto-help)가 안내서와 스킬을 가리킵니다. 일을 시작하기 전에 목표와 문제를 다시 듣기를 원하면 [`in-your-own-words`](#skill-in-your-own-words)를 칩니다. 보내기 전에 프롬프트를 더 깊게, 더 크게는 아니게 다시 쓰려면 [`sharpen`](#skill-sharpen)을 칩니다.

## 플러그인 설치

Cursor 채팅에서 다음을 실행합니다.

```text
/add-plugin pstack
```

Cursor가 설치되었다는 확인을 보여 줍니다.

### Claude Code에 설치

README는 Claude Code에서 이렇게 설치하라고 합니다.

```text
/plugin marketplace add cursor/plugins
/plugin install pstack@cursor-plugins
```

Claude Code는 플러그인 명령과 에이전트 이름 앞에 접두사를 붙이므로 `/poteto-mode`는 `/pstack:poteto-mode`가 됩니다. 나머지 Cursor 이름은 아래 [Claude Code 어댑터](#claude-code-adapter)가 대응합니다.

Claude Code가 설치하는 것은 저장소 루트의 [`harness/pstack/`](https://github.com/cursor/plugins/tree/88d47514b82e7c44f00f2b2a72ff6dd12158038c/harness/pstack)에서 생성한 복사본이고, README와 안내서도 포함합니다. pstack을 바꾼 뒤에는 저장소 루트에서 `node scripts/generate-pstack-harness-trees.mjs`를 실행하고 그 결과를 커밋합니다. 생성 복사가 뒤처져 있으면 CI가 실패합니다. 이 생성 트리는 `pstack/` 밖이므로 이 책의 원문 범위에는 넣지 않았고, README가 밝히는 설치 경로로만 적습니다. Claude Code에서 `/pstack:setup-pstack`은 모델 선택을 `~/.claude/rules/pstack-models.md`에 쓰고, Bugbot이나 자동화처럼 Cursor에만 있는 기능이 필요한 단계는 한 줄 메모와 함께 건너뜁니다.

## Claude Code 어댑터 {#claude-code-adapter}

원문: {{src:docs/harness/claude-code.md}}

pstack 스킬은 Cursor 이름을 씁니다. Claude Code에서는 세션마다 이 파일을 한 번 읽고, 스킬에 나온 Cursor 이름을 아래 표로 바꿉니다. `<pstack>`은 `skills/`와 `docs/`를 담은 폴더입니다. 표에 없는 Cursor 필드는 빼고 그렇게 말합니다. 도구 스키마가 거절하는 필드나 값은 넘기지 않습니다.

### 도구

| Cursor | Claude Code |
| --- | --- |
| `Task` | `Agent` |
| `AskQuestion` | `AskUserQuestion`. `-p` 모드에는 없으므로 평문으로 묻습니다 |
| 할 일 목록을 연다 | 세션이 주면 `TodoWrite`. 없으면 답에 목록을 두고 단계마다 고칩니다 |
| 다른 pstack 스킬을 실행 (`/name` 또는 "the **name** skill") | `<pstack>/skills/<name>/SKILL.md`를 `Read`하고 따릅니다. `Skill` 도구는 pstack 스킬 대부분을 거절합니다. 사용자에게 치라고 할 때는 `/pstack:<name>` |
| `Grep`, `Glob` | 세션에 `Grep`이나 `Glob`가 없으면 `Bash`로 `rg` |

### 서브에이전트 필드

| Cursor | Claude Code |
| --- | --- |
| `subagent_type: generalPurpose` | `subagent_type: "general-purpose"` |
| `poteto-agent`, `comment-sicko` | `pstack:poteto-agent`, `pstack:comment-sicko` |
| `readonly: true` | `subagent_type: "Explore"`. `Bash`는 남으므로 브리프에 "do not edit files"를 쓰고, 뒤에 `git status`를 확인합니다 |
| `readonly: false` | `general-purpose`. 세션의 MCP 서버를 유지합니다 |
| `environment: "cloud"` | `isolation: "worktree"`. 작업자가 체크아웃할 브랜치나 커밋을 밝힙니다 |
| `environment: "local"` | 생략합니다 |
| `cloud_base_branch: <b>` | 작업자에게 먼저 `<b>`를 체크아웃하라고 합니다 |
| `run_in_background: true` | 생략합니다. 서브에이전트는 기본으로 뒤에서 돌고 끝나면 알립니다 |
| `resume` | 새 에이전트를 띄우고 이전 결과를 브리프에 붙입니다 |
| `file_attachments` | 경로를 브리프에 나열합니다 |

### 모델

| Cursor | Claude Code |
| --- | --- |
| `claude-<family>-<version>-<effort>[-fast]`, 예: `claude-opus-5-5-xhigh` | `model: "opus"`와 `effort: "xhigh"`. `model`은 `opus`, `sonnet`, `haiku`, `fable`만. `-fast`는 뺍니다 |
| `grok-*`, `gpt-*`, 그 밖의 비 Claude 슬러그 | `model`을 생략해 세션 모델로 돌리고, 그렇게 말합니다 |
| `auto` 또는 `inherit-parent` | `model`을 생략합니다 |
| `pstack-models.mdc` 규칙, `~/.cursor/rules/pstack-models.mdc` | `~/.claude/rules/pstack-models.md`. Claude Code가 새 세션마다 로드하므로 역할 줄은 이미 컨텍스트에 있습니다. 없으면 그 파일을 읽습니다. 파일이나 그 역할의 줄이 없으면 스킬 기본 슬러그를 씁니다 |
| 역할 값 `<model> <effort>`, 예: `opus high` | `model: "opus"`와 `effort: "high"` |

### setup-pstack

Claude Code는 `~/.claude/rules/`의 `.md` 파일을 새 세션마다 로드하므로, `setup-pstack`은 규칙을 그곳에 씁니다. 단계는 그대로 따르되 아래만 바꿉니다.

- 감지. 감지된 모델은 `Agent` 도구 스키마가 나열하는 `model` 값이고, 각각 `effort` 값에서 강도를 하나 고릅니다. 실제 모델은 `opus xhigh`처럼 `<model> <effort>`로 씁니다. 강도는 마지막 토큰이므로 예산 단계는 본문대로 동작합니다.
- 기본값. 기본 슬러그는 위 행으로 대응합니다. `claude-opus-5-5-xhigh`는 `opus xhigh`, `grok-4.7-xhigh-fast`는 `inherit-parent`입니다.
- 쓰기. `~/.claude/rules/pstack-models.md`를 프런트매터 없이 쓰고, 주석 줄, `# budget` 줄, 5단계의 역할마다 한 줄을 둡니다. 파일 전체를 덮어씁니다. 역할 줄을 `CLAUDE.md`나 `AGENTS.md`에 넣지 않습니다.

### 경로

| Cursor | Claude Code |
| --- | --- |
| `.cursor/skills/`, `~/.cursor/skills/` | `.claude/skills/`, `~/.claude/skills/` |
| `~/.cursor/plugins/`, `.cursor-plugin/plugin.json` | `~/.claude/plugins/`, `.claude-plugin/plugin.json` |
| `.cursor/rules/*.mdc`, 항상 적용 규칙 | `CLAUDE.md`. 없으면 `AGENTS.md`. Claude Code는 `.mdc`를 읽지 않습니다. 모델 규칙은 예외입니다. 위 모델 표를 봅니다 |
| `https://github.com/cursor/plugins/blob/main/pstack/<path>` | 그 파일이 있으면 `<pstack>/<path>`. 플러그인이 스킬과 `docs/guide/`, `README.md`를 싣습니다. 로컬 복사본을 읽고 가져오지 않습니다. 사용자가 링크가 필요할 때만 URL을 줍니다 |
| `~/.cursor/projects/<slug>/agent-transcripts/` | `~/.claude/projects/<slug>/<session>.jsonl` |

기록의 슬러그는 워크스페이스 경로의 `/`와 `.`를 `-`로 바꾼 것입니다. 예: `/Users/you/proj`는 `-Users-you-proj`. 그 폴더 바로 아래의 가장 새 `.jsonl`이 현재 세션입니다. 서브에이전트 기록은 `<session>/subagents/`에 있습니다. 이 워크스페이스 폴더만 읽습니다.

### Cursor에만 있는 기능

Claude Code에는 Cursor 자동화, Bugbot, Cursor 클라우드 에이전트, 내장 PR 도구가 없습니다. 단계가 그중 하나를 필요로 하면 답에 `Skipped in Claude Code: <step>. <reason>.` 한 줄을 두고 다음 단계로 갑니다. 멈추거나 묻거나 재시도하지 않습니다. 이후 단계가 건너뛴 단계가 만든 URL이나 키를 필요로 하면 자리표시자를 남기고 그 줄에 이름을 답니다.

| Cursor | Claude Code |
| --- | --- |
| Cursor 자동화: 루틴, `update_state` 루틴 호출, `api2.cursor.sh/automations` 웹훅, 루틴 깨우기, `SendToUser` 비밀 요청 | 그 줄로 건너뜁니다 |
| Bugbot | GitHub PR의 Bugbot 댓글은 보통 리뷰 스레드이므로, 단계가 주는 포지 명령으로 분류합니다. PR에 Bugbot 검사나 댓글이 없는데 Bugbot을 시작하거나 기다리거나 설정하는 단계는 건너뜁니다 |
| Cursor 클라우드 에이전트 | `environment: "cloud"`는 서브에이전트 필드의 워크트리로 대응합니다. 대시보드 상태나 그 머신처럼 클라우드 에이전트 자체가 필요한 단계는 건너뜁니다 |
| 내장 PR 도구 | 단계가 주는 포지 명령, 예: `gh pr create`를 씁니다. 이것은 건너뛰기가 아니므로 줄을 쓰지 않습니다 |

## 모델 고르기

이어서 다음을 실행합니다.

```text
/setup-pstack
```

`/setup-pstack`은 접근 가능한 모델을 감지하고, 추론 예산을 묻고, 역할별로 어떤 모델을 쓸지 보여 준 다음 원하는 것을 묻습니다. 질문에 답하면 `~/.cursor/rules/pstack-models.mdc`를 씁니다. 모든 pstack 스킬이 읽는 작은 규칙(rule) 파일입니다.

바꾸고 싶은 것만 바꾸면 됩니다. 규칙 파일에 줄이 없는 역할은 스킬의 기본값을 그대로 씁니다. 기본값으로 되돌리려면 그 역할의 줄을 지웁니다. `/setup-pstack`을 다시 실행하면 계열이나 목록, 별칭(`inherit-parent`, `auto`)으로 바꿔 둔 역할은 유지하고, 강도만 다른 슬러그는 새 예산에 맞춰 다시 계산합니다.

**Auto를 쓰는 경우.** 역할의 값을 `inherit-parent` 또는 `auto`로 정하면 pstack은 서브에이전트의 `model` 필드를 생략하고, 서브에이전트는 부모 채팅의 모델을 물려받습니다. 두 값은 같은 뜻이고, 둘 다 모델 슬러그(slug, 모델의 식별 문자열)가 아닙니다. 패널 역할의 값은 목록이고 항목마다 서브에이전트가 하나씩 뜨므로, 목록의 길이가 패널의 크기를 정합니다. 설정은 `swarm workers`도 함께 정합니다. `/swarm`의 모든 워커가 쓰는 기본 모델이고, 경주(race)에서 팔(arm)마다 모델을 지정하면 그것이 우선합니다.

기본값은 `xhigh` 추론으로 돌고, `large` 예산과 같습니다. `unlimited`는 각 모델을 그 계열이 닿는 가장 높은 등급까지 올립니다. Opus는 `max`까지 가고, Grok은 `xhigh`가 끝이므로 그대로입니다. `medium`과 `small`은 추론을 낮춰 토큰을 덜 씁니다.

**기본값이 바뀐 뒤의 규칙 파일.** 기본값이 바뀌어도 그 전에 쓴 규칙은 옛 기본 모델을 고정해 둡니다. 그 역할의 줄을 지우거나 파일을 지운 다음 `/setup-pstack`을 다시 실행하십시오.

### 기본 모델 구성

README가 밝히는 기본 구성은 모델의 강점에 따라 작업을 나누는 것입니다. 코드를 쓰는 위임(기능, 리팩터링, 버그 수정, 성능, hillclimb)은 grok에게 가고, 가장 어려운 변경과 글쓰기, 판단은 opus 5.5로 갑니다. 기본 패널은 opus 5.5와 grok입니다. `/setup-pstack`이 이 모두를 바꿀 수 있습니다.

## 검증 스킬 제안을 받을지 정하기

설정의 마지막에 `/setup-pstack`은 프로젝트에 앱 동작을 증명할 방법이 있는지 봅니다. `verify-*` 스킬이나 기존 하니스(harness, 앱을 구동하고 검사하는 테스트 도구)가 있는지 확인합니다. 둘 다 없으면 `/create-verification-skill`로 하나 만들지 한 번 묻습니다.

승낙하면 `.cursor/skills/verify-<app>/`를 씁니다. 에이전트가 사용자처럼 앱을 구동하는 법을 알려 주는 프로젝트 전용 스킬입니다. 넘겨주기 전에 그 스킬이 실제로 동작하는지 한 번 증명합니다. 거절하면 설정은 그냥 넘어갑니다. `/create-verification-skill`은 언제든 직접 실행할 수 있고, 이 스킬은 [검증 스킬 장](verification.md)에서 다룹니다. 안내서는 pstack이 처음이면 승낙하라고 합니다. 자기 일을 확인할 수 있는 에이전트는 검사가 통과할 때까지 가고, 그렇지 않으면 결과를 사람에게 넘깁니다. 안내서가 이 가이드에서 가장 이득이 큰 것이라고 부르는 것이 검증 스킬입니다.

그다음 설정은 프로젝트에 형식 검증(formal verification) 스킬이 이미 있는지 봅니다. 코드에 대해 모델 검사기, 증명, 또는 다른 검증기를 돌리는 프로젝트 스킬입니다. 없으면 `/create-formal-verification-skill`로 하나 만들지 한 번 묻습니다. 테스트는 누군가 생각해 둔 경우를 검사합니다. 형식 검증 스킬은 "한 작업이 동시에 두 번 돌지 않는다"처럼 코드의 핵심 속성 하나를, 말한 범위의 모든 경우에서 검사합니다. 동시성, 재시도, 상태 기계, 파서가 있고 버그 비용이 크며 테스트가 그 깨지는 경우에 잘 닿지 않을 때 승낙합니다. 아니면 거절하고, 나중에 그렇게 바뀌면 그때 돌립니다. 자세한 내용은 [검증 스킬 장](verification.md#skill-create-formal-verification-skill)에 있습니다.

설정이 끝나면 새 채팅을 시작하십시오. 모델 규칙은 새 세션에 적용됩니다.

## 비용을 줄이려면

pstack은 서브에이전트와 리뷰 패널에 토큰을 더 씁니다. 엄밀함의 대가입니다. 덜 쓰려면 안내서는 다음을 듭니다.

- `/setup-pstack`을 다시 돌려 더 작은 추론 예산이나 더 싼 모델을 고릅니다. 본채팅은 강한 모델, 코드 역할은 더 싸고 빠른 모델이 좋은 나눔입니다.
- 역할을 `auto`나 `inherit-parent`로 두어 채팅 모델로 돌립니다.
- 패널 목록을 짧게 합니다. 항목마다 서브에이전트가 하나씩 뜹니다.
- 엄밀함이 필요한 일에만 `/poteto-mode`를 씁니다. 작고 뻔한 수정에는 쓰지 않습니다.

## 첫 작업 실행

실제 작업이면서 작은 것을 골라, 동료에게 말하듯 설명합니다.

```text
/poteto-mode 이 명령에 --json 플래그를 추가해 줘. 텍스트 출력은 바이트 단위로 그대로여야 해. 두 형식 모두 검증해 줘.
```

할 일 목록을 보십시오. 첫 항목들은 맞춰진 플레이북의 단계를 그대로 복사한 것이고, 이 프롬프트에서는 Feature 플레이북입니다. `/poteto-mode`가 어떤 단계를 건너뛰면 그 단계가 `skip: <이유>`와 함께 목록에 남으므로, 무엇을 하지 않기로 했는지 볼 수 있습니다.

작업을 치기 전에 `/` 메뉴에서 `/poteto-mode`를 고르면 Cursor가 그 메시지에 스킬을 붙입니다. README가 그렇게 안내합니다.

그다음부터는 평소처럼 후속 질문을 하면 됩니다. 대화 내내 `/poteto-mode`를 유지하려면 `/` 메뉴에서 Option+Enter(Mac) 또는 Alt+Enter(Windows)로 Custom Mode를 켭니다. Custom Mode는 모드를 나갈 때까지 매 턴 컨텍스트에 남습니다. Agents Window와 CLI에서 쓸 수 있습니다. Enter만 치면 그 메시지 하나에만 붙고 대화가 이어지면 사라집니다.

## setup-pstack {#skill-setup-pstack}

원문: {{src:skills/setup-pstack/SKILL.md}}

> pstack이 역할별로 어떤 모델을, 어떤 추론 예산으로 쓸지 정하고, 스킬의 기본값을 덮어쓰는 항상 적용 규칙을 씁니다.

### 언제 쓰는가

처음 설치한 직후, 그리고 모델 선택을 바꾸고 싶을 때 씁니다. 원문의 `description`은 `/setup-pstack`, "configure pstack models", "pstack budget", pstack의 모델 선택 변경을 트리거로 듭니다.

### 동작 방식

이 스킬이 하는 일은 `~/.cursor/rules/pstack-models.mdc`를 쓰는 것입니다. 항상 적용되는(always-applied) 규칙으로, 역할마다 모델을 정합니다. 단계는 여덟 개입니다.

1. **사용 가능한 모델 감지.** 이 세션에서 `Task` 서브에이전트에 넘길 수 있는 모델 슬러그를 나열합니다. 이것이 믿을 만한 출처입니다. Cursor가 사용자가 쓸 수 있는 모델을 나열하는 API나 CLI를 따로 제공하면 완전성을 위해 그쪽을 우선합니다. 하나도 감지하지 못하면 사용자에게 접근 가능한 슬러그를 붙여 넣게 합니다. 확인하지 못한 실제 슬러그는 절대 쓰지 않습니다. 별칭 `inherit-parent`와 `auto`는 감지된 슬러그가 아니지만 항상 유효합니다.
2. **현재 상태 읽기.** 기본 역할-모델 매핑은 5단계에 나오는 규칙의 모양입니다. `~/.cursor/rules/pstack-models.mdc`가 이미 있으면 읽어서 `# budget` 줄과 역할 값을 현재 선택으로 취급합니다. 없으면 기본값에서 시작합니다. 5단계에 없는 역할의 줄(예: `how critics`)은 폐지된 역할이므로 버립니다.
3. **예산, 매핑, 확인.**
   - (a) 예산을 묻습니다. 자유 입력보다 AskQuestion을 씁니다. 네 가지 선택지가 있고, 규칙에 현재 예산이 기록돼 있으면 그것을 알려 줍니다. 규칙이 없으면 `large`가 스킬 기본값과 같다고 말합니다. 각각 모델의 추론 강도(effort)에 대응합니다.
   - (b) 예산을 적용합니다. 스킬의 기본값으로 작업 표를 만들고, 다시 실행하는 경우 계열, 목록, 별칭으로 바꿔 둔 역할은 유지합니다.
   - (c) 역할과 모델을 보여 주고 확인을 받습니다. 감지된 집합에 없는 실제 슬러그는 선택이 필요하다고 표시하고, 2단계에서 버린 줄도 알려 줍니다. 그대로 받을지, 특정 역할을 바꿀지 묻고, 선택지로 감지된 모델과 `inherit-parent`, `auto`를 제시합니다.
4. **검증(validation).** 쓰는 모든 실제 슬러그는 감지된 집합에 있어야 합니다. `inherit-parent`와 `auto`는 항상 통과합니다. 고른 슬러그가 사용 불가면 멈추고 다시 묻습니다.
5. **규칙 쓰기.** `alwaysApply: true`, 선택한 라벨과 목표 강도를 담은 `# budget` 줄, 그리고 역할당 한 줄을 씁니다. 파일 전체를 덮어써서 다시 실행해도 결과가 같게 합니다.
6. **확인.** 규칙을 썼고 새 세션부터 적용된다고 알립니다. 스킬을 다시 실행하면 갱신됩니다.
7. **검증(verification) 스킬 제안(선택).** 프로젝트에 실제 앱을 구동해 증명하는 방법(`verify-*` 스킬이나 기존 하니스)이 있는지 확인합니다. 없으면 한 번만 제안합니다. 승낙하면 `/create-verification-skill`을 호출하고, 거절하면 더 권하지 않고 넘어갑니다.
8. **형식 검증 스킬 제안(선택).** 프로젝트에 이미 형식 검증 스킬(코드에 대해 모델 검사기, 증명, 또는 다른 검증기를 돌리는 프로젝트 스킬)이 있는지 확인합니다. 없으면 한 번만 제안합니다. 승낙하면 `/create-formal-verification-skill`을 호출하고, 거절하면 더 권하지 않고 넘어갑니다.

#### 예산 선택지

예산은 `unlimited`, `large`, `medium`, `small` 네 가지입니다. 네 값 모두 모든 실제 슬러그(패널 항목 포함)의 강도 토큰을 각각 `max`, `xhigh`, `high`, `medium`으로 바꿉니다. 강도 토큰은 마지막 토큰이거나, 끝에 `fast`가 붙으면 그 앞의 토큰이고, 사다리는 `max` > `xhigh` > `high` > `medium` > `low`입니다. 결과가 감지된 슬러그가 아니면 같은 계열의 감지된 슬러그 중 목표 이하에서 가장 높은 강도를 쓰고, 그것도 없으면 그 역할을 선택이 필요한 것으로 표시합니다. `inherit-parent`와 `auto`는 바뀌지 않습니다. 원문의 예로 `unlimited`는 `claude-opus-5-5-xhigh`를 `claude-opus-5-5-max`로 바꿉니다. Grok 슬러그는 `xhigh`가 끝이므로 `unlimited`에서도 폴백이 Grok을 `xhigh`에 두고 `grok-4.7-xhigh-fast`는 그대로입니다. `large`는 두 기본값을 유지합니다. `small`은 각각 `claude-opus-5-5-medium`과 `grok-4.7-medium-fast`로 바꿉니다.

#### 규칙 파일의 모양

원문이 보여 주는 규칙 파일은 다음과 같습니다.

```text
---
description: pstack per-role model choices (overrides skill defaults)
alwaysApply: true
---
# pstack model configuration. One line per role. Delete a line to fall back to the skill default.
# `inherit-parent` or `auto` as a value: the role runs on the parent chat model (omit Task `model`). Alias entries in a panel list still count toward its fan-out.
# budget: large (xhigh)
feature, refactoring: grok-4.7-xhigh-fast
bug-fix: grok-4.7-xhigh-fast
perf-issue: grok-4.7-xhigh-fast
hillclimb: grok-4.7-xhigh-fast
judgment and prose: claude-opus-5-5-xhigh
hardest tasks: claude-opus-5-5-xhigh
how explorer: grok-4.7-xhigh-fast
how explainer: claude-opus-5-5-xhigh
why investigators: grok-4.7-xhigh-fast
why synthesizer: claude-opus-5-5-xhigh
reflect tooling: grok-4.7-xhigh-fast
reflect judgment, divergent, synthesizer: claude-opus-5-5-xhigh
arena runners: claude-opus-5-5-xhigh, grok-4.7-xhigh-fast
arena cross-judge pool: claude-opus-5-5-xhigh, grok-4.7-xhigh-fast
swarm workers: grok-4.7-xhigh-fast
architect runners: claude-opus-5-5-xhigh, grok-4.7-xhigh-fast
interrogate reviewers: claude-opus-5-5-xhigh, grok-4.7-xhigh-fast
```

역할 이름을 성격별로 묶으면 다음과 같습니다.

| 역할 | 기본 모델 | 쓰는 곳 |
| --- | --- | --- |
| `feature, refactoring`, `bug-fix`, `perf-issue`, `hillclimb` | grok-4.7-xhigh-fast | 코드를 쓰는 위임 |
| `judgment and prose`, `hardest tasks` | claude-opus-5-5-xhigh | 글쓰기, 판단, 가장 어려운 변경 |
| `how explorer`, `why investigators` | grok-4.7-xhigh-fast | 읽고 수집하는 역할 |
| `how explainer`, `why synthesizer` | claude-opus-5-5-xhigh | 설명과 종합 |
| `reflect tooling` | grok-4.7-xhigh-fast | 도구 관점의 리뷰 |
| `reflect judgment, divergent, synthesizer` | claude-opus-5-5-xhigh | 판단, 발산, 종합 |
| `arena runners`, `arena cross-judge pool`, `architect runners`, `interrogate reviewers` | 두 모델 패널 (opus, grok) | 다중 모델 패널 |
| `swarm workers` | grok-4.7-xhigh-fast | `/swarm`의 기본 워커 |

패널 역할의 값은 쉼표로 이은 목록이고 항목마다 서브에이전트가 하나씩 뜹니다. `arena cross-judge pool`도 목록이지만, Arena가 그중 부모의 모델 계열과 가능하면 다른 값 하나를 골라 씁니다.

### 사용 예

```text
/setup-pstack
```

실행하면 스킬은 감지한 모델을 보여 주고 예산을 묻습니다. 예를 들어 `medium`을 고르면 모든 실제 슬러그의 강도가 `high`로 내려가고, 역할 표가 나옵니다. 특정 역할만 바꾸고 싶다면 그 역할을 지정하고, Auto를 계속 쓰려면 그 값을 `inherit-parent`나 `auto`로 정합니다. 규칙을 쓴 뒤 새 채팅에서부터 적용됩니다.

### 함정과 주의점

- 감지하지 못한 슬러그를 지어서 쓰지 않습니다. 감지가 실패하면 사용자에게 슬러그를 붙여 넣게 합니다.
- `auto`와 `inherit-parent`는 모델 슬러그가 아니라, 모델 필드를 생략해 부모 모델을 그대로 쓰겠다는 표시입니다. 패널 목록 안에 넣어도 패널의 팬아웃 수에는 포함됩니다.
- 5단계의 역할 이름과 다른 줄은 폐지된 역할로 보고 버립니다. 옛 규칙에서 다시 실행했는데 줄이 사라졌다면 그런 경우입니다.
- 규칙은 새 세션부터 적용됩니다.
- 기본값이 바뀌기 전에 만든 규칙은 옛 기본 모델을 고정합니다. 줄이나 파일을 지우고 다시 실행합니다.

### 관련 스킬

[`poteto-mode`](poteto-mode.md#skill-poteto-mode)가 이 규칙을 읽어 서브에이전트의 모델을 정합니다. 마지막 단계에서 [`create-verification-skill`](verification.md#skill-create-verification-skill)과 [`create-formal-verification-skill`](verification.md#skill-create-formal-verification-skill)을 각각 한 번씩 제안합니다. 설치와 첫 프롬프트가 막히면 [`poteto-help`](#skill-poteto-help)가 이 장을 가리킵니다.

## poteto-help {#skill-poteto-help}

원문: {{src:skills/poteto-help/SKILL.md}} {{src:skills/poteto-help/references/prompting.md}} {{src:skills/poteto-help/references/recipes.md}} {{src:README.md}} {{src:docs/guide/README.md}} {{src:docs/guide/01-setup.md}} {{src:docs/guide/02-poteto-mode.md}} {{src:docs/guide/06-verify-and-ship.md}} {{src:docs/guide/07-overnight.md}} {{src:docs/guide/08-principles.md}} {{src:docs/guide/09-make-it-yours.md}} {{src:docs/guide/10-recipes-and-pitfalls.md}}

> pstack에 대한 질문에 답하고, 보낼 수 있는 프롬프트를 건네고, 답이 나온 파일의 공개 사본을 링크합니다. 도움 질문에서는 그 일을 시작하지 않습니다.

### 언제 쓰는가

원문의 `description`은 질문과 함께 `/poteto-help`를 치라는 것입니다. 일을 해 달라는 요청에는 쓰지 않습니다. pstack 이름을 붙여도 일이면 아닙니다. README와 안내서는 막혔거나 어느 스킬이 맞는지 모르겠을 때 이 스킬을 치라고 하고, 칠 때만 돈다고 합니다. 프런트매터에 `disable-model-invocation: true`가 있습니다. 사용자의 말만으로 로드되는 스킬은 `/setup-pstack`뿐입니다.

도움 질문과 일 요청을 가릅니다. "use pstack to fix this bug"처럼 일을 시키면 도움 질문이 아닙니다. 그때는 [`poteto-mode`](poteto-mode.md#skill-poteto-mode)를 읽고 그 밑에서 일을 하며, Custom Mode가 모드를 유지한다고 한 번만 말합니다.

### 동작 방식

이 파일은 질문을 스킬과 안내서 페이지로 보내는 지도입니다. 세부는 그 파일들이 갖습니다. 인용하기 전에 그 파일을 읽고, 이 지도와 어긋나면 그 파일을 따릅니다. 여기 링크는 설치된 플러그인 안을 가리키므로 사용자가 열지 못할 수 있습니다. 공개 사본을 줍니다. `https://github.com/cursor/plugins/blob/main/pstack/` 뒤에 그 경로를 붙입니다.

#### 무엇을 묻는지 알아냅니다

메시지와 대화에서 필요를 읽습니다. "which skill reviews a PR?"처럼 상황이 이미 있으면 그 절로 갑니다. 아직 흐리면 아래 선택지로 객관식 질문 하나를 하고, 고른 절만 답합니다.

- 설정을 한다 (Get set up)
- `/poteto-mode`로 작업을 시작한다
- 상황에 맞는 스킬을 고른다
- 잘못된 실행을 고친다
- pstack을 내 것으로 만든다

답을 바꾸는 상태만 확인하고, 그때만 말합니다.

- `~/.cursor/rules/pstack-models.mdc`가 없으면 이 사용자에게 `/setup-pstack`이 아직 돌지 않은 것이고, 모든 역할이 기본 모델을 씁니다.
- 프로젝트에 `verify-*` 스킬이나 다른 앱 하니스가 없으면 에이전트에게 앱을 스크립트로 돌릴 길이 없습니다. 변경이 동작하는지 증명하는 질문이면 [`/create-verification-skill`](verification.md#skill-create-verification-skill)을 말합니다.
- 프로젝트에 형식 검증 스킬이 없으면 테스트가 닿는 것 너머의 속성은 검사되지 않습니다. 경쟁, 불변식, 테스트가 잘 닿지 않는 다른 경우에 대한 질문이면 [`/create-formal-verification-skill`](verification.md#skill-create-formal-verification-skill)을 말합니다. 이미 있고 그것이 덮는 코드가 마지막 동기화로 기록한 커밋 뒤에 바뀌었으면, 그 코드에 닿는 질문에 [`/maintain-formal-verification-skill`](verification.md#skill-maintain-formal-verification-skill)을 말합니다.

모델 규칙이 없고 그것이 답을 바꿀 때는, 역할마다 모델과 추론 예산을 지금 고를지 묻습니다. 처음이거나, 질문이 설정이나 비용이거나, 답이 어떤 모델이 도는지에 달릴 때입니다. 채팅마다 한 번만 묻습니다. 필요도 흐리면 두 질문을 함께 합니다. 선택지는 둘입니다.

- 지금: `/setup-pstack`을 치게 하고, 질문에도 답합니다.
- 나중: 질문에 답하고, `/setup-pstack`을 돌리기 전까지 모든 역할이 기본 모델을 쓴다는 한 줄을 덧붙입니다.

#### 설정을 한다

1. 채팅에서 `/add-plugin pstack`으로 설치하거나, 사이드바 Customize에서 설치합니다.
2. [`/setup-pstack`](#skill-setup-pstack)을 돌립니다. 추론 예산을 묻고, 역할마다 모델을 정하고, 규칙을 씁니다. 규칙은 새 채팅에 적용됩니다. 그다음 프로젝트에 검증 스킬과 형식 검증 스킬이 없으면 각각 한 번씩 생성할지 묻습니다.
3. 진짜 작업을 `/poteto-mode`로 시작합니다. 목표와, 통과하거나 실패할 수 있는 확인을 함께 줍니다.

설치만으로는 아무것도 바뀌지 않습니다. 스킬을 불러야 합니다. 사용자의 말만으로 로드되는 것은 `/setup-pstack`뿐입니다. 자세한 내용은 README와 안내서 1장에 있습니다. 첫 프롬프트를 함께 다듬겠다고 제안하되, 그때는 `references/prompting.md`를 따릅니다.

비용이 걱정이면 토큰이 어디로 가는지와 덜 쓰는 법을 말합니다. pstack은 서브에이전트와 리뷰 패널에 토큰을 더 씁니다. `/setup-pstack`을 다시 돌려 더 작은 예산이나 더 싼 모델을 고릅니다. 역할을 `auto`나 `inherit-parent`로 두면 채팅 모델로 돌아가므로, 채팅이 Auto이거나 더 싼 모델일 때 토큰을 줄입니다. 패널 목록을 짧게 하면 항목마다 뜨는 서브에이전트가 줄어듭니다. 엄밀함이 필요한 일에만 `/poteto-mode`를 씁니다.

pstack은 Cursor용이고, Claude Code에도 `/plugin marketplace add cursor/plugins` 다음에 `/plugin install pstack@cursor-plugins`로 설치합니다. 거기서는 명령마다 `pstack:` 접두사가 붙으므로 `/poteto-mode`는 `/pstack:poteto-mode`입니다. [Claude Code 어댑터](#claude-code-adapter)가 Cursor 이름을 대응하고, Bugbot이나 자동화처럼 Cursor에만 있는 기능이 필요한 단계는 한 줄 메모와 함께 건너뜁니다.

다른 도구도 스킬을 읽을 수 있습니다. Agent Skills 형식이기 때문입니다. 다만 `/poteto-mode`, `/how`, `/why`, `/teach`를 포함한 대부분의 워크플로 스킬은 역할별 모델을 가진 Cursor 서브에이전트를 띄우고, Custom Mode와 `/loop`는 Cursor 기능이므로 그 부분은 다른 도구에서 동작하지 않을 수 있습니다.

#### `/poteto-mode`로 작업을 시작한다

`/poteto-mode`는 작업에 플레이북을 맞추고, 그 단계를 할 일 목록에 복사하고, 단계가 필요로 하는 다른 스킬을 돌립니다. 건너뛴 단계는 `skip: <이유>`로 목록에 남습니다. 좋은 프롬프트는 목표와 끝난 판별 방법을 말합니다. 스킬을 나열하지 않습니다. 손으로 쓴 순서는 플레이북이 지킬 단계를 빠뜨리거나 뒤섞기 쉽습니다. 프롬프트를 함께 다듬기 전에 `references/prompting.md`를 읽습니다. 안내서 2장에 예가 있습니다.

`/poteto-mode`가 남는지는 시작하는 방식에 달립니다.

- `/poteto-mode`에서 Enter를 치면 그 메시지 하나에만 붙고, 대화가 이어지면 사라집니다.
- Mac의 Option+Enter, Windows의 Alt+Enter, 또는 스킬 항목의 Use as Mode는 Custom Mode를 만듭니다. 모드를 나갈 때까지 매 턴 컨텍스트에 남습니다.
- Cursor 문서는 Custom Mode를 Agents Window와 CLI에 둡니다. 그 밖에서는 새 작업마다 `/poteto-mode`로 시작합니다.

이 이야기가 나오면 [Cursor의 skills 문서](https://cursor.com/docs/skills#using-a-skill-as-a-custom-mode)를 링크합니다. 채팅 중간에서 "new task"는 모드가 새 플레이북을 맞추게 합니다. `/poteto-mode`를 받은 채팅이 플레이북을 돌리고, 플레이북 단계가 띄우는 위임에 `poteto-agent`를 씁니다. 플레이북 자체를 돌리려고 `poteto-agent`를 띄우지 않습니다. 직접 띄운 서브에이전트에서도 같은 스타일을 쓰려면 `subagent_type: "poteto-agent"`로 띄웁니다.

#### 스킬을 고른다

기본 답은 `/poteto-mode`입니다. 단계가 필요로 할 때 다른 스킬 대부분을 돌립니다. 플레이북이 주는 것보다 더 많거나 더 적게 원할 때만 스킬을 직접 이름 붙입니다. 추천하기 전에 그 스킬을 읽고, 예 프롬프트 하나를 줍니다.

| 사용자가 원하는 것 | 스킬 |
| --- | --- |
| 사소하지 않은 작업을 엄밀하게 | [`/poteto-mode`](poteto-mode.md#skill-poteto-mode) |
| 에이전트가 목표와 문제를 이해했는지 일을 시작하기 전에 확인한다 | [`/in-your-own-words`](#skill-in-your-own-words) |
| 보내기 전에 프롬프트를 더 깊게, 더 크게는 아니게 다시 받는다. 프롬프트를 돌려주고 과업은 하지 않는다 | [`/sharpen`](#skill-sharpen) |
| 코드가 지금 어떻게 동작하는지, 새 코드가 어디에 살아야 하는지 | [`/how`](how.md#skill-how) |
| 코드가 왜 이 모양인지, 숫자가 어디서 왔는지 | [`/why`](why.md#skill-why) |
| 변경이나 서브시스템을 평이하게 이해하고 싶다 | [`/teach`](teach-recall.md#skill-teach) |
| 어떤 주제에 대한 자신의 최근 작업을 따라잡고 싶다 | [`/recall`](teach-recall.md#skill-recall) |
| 이 채팅에서 마지막 메시지 이후 바뀐 것을 평이한 말과 작은 시각으로 따라잡고, 사용자를 기다리는 항목을 답만으로 결정할 수 있게 모두 나열한다 | [`/ketchup`](teach-recall.md#skill-ketchup) |
| 작은 diff가 밖에서 무엇을 깨뜨릴 수 있는지 | [`/blast-radius`](tdd-blast.md#skill-blast-radius) |
| 함수 경계를 넘는 코드 전에 타입과 모듈 모양을 정한다 | [`/architect`](architect.md#skill-architect) |
| 같은 지시에 여러 시도를 돌려 좋은 부분을 합친다 | [`/arena`](arena-swarm.md#skill-arena) |
| 조각을 나눠 병렬로 검사하거나 작업자를 경주시키고, 클라우드 에이전트로 | [`/swarm`](arena-swarm.md#skill-swarm) |
| 서로 다른 모델이 diff를 리뷰하고 깨뜨려 보게 | [`/interrogate`](interrogate.md#skill-interrogate) |
| 값싼 로컬 테스트가 있는 버그를 테스트 먼저 고친다 | [`/tdd`](tdd-blast.md#skill-tdd) |
| `.ts`나 `.tsx` 작업에 TypeScript 규칙을 적용한다 | [`/typescript-best-practices`](code-hygiene.md#skill-typescript-best-practices) |
| 리뷰 전에 주석을 걷어 내되, 쓰지 않은 리뷰어에게 맡긴다 | [`/no-comments`](code-hygiene.md#skill-no-comments) |
| 글에서 AI의 티를 걷어 낸다 | [`/unslop`](writing.md#skill-unslop) |
| 문서, RFC, README, PR 설명, 커밋 메시지를 정해 둔 층으로 쓴다 | [`/technical-writing`](writing.md#skill-technical-writing) |
| 마지막 답을 평이한 말로 다시 듣는다 | [`/bro`](utility.md#skill-bro) |
| 에이전트가 앱을 스크립트로 돌리고 동작을 증명하게 | [`/create-verification-skill`](verification.md#skill-create-verification-skill) |
| 검증 스킬과 기능 지도를 앱에 다시 맞춘다 | [`/maintain-verification-skill`](verification.md#skill-maintain-verification-skill) |
| 테스트가 잘 닿지 않는 경쟁, 불변식, 그 밖의 속성을 형식 검증한다 | [`/create-formal-verification-skill`](verification.md#skill-create-formal-verification-skill) |
| 덮는 코드가 바뀐 뒤 형식 검증을 코드에 다시 맞추고, 실패가 표류인지 버그인지 가린다 | [`/maintain-formal-verification-skill`](verification.md#skill-maintain-formal-verification-skill) |
| 성능 숫자를 보고하거나 그 숫자로 행동하기 전에 걸러 낸다 | [`/benchmark-checklist`](verification.md#skill-benchmark-checklist) |
| 크거나 가로지르는 변경, 또는 자리를 뜬 뒤 검토할 변경 | [`/figure-it-out`](arena-swarm.md#skill-figure-it-out) |
| 실행 중 결정 기록을 남기고 나중에 검토한다 | [`/show-me-your-work`](personal.md#skill-show-me-your-work) |
| 역할마다 모델과 추론 예산을 고른다 | [`/setup-pstack`](#skill-setup-pstack) |
| 자신의 작업 습관을 개인 모드 스킬로 만든다 | [`/automate-me`](personal.md#skill-automate-me) |
| 끝난 작업이 가르친 것을 스킬 수정으로 남긴다 | [`/reflect`](personal.md#skill-reflect) |
| 이 저장소에서 에이전트가 같은 실수를 되풀이하지 않게 | [`/correct`](personal.md#skill-correct) |
| 버튼이 웹훅으로 Grok Bot을 깨우는 페이지를 만든다 | [`/make-bot-ui`](benny.md#skill-make-bot-ui) |
| pstack 안을 찾아 다닌다 | `/poteto-help` |

이 표에 없는 옆 스킬 디렉터리가 있으면 프런트매터를 읽고 `description`으로 보냅니다. `principle-*` 디렉터리는 아래 원칙(principle)에서 다룹니다.

가까운 짝입니다.

- `/how`는 코드가 하는 일을 설명합니다. `/why`는 이유를 설명합니다. `/teach`는 하나 또는 둘을 돌리고 결과를 평이하게 설명합니다.
- `/arena`는 모든 작업자에게 같은 지시를 주고 좋은 부분을 합칩니다. `/swarm`은 조각을 나누거나 경주시키고 보고서 하나를 돌립니다.
- `/architect`는 설계를 정한 뒤 바로 구현합니다. 코드를 쓰기 전에 설계를 보려면 "with checkpoint"를 붙입니다.
- `/interrogate`는 diff를 리뷰합니다. `/blast-radius`는 diff 밖의 깨짐을 찾고, 변경을 안전하게 하는 사실 하나를 증명합니다.
- `/recall`은 최근 채팅을 가로질러 맥락을 다시 세웁니다. `/ketchup`은 이 채팅에서 사용자의 마지막 메시지 이후만 다룹니다. 특정 채팅이나 브랜치 하나를 이어받는 것은 Session pickup 플레이북입니다.
- `/in-your-own-words`는 목표와 문제를 자기 말로 다시 말합니다. `/sharpen`은 보내기 전에 프롬프트를 더 깊게 다시 쓰고 과업은 하지 않습니다. `/bro`는 마지막 답을 평이하게 다시 말합니다.
- `/figure-it-out`은 엄밀한 실행 하나를 설계합니다. Orchestrate 플레이북은 여러 날과 여러 PR에 걸친 프로그램을 돌립니다. Autonomous run 플레이북은 작업 하나를 끝 조건까지 밉니다.

pstack에 없는 것입니다.

- `/deslop`, `control-cli`, `control-ui`는 `cursor-team-kit` 플러그인에 있습니다.
- `/loop`와 `/create-skill`은 Cursor 내장입니다.
- pstack에는 `/orchestrate` 스킬이 없습니다. Orchestrate는 `/poteto-mode` 플레이북입니다. 슬래시 메뉴에 `/orchestrate`가 보이면 다른 플러그인이 제공합니다.

#### 플레이북과 원칙

플레이북은 `/poteto-mode` 안의 단계 목록이지 스킬이 아니므로 슬래시 명령이 없습니다. `/poteto-mode` 안에서는 작업을 설명하면 하나가 골라지고, 아래 문구는 하나를 직접 이름 붙입니다.

- "babysit this pr"이나 "check on pr 123"은 Babysit입니다. PR을 병합 준비까지 끌고 거기서 멈춥니다. 사용자가 병합, land, ship을 말하지 않으면 병합하지 않습니다.
- "land the stack"은 Shipping입니다.
- "take over this branch"는 Session pickup입니다.
- "pause safely"는 Pause safely입니다.
- "full autopilot on this queue"는 Autopilot-full입니다. "stack them, don't ship"은 Autopilot-stack입니다.
- "run the eval playbook"은 Eval입니다.

`/poteto-mode` 없이 "babysit this pr" 같은 문구는 같은 일을 하는 Cursor 자체 스킬을 켤 수 있습니다. [`poteto-mode`](poteto-mode.md#skill-poteto-mode)의 Playbooks 절이 모든 플레이북과 적용 때를 적습니다. 안내서 6장이 PR을 열고, babysit하고, 랜딩하는 일을 다룹니다.

pstack에는 계획 스킬이 없습니다. Cursor의 Plan Mode가 나란히 동작합니다. 여러 단계나 스택된 PR에 걸친 작업에서 `/poteto-mode`에게 계획을 물으면 [Multi-phase plan 플레이북](playbooks-long.md#playbook-multi-phase-plan)이 돌아가고, 계획을 쓰고 구현하지 않습니다. 설계 질문이면 Prototype 플레이북이나 `/architect`가 먼저 코드에서 정합니다.

원칙은 규칙(rule) 하나짜리 스킬이고 `/poteto-mode`가 읽어 응답에서 인용합니다. 사용자가 직접 부르는 일은 드뭅니다. 대신 이름으로 조향합니다. 예: "apply prove it works. show me the real output." `/principle-<이름>`을 치면 그때 하나를 로드합니다. 안내서 8장이 목록을 갖습니다.

#### 잘못된 실행을 고친다

| 증상 | 고치는 법 |
| --- | --- |
| 몇 턴 뒤에 모드가 적용되지 않는다 | Enter로 시작했다. Custom Mode로 시작하거나, 작업마다 `/poteto-mode`로 시작한다 |
| 질문이 지난 작업의 다음 단계로 취급된다 | "new task"라고 하거나, 그 턴에 모드가 필요 없다고 말한다 |
| 새 모델 선택이 효과가 없다 | `/setup-pstack`의 규칙은 새 채팅에 적용된다. 새 채팅을 연다 |
| 실행 비용이 생각보다 크다 | 위 설정의 비용 문단을 본다 |
| 스킬이 스스로 로드되지 않았다 | 사용자의 말만으로 로드되는 것은 `/setup-pstack`뿐이다. 나머지는 사용자가 치거나 `/poteto-mode`가 돌릴 때이고, 모드가 모든 스킬을 돌리지는 않는다 |
| 병렬 에이전트가 서로를 덮어썼다 | 에이전트마다 워크트리를 주거나, 머신 하나씩을 받는 클라우드 에이전트로 돌린다 |
| 밤새 실행이 움직이기만 하고 끝난 것이 없다 | `/loop`는 기간이 아니라 통과하거나 실패할 수 있는 확인이 필요하다. 안내서 7장 |
| 초록 빌드로 성공을 주장한다 | 실제 명령, 흐름, 저장된 값, 프로파일을 요구한다. prove-it-works 원칙 |

실행이 흐르면 `references/prompting.md`에 한 줄 조향이 있습니다. 안내서 10장에 함정과 복사할 레시피가 더 있습니다.

#### pstack을 내 것으로 만든다

- [`/automate-me`](personal.md#skill-automate-me)는 사용자의 이력에서 개인 모드 스킬을 초안하고, `/poteto-mode`와 나란히 씁니다.
- 세션이 끝난 뒤 [`/reflect`](personal.md#skill-reflect)는 교훈을 사용자가 승인하는 스킬 수정으로 바꿉니다.
- `/poteto-mode write a skill for <workflow>`는 authoring 플레이북을 돌립니다. eval 플레이북은 스킬 변경을 눈가림으로 시험합니다.
- 오작동하는 스킬은 그것이 잘못된 기능 작업 안이 아니라 별도 PR로 고칩니다.

안내서 9장이 각각을 다룹니다.

#### 응답

답을 앞에 둡니다. 코드 블록의 예 프롬프트는 많아도 하나이고, 맞는 것이 있으면 `references/recipes.md`에서 고쳐 씁니다. 그다음 그 파일의 링크입니다. 사용자가 지도 전체를 달라고 하지 않으면 짧게 둡니다.

### 사용 예

```text
/poteto-help which skill should i use to review this branch?
```

README가 든 예입니다. 스킬은 리뷰 질문을 알아차리고 [`/interrogate`](interrogate.md#skill-interrogate)를 고릅니다. 일을 시작하지 않고, 보낼 프롬프트 하나와 그 스킬의 공개 링크를 줍니다.

> **예시 (이 책의 저자가 만든 것, 원본에 없음)**
>
> 상황: pstack을 방금 설치했고, 어느 명령부터 쳐야 하는지 모릅니다.
>
> 1. `~/.cursor/rules/pstack-models.mdc`가 없으므로 `/setup-pstack`이 아직 돌지 않았다고 말합니다.
> 2. 역할마다 모델과 예산을 지금 고를지 한 번 묻습니다. 지금은 `/setup-pstack`을 치게 하고, 나중이면 기본 모델을 쓴다는 한 줄을 덧붙입니다.
> 3. 설정 절만 답합니다. `/add-plugin pstack`, `/setup-pstack`, 목표와 확인이 있는 `/poteto-mode`입니다.
> 4. 첫 프롬프트를 함께 다듬겠다고 제안하고, 안내서 1장의 공개 링크를 줍니다.
> 5. 버그를 고치거나 코드를 쓰지 않습니다.

### 함정과 주의점

- 도움 질문에서는 일을 시작하지 않습니다. 사용자가 물은 것은 방법입니다. pstack 실행은 토큰을 쓰므로 프롬프트를 보내게 합니다.
- 일을 시키는 메시지는 도움으로 바꾸지 않습니다. `poteto-mode`를 읽고 그 밑에서 하고, Custom Mode를 한 번만 말합니다.
- 이 지도와 대상 파일이 어긋나면 대상 파일을 따릅니다. 인용 전에 그 파일을 읽습니다.
- 설치된 플러그인 경로를 사용자가 열 수 있다고 가정하지 않습니다. `https://github.com/cursor/plugins/blob/main/pstack/`에 경로를 붙인 공개 사본을 줍니다.
- 사용자의 말만으로 로드되는 스킬은 `/setup-pstack`뿐입니다. `/poteto-help`는 칠 때만 돕니다.
- 예 프롬프트는 많아도 하나입니다. 사용자가 지도 전체를 달라고 하지 않으면 짧게 둡니다.

### 관련 스킬

설치와 모델은 [`setup-pstack`](#skill-setup-pstack), 작업의 입구는 [`poteto-mode`](poteto-mode.md#skill-poteto-mode)입니다. 일을 시작하기 전에 목표와 문제를 다시 듣기는 [`in-your-own-words`](#skill-in-your-own-words)입니다. 보내기 전에 프롬프트를 다시 쓰는 것은 [`sharpen`](#skill-sharpen)입니다. 앱을 증명할 방법이 없으면 [`create-verification-skill`](verification.md#skill-create-verification-skill)입니다. 테스트가 잘 닿지 않는 속성은 [`create-formal-verification-skill`](verification.md#skill-create-formal-verification-skill)로 형식 검증(formal verification)합니다. 덮는 코드가 바뀐 뒤의 유지는 [`maintain-formal-verification-skill`](verification.md#skill-maintain-formal-verification-skill)입니다. 자기 방식은 [`automate-me`](personal.md#skill-automate-me), [`reflect`](personal.md#skill-reflect), [`correct`](personal.md#skill-correct)입니다. 사람이 따라갈 표는 [부록의 선택 흐름도](decision-flow.md)에 있습니다.

## in-your-own-words {#skill-in-your-own-words}

원문: {{src:skills/in-your-own-words/SKILL.md}} {{src:README.md}} {{src:skills/poteto-help/SKILL.md}} {{src:skills/poteto-help/references/recipes.md}}

> 에이전트가 사용자의 목표가 무엇이고 어떤 문제를 풀려 한다고 이해한 바를 자기 말로 다시 말합니다.

### 언제 쓰는가

일을 시작하기 전에 에이전트가 목표와 문제를 이해했는지 확인하고 싶을 때입니다. 원문의 `description`은 "Restate in your own words what you think the user's goals are and what problem they're trying to solve. Use for `/in-your-own-words`."입니다. `disable-model-invocation: true`입니다. README는 `/poteto-help` 다음에 이 스킬을 두고, 목표와 문제를 일을 시작하기 전에 다시 듣기를 원할 때이며 `/in-your-own-words`를 칠 때만 돈다고 합니다. `/poteto-help`의 표는 "에이전트가 목표와 문제를 이해했는지 일을 시작하기 전에 확인한다"고 짝을 짓습니다.

### 동작 방식

스킬 본문은 한 문장입니다. 사용자의 목표가 무엇이고 어떤 문제를 풀려 한다고 이해한 바를 자기 말로 다시 말합니다. 확인을 기다리라는 말은 본문에 없습니다.

`references/recipes.md`의 예는 `/in-your-own-words <long or messy ask>`입니다. 길거나 뒤섞인 요청을 붙입니다.

### 사용 예

```text
/in-your-own-words 이 스레드를 읽어. 알림이 재시도 뒤에 두 번 오고, 어떤 사용자는 아예 못 받는다고 해. 먼저 뭐가 깨진 건지부터 맞춰 보자.
```

> **예시 (이 책의 저자가 만든 것, 원본에 없음)**
>
> 상황: 위 요청을 칩니다.
>
> 1. 목표가 무엇이고 어떤 문제를 푸는지를 자기 말로 다시 말합니다. 목표는 알림이 재시도마다 한 번만, 빠짐없이 가게 하는 것이고, 문제는 재시도 뒤 중복과 일부 누락이 한 증상으로 섞여 있다는 것입니다.
> 2. 본문은 그다음 확인이나 작업 시작을 지시하지 않습니다. 그 다음 행동은 사용자가 정합니다.

### 함정과 주의점

- 칠 때만 돕니다. 사용자의 말만으로 로드되지 않습니다.
- 본문은 확인을 기다리거나 일을 시작하지 말라고 하지 않습니다. 다시 말하기가 전부입니다. README와 `/poteto-help`는 쓸 때를 "일을 시작하기 전"이라고 합니다.
- 코드를 건드리지 않고 다시 말하게 하는 `/poteto-mode` 레시피(`read <thread>. restate the underlying issue in your own words`)와 가깝습니다. 그쪽은 플레이북 안에서 다시 말하고, 이 스킬은 그 한 가지만 합니다.

### 관련 스킬

입구는 [`poteto-mode`](poteto-mode.md#skill-poteto-mode), 스킬을 고르는 안내는 [`poteto-help`](#skill-poteto-help)입니다. 보내기 전에 프롬프트를 다시 쓰는 것은 [`sharpen`](#skill-sharpen)입니다. 마지막 답을 평이하게 다시 듣는 것은 [`bro`](utility.md#skill-bro)입니다. 이 채팅의 마지막 메시지 이후를 따라잡는 것은 [`ketchup`](teach-recall.md#skill-ketchup)입니다.

## sharpen {#skill-sharpen}

원문: {{src:skills/sharpen/SKILL.md}} {{src:README.md}} {{src:skills/poteto-help/SKILL.md}} {{src:skills/poteto-help/references/recipes.md}} {{src:docs/guide/02-poteto-mode.md}} {{src:docs/guide/10-recipes-and-pitfalls.md}}

> 과업을 더 깊게, 더 크게는 아니게 만든 뒤 프롬프트를 다시 씁니다.

### 언제 쓰는가

보내기 전에 프롬프트를 더 깊게 만들고 싶을 때입니다. 원문의 `description`은 "Make a task deeper, not bigger, then rewrite the prompt. Use for `/sharpen`."입니다. `disable-model-invocation: true`입니다. README는 `/in-your-own-words` 다음에 이 스킬을 두고, 보내기 전에 프롬프트를 더 깊게, 더 크게는 아니게 만들고 싶을 때라고 합니다. 최상위 전문가가 묻지 않은 것, 그들이 시작하는 원자료, 방법과 도구, 결과가 맞는지 바깥에서 확인하는 검사를 넣고, 다시 쓴 프롬프트를 돌려주며, 사용자의 선택은 열어 두고, 과업은 하지 않는다고 합니다. `/poteto-help`의 표는 "보내기 전에 프롬프트를 더 깊게, 더 크게는 아니게 다시 받는다. 최상위 전문가가 더할 것, 원자료와 방법, 바깥 검사. 프롬프트를 돌려주고 과업은 하지 않는다"고 짝을 짓습니다. 칠 때만 돕니다.

### 동작 방식

스킬 본문은 다시 쓰기 전에 네 가지를 하라고 합니다.

1. 이 분야에서 최상위 전문가가 여기서 할 일 가운데 사용자가 묻지 않은 것을 말합니다.
2. 이미 소화해 준 것 대신, 그들이 시작할 가장 날것의 자료를 이름 붙입니다.
3. 그들이 쓸 구체적인 방법과 도구를 이름 붙입니다.
4. 사용자나 에이전트가 아닌 무엇이 결과가 맞다는 것을 보여 줄지 말합니다.

그다음 바로 그것을 묻는 프롬프트로 다시 씁니다. 사용자가 정할 선택은 대신 정하지 않고 열어 둡니다. 안내서 2장은 다시 쓴 것을 읽고, 맞으면 `/poteto-mode`로 보내라고 합니다. 과업은 하지 않습니다.

`references/recipes.md`의 예는 `/sharpen <the prompt you're about to send>`입니다. 보내려는 프롬프트를 붙입니다.

### 사용 예

```text
/sharpen 검색이 느린 이유를 찾아서 고쳐 줘. 인덱스를 더하는 쪽이든 쿼리를 바꾸는 쪽이든 괜찮아.
```

> **예시 (이 책의 저자가 만든 것, 원본에 없음)**
>
> 상황: 위 요청을 칩니다.
>
> 1. 최상위 전문가라면 프로파일과 느린 쿼리 로그처럼 날것 자료를 먼저 보고, 그들이 쓰는 방법과 도구로 병목을 재현하며, 고친 뒤 같은 질의의 시간으로 바깥에서 확인한다고 말합니다.
> 2. 인덱스냐 쿼리냐는 사용자가 연 선택이므로 대신 정하지 않습니다.
> 3. 그 네 가지를 넣은 프롬프트를 돌려주고, 검색을 고치지는 않습니다. 사용자는 다시 쓴 것을 읽고 `/poteto-mode`로 보냅니다.

### 함정과 주의점

- 칠 때만 돕니다. 사용자의 말만으로 로드되지 않습니다. `poteto-mode`가 이 스킬을 자동으로 부르지 않습니다.
- 다시 쓴 프롬프트를 돌려줍니다. 과업은 하지 않습니다.
- 사용자가 정할 선택은 대신 정하지 않습니다.
- 일을 더 크게 만들지 않습니다. 더 깊게만 만듭니다.
- [`in-your-own-words`](#skill-in-your-own-words)는 목표와 문제를 다시 말하고 멈추고, 이 스킬은 프롬프트를 다시 쓴 뒤 멈춥니다. 둘 다 일을 시작하지 않습니다.

### 관련 스킬

일을 시작하기 전에 목표와 문제를 다시 듣기는 [`in-your-own-words`](#skill-in-your-own-words)입니다. 입구는 [`poteto-mode`](poteto-mode.md#skill-poteto-mode), 스킬을 고르는 안내는 [`poteto-help`](#skill-poteto-help)입니다. 다시 쓴 프롬프트를 보내는 자리는 [`poteto-mode`](poteto-mode.md#skill-poteto-mode)입니다.
