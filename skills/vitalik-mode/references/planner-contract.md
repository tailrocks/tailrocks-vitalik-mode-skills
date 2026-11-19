# Planner contract

## Contents

- [Select the route](#select-the-route)
- [Give the planner this task](#give-the-planner-this-task)
- [Required result](#required-result)
- [Primary-agent decision](#primary-agent-decision)

## Select the route

Keep the primary model unchanged.
Use [planner settings](planner-settings.md) to resolve the requested model and
effort.
Inspect the host's current delegation schema or advertised model catalog.
Do not infer model availability from a familiar name.
Do not use skill frontmatter as proof that the runtime applied a model setting.

Prefer a native subagent with explicit model and effort selection.
Otherwise, use an already available read-only external agent runner.
Keep the external runner within the authorized workspace and evidence scope.
Do not install credentials, change providers, or rewrite global model settings
to satisfy a selector.

If the requested model is unavailable, report the unavailable selector.
Offer a capable available planning route with appropriate cost and effort.
Use it when existing user instructions authorize that fallback.
Otherwise, keep the selected route pending while collecting useful evidence.
If effort is unsupported, report its actual limit.
For an observed model or effort mismatch, seek an existing route that honors
the resolved launch settings.
Apply this rule when a host overrides economical default effort.
Use that route when it is already available and authorized.
Otherwise, apply the same fallback rule.
Do not treat an unobservable setting as a known mismatch.
Resolve effort ordering from the host's advertised controls.
Do not assume that `max` exceeds `ultra`, or that every host uses either value.
Never represent a primary-thread analysis as a separate subagent review.

If no delegation route exists, report the limit once.
Record the phase as `planning-limited`.
Continue evidence collection and ordinary authorized work.
Keep new mode-specific shortcuts pending until a planner returns or the user
explicitly selects an inline fallback.
For that fallback, apply this contract in the primary thread.
Report that independent planning did not occur.
If ordinary work completes the goal, report that route and the mode limitation.
Do not claim that an independent mode plan was executed.

## Give the planner this task

Pass task-local evidence with a concise request:

```text
Analyze this goal as a read-only planning subagent.
Inspect evidence without changing files, shared state, or external systems.
Apply this assignment and its limits to any descendant analysis.
Return your plan to the primary agent, then stop.

Goal and completion conditions:
<requested outcome, required behavior, and completion evidence>
<most valuable results, time-to-market priorities, and dependent work unlocked>
<deadline or cost of delay when established>
<conditions that must hold throughout and conditions required at completion>

Scope and authority:
<projects, affected systems, permitted actions, explicit limits>

Planning identity:
<goal ID, activation generation, planning request ID>

Decision timing, when relevant:
<latest useful decision time and ordinary work continuing during analysis>

Whole current plan:
<every existing step and its status, including completed results>
<remaining dependencies, in-flight operations, and effects already created>
<material new evidence if this is a revision>

Observed evidence:
<relevant code, logs, measurements, findings, and source identities>
<exact revision, material uncommitted changes, and accessible evidence locations>
<affected consumers, external effects, and available recovery routes>

Selected practices:
<only reference paths and methods relevant to the present goal>

Reassess the entire remaining plan against the accepted outcome.
Challenge assumed requirements, architecture, process, and sequencing with evidence.
Distinguish binding constraints from default practices whose assumptions no longer hold.
Keep, remove, replace, combine, reorder, or parallelize steps as appropriate.
Explain material changes and preserve completed results that still serve the goal.
An unchanged plan or a direct fix can be the best route.

Prioritize time to market and time to delivery for the goal's valuable results.
Distinguish useful delivery from an intermediate artifact and from completed restoration.
If their times disagree, use the goal's value priorities and recovery limits.
Prefer earlier valuable delivery when it justifies the additional bounded recovery.
For otherwise comparable routes, prefer earlier final completion.
Identify temporary deficiencies that the goal's authority and constraints permit.
Keep restoration of required behavior inside the plan through verification.
Do not pay a completion requirement by filing a follow-up issue.
Locate the bottleneck and the evidence behind the next action.
Identify a plausible conflicting explanation when it would change that action.
Separate evidence, hypotheses, and uncertainty.
Distinguish observations you inspected from supplied reports and interpretations.
Do not wait for final root-cause proof when a supported, bounded action suffices.
Keep deeper diagnosis as explicit work when the cause remains unresolved.
Compare remaining paths to useful delivery and final acceptance across credible routes.
Include overlapping dependencies, recovery, and displaced work.
Describe effects on the affected systems, consumers, and persistent state.
Choose checks whose decision or recovery value justifies their incremental cost.
Do not gate on an informative check when its value does not justify the wait.
State the next executable action, adaptation limits, observations, and covered fallbacks.
Preserve valid review findings as fix-now or tracked follow-up work.
Return the result fields below without private reasoning transcripts.
```

Do not pass an intended verdict as evidence.
Supply material excerpts when the child cannot access a source or selected
practice.
Do not assume that it inherited the parent's files, skills, or working changes.
Give independent reviewers the same relevant observations when comparing
recommendations.
Use more than one planner when disagreement or independent inspection can
materially improve the decision.
Do not turn routine replanning into an open-ended review committee.
Include planning and review delay in the delivery comparison.
When a decision window matters, request a concise whole-plan recommendation
before that window closes.
Preserve the selected model and effort while limiting unrelated investigation.
If decisive evidence is missing, return the uncertainty and the next useful
observation.
An expired window does not authorize a shortcut without a usable plan.
Assess all remaining steps before returning the plan.
Detail decisions that matter now.
Keep later choices conditional when new evidence will decide them.
Return a useful bounded action before researching unrelated details.
For consequential uncertainty, use the tactics in
[decision tactics](decision-tactics.md).

## Required result

| Field | Content |
| --- | --- |
| Plan reassessment | Disposition of remaining steps, material changes, preserved results, and reasons. |
| Diagnosis | Bottleneck, inspected evidence or supplied reports, cause or hypothesis, and uncertainty that can change the next move. |
| Goal fit | Required outcome, value priorities, conditions that must hold throughout, and justified practice selection. |
| Tradeoff | Time to useful delivery and required restoration, remaining critical paths, delay cost, and displaced work. Keep unlike consequences separate. |
| Effects | Affected behavior, consumers, external systems, and persistent state when relevant. |
| Plan | Ordered steps, input identities, dependencies, next executable action, adaptation limits, and useful parallel work. |
| Observations | Decisive signal, pass/fail actions, benefit versus incremental wait, and latest useful observation point. |
| Recovery | Temporary deficiencies, restoration of required behavior, residual effects, owner, and checkpoint. |
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

Inspect the returned content before treating a host notification as a plan.
A spawn receipt, wait timeout, or idle event does not establish a usable result.
Retain the child identity while waiting or resuming useful analysis.
Do not create duplicate planners merely because a wait timed out.
A usable report covers the whole remaining goal and supports its next action.
Later choices can remain conditional on named evidence.
If the child ends without a usable report, assess whether the selected route
can still supply one.
If the result can still change the decision, resume or retry that route.
Keep the retry focused on missing evidence or plan content.
If the selected route cannot deliver a usable plan, apply the existing fallback
rules.
If no authorized route can supply a usable plan, record `planning-limited`.
Continue ordinary authorized work while the planning route remains limited.

Examine whether the plan matches the evidence and current authority.
Apply the fallback rule before adopting a known model or effort substitution.
Resolve material gaps with a focused follow-up to the planner.
Read the latest mode record before accepting the result.
Match its goal, activation generation, and planning request with the current
enabled state.
If they differ, retain the result as history without adopting it.
Compare the result with actions and effects observed since the request.
Resolve a material mismatch before taking a new shortcut.
Record the accepted plan and its concise rationale.
Execute the plan in the primary thread.

Execute conditional actions that the accepted plan already covers.
These actions can include a scoped experiment, isolation, or a specified
recovery action.
Request another planning result before changing a material tradeoff beyond
those limits.
Examples include changing the target, exceeding action limits, or accepting
newly discovered effects.
If new evidence exceeds the accepted plan, request another planning result.
Examples include a recovery overrun or a failed causal assumption without a
covered alternative.
Keep independent work and covered recovery actions moving during replanning.
Routine implementation choices within the accepted plan do not need another
planning round.
