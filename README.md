# tailrocks-vitalik-mode-skills

Vitalik mode applies expert engineering judgment to the current goal.
Time to market and time to delivery are its primary metrics.
It brings the most valuable results forward within the requested outcome.
A strong planning subagent reassesses the whole remaining plan.
It challenges process, architecture, and sequencing with evidence.
It prioritizes earlier useful delivery and accounts for required recovery.
The primary agent keeps its model and executes the accepted plan.

The mode can accept temporary instability or incomplete intermediate behavior.
It restores the required correctness before completion.
Its practices cover feature work, migration, performance, incidents, and
delivery.
Valid review findings remain tracked when their implementation can wait.

## Skills

| Skill | Task |
| --- | --- |
| [vitalik-mode](skills/vitalik-mode/SKILL.md) | Enable, inspect, or disable whole-plan reassessment and fast execution for the current goal. |

This package contains one portable instruction skill and its required resources.
The OpenCode and Amp entry points register the installed skill.

## Install

Install one complete package in your host's chosen scope. The [Tailrocks
catalog](https://github.com/tailrocks/tailrocks-skills) selects the source commit.
Use the route for your host.

| Host | Native install route |
| --- | --- |
| Claude Code | [Marketplace plugin](docs/installation.md#claude-code) |
| Codex | [Marketplace plugin](docs/installation.md#codex) |
| Grok Build | [Marketplace plugin](docs/installation.md#grok-build) |
| Muse Code | [Marketplace snapshot](docs/installation.md#muse-code) |
| omp | [Marketplace plugin](docs/installation.md#omp) |
| OpenCode V2 | [Git package](docs/installation.md#opencode) |
| Amp | [Directory plugin](docs/installation.md#amp) |
| Antigravity | [Local plugin installer](docs/installation.md#antigravity) |
| pi | [Git package](docs/installation.md#pi) |
| Kimi Code | [Marketplace manager](docs/installation.md#kimi-code) |

Run these commands to install from the Claude Code marketplace.

```sh
claude plugin marketplace add tailrocks/tailrocks-skills
claude plugin install tailrocks-vitalik-mode-skills@tailrocks --scope user
```

See [runtime requirements](docs/runtime.md) for tools and files the skills use.

## Use

Enable the mode for the current goal:

```text
/vitalik-mode on
```

The default selects a capable planner for cost efficiency.
It uses `medium` effort or a documented balanced equivalent.
The primary agent keeps its model.

Select a planning model and effort without changing the primary model:

```text
/vitalik-mode on "Fable 5.2" --effort high
/vitalik-mode on gpt-6.2-astra --effort ultra
/vitalik-mode on --effort default
```

Use `highest` only when you want the route's highest supported effort.
The [planner settings](skills/vitalik-mode/references/planner-settings.md)
describe model selection, effort, and host limits.

Inspect or disable it:

```text
/vitalik-mode status
/vitalik-mode off
```

Activation reassesses every remaining step, including an existing plan.
The planner preserves useful completed work and explains material changes.
It selects only the practices that fit the goal and observed bottleneck.
It can remove unnecessary work, change the design, combine steps, or change
their order.
An unchanged plan remains valid when it best serves the goal's delivery
priorities.
The primary agent records the tradeoff and executes the accepted plan.
It requests another plan when material evidence changes.
Earlier valuable delivery can justify a longer bounded recovery period.
Required restoration remains in the active goal until verified.

For a complete migration, the plan includes the requested legacy removal.
For performance work, it targets the measured limiting work.
For CI congestion, it can use authorized administrator merges and temporary
red main.
These workflow details live in optional practice references.

Valid, aligned review findings become issues or linked sub-issues when deferred.
The report distinguishes those findings from fixed defects and reasoned
dismissals.
An unavailable issue tracker leaves an explicit tracking gap in the goal record.

The mode continues for the same goal across turns and handoffs.
It ends when the user disables it or the goal reaches completion.
Persistence depends on the host retaining or reloading the goal record.
See [usage](docs/usage.md) and [compatibility](docs/compatibility.md) for these
limits.

## Documentation

- [Package guide](docs/README.md)
- [Installation](docs/installation.md)
- [Usage](docs/usage.md)
- [Runtime requirements](docs/runtime.md)
- [Model settings](docs/models.md)
- [Compatibility and verification](docs/compatibility.md)
- [Maintenance](docs/maintenance.md)
- [Engineering tradeoffs](docs/research.md)
- [Model research](docs/model-research.md)

## Update and remove

Use [the host's update and removal steps](docs/installation.md).
For a pinned Git package, install the new catalog revision and use one copy in
the chosen scope.
Disable the mode before removing the package from an active goal. Retain
unfinished recovery records and deferred issues. Package removal does not
reverse delivered changes.

## Contribute

Keep the skill procedure in its authoritative file.
Keep required resources inside the skill directory.
Use the [maintenance checks](docs/maintenance.md) before proposing a change.
Report observed host support separately from documentation-based support.

## License

Apache License, Version 2.0.
See [LICENSE](LICENSE).
