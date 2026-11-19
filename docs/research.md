# Engineering tradeoffs

Vitalik mode chooses the shortest credible path to the accepted outcome.
That path includes integration, useful delivery, and required recovery.
Administrator merges and temporary red main remain available choices.
The research improves the evidence used to choose them.

## Contents

- [Findings](#findings)
- [Established tactics](#established-tactics)
- [Time comparison](#time-comparison)
- [Effects and recovery](#effects-and-recovery)
- [Scenario selection](#scenario-selection)
- [Implementation](#implementation)
- [Research limits](#research-limits)

## Findings

The initial skill already addressed authority, strong-model planning, mode
continuity, and tracked review deferrals.
Its main weakness was the selection of an engineering tactic.
It listed possible shortcuts without enough guidance about their different
failure mechanisms.

The research identified these changes:

| Gap | Improvement | Result |
| --- | --- | --- |
| A complete root cause could become a prerequisite for any action. | Distinguish evidence for the next action from complete defect diagnosis. | An authorized mitigation can proceed while deeper diagnosis continues. |
| A shorter CI wait could appear to guarantee faster delivery. | Compare remaining critical paths to the same accepted outcome. | Independent work, repeated work, and recovery affect the estimate correctly. |
| Red main could obscure effects on consumers or data. | Record the actual effects and restoration route. | The plan can separate branch repair from live-service recovery. |
| Larger batches needed repeated planner decisions. | Specify bounded growth, isolation, checkpoints, and covered fallbacks. | The executor adapts without a new planning round for each command. |
| Cache and intermittent failures lacked a diagnostic procedure. | Compare equivalent source, toolchain, configuration, and cache conditions. | A passing retry cannot erase a demonstrated regression. |
| A PR head check could miss target changes. | Inspect both the reviewed head and the integrated target. | Unplanned changes invalidate only the assumptions they affect. |
| Deferred issues could become an inactive backlog. | Record recurring cost, ownership gaps, and observable revisit conditions. | Useful findings remain actionable after delivery. |

The authoritative instructions remain in the skill and its references.
This document explains the research and the design choices.

## Established tactics

### Reversible decisions

[Amazon's shareholder letter](https://www.aboutamazon.com/news/company-news/2016-letter-to-shareholders)
describes lighter processes for reversible decisions and rapid correction.
The skill applies this idea to the effect of a change.
A source revert alone does not establish reversibility.

The letter's information heuristic does not establish a numerical confidence
threshold for an agent.
The skill therefore uses concrete observations and recovery options.
It does not interpret confidence, seniority, or a model name as evidence.

### Cost of delay and useful information

[Reinertsen's cost-of-delay discussion](https://leanmagazine.net/lean/cost-of-delay-don-reinertsen/)
explains why delay needs explicit economic consideration.
The skill compares the cost of waiting with execution and recovery.
It uses the user's established priorities when those consequences differ.
It does not invent money, probabilities, or universal risk scores.

[Horvitz's research](https://www.microsoft.com/en-us/research/publication/computation-action-bounded-resources/)
examines the value of further computation against the cost of delay.
The skill applies that principle to planning and diagnostic checks.
A useful check changes an action or reduces recovery time.
Its benefit must justify the added delay before it becomes a prerequisite.
The planner identifies when the result becomes too late to help.

The adaptation does not require a mathematical utility model.
One sentence can describe the assumption, observation, resulting action, and
incremental wait.
Additional review has value when it supplies relevant evidence or a competing
explanation.
Repeated agreement alone does not add operational evidence.

### Constraints, work in process, and batch size

[DORA's WIP guidance](https://dora.dev/capabilities/wip-limits/)
connects work limits with capacity and completion.
[Its small-batch guidance](https://dora.dev/capabilities/working-in-small-batches/)
emphasizes shorter feedback cycles.

The skill distinguishes three controls: integration batch size, concurrent
builds, and deployment exposure.
Those controls do not need identical limits.
A large reviewed integration batch can coexist with one useful build and a
small release cohort.
The choice depends on overhead, interactions, and the cost of isolating failures.

This is an application of the principles to the user's goal.
DORA does not establish that a large admin-merge batch is generally optimal.
The skill requires local evidence for that exception.

### Merge queues and speculative validation

[GitHub merge queues](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-a-merge-queue)
validate candidates against the target and preceding changes.
GitHub Actions requires the relevant `merge_group` trigger.
Merge limits group target updates after checks.
They do not combine the candidate builds.

[GitLab merge trains](https://docs.gitlab.com/ci/pipelines/merge_trains/)
run cumulative candidate pipelines.
Changes to earlier entries can invalidate later work.
The skill accounts for that cost before changing the queue.
It does not prescribe a new queue when an existing direct route finishes sooner.

### Premortems and diagnosis

[Klein's premortem](https://www.gary-klein.com/premortem)
examines plausible explanations for an imagined failure of a plan.
The skill uses a short version for consequential uncertainty.
The useful result is an observation or a change in exposure.
The exercise remains optional when the next action is already clear.

[Google's incident response guidance](https://sre.google/workbook/incident-response/)
prioritizes mitigation of impact before complete diagnosis.
The skill preserves unresolved root-cause work after mitigation.
It does not treat a successful mitigation as proof of the initial hypothesis.

### Progressive exposure

[Feature toggles](https://martinfowler.com/articles/feature-toggles.html)
can separate code deployment from activation.
They also introduce carrying and validation costs.
The skill includes those costs and a removal condition.

[Google's canary guidance](https://sre.google/workbook/canarying-releases/)
emphasizes relevant observations.
It describes comparison with the existing version as a useful evaluation
approach.
The skill does not accept a tiny, irrelevant sample as proof.
Shared dependencies and writes can affect both the canary and its control.

The skill uses existing service objectives when they apply.
[Google's risk chapter](https://sre.google/sre-book/embracing-risk/)
connects reliability targets with business needs.
The skill does not infer an outage allowance from CI status.

### Compatibility and incremental replacement

[AWS rollback guidance](https://aws.amazon.com/builders-library/ensuring-rollback-safety-during-deployments/)
shows why old software must understand state that newer software produces.
The skill records compatible recovery versions and persistent effects.

[Branch by Abstraction](https://martinfowler.com/bliki/BranchByAbstraction.html)
supports gradual implementation replacement through a shared interface.
[Strangler Fig](https://martinfowler.com/bliki/StranglerFigApplication.html)
supports gradual replacement through independent parts of a system.
These tactics can remove a large migration from the immediate delivery path.

The skill includes temporary compatibility only when the task permits it.
It includes removal work in the plan.
A direct cutover remains appropriate when it is faster or the task requires
complete replacement.

### Deliberate technical debt

[Fowler's debt quadrant](https://martinfowler.com/bliki/TechnicalDebtQuadrant.html)
distinguishes considered tradeoffs from poorly understood debt.
The skill keeps evidence, recurring cost, acceptance criteria, and revisit
conditions with each deferred finding.

An issue does not make an invalid recovery plan acceptable.
A finding that defeats recovery needs immediate treatment or a different plan.
An expiry triggers reassessment.
It does not close an unresolved defect automatically.

## Time comparison

The following numbers are hypothetical.
They demonstrate the comparison and do not predict repository performance.

Suppose CI has 28 minutes remaining.
An independent required export has 47 minutes remaining.
The ordinary route waits for CI before integration.
Both routes need the export and a usable integrated result before publication.
Neither route starts useful downstream work earlier.

| Route | Earliest prerequisites complete |
| --- | --- |
| Let both operations finish | `max(28, 47) = 47` minutes |
| Bypass CI immediately | `max(47, time until the integrated result is usable)` minutes |

The early merge does not shorten this path.
Useful CI can finish while the export proceeds.
The agent can prepare publication during that interval.
Repair that finishes before the export adds no elapsed time to this path.
Later repair determines the completion time.
Publication and destination verification follow the prerequisites.

Now suppose repeated validation is the actual constraint.
A dependency-ordered batch can replace repeated setup with one integrated
observation.
The comparison includes the real backlog, merge time, focused checks, and
recovery.
It does not multiply overlapping queue waits by the number of PRs.

At each recovery checkpoint, the agent compares remaining options.
Past effort does not justify continued work on a slower route.
Observed delivery time is measurable.
The unexecuted alternative remains an estimate.

## Effects and recovery

The skill distinguishes these outcomes:

| Outcome | Relevant recovery question |
| --- | --- |
| CI is red, and deployment is separate. | Can a shared repair restore the branch faster than repeated pre-merge checks? |
| Main blocks other teams or releases. | How much dependent work remains blocked during the proposed recovery? |
| A new artifact is deployed but inactive. | Does dormant code still run background tasks or write state? |
| A canary affects live users. | Which observation supports promotion, isolation, or restoration? |
| New data prevents old-code rollback. | Which compatible artifact or forward repair restores service? |
| A package is publicly released. | Which consumer-visible repair can correct the published outcome? |

The same source change can cross several rows.
The plan records the relevant effects before extending the operation.
Recovery of the live service can precede repair of the branch.

## Scenario selection

These scenarios describe intended decisions under stated evidence.
They are not instructions to perform live operations.

| Scenario | Useful path | Evidence that changes the path |
| --- | --- | --- |
| Compatible PRs wait behind repeated setup and a shared known failure. | Authorized batch integration, a combined check, and one shared repair. | A changed target, new failure, or recovery overrun invalidates the original assumptions. |
| CI finishes before an independent delivery dependency. | Let the operations overlap and prepare the next stage. | Early integration becomes useful if it unlocks real downstream work. |
| Cache misses accompany a candidate-only compiler error. | Diagnose the compiler failure with a short equivalent comparison. | A matched clean/warm comparison can support or weaken the cache hypothesis. |
| Candidate-only retries fail in changed concurrent code. | Investigate the changed behavior and retain a discriminating signal. | Repeated passes do not explain the failing path. |
| A busy target causes repeated stale validation. | Use an available queue or train with appropriate candidate checks. | Saturated runners or queue churn can erase the benefit. |
| Sequential merges expose an inseparable intermediate state. | Use a combined candidate or an authorized activation boundary. | Every push can publish or deploy before the batch's final check. |
| A canary has no observations of the changed data path. | Observe that path before increasing exposure. | Relevant failures or shared-resource effects change the recovery decision. |
| New data makes the original rollback artifact incompatible. | Stop harmful writes and restore a compatible implementation, when supported. | The remaining forward repair can win if it is understood and faster. |
| A manual release route avoids redundant rebuilding. | Publish the validated artifact and inspect the delivered result. | Different build inputs or outputs require new evidence. |
| Valid review improvements have lower immediate priority. | Track active issues with distinct acceptance criteria and revisit conditions. | A finding that invalidates delivery or recovery becomes immediate work. |
| A previous repair attempt exceeds its useful estimate. | Compare remaining repair with covered fallback actions. | New effects require a revised plan before further expansion. |

## Implementation

| Resource | Responsibility |
| --- | --- |
| [Skill](../skills/vitalik-mode/SKILL.md) | Command state, primary workflow, authority, and completion. |
| [Decision tactics](../skills/vitalik-mode/references/decision-tactics.md) | Time, information, reversibility, and stopping decisions. |
| [Planner contract](../skills/vitalik-mode/references/planner-contract.md) | Evidence, conditional plan, recovery, and replanning triggers. |
| [Fast delivery](../skills/vitalik-mode/references/fast-delivery.md) | CI, batches, exact revisions, releases, and recovery. |
| [Review deferrals](../skills/vitalik-mode/references/review-deferrals.md) | Durable findings, recurring cost, ownership, and reassessment. |

The command interface remains unchanged.
The portable effort selector is `highest`.
The host determines the actual ordering of its effort values.
The skill does not establish a universal ordering between `max` and `ultra`.

## Research limits

The sources explain mechanisms and decision principles.
They do not authorize administrator operations or establish timings for a
particular repository.
The user's scope supplies that authority.
Current observations supply the operational evidence.

Source review and offline scenarios do not establish live performance.
They also do not establish runtime compatibility across all supported agents.
The [maintenance guide](maintenance.md#review-evidence) records the actual
verification scope.
New failure evidence can require another revision.
