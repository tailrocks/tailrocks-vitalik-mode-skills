# Planner model research

Source review date is 2026-11-20.
The model IDs below identify products on the named surfaces.
The active host and account determine which routes a planner can use.

## Documented models

| Model | Documented model ID | Use and effort on the documented surface |
| --- | --- | --- |
| Claude Fable 5.2 | `claude-fable-5-2` | Anthropic recommends it for demanding reasoning and long-running agent work. The Claude API defaults to `high` and supports `xhigh` and `max`. [Model overview](https://platform.claude.com/docs/en/models/overview) · [Effort](https://platform.claude.com/docs/en/build-with-claude/effort) |
| Claude Opus 5.5 | `claude-opus-5-5` | Anthropic recommends it for most coding and knowledge work. The Claude API defaults to `medium` and supports `xhigh` and `max`. [Model overview](https://platform.claude.com/docs/en/models/overview) · [Effort](https://platform.claude.com/docs/en/build-with-claude/effort) |
| GPT-6.2 Astra | `gpt-6.2-astra` | OpenAI positions it for demanding reasoning and coding. This session's subagent tool accepted `ultra`. [API model](https://developers.openai.com/api/docs/models/gpt-6.2-astra) |
| GPT-6.2 Sol | `gpt-6.2-sol` | OpenAI positions it for everyday coding and agent work. This session's subagent tool accepted `ultra`. [API model](https://developers.openai.com/api/docs/models/gpt-6.2-sol) |
| Gemini 4 Argon | `gemini-4-argon` | Google describes it as a model for complex work. Google Cloud supports `LOW`, `MEDIUM`, and `HIGH`. The default is `MEDIUM`. [Model documentation](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/4-argon) |
| Gemini 4 Carbon | `gemini-4-carbon` | Google describes it as a model for deep, long-running work. Google Cloud supports `LOW`, `MEDIUM`, and `HIGH`. The default is `MEDIUM`. [Model card](https://deepmind.google/models/model-cards/gemini-4-carbon/) · [Thinking levels](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/thinking) |
| Gemini 4 Neon | `gemini-4-neon` | Google describes it as a model for agentic coding with low latency. Google Cloud supports `LOW`, `MEDIUM`, `HIGH`, and `XHIGH`. The default is `HIGH`. [Model guide](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/start/get-started-with-gemini-4) · [Thinking levels](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/thinking) |
| Muse Wonder | `muse-wonder-1.0` | Meta describes it as a model for complex coding and long-running agent work. Meta Model API offers effort from `minimal` through `max`. [Model documentation](https://dev.meta.ai/docs/muse-wonder) |
| Muse Wonder Full | `muse-wonder-full-1.0` | Meta lists it for Muse Code Power Usage and Maximum Usage subscribers. Meta Model API lists only the base Muse Wonder variant. [Model IDs](https://dev.meta.ai/models/muse-wonder) · [Availability](https://dev.meta.ai/docs/muse-wonder) |

## Effort, speed, and delegation

Anthropic offers `speed: "fast"` on Fable 5.2 and Opus 5.5 on supported
platforms.
Fast mode increases the output token rate at a higher price.
Anthropic recommends starting Fable 5.2 at `high` and measuring the gain before
increasing effort.
[Fast mode](https://platform.claude.com/docs/en/build-with-claude/fast-mode) ·
[Fable prompting guide](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-fable-5-2)

In ChatGPT Work and Codex, Max gives one task more reasoning time.
Ultra can use parallel subagents for parts of a complex task.
Ultrafast is a separate OpenAI API service tier that both GPT-6.2 models
support.
Use the host schema to determine the available settings and their effects.
[OpenAI reasoning settings](https://learn.chatgpt.com/docs/models) ·
[Subagents](https://learn.chatgpt.com/docs/agent-configuration/subagents) ·
[OpenAI Ultrafast mode](https://developers.openai.com/api/docs/guides/ultrafast-mode)

Google says that Carbon uses more thinking tokens than Argon for detailed
analysis and verification.
Neon offers an additional `XHIGH` setting.
Use the setting names within each model's controls.
Planning quality depends on the model, the task, and the selected effort.
[Carbon card](https://deepmind.google/models/model-cards/gemini-4-carbon/) ·
[Neon model card](https://deepmind.google/models/model-cards/gemini-4-neon/) ·
[Google Cloud thinking levels](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/thinking)

The Meta Model API default effort for Muse Wonder is `max`.
Cursor documents a `high` default for the same model ID.
Muse Wonder Full has its own ID and requires an eligible Muse Code account.
Inspect `/models` for that account's available routes.
Use `muse export` to see the model that ran.
An unavailable custom-agent selection can fall back to the primary model.
[Meta model selection](https://dev.meta.ai/docs/choose-a-model) ·
[Cursor model documentation](https://cursor.com/docs/models/muse-wonder) ·
[Muse Code custom agents](https://dev.meta.ai/docs/muse-code/agents)

## Poteto source revision

The upstream `main` branch and the latest change to the Poteto skill both
resolved to `e58dd043600587dbaf58ba315e7f2b38373eeb43`.
The existing [Poteto comparison](research.md#comparison-with-poteto) uses
that revision.
Poteto uses Cursor role aliases such as `claude-opus-5-5-xhigh-fast`,
`claude-fable-5-2-high`, and `gemini-4-neon-high`.
Those aliases express that package's role, effort, and speed choices.
[Cursor marketplace](https://cursor.com/marketplace/cursor/pstack) ·
[Poteto skill](https://github.com/cursor/plugins/blob/e58dd043600587dbaf58ba315e7f2b38373eeb43/pstack/skills/poteto-mode/SKILL.md)

## Review evidence

Only `gpt-6.2-astra` and `gpt-6.2-sol` ran as reviewers in this session.
The subagent tool accepted `ultra` for each review.
The findings for the other seven models come from their published
documentation.
Cross-model timing and package installation remain unverified.
See the [maintenance guide](maintenance.md#review-evidence) for recorded
reviews.

## Effect on the skill

Resolve the planner from the current host's capabilities.
Honor explicit model and effort selections that the host supports.
Use the host's capabilities and limits to resolve `highest` for that model.
If the selected effort can delegate, apply the planner's read-only scope to
each child.
Keep execution with the primary agent on its current model.

Compare credible routes using the next decision the planner can improve.
Include queue time, tool work, review time, and possible rework in that
comparison.
Use measured results from equivalent tasks when available.
Vendor positioning and output token rates describe products and generation
speed.
Cross-vendor rankings and end-to-end delivery times require comparable task
results.

The installed skill resolves model choices from the current host.
See the [planner contract](../skills/vitalik-mode/references/planner-contract.md)
and [host adapters](../skills/vitalik-mode/references/host-adapters.md) for
routing and verification.
