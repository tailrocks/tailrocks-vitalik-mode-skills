# Performance

Use this reference when runtime performance can change the chosen solution.
Identify the operation, workload, and metric that matter to the goal.
Use the required latency percentile, completed throughput, or resource cost per
successful operation.
Keep accuracy, durability, ordering, and cost limits explicit where they apply.
If the goal gives no numerical threshold, report the observed change in its own
units.

## Locate the limiting work

Start with a representative baseline through the real entry point.
Reuse an existing trace or benchmark when it covers the decision.
Preserve the input sizes, concurrency, cache state, and resource limits that
affect the result.
For throughput, distinguish incoming requests from successful completions.
A growing backlog can hide insufficient capacity during a short run.

Choose the smallest measurement that distinguishes plausible causes.
For latency, separate queueing, execution, and downstream waits on the critical
path.
For throughput, identify the resource that saturates as load increases.
If the benchmark driver limits load, correct the measurement before tuning the
service.
If profiling perturbs the workload, quantify its effect with an uninstrumented
run.

For fixed work, estimate the largest gain a change could produce.
Suppose one sequential step accounts for a fraction `f` of total elapsed time.
If other steps keep their timing, removing that step saves at most that fraction.
Use a representative trace before applying this bound.
Queueing, overlapping work, and a change in load can change the limiting step.

## Choose a change that can reach the goal

| Observed constraint | Candidate change | Cost or contract to examine |
| --- | --- | --- |
| Repeated work dominates. | Remove duplicate work or cache reusable results. | Invalidation, stale reads, memory, misses, and refill after eviction. |
| Repeated round trips dominate. | Combine calls or move the operation closer to its data. | Added batch delay, retry scope, and partial failures. |
| Independent work waits behind a serial step. | Run independent operations concurrently up to the available capacity. | Contention, ordering, and pressure on downstream resources. |
| An algorithm dominates at representative input sizes. | Change the algorithm or data representation. | Setup cost, memory use, precision, and unusual inputs that the goal covers. |

Choose the fastest credible change that meets the target within its resource
budget.
Include implementation, verification, and required restoration in that choice.
Use approximation only when the goal permits the resulting error or staleness.
For an approximate result, measure error against a trusted reference on the
accepted workload.
If a specialized implementation suffices, include only the generality that
current consumers require.

## Verify the result under the accepted conditions

If isolating an effect can change the decision, use a focused benchmark.
If the representative baseline already supplies enough evidence, reuse it for
comparison.
Compare candidates on the same workload and resource budget.
Where run-to-run variation could change the decision, repeat comparable runs.
Keep measured changes separate from projections at other loads or input sizes.

For authorized temporary breakage, name the affected behavior and the
restoration point.
Before final measurement, restore required checks, durability, and ordinary
instrumentation.
Remove temporary profiling or benchmark settings that affect the final path.
Run the representative operation in that final configuration.
Report the observed target metric with its workload and relevant cost.
If the target still fails, locate the current constraint before further changes.
When the accepted target and behavior hold, stop tuning.

## Sources

- [Brendan Gregg on active benchmarking](https://www.brendangregg.com/activebenchmarking.html)
- [Gene Amdahl on limits to parallel speedup](https://doi.org/10.1145/1465482.1465560)
