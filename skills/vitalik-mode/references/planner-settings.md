# Planner settings

Use this reference when an activation or a new planning request needs a route.
Use the [host adapters](host-adapters.md) to start the planner.

## Contents

- [Apply the selectors](#apply-the-selectors)
- [Select a planning route](#select-a-planning-route)
- [Select the effort](#select-the-effort)
- [Model names and controls](#model-names-and-controls)

## Apply the selectors

Use the host's native skill prefix with these activation arguments.

```text
on
on <model name or ID>
on --effort <level>
on "<model name with spaces>" --effort <level>
```

Accept a full model name with or without quotes.
Accept `default`, `highest`, or a native effort label.
Treat an unavailable label as a capability limit after validating the command
syntax.
Treat a model name or ID as a positional argument.
Use the command validation in [mode state](mode-state.md).

| Command context | Model selection | Effort selection |
| --- | --- | --- |
| Fresh `on`, including after `off` | Use the supplied model or select one automatically. | Use the supplied effort or `default`. |
| `on` while enabled or armed | Replace the model selector only if supplied. | Replace the effort selector only if supplied. |
| Same-goal continuation | Keep the recorded model selector. | Keep the recorded effort selector. |

When the user supplies only a different model, keep the requested effort selector.
When a new route is necessary, resolve `default` or `highest` for that route.
If the recorded selector is a native level, examine support for that same level.
If that level is unavailable, report the mismatch.
Treat `on --effort default` as a request to restore the default effort policy.
Retain the model selector for an effort-only command.
An explicit model stays fixed.
An automatic selector can resolve to another suitable model.

Record the requested selectors, resolved launch settings, and settings the host
applied.
If the host cannot confirm an applied setting, record it as `unverified`.

## Select a planning route

Examine the current host catalog, configured agent profiles, and delegation schema.
Use an available route within the user's authority and the planner's task scope.
Keep the primary agent on its current model.

If the user supplies a model, keep that identity, including its version and variant.
If the host uses a different ID or alias, confirm that it selects that identity.
If the model is unavailable, use the [planner fallback](planner-contract.md#select-the-route).

If the model selection is automatic, select a model and effort together.
First identify routes that can do the planning task at the selected effort.
Prefer an economical route among the capable routes.
Use available evidence about task fit, expected token cost, latency, and rework.
When a demanding task needs a more capable planner, select one that meets that need.
Use existing comparisons when applicable.
Avoid new cross-provider benchmarks for routine route selection.
Claim a cost advantage only when the evidence supports it.

If cost evidence cannot rank capable routes, use an existing suitable
general-purpose planning route.
Record the cost comparison as unknown.

## Select the effort

For `default`, request native `medium` or its documented balanced equivalent.
If this setting is unavailable, select a documented economical nonmaximum level.
If effort is fixed, use the route only when its documented level fits the default.
Before relying on an inherited setting, confirm that it fits the default.
If an override prevents the default, report the limit.
If a fixed level exceeds the economical policy or cannot be determined, report
the limit.
For an unavailable setting, use the [planner fallback](planner-contract.md#select-the-route).

For `highest`, use the greatest effort the selected route advertises within its
limits.
Use the route's documented ordering for levels such as `max` and `ultra`.
When the user supplies a native level, request that level exactly.
Use a different spelling only when the route documents an equivalent setting.
If a cap, feature, or precedence rule changes an explicit level, report the
mismatch.
Apply the [planner fallback](planner-contract.md#select-the-route) before using
a substitute.

Treat service tier and reasoning effort as separate settings.
If an effort enables delegation, give descendants the same planning limits.

## Model names and controls

Use these names and IDs to identify the requested model in the current host catalog.
Accept the short names `Fable 5.2` and `Opus 5.5` for the listed Claude versions.
Accept other model names and IDs when the host or an authorized route provides them.
The sources describe specific surfaces. The current host determines usable selectors.

| Model name | Known ID | Reasoning controls on the documented surface |
| --- | --- | --- |
| Claude Fable 5.2 | `claude-fable-5-2` | [Claude API][claude-effort] and [Claude Code][claude-code] support `low`, `medium`, `high`, `xhigh`, and `max`. |
| Claude Opus 5.5 | `claude-opus-5-5` | [Claude API][claude-effort] and [Claude Code][claude-code] support `low`, `medium`, `high`, `xhigh`, and `max`. |
| GPT-6.2 Astra | `gpt-6.2-astra` | The [OpenAI API][openai-api] supports `low`, `medium`, `high`, `xhigh`, and `max`. Examine [Codex][codex-models] for its own controls, including `ultra` when available. |
| GPT-6.2 Sol | `gpt-6.2-sol` | The [OpenAI API][openai-api] supports `low`, `medium`, `high`, `xhigh`, and `max`. Examine [Codex][codex-models] for its own controls, including `ultra` when available. |
| Gemini 4 Argon | `gemini-4-argon` | [Google Cloud][gemini-thinking] supports `LOW`, `MEDIUM`, and `HIGH`. |
| Gemini 4 Carbon | `gemini-4-carbon` | [Google Cloud][gemini-thinking] supports `LOW`, `MEDIUM`, and `HIGH`. |
| Gemini 4 Neon | `gemini-4-neon` | [Google Cloud][gemini-thinking] supports `LOW`, `MEDIUM`, `HIGH`, and `XHIGH`. |
| Muse Wonder | `muse-wonder-1.0` | The [Meta Model API][meta-effort] supports `minimal`, `low`, `medium`, `high`, `xhigh`, and `max`. [Muse Code][muse-agents] has its own child controls. |
| Muse Wonder Full | `muse-wonder-full-1.0` | [Muse Code][muse-models] offers this variant on eligible subscriptions. Use the [Muse Code child `effort` field][muse-agents], which includes `medium`, when the account offers this route. |

For a versioned Claude selection, use a family alias only after confirming its version.
A [Claude Code `Agent` call][claude-agents] can take an alias.
An existing custom agent definition can take the exact version ID.

For a direct Google Cloud route, send `MEDIUM` through `thinking_level` for `medium`.
Use the host's spelling on other Google routes.

For base Muse Wonder on the Meta Model API, send `medium` explicitly for the mode
default.
The API uses `max` when the request omits the effort.
Select Muse Wonder Full by its own model ID through Muse Code.
Use the account's `/models` list to confirm the route.

[claude-effort]: https://platform.claude.com/docs/en/build-with-claude/effort
[claude-code]: https://code.claude.com/docs/en/model-config#adjust-effort-level
[claude-agents]: https://code.claude.com/docs/en/sub-agents#choose-a-model
[openai-api]: https://developers.openai.com/api/docs/models
[codex-models]: https://learn.chatgpt.com/docs/models
[gemini-thinking]: https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/start/get-started-with-gemini-4#thinking_levels
[meta-effort]: https://dev.meta.ai/docs/reasoning
[muse-models]: https://dev.meta.ai/models/muse-wonder
[muse-agents]: https://dev.meta.ai/docs/muse-code/agents
