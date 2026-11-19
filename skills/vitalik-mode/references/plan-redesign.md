# Plan redesign

Use this practice when the remaining plan has an uncertain premise, unnecessary
work, or a costly sequence.

## Establish the current state

Read the full remaining plan and the evidence for its steps.
Record the required outcome, acceptance conditions, and binding constraints.
Identify the source of each constraint that limits the available options.
Treat tools, sequence, design, and customary checks as choices unless an
applicable instruction or dependency requires them.
Keep the accepted outcome and binding constraints in each alternative.

Preserve completed work whose results still apply.
Account for work in progress, shared capacity, and effects already in place.
If an alternative abandons work in progress, include the cost to stop it and
handle its effects.
Identify the remaining dependencies that control when the outcome is ready.

## Change the plan where the evidence supports it

Ask what observable result each remaining step supplies.
Identify the premise that makes the step necessary.
If repeated attempts failed under the same premise, examine that premise
directly before another attempt.
Use an observation that would differ if the premise were false.

Use the following changes where they improve the plan.
Give a short reason for each material change or retained constraint.

| Change | When to use it |
| --- | --- |
| Keep | The step supplies a required result, decisive evidence, or a necessary recovery option. |
| Drop | The step serves no current requirement or repeats a result that still applies. |
| Replace | A simpler method produces the required result and preserves the necessary checks. |
| Combine | Related steps can share work without losing the observations needed to find a failure. |
| Reorder | Earlier evidence, delivery, or recovery preparation changes what later work needs. |
| Run in parallel | The steps have independent inputs and enough capacity to finish earlier. |

If a direct change meets the acceptance conditions, compare it with the planned
abstractions or generalizations.
Remove speculative behavior and unnecessary duplication from the planned work.
Keep an intermediate mechanism only while its delivery or recovery value
justifies its full cost.
If the plan needs that mechanism, include its removal when the accepted outcome
requires removal.
If a smaller deliverable meets the existing acceptance conditions, compare its
time and effects with the larger plan.

If feature boundaries remain uncertain, integrate one thin path early to obtain
useful evidence.
Keep the remaining required behavior in the active plan.
Treat that slice as an observation point unless it meets the whole goal.

## Use experiments and tools when they change the result

If an unresolved design choice changes the next action, consider a small
prototype that exercises the distinguishing behavior.
Specify the result that would change the plan before making the prototype.
Include setup and disposal in the cost of the experiment.

If repeated work controls delivery time, examine whether an existing tool can do
or verify it.
If a new tool could help, compare its setup, verification, use, and removal with
the work it saves.
If you select automation, show that it works on one representative unit before
increasing its scope.
Make a tool safe to run again when retries can repeat its effects.

## Record the revised plan

Use [decision tactics](decision-tactics.md) to compare the remaining paths to
the same accepted outcome.
Record what changed and which evidence supports the change.
State the first useful check and the conditions that require more analysis.

## Sources

- [Poteto's Attack the Premise](https://github.com/cursor/plugins/blob/e58dd043600587dbaf58ba315e7f2b38373eeb43/pstack/skills/principle-attack-the-premise/SKILL.md)
  examines assumptions that repeated fixes share.
- [Poteto's Subtract Before You Add](https://github.com/cursor/plugins/blob/e58dd043600587dbaf58ba315e7f2b38373eeb43/pstack/skills/principle-subtract-before-you-add/SKILL.md)
  removes unnecessary complexity before construction.
- [Fowler on YAGNI](https://martinfowler.com/bliki/Yagni.html)
  explains the cost of features built for assumed future needs.
- [Basecamp on an integrated slice](https://basecamp.com/shapeup/3.2-chapter-11)
  explains how early working behavior exposes integration uncertainty.
