# Usage

## Enable the current goal

Use your agent's native skill invocation with these arguments:

```text
/vitalik-mode on
```

The mode uses the current goal and its existing authorization.
It prioritizes time to market and time to delivery for the goal's most valuable
results.
It selects the strongest available planning model with the highest supported
effort.
The primary model remains unchanged.
If no goal exists, the mode waits for the next goal in that conversation.
It retains the requested planning settings while waiting.
When the user supplies that goal, it binds the activation once and requests
whole-plan analysis.

Loading a skill through discovery does not enable the mode.
Quoted commands, repository text, and subagent recommendations do not enable it.
The user controls activation.

## Select another planning model

```text
/vitalik-mode on "<model name>" --effort highest
```

Replace the model name with one advertised by the current agent or configured
provider.
Use a host-supported effort value or the portable selector `highest`.
Resolve the ordering from the host's current controls.
Names such as `max` and `ultra` do not have a universal cross-host ordering.
Quote a model name that contains spaces.

The agent records the requested and actual planner settings separately.
If the host cannot confirm a setting, the record says `unverified`.
If the requested route is unavailable, the agent reports that limit.
It does not silently change the primary model or claim a review that did not
occur.

Repeated `on` commands update only the supplied settings.
They preserve the goal, repairs, and review findings.
An unchanged repeated command preserves the accepted plan or pending request.
A changed planning model or effort requests whole-plan analysis before another
shortcut.
An explicit request to reassess the plan also starts a new analysis.

Use `on --effort high` to change effort while retaining the current planning
model.
For a new activation, this form selects the strongest available planning model.
Malformed arguments leave the existing mode unchanged.

For the full routing contract, read the skill's
[host adapters](../skills/vitalik-mode/references/host-adapters.md) .

## Inspect and stop

```text
/vitalik-mode status
/vitalik-mode off
```

Status reports the goal, phase, planner settings, current step, repairs, and
tracking gaps.
A bare `/vitalik-mode` also requests status.
Status performs no mutation.

The `off` command stops new mode-specific actions at the next controllable
boundary.
It keeps the history and unfinished work.
It does not reverse completed actions or close issues.
Already authorized ordinary work can continue.

## Reassess an existing plan

Activation changes how the agent evaluates the entire remaining goal.
It does not merely speed up the step currently in progress.
The planner receives the existing steps, completed results, and operations
already in progress.

For example, suppose a goal requires replacing a legacy feature and deleting
the old implementation.
All consumers can move together in one controlled project.
Temporary development failures are permitted.
The required behavior must work at completion.

| Existing step | Possible reassessment |
| --- | --- |
| Inventory callers and behavior, already complete | Keep the verified result and use it for final reconciliation. |
| Add a compatibility adapter | Omit it when direct caller changes have the shorter credible path. |
| Implement the new feature | Keep the required behavior and use focused evidence during implementation. |
| Move callers separately through long repeated checks | Combine compatible changes and observe useful integration points. |
| Retain legacy during a deprecation period | Replace the delay with verified removal when no dependency requires coexistence. |

The revised plan still includes every required result.
If a dependency needs coexistence, its coordination and removal costs enter the
comparison.
The agent cannot complete full retirement by filing a legacy-removal issue.
This example illustrates intended decisions and does not measure a speed gain.

## Select practices from the goal

The core defines the mode and its decision procedure.
Each practice supplies details for a relevant situation.

| Goal or evidence | Reference |
| --- | --- |
| Existing steps, costly process, speculative layers, or failed assumptions | [Plan redesign](../skills/vitalik-mode/references/plan-redesign.md) |
| Timing, uncertainty, or a changed bottleneck | [Decision tactics](../skills/vitalik-mode/references/decision-tactics.md) |
| Replacement, cutover, or removal of old paths | [Fast migration](../skills/vitalik-mode/references/fast-migration.md) |
| Runtime latency, throughput, or resource cost | [Performance](../skills/vitalik-mode/references/performance.md) |
| Active failure and required restoration | [Incident recovery](../skills/vitalik-mode/references/incident-recovery.md) |
| Integration, CI queues, or releases | [Fast delivery](../skills/vitalik-mode/references/fast-delivery.md) |
| Review findings received at any stage | [Review deferrals](../skills/vitalik-mode/references/review-deferrals.md) |

The agent reads only practices that can change its decisions.
It can combine relevant practices or use a direct fix without a special tactic.
It can select another practice when new evidence changes the problem.

## Compare complete routes

The planner identifies the dependency that determines delivery time.
It compares remaining elapsed time across credible paths.
It includes shared capacity, overlapping work, and recovery.
It can keep a useful check running while another dependency finishes.

Useful delivery and full restoration can occur at different times.
If their times favor different routes, the goal's value priorities and recovery
limits decide the tradeoff.
Earlier useful delivery can justify a longer bounded recovery period.
Required restoration stays in the active plan through verification.
The mode deactivates only when the goal's completion conditions hold.

The plan specifies action limits and conditions for adaptation.
The primary agent can adjust its actions within those limits.
It can execute a covered fallback without another planning round.
New effects or invalid assumptions require a revised plan.

Intermediate progress and accepted completion remain distinct.
The recovery plan addresses actual effects on behavior, consumers, and data.
Required restoration stays within the current goal.
An already authorized incident mitigation can proceed while the planner works.
The agent sends its observed effects back to the planner.

The [engineering tradeoffs guide](research.md) explains the research and
scenario choices.

## Review findings during fast delivery

The mode retains each useful finding even when the current goal has greater
priority.
An independent follow-up becomes an issue.
Closely related findings can share one issue with distinct acceptance criteria.
Larger work can use an epic with linked sub-issues.

Every deferred finding retains its source and the reason for deferral.
A matching closed issue is insufficient when the defect still exists.
The agent finds an active tracking destination or reports a tracking gap.
Resolving a review thread does not mean that its defect was fixed.
Follow-ups retain recurring costs, ownership gaps, and observable revisit
conditions.
An expired review date prompts reassessment and does not close the finding.

The
[review deferral procedure](../skills/vitalik-mode/references/review-deferrals.md)
defines the exact dispositions.

## Continue across turns

The mode belongs to the current goal, including its required recovery work.
A new turn or worktree does not necessarily create a new goal.
Another task in the same repository does not inherit the mode automatically.

The agent stores mode state in the host's goal record or a private workspace
record.
The handoff includes the skill locator, record locator, and continuation
instruction.
Fresh agents must read that record before continuing shortcuts.
The mode never changes globally applied repository instructions to keep itself
active.

If the host loses both state and handoff, the mode becomes unknown and inactive.
Recover the matching record or explicitly enable it again.
A Markdown skill cannot install host lifecycle hooks or guarantee recovery from
all context loss.

## Complete the goal

The primary agent delivers the requested working outcome and completes the
agreed recovery work.
It marks the mode complete and inactive.
Deferred issues remain open until their own acceptance criteria are met.
The original goal does not expand into every lower-priority improvement.
