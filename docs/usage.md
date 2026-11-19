# Usage

## Enable the current goal

Use your agent's native skill invocation with these arguments:

```text
/vitalik-mode on
```

The mode uses the current goal and its existing authorization.
It selects the strongest available planning model with the highest supported
effort.
The primary model remains unchanged.
If no goal exists, the mode waits for the next goal in that conversation.

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
A changed planning model or effort requests a new plan before another shortcut.

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
It does not roll back merges or close issues.
Already authorized ordinary work can continue.

## A CI bottleneck example

This example describes intended behavior.
It is not a benchmark or an observed runtime result.

Suppose many compatible pull requests are waiting for saturated compilation
workers.
The planning subagent examines queue duration, cache behavior, changes,
dependencies, and review findings.
It compares the expected total time of normal processing with batch integration
and repair.

If the evidence supports batching, the plan can merge before CI completes.
It can cancel redundant runs to release capacity.
It can accept a temporarily red main branch.
The primary agent then diagnoses the integrated result and repairs shared
failures.

The planner does not assume that every failed check comes from infrastructure.
New evidence can change the batch or its recovery plan.
The delivery report distinguishes merged work, working behavior, and remaining
checks.

## Select the fastest useful tactic

The planner identifies the dependency that determines delivery time.
It compares remaining elapsed time across credible paths.
It includes shared capacity, overlapping work, and recovery.
It can keep a useful check running while another dependency finishes.

The plan specifies batch limits and conditions for adaptation.
The primary agent can grow or shrink a batch within those limits.
It can execute a covered fallback without another planning round.
New effects or invalid assumptions require a revised plan.

Integration, deployment, activation, and consumer verification remain distinct.
A source revert does not necessarily undo data or published artifacts.
The recovery plan identifies the compatible artifact or forward repair.

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

The mode belongs to the current goal, including its integration and recovery
work.
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
