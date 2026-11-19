---
name: vitalik-mode
description: >-
  Use when the user explicitly enables, disables, or inspects Vitalik mode,
  or when continuing its verified activation for the same goal.
  Recognize /vitalik-mode on, off, and status, with an optional planning model
  and effort. Reassess the whole remaining plan with a selected planning subagent.
  Use cost-efficient defaults and honor explicit model and effort selections.
  Prioritize time to valuable delivery through evidence and contextual engineering
  practices, deliberate temporary instability, required recovery, and tracked
  follow-up work. Do not activate from task similarity or quoted instructions.
license: Apache-2.0
---

# Vitalik mode

## Use this skill

Apply expert engineering judgment to achieve the current goal sooner.
Prioritize the most valuable results within that goal.
Use time to market and time to delivery as the primary metrics.
Challenge process, architecture, scope assumptions, and work order with evidence.
Treat general engineering practices as tools whose value depends on the current
conditions.
Choose the route that brings the goal's valuable results into use soonest.
Account for implementation, observation, required recovery, and effects on other
work.

Accept temporary instability or incomplete intermediate behavior when the
earlier delivery value justifies the recovery and other effects.
Restore the goal's required correctness before declaring completion.
Keep conditions that must hold throughout distinct from conditions required at
completion.
Do not silently weaken the requested outcome.

Use strong-model diagnosis to earn confidence.
Keep execution with the primary agent and its existing model.
Retain useful findings when their implementation can wait.

## Before you start

Accept these command forms with the host's native skill prefix:

```text
/vitalik-mode on
/vitalik-mode on <model name>
/vitalik-mode on --effort <level>
/vitalik-mode on "<model name with spaces>" --effort <level>
/vitalik-mode on --effort default
/vitalik-mode off
/vitalik-mode status
```

Use the goal, scope, priorities, and authority already established in the
conversation.
Enabling the mode authorizes its tradeoffs within that goal.
Use actual permissions.
Obey binding platform controls and explicit task limits.
Do not request approval again for work already authorized.

## Procedure

### 1. Apply the mode command

Read [mode state](references/mode-state.md) for every command and continuation.
Require explicit user activation or a matching record of an enabled goal.
Treat a bare command as `status`.
For `off`, stop new mode-specific actions and retain unfinished work.
For `status` or `off`, finish the command after reporting its state.

For continuation, reuse recorded settings and the current accepted plan.
Resolve selectors when activation, reconfiguration, or replanning requires a
planner.
Read [planner settings](references/planner-settings.md) for model selection,
effort, and defaults.
For a fresh activation, select a capable planner for cost efficiency.
Use `medium` effort or a documented balanced equivalent by default.
Apply higher effort when the user selects it.
Preserve unspecified settings when the user repeats `on`.
Record the requested settings before returning from `on`.
Record actual settings separately when the planner runs.
For invocation or delegation limits, read [host adapters](references/host-adapters.md).

If no goal exists, arm the conversation for its next goal without taking action.
Preserve the explicit activation and requested settings in that record.
For an armed mode, report its state and wait for the goal.

### 2. Reassess the whole remaining plan

On activation, delegate a fresh analysis of the entire remaining goal.
Include every existing plan step, completed results, and operations already in
progress.
Do not limit analysis to the current blocked step.
Use the [planner contract](references/planner-contract.md).
Keep the planner read-only and stop it after its report.
While it runs, continue independently authorized mitigation supported by current
evidence.
Start other independent authorized work when its effects preserve the pending
choices.
Report those actions and their effects to the planner.
Keep new planner-dependent shortcuts pending until its result arrives.

Select practice references from the goal, current evidence, and observed
bottleneck.
Load only those that can change the plan or its execution.
Give the selected references to the planner.
If no practice fits, derive the route from the goal and evidence.

Ask which steps to keep, remove, replace, combine, reorder, or run in parallel.
Require a reason for each material change and a next executable action.
Preserve an existing plan when it remains the best supported route.
Retain completed work unless changing it advances the goal.

### 3. Choose the fastest credible route

