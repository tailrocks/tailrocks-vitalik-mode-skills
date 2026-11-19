# Decision tactics

Use these tactics when a choice can materially change delivery time or recovery.
Select the relevant tactic instead of completing a framework checklist.
Keep the decision in the existing goal record.

## Contents

- [Compare accepted outcomes](#compare-accepted-outcomes)
- [Find the constraint](#find-the-constraint)
- [Buy useful information](#buy-useful-information)
- [Preserve useful options](#preserve-useful-options)
- [Select a tactic](#select-a-tactic)
- [Stop a deteriorating approach](#stop-a-deteriorating-approach)
- [Learn from the result](#learn-from-the-result)
- [Sources and limits](#sources-and-limits)

## Compare accepted outcomes

Use the current goal's acceptance conditions as the comparison boundary.
Include required recovery in that boundary.
Do not compare completed delivery with an unfinished intermediate result.
If a smaller slice satisfies the goal, consider that slice first.
Do not silently redefine the goal to make a shortcut appear faster.

Compare time to the most valuable usable result and time to required
restoration separately.
If their times favor different routes, apply the goal's value priorities and
recovery limits.
Earlier useful delivery can justify additional bounded recovery work.
Keep that recovery in the active plan until verified.
For otherwise comparable routes, prefer earlier final completion.

Compare remaining elapsed time from the present decision.
Include diagnosis, setup, queues, integration, deployment, observation, and
repair where relevant.
Count overlapping work once.
Keep estimates separate from measurements.

Use ranges when the outcome depends on unresolved failures.
Compare a plausible recovery case with the time saved by avoiding the wait.
Ask whether extra recovery can erase that saving.
Do not invent probabilities, monetary values, or precision to justify a choice.

Record consequences that do not fit an elapsed-time comparison separately.
Examples include blocked teams, customer failures, persistent writes, and an
expiring delivery opportunity.
Use existing priorities or constraints to evaluate those consequences.
Do not silently convert another team's lost work into free capacity.

## Find the constraint

Identify the constraint for useful delivery and for required restoration.
These constraints can differ.
Separate queue delay from execution time.
Separate repeated validation from a single necessary validation.
Inspect the work that starts only after the blocked step completes.

A 30-minute check can fit inside an independent 45-minute dependency.
In that case, skipping the check need not shorten delivery.
If early integration unlocks other work, include that effect in the comparison.
Do not count a job's full duration as avoidable waiting time automatically.

Direct effort toward the current constraint.
If a resource is saturated, additional concurrent work can delay useful results.
If repeated work dominates, inspect its cause before adding capacity.
After an intervention, identify the current constraint again.
Use the practice that addresses the observed cause.

## Buy useful information

For a material unknown, identify an observation that distinguishes the relevant
explanations.
Prefer the cheapest observation that can change the next action.
Record these facts in one short statement:

- The assumption under examination.
- The action after each meaningful result.
- The incremental delay on the actual critical path.
- The last point when the result can still help.

If all plausible results favor the same bounded action, proceed with that
action.
Continue useful diagnosis in parallel when capacity permits.
Keep a check before action when its decision or recovery value justifies the
incremental wait.
Use qualitative comparisons when likelihoods are unknown.
A check can supply information without justifying a delay.
If the wait costs more than the supported benefit, consider observing the check
after a bounded action.
Preserve its source revision and actual result.

Do not repeat an unchanged analysis solely to obtain agreement.
Use another reviewer when independent evidence or a competing explanation can
change the decision.
A stronger model can improve analysis without supplying new operational
evidence.
Distinguish an inspected observation from a supplied interpretation.
Agreement about one shared summary does not create independent evidence.
Treat familiar patterns as hypotheses until the current observations match.

For consequential uncertainty, consider a short premortem.
Suppose the shortcut delayed delivery or caused an unacceptable effect.
Name a plausible overlooked cause that would change the action.
Choose a useful observation or a smaller exposure that addresses that cause.
Do not turn the exercise into an exhaustive risk catalog.

During an incident, prioritize authorized mitigation of observed impact.
Do not wait for complete root-cause proof before an already covered recovery
action.
Keep the unresolved cause and recurrence prevention visible afterward.
A successful mitigation does not prove the original diagnosis.

## Preserve useful options

Assess reversibility at the effect of the action.
Identify a compatible previous state or a credible forward repair.
Include detection time and restoration time.
Name effects that remain after recovery.

| Affected surface | Evidence that matters |
| --- | --- |
| Implementation and checks | Known baseline, candidate identities, recovery point, and evidence from the affected behavior. |
| Dependent work | Blocked consumers, release coupling, shared runners, and the work needed to restore progress. |
| Live service | Current artifact, configuration, affected cohort, decisive metrics, and a compatible restoration route. |
| Data and external effects | Old-reader compatibility, durable writes, published versions, sent messages, and effects that rollback cannot erase. |

If an action has unknown material effects, inspect its triggers and destinations.
Use an existing activation boundary when it permits useful integration now.
Do not assume that a disabled flag prevents writes or background activity.
Do not assume that a source revert removes published artifacts.

Add a flag, compatibility phase, or abstraction only when its delivery value
justifies its full cost.
Include its implementation cost and removal work.
Respect explicit instructions that require a complete migration without legacy
paths.
Use an existing SLO or error-budget policy when it applies to the affected
service.
Do not infer an outage allowance from permission to leave development work
temporarily incomplete.

## Select a tactic

These names identify established ideas.
Their use here is a task-specific engineering adaptation.

| Tactic | Useful condition | Application and limit |
| --- | --- | --- |
| Two-way-door decisions | Effects are quick to observe and reverse. | Use a light decision process. Verify actual restoration, including data and external effects. |
| Cost of delay | Waiting loses a deadline, useful capacity, or user value. | Compare that loss with execution and recovery. Keep unsupported values qualitative. |
| Constraint and WIP analysis | A scarce stage controls completion. | Reduce its queue or repeated work. Extra concurrency helps only when usable capacity exists. |
| Small batches | Feedback delay and interactions dominate recovery. | Shorten the observation cycle. Larger integration batches can win when repeated setup dominates and recovery remains credible. |
| Value of information | An unknown can change the next move. | Use a cheap discriminating observation. Stop analysis when further information cannot change the immediate action. |
| Premortem | A consequential plan has uncertain assumptions. | Examine a plausible failure of the plan. Convert the finding into an observation or a bounded step. |
| Progressive exposure | Integration and user exposure can move separately. | Use a relevant cohort or dormant activation. Unobserved behavior and irreversible writes need separate evidence. |

Do not require a named tactic when a direct fix already has the shortest path.
Do not choose a shortcut solely to demonstrate that the mode is active.

## Stop a deteriorating approach

Before execution, state the conditions for continuation, isolation, and
recovery.
Use observations tied to the predicted failure mechanism.
Examples include the first integrated build, a new-format read, or an installed
package smoke check.
Set a useful recovery checkpoint from the goal and available evidence.
Avoid universal batch sizes, wait durations, or failure percentages.

When an observation crosses a plan limit, stop the affected expansion.
Use a covered fallback when its trigger occurs.
Request a revised plan for newly accepted effects or expanded exposure within
existing authority.
Continue independent work while that plan is pending.

At the checkpoint, compare remaining forward repair with rollback or
disablement.
Ignore effort already spent when choosing the next action.
Do not extend recovery indefinitely because the original estimate looked
favorable.
If customer impact occurs, prioritize its restoration separately from internal
development work.

## Learn from the result

Record observed delivery time and recovery time when available.
Label the unexecuted normal path as a counterfactual estimate.
Do not claim measured savings from an illustrative comparison.
Preserve assumptions that failed and observations that improved the decision.
Use those records for comparable future plans.
Do not start a separate reporting project for a routine change.

## Sources and limits

- [Amazon's 2016 shareholder letter](https://www.aboutamazon.com/news/company-news/2016-letter-to-shareholders)
  explains reversible decisions and rapid correction. Its information heuristic
  is not a confidence threshold.
- [DORA small batches](https://dora.dev/capabilities/working-in-small-batches/)
  explains feedback benefits.
- [DORA work in process limits](https://dora.dev/capabilities/wip-limits/)
  explains constraints and capacity.
- [Goldratt Research Labs on constraints](https://www.goldrattresearchlabs.com/introduction-to-toc/)
  explains how to focus effort and reassess a changed constraint.
- [Horvitz on bounded resources](https://www.microsoft.com/en-us/research/publication/computation-action-bounded-resources/)
  examines the benefit of further computation against delay.
- [Reinertsen on cost of delay](https://leanmagazine.net/lean/cost-of-delay-don-reinertsen/)
  explains why delay needs explicit economic consideration.
- [Klein's premortem](https://www.gary-klein.com/premortem)
  describes analysis of a plan's imagined failure.
- [Google incident response](https://sre.google/workbook/incident-response/)
  prioritizes mitigation before complete diagnosis.
- [Google on risk](https://sre.google/sre-book/embracing-risk/)
  connects reliability choices with business goals.
- [AWS rollback safety](https://aws.amazon.com/builders-library/ensuring-rollback-safety-during-deployments/)
  explains state compatibility across version changes.

These sources explain mechanisms and decision principles.
They do not establish timings or authorize shortcuts for the current repository.
Use the user's scope and current evidence for those decisions.
