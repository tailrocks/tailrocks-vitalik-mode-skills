# Fast migration

Use this reference when the goal includes replacement, cutover, or retirement.
Identify the behavior that consumers must retain and the changes they expect.
Identify the replacement boundary and any paths the user requires you to retain.
If performance determines acceptance, use [performance](performance.md).

## Choose the migration route

Find the last dependency that can prevent removal of the legacy implementation.
Look beyond source imports when configuration, scheduled jobs, or deployed
clients can select the old path.
Identify which consumers can switch together and which have independent release
schedules.
Distinguish legacy removal at completion from a ban on coexistence during the
work.
If coexistence is forbidden throughout, exclude routes that require it.

Compare the remaining time through final acceptance for each credible route.
Identify when each route makes the valuable replacement behavior usable.
Compare earlier delivery value with any additional bounded recovery or removal
work.
Include coordination, data conversion, recovery, and removal of transition code.
Count concurrent work once.
Distinguish observed dependencies from estimated durations.

| Route | When it earns its cost | Work to include |
| --- | --- | --- |
| Direct cutover | The affected consumers can move together. Any interruption fits the goal. | Include replacement behavior, consumer changes, and legacy removal in the same delivery. |
| Temporary coexistence | A required consumer or stored format cannot switch at the same time. | Support both versions across that boundary. Migrate the last dependency before removing temporary compatibility. |
| Branch by abstraction | Many callers need one supplier, and an intermediate release must remain usable. | Switch implementations behind a common interface. Remove any interface used only for the migration. |
| Strangler Fig | Routes or capabilities can move independently and the first cutovers provide useful feedback or value. | Account for shared state across routes and retirement of the final legacy route. |

For a complete replacement, consider the direct cutover first.
Parallel development of the replacement does not require two active production
paths.
Add a shim or feature flag only for a named dependency or a faster recovery
that justifies its removal cost.
For each temporary mechanism, identify the observation that permits removal.
Keep removal in the current plan when the goal requires it.

## Control writes at cutover

Identify the authoritative writer for each affected record during each phase.
Include background workers, delayed retries, and in-flight requests where they
can still commit changes.
For a behavior comparison, replay representative inputs with external effects
disabled or isolated.
If a copy can fall behind live writes, include catch-up and reconciliation in
the cutover.

Before the first incompatible write, identify which version can read the
resulting data.
If an old writer must stop, verify that it can no longer commit.
If rollback would lose accepted writes, choose a compatible recovery or a
forward repair.
Account for external effects that persist after recovery, such as sent messages.
For an authorized interruption, record the affected surface and the trigger for
restoration.

## Finish the replacement

Implement the required behavior through the replacement's real entry points.
Compare outputs and effects on cases that distinguish the two implementations.
Switch all in-scope consumers, including scheduled and indirect callers.
Use deployment or routing evidence for callers outside the source tree.
An idle interval alone gives little evidence about an infrequent caller.

When the requested retirement boundary is complete, remove its legacy
implementation and exclusive dependencies.
Keep paths that serve out-of-scope consumers or explicit retention requirements.
Remove transition flags, shims, routes, and configuration that no longer serve
the goal.
Preserve required data and behavior checks through the replacement.
Verify the accepted behavior on the final configuration.
If performance is part of acceptance, verify it in that configuration.
Restore any stability that the goal requires at completion.
If a dependency still prevents removal, report the remaining migration work.

## Sources

- [Paul Hammant on branch by abstraction](https://www.branchbyabstraction.com/)
- [Martin Fowler on Strangler Fig](https://martinfowler.com/bliki/StranglerFigApplication.html)
- [Danilo Sato on parallel change](https://martinfowler.com/bliki/ParallelChange.html)
