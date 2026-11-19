# Incident recovery

Use this practice when a fault causes active harm or a temporary degraded state
needs restoration.

## Identify the active effects

Identify the affected behavior, users, dependencies, and data.
Use an observation from the affected path to confirm the symptoms.
Record the time the effect started when the evidence shows it.
Record the current artifact, configuration, and recent changes when they affect
recovery.
Preserve useful logs, metrics, traces, and affected identifiers in approved
locations.
If collecting more evidence would delay useful mitigation, continue collection
in parallel when resources permit.

## Choose the fastest supported mitigation

If current evidence supports an authorized action that can reduce harm, use it
before complete root-cause analysis.
Use an existing incident procedure where it applies.
Compare the remaining time to reduce harm and the remaining time to restore the
required behavior.
Include detection time, action time, observation time, and repair of effects
that remain.
Use [decision tactics](decision-tactics.md) when waiting or expanding exposure
needs a separate decision.

| Action | Evidence that can support it |
| --- | --- |
| Disable the affected behavior | A flag, pause, or other control stops the harmful path without creating an unacceptable loss of function. |
| Isolate the effect | A traffic shift, workload stop, or cohort restriction limits the harm and leaves enough capacity for recovery. |
| Repair forward | The change that restores the behavior is understood and a useful check can verify it in time. |
| Roll back | A known compatible version or configuration exists and can restore the affected behavior in time. |

Before a rollback, examine compatibility with current data, queued work, and
dependent versions.
If old code cannot safely use the current data, compare isolation with a
compatible restore or forward repair.
Identify persistent effects that the mitigation leaves behind.
Name the owner of the next action and the observation that controls it.

## Observe the result and adjust

Observe the affected path after the intervention.
Use a meaningful time interval or sample for the effect under examination.
Before expanding an intervention, confirm that its observed effects stay within
the plan's limits.
If harm continues or a different effect appears, stop increasing exposure.
If a covered fallback applies, use it at its stated condition.
If the recovery estimate or scope changes materially, request a revised plan
before another consequential change.
Continue the authorized mitigation and independent work that the current
evidence supports.

Use the result to update the incident timeline and the remaining recovery work.
Treat improvement after an intervention as evidence for its effect.
Keep the cause open until the evidence identifies it.

## Restore and verify the required behavior

Verify the required behavior on the affected path and in the relevant dependent
systems.
If the incident affected writes or queued work, reconcile these effects before
declaring restoration.
If a temporary control limits required behavior, restore that behavior when the
evidence permits it.
Record any continuing restrictions and the condition for their removal.
Keep corrective work on the current path when it is necessary to reach the
accepted outcome.

For remaining recurrence work, record the observed failure, the evidence, and
the unresolved cause or preventive change.
Give each follow-up an owner or record the ownership gap.
Identify the observation that would show that the follow-up is complete.
Record the available follow-up link in the incident record.

## Sources

- [Google SRE on incident response](https://sre.google/workbook/incident-response/)
  explains how to reduce impact before complete diagnosis.
- [AWS on rollback safety](https://aws.amazon.com/builders-library/ensuring-rollback-safety-during-deployments/)
  explains why previous versions must support the state that newer versions
  produce.
- [Google SRE on postmortems](https://sre.google/sre-book/postmortem-culture/)
  describes incident records and actions to reduce recurrence.