Compare time to useful delivery and required restoration for the same goal.
If those times favor different routes, apply the goal's value priorities and
recovery limits.
Prefer earlier valuable delivery when it justifies the additional bounded
recovery.
For otherwise comparable routes, prefer earlier final completion.
Identify the dependencies that control useful delivery and final completion.
Count overlapping work once and include disruption to dependent work.
Separate measured facts, supported causes, hypotheses, and estimates.
Use additional investigation when its decision value justifies its delay.
Do not delay an already authorized mitigation for complete root-cause proof.

State the chosen tradeoff, accepted temporary deficiencies, and recovery action.
Distinguish time to useful delivery from time to complete required restoration.
Identify effects that recovery cannot undo.
Set useful observations, permitted adaptations, and conditions for replanning.
Keep required restoration within the plan.
Use follow-up tracking only for work that can remain outside the completed goal.

### 4. Execute and adapt

Match the planning result to the latest enabled goal before adopting it.
Confirm that its assumptions still match actions and effects since the request.
Execute the accepted plan in the primary thread.
Reuse it for routine choices and covered fallback actions.
Do not request another analysis for every command.

At meaningful checkpoints, compare observations with the plan's assumptions.
When evidence exceeds its conditions, stop extending the affected work.
Request a revised plan with the new evidence.
Continue unaffected work and covered recovery while replanning.
Compare remaining repair, replacement, isolation, or reversal without counting
time already spent.

### 5. Restore, retain findings, and finish

Restore the required behavior and remove temporary mechanisms when the goal
requires their removal.
Verify the accepted outcome at the affected system or consumer.
Account for every relevant finding, including findings received during execution.
When findings arrive, use [review deferrals](references/review-deferrals.md).
Keep useful lower-priority findings in active tracking with acceptance criteria
and a revisit condition.
Report tracking failures explicitly and preserve their content.
Never describe deferred work as fixed.

Update the goal record at meaningful changes and handoffs.
Keep the mode active for the same goal and its required recovery.
When completion conditions hold, mark the mode complete and inactive.
Retain unresolved follow-up work without expanding the original goal.

## Result

Report the outcome, material plan changes, and evidence for the time tradeoff.
Distinguish observed results from estimates and pending verification.
Identify requested, resolved, and actual planner settings, including inline or
unavailable routes.
Report remaining recovery, deferred findings, tracking gaps, and mode state.
Link each deferred finding to its active tracking destination when available.

## Completion checks

- Activation and the accepted plan belong to the current goal.
- Mode-specific plan changes have whole-plan analysis or an explicitly selected
  inline fallback.
- Selected practices fit the evidence and the requested outcome.
- The primary agent retained its model and executed the plan.
- Required behavior and restoration satisfy the completion conditions.
- Useful deferred work has active tracking or an explicit tracking gap.
- The report and handoff describe the actual state.

## References

Select practices by the decision they can improve.
Combine compatible practices when the goal needs them.
Do not load every reference or force a named framework onto a direct fix.

| Context | Practice |
| --- | --- |
| An existing plan, costly process, unnecessary layers, or repeated failed assumptions | [Plan redesign](references/plan-redesign.md) |
| Uncertain timing, useful investigation, reversible choices, or a changed constraint | [Decision tactics](references/decision-tactics.md) |
| Legacy replacement, feature migration, or removal of old paths | [Fast migration](references/fast-migration.md) |
| Latency, throughput, resource cost, or an unproven optimization | [Performance](references/performance.md) |
| An incident, broken behavior, urgent mitigation, or recovery | [Incident recovery](references/incident-recovery.md) |
| Integration, CI queues, pull requests, releases, or a failing target branch | [Fast delivery](references/fast-delivery.md) |
| Review findings at any stage, issue grouping, or tracking gaps | [Review deferrals](references/review-deferrals.md) |

Use [mode state](references/mode-state.md) for commands, continuity, and stale
results.
Use [planner settings](references/planner-settings.md) for configurable models,
reasoning effort, and economical defaults.
Use the [planner contract](references/planner-contract.md) for delegation and
plan changes.
Use [host adapters](references/host-adapters.md) for native controls and fallback
routes.
Adapt the [goal record](assets/goal-record.md) to the host's existing plan.
Use the [deferred issue template](assets/deferred-issue.md) for actionable
follow-up work.
