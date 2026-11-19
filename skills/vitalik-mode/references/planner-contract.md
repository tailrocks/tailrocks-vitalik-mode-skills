# Planner contract

## Contents

- [Select the route](#select-the-route)
- [Give the planner this task](#give-the-planner-this-task)
- [Required result](#required-result)
- [Primary-agent decision](#primary-agent-decision)

## Select the route

Keep the primary model unchanged.
Use the model and effort selected for planning.
Inspect the host's current delegation schema or advertised model catalog.
Do not infer model availability from a familiar name.
Do not use skill frontmatter as proof that the runtime applied a model setting.

Prefer a native subagent with explicit model and effort selection.
Otherwise, use an already available read-only external agent runner.
Keep the external runner within the authorized workspace and evidence scope.
Do not install credentials, change providers, or rewrite global model settings
to satisfy a selector.

If the requested model is unavailable, report the unavailable selector.
Offer the strongest available planning route.
Use it when existing user instructions authorize that fallback.
Otherwise, keep the selected route pending while collecting useful evidence.
If effort is unsupported, report its actual limit.
Resolve effort ordering from the host's advertised controls.
Do not assume that `max` exceeds `ultra`, or that every host uses either value.
Never represent a primary-thread analysis as a separate subagent review.

## Give the planner this task

Pass task-local evidence with a concise request:

```text
Analyze this goal as a read-only planning subagent.
Do not modify files, merge, cancel workflows, publish releases, or create issues.
Return your plan to the primary agent, then stop.

Goal and completion conditions:
<current goal and delivery target>
<deadline or cost of delay when established>

Scope and authority:
<repositories, targets, permitted actions, explicit limits>

Planning identity:
<goal ID, activation generation, planning request ID>

Observed evidence:
<diffs, logs, review findings, queue timings, current SHAs, source links>
<merge/deployment triggers, affected consumers, compatible recovery artifact>

Existing plan and changed evidence:
<include only when revising a plan>

Prefer the shortest credible total delivery time, including expected repair.
Temporary red main and understood breakage are accepted tradeoffs for this goal.
Locate the bottleneck and the evidence behind the next action.
Identify a plausible conflicting explanation when it would change that action.
Separate evidence, hypotheses, and uncertainty.
Do not wait for final root-cause proof when a supported, bounded action suffices.
Keep deeper diagnosis as explicit work when the cause remains unresolved.
Compare remaining elapsed time to the same accepted outcome across credible paths.
Include overlapping dependencies, recovery, and displaced work.
Keep effects on branch health, live service, and data separate.
Choose checks whose decision or recovery value justifies their incremental cost.
Do not gate on an informative check when its value does not justify the wait.
State the initial batch, adaptation limits, checkpoints, and covered fallbacks.
Preserve valid review findings as fix-now or tracked follow-up work.
Return the result fields below without private reasoning transcripts.
```

Do not pass an intended verdict as evidence.
Give independent reviewers the same relevant observations when comparing
recommendations.
Use more than one planner when disagreement or independent inspection can
materially improve the decision.
Do not turn routine replanning into an open-ended review committee.
If an initial bounded step can proceed, return that plan before researching
unrelated later decisions.
For consequential uncertainty, use the tactics in
[decision tactics](decision-tactics.md).

## Required result

| Field | Content |
| --- | --- |
| Diagnosis | Bottleneck, evidence, cause or hypothesis, and uncertainty that can change the next move. |
| Goal fit | Why the proposed work advances the stated completion conditions. |
| Tradeoff | Remaining critical paths, timing ranges, delay cost, recovery tail, and displaced work. Keep unlike consequences separate. |
| Effects | Branch state, blocked dependents, published artifacts, live service, and persistent writes when relevant. |
| Plan | Ordered steps, input revisions, dependencies, initial batch, adaptation limits, and useful parallel work. |
| Observations | Decisive signal, pass/fail actions, benefit versus incremental wait, and latest useful observation point. |
| Recovery | Expected breakage, compatible recovery source or artifact, residual effects, owner, and checkpoint. |
| Findings | Immediate fixes, valid deferrals, duplicates, and reasoned dismissals. |
| Replan triggers | Changes beyond the plan's limits. Include new failure signatures, effects, dependencies, and missed recovery checkpoints. |

Combine fields when a short answer covers them clearly.
Omit facts that do not apply to the decision.
Use ranges when timings are estimates.
Keep unsupported likelihoods qualitative.
If measurements are missing, identify the smallest useful measurement.
Do not block a credible plan on information that cannot change its immediate
steps.

## Primary-agent decision

Examine whether the plan matches the evidence and current authority.
Resolve material gaps with a focused follow-up to the planner.
Read the latest mode record before accepting the result.
Match its goal, activation generation, and planning request with the current
enabled state.
If they differ, retain the result as history without adopting it.
Record the accepted plan and its concise rationale.
Execute the plan in the primary thread.

Execute conditional actions that the accepted plan already covers.
These actions can include bounded batch growth, isolation, and a specified
rollback.
Request another planning result before changing a material tradeoff beyond
those limits.
Examples include changing the target, exceeding batch limits, or accepting
newly discovered effects.
If new evidence exceeds the accepted plan, request another planning result.
Examples include a recovery overrun or a failed causal assumption without a
covered alternative.
Keep independent work and covered recovery actions moving during replanning.
Routine implementation choices within the accepted plan do not need another
planning round.
