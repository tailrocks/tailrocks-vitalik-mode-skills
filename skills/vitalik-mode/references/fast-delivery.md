# Fast delivery

Use this practice for integration, CI, pull requests, and release bottlenecks.
Within the goal's authority, consider administrator merges before normal CI
completes.
Accept temporary red main when planned integration and repair shorten delivery.
Consider selective run cancellation or a manual release when the evidence
supports that route.

## Contents

- [Find the delay](#find-the-delay)
- [Choose a tactic](#choose-a-tactic)
- [Diagnose CI evidence](#diagnose-ci-evidence)
- [Inspect revisions and integrate](#inspect-revisions-and-integrate)
- [Release CI capacity](#release-ci-capacity)
- [Recover a red branch or service](#recover-a-red-branch-or-service)
- [Release and verify](#release-and-verify)

## Find the delay

Define what must work for the recipient and which checks can change the
delivery decision.
Measure queue time, job execution, repeated validation, and rollout time at
the blocking stage.
Use comparable recent runs.
Label estimated timings.
Take one cheap measurement when missing evidence could change the path.

Compare elapsed time to usable delivery for normal processing and the shortcut.
Count overlapping steps once.
Include remaining checks, likely recovery work, and time lost to displaced
runner capacity or invalidated jobs.
Consider a plausible recovery overrun alongside the likely case.
Use the user's illustrative timings as hypotheses until verified.

Watch for automatic publication, deployments, migrations, or downstream builds
triggered by merges.
Estimate effects on repository users separately from effects on consumers.
Read [decision tactics](decision-tactics.md) for the decision procedure.

## Choose a tactic

Use the tactic that fits the observed delay and the current authority.

| Observed bottleneck | Try first | Examine before proceeding |
| --- | --- | --- |
| Runner wait or redundant work dominates | Cancel superseded runs or limit jobs in flight to the available build capacity. | Keep unique evidence. Inspect deployment or teardown work before cancellation. |
| Moving target invalidates otherwise useful PR checks | Use an available merge queue or train to validate against the target and queued predecessors. | Confirm candidate checks run and parallel capacity exists. If queue entries change, inspect rerun costs. |
| Job work dominates | Measure the longest stage. Reuse deterministic outputs or parallelize independent work if runners are available. | Confirm the saved time exceeds restore, dispatch, or coordination cost. |
| Intermittent results dominate | Run the cheapest controlled comparison that distinguishes a code regression from runner, environment, or test behavior. | Track a quarantine only when the plan justifies it, an alternate signal exists, and the task permits it. |
| Compatible changes repeatedly pay a fixed CI cost | Compare an authorized admin batch with ordinary processing. Use focused checks on the combined result. | Record dependencies, expected red state, first observation, and recovery cost. |
| Production exposure limits delivery | Use an existing flag, a representative canary, or an authorized release route that separates integration from exposure. | Confirm compatibility, observation criteria, and a usable stop or restore action. |

For a replacement or cutover, use [fast migration](fast-migration.md).
Keep the full requested migration within its completion conditions.

A queue can avoid serial stale-base retries.
GitHub Actions workflows for queue-required checks need a `merge_group` trigger.
Its merge limits group target updates after checks and do not combine builds.
GitLab trains validate cumulative candidates in parallel.
Changing earlier train entries can invalidate later runs.
These are platform mechanics to apply when timing supports the tactic.
[GitHub merge queues](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-a-merge-queue)

[GitLab merge trains](https://docs.gitlab.com/ci/pipelines/merge_trains/)

Use shorter batches when faster feedback or smaller recovery scope wins.
Use larger batches when shared overhead dominates and evidence bounds
interactions and recovery.
Set concurrency from available capacity and batch size from integration risk.
Keep deployment exposure independently adjustable where the host permits it.
Base exceptional merges and red-branch decisions on the goal's evidence and
authority.
[DORA small batches](https://dora.dev/capabilities/working-in-small-batches/)

[DORA work in process limits](https://dora.dev/capabilities/wip-limits/)

## Diagnose CI evidence

Read the first causal failure and its stage.
Compare relevant job logs on the same source revision and configuration.
Treat a cache miss as evidence of recomputation when timings support it.
Investigate an assertion, compiler error, or deployment failure on its own
evidence.

Use a clean or cache-read-disabled run on the same inputs to examine suspected
cache corruption.
Use equivalent baseline and candidate runs to examine whether the change
introduced the failure.
Keep the first retry focused on the hypothesis.
Treat an intermittent pass as evidence of intermittency.
Investigate candidate-only flakiness when changed behavior could cause it.

Retain a discriminating check if the plan removes a noisy test from its
critical path.
Track an authorized quarantine with an owner or explicit gap and an exit
condition.
For repeatable build reuse, capture declared inputs and the exact output
identity.
Pin dependencies and tools where the build supports it.
Measure useful cache hits and the cost of restore and upload.
Limit shared production cache writes to trusted builders.
[Bazel remote caching](https://bazel.build/remote/caching)

[Google SRE on test evidence](https://sre.google/sre-book/testing-reliability/)

## Inspect revisions and integrate

Record the target baseline, each reviewed PR head, and the inputs behind
the useful checks.
Order dependent changes before selecting each batch.
Keep inseparable changes together when they need a combined checkpoint.
Group independent changes when shared work justifies batching them.
Inspect overlaps in code, build configuration, contracts, and shared state.
Before each merge, inspect what the intermediate revision can publish or deploy.
A sequential merge batch is not an atomic target update.
If intermediate effects exceed authority, use a combined candidate or an
authorized activation boundary.

If the accepted plan calls for an administrator merge, use a supported operation
within the current authority.
Compare the current PR head with the reviewed head before each merge.
Use an atomic expected-head condition when the interface supports it.
Inspect the new head if that condition fails.
If the operation lacks that condition, record the race.
Verify the merged content before extending the batch.

Inspect the target revision before each merge.
Compare it with the baseline plus planned merges.
If the target moves, inspect affected dependencies and validation assumptions.
Use an atomic target condition if the interface supports it.
After each merge, compare the resulting revision with the expected changes.
Stop extending the affected batch when an unplanned change invalidates the
evidence.

GitHub CLI supports `--match-head-commit` with an authorized `--admin` merge.
That condition covers the PR head.
[GitHub CLI merge](https://cli.github.com/manual/gh_pr_merge)

Name the first batch, largest allowed batch or exposure, and observation
point in the plan.
Specify conditions for growing, shrinking, pausing, or reverting it.
Use those preplanned options as observations arrive.
Replan before taking another shortcut if a new failure type, material target
change, or recovery overrun invalidates the plan.

Keep pending checks whose decision or recovery value justifies their cost.
Wait for the checks the plan needs to make the merge decision.
Proceed while other checks are pending when the plan justifies the shortcut.
Record completed, pending, canceled, and skipped checks accurately.
Report the actual blocker if the platform denies the supported operation.
Replan using available permissions.

## Release CI capacity

Identify runs by repository, workflow, event, tested revision, and purpose.
Cancel a run when supersession, duplication, or lost relevance makes its
remaining work unnecessary.
Determine whether it occupies capacity needed by useful work.
Consider the information a nearly complete run can provide.
Before cancellation, inspect release, migration, and cleanup side effects.
Keep the latest useful integrated check when it can distinguish expected
breakage from a new regression.
Record each cancellation and its reason.

## Recover a red branch or service

Treat temporary red main as an active recovery state.
Before merging, record the expected failure or the first diagnostic for an
uncertain failure.
Record the baseline, even if it already fails.
Identify a known-good source or compatible artifact when available.
Otherwise, name the forward repair or isolation path and its first check.
Record the recovery owner, next action, and next observation point.
Name the failure or elapsed-time trigger that ends the attempt.

Run the planned check on the actual integrated result.
Repair shared causes before repeating per-PR work.
Pause further exposure when the result exceeds the agreed breakage.
Use a focused revert, a smaller dependency-complete subset, or a forward fix
to narrow the cause.
Bisect when a stable check distinguishes known-good and failing revisions.
Treat results from skipped or unbuildable revisions as uncertain.
If subsets pass but the combined candidate fails, inspect interactions.

Compare the remaining time and effects of a revert, redeploy, flag change,
traffic shift, and forward fix as applicable.
Consider compatibility, repair already completed, and the next verification.
Restore live service separately when branch repair takes longer.
Prefer the known compatible restore path when forward repair is still
uncertain.
Roll forward when rollback is incompatible or a tested fix restores faster.
Verify actual recovery using the relevant branch check or consumer signal.
[Git bisect](https://git-scm.com/docs/git-bisect)

[Google SRE on reliable releases and rollbacks](https://cloud.google.com/blog/products/gcp/reliable-releases-and-rollbacks-cre-life-lessons)

## Release and verify

Evaluate release timing from actual exposure, observation, and available
recovery capacity.
Do not reject an authorized release solely because a weekday convention
discourages it.
If reduced support would delay repair, include that delay in the comparison.

Use a custom or manual route when authorized publication and the time comparison
favor it.
Use evidence-supported estimates when measurements are unavailable.
Identify source revision, relevant build inputs, artifact identity, version,
and destination.
Record the artifact digest when available.
Promote the validated artifact unchanged when the route supports it.
Revalidate a rebuilt artifact when its inputs or output differ from the
validated build.
Retain the compatible recovery artifact when applicable.
Inspect the delivered artifact or deployed behavior at the destination.

Report integration, deployment, activation, and consumer verification as
applicable.
If a flag improves delivery or recovery, use it to separate activation from
deployment.
When flag states affect delivery or recovery, examine both states.
For a canary, choose a representative cohort and meaningful baseline or control.
Define metric thresholds, minimum observations, promotion trigger, and stop
action before exposure.
Determine whether shared resources invalidate the comparison.
Account separately for state changes that survive flag disablement or traffic
rollback.

[Google SRE on canarying](https://sre.google/workbook/canarying-releases/)

State the observed delivery outcome separately from pending checks and repairs.
