# Maintenance

## Package ownership

Maintain the procedure in [the skill](../skills/vitalik-mode/SKILL.md).
Keep its references and assets inside the same directory.
The package requires no runtime script, hook, server, or background process.
The Python command below serves package maintenance only.

Use
[the shared structure](https://github.com/tailrocks/tailrocks-skills/blob/main/docs/standards/structure.md)
.
Obey
[the shared writing rules](https://github.com/tailrocks/tailrocks-skills/blob/main/docs/standards/writing.md)
.
Keep human installation steps separate from the skill procedure.

## Local verification

Run these commands from the package root:

```sh
python3 scripts/validate-package.py
alint check
```

Python 3.9 or newer is sufficient for the maintenance command.
The command uses only the standard library.
It examines duplicate JSON keys, manifest agreement, portable frontmatter, skill
identity, heading order, explicit activation, and local resource paths.
It does not run a model or exercise an agent.
Expected result: one `OK` line and exit code zero.

The alint command applies the shared active-package profile.
Expected result: no errors.
Its rules cover required files, package boundaries, manifest agreement, file
names, and skill length.

For Markdown formatting, run:

```sh
npx --yes markdownlint-cli2@0.23.3 "**/*.md"
```

Expected result: no formatting issues.
The Markdown configuration excludes two generator-owned instruction files.
It permits long table rows and literal code lines.
Review prose separately for meaning and instruction quality.
A formatting result does not prove language conformity or agent behavior.

## Shared policy pin

The `.alint.yml` file selects the central active-package profile.
Its source revision is `7b2f3cb6b7896621696b49a43a7d00c96cb48e42`.
Its SHA-256 is
`dae9e8f91ac3f5e6a28fb56d67f230fc4c23cc4fbab4763ecc5cc5477a903fba` .

When the shared profile changes, update the revision and digest together.
Read the profile changes before the update.
Repeat the local verification commands afterward.

## Generated CI

Use Velnor Actions 0.1.80 to generate the GitHub files.
The `.velnor/release-manifest.json` file records its source and binary digests.
The `.velnor/config.toml` file selects these verification jobs:

- `alint`
- `strict-json`
- `frontmatter-id`
- `link-check`

Run the supported generator after a configuration change:

```sh
velnor-actions generate
```

Generation requires the generator's documented validation tools, including Mise.
Keep the generated files together with the changed input.
Do not patch a generated workflow to repair a generator defect.
The repository owns `.github/PULL_REQUEST_TEMPLATE.md`.
The generator preserves that template.

For a generation comparison, use a fresh temporary directory:

```sh
vitalik_preview="$(mktemp -d)"
velnor-actions generate --output-dir "$vitalik_preview"
diff -r .github "$vitalik_preview/.github"
```

Expected result: no generated-file differences.
The preview does not change the package.

## Review evidence

Record which review models actually ran and which reasoning settings the host
accepted.
Distinguish requested model settings from effective settings.
Report installation results only for agents and versions that were exercised.
Keep compatibility limits in [the compatibility guide](compatibility.md).
Do not treat a source review or sample command as execution proof.

### Version 0.1.0 review

Two separate reviewers examined the skill on 2026-11-19:

- `gpt-6.2-astra`, launched with `ultra` reasoning effort.
- `gpt-6.2-sol`, launched with `ultra` reasoning effort.

The delegation interface accepted those model and effort settings.
Both reviewers examined the revised files and reported no remaining blocker
within their review scope.

The revisions addressed explicit activation in the skill body, same-goal
continuation, stale planner results, and active tracking for unresolved findings.
They also addressed concurrent PR changes, parallel review identities,
effort-only commands, and the reporting of an authorized inline fallback.

A separate offline continuation review kept a disabled mode off when an old
merge plan arrived.
It retained useful findings whose issue tracking was unavailable.
This review performed no repository operations.

Static verification passed the package validator, skill validator, and all
56 shared active-package rules.
Generated CI matched a second generation without differences.
These checks do not establish a successful installation on each supported host.

### Research iteration

The 2026-11-19 research iteration used the same two models at `ultra` effort.
Both examined primary sources and the integrated revisions.
The interface accepted each requested model and effort setting.
The research added decision tactics and expanded the delivery reference.
The command interface remains unchanged.

The review corrected these problems:

- Complete root-cause proof could delay an evidence-supported mitigation.
- An informative check could become a prerequisite regardless of its delay.
- A covered fallback could require an unnecessary new planning round.
- A first manual release could require historical timings that did not exist.
- A forward repair could require an unavailable known-good artifact.
- A small immediate correction could lack a suitable finding disposition.
- A sequential batch could expose an intermediate deployment before its final
  checkpoint.
- The worked example could count overlapping recovery twice.

Four fresh planning threads used task-local evidence for eleven offline
scenarios.
Two threads used `gpt-6.2-astra` at `ultra`.
Two threads used `gpt-6.2-sol` at `ultra`.
The prompts supplied the skill, observations, scope, and planning identity.
They did not supply expected decisions.
The threads returned plans without changing repositories or live services.

| Scenario | Observed planning behavior |
| --- | --- |
| A: Seven compatible PRs and a shared failure | Proposed a bounded batch and shared repair. Avoided multiplying overlapping queue waits. |
| B: CI fits inside an independent export | Reported no elapsed-time gain from bypassing CI. Kept useful work in parallel. |
| C: Cache miss and candidate-only failures | Distinguished compiler and concurrency evidence from cache behavior. Retained focused checks. |
| D: Target changes during expected red-main recovery | Paused affected expansion and examined integrated compatibility. Preserved the pre-write recovery option. |
| E: Sparse canary and incompatible stored values | Stopped the actual writer. Preserved a compatible reader and examined shared-service recovery. |
| F: Review findings and tracker timeout | Retained pending issue content, active-tracking requirements, and ownership gaps. Kept recovery defects as immediate work. |
| G: A costly informative test and cheap bounded repair | Proposed the authorized merges while retaining the useful remote signal. Qualified completion and timing claims. |
| H: A covered alternative hypothesis and cheap correction | Used the existing fallback and immediate correction without another planner. Preserved revision and batch constraints. |
| I: First manual release without a known-good artifact | Used qualified timing estimates and an exact artifact. Identified forward recovery and immutable residual effects. |
| J: Every main update deploys outside authority | Prepared a combined draft and identified the actual completion blocker. |
| K: Exactly one combined rollout is authorized | Proposed one verified squash update. Distinguished delivered content from the original PRs' open state. |

These scenarios exercise decision behavior under supplied facts.
They do not measure live delivery speed or prove general optimality.
They do not establish native host installation or runtime model-routing support.
The [research guide](research.md) records the sources and their limits.

### Generic mode iteration

The 2026-11-20 iteration generalized the core and the planner contract.
Time to market and time to delivery now explicitly control the priority.
Useful delivery can precede full restoration when the goal permits that
tradeoff.
Required restoration remains active work through verification.
The mode becomes inactive when the goal's completion conditions hold.

The research and reviews again used `gpt-6.2-astra` and `gpt-6.2-sol` at `ultra`.
The interface accepted the requested model and effort settings.
Two reviewers examined successive integrated versions.
The revision moved workflow details into context-selected references.
It added plan redesign, migration, performance, and incident practices.
The [research guide](research.md#comparison-with-poteto) records the Poteto
comparison and its pinned source.

Review corrected these material problems:

- The planner assumed red-main work and omitted the existing plan on first
  activation.
- An armed mode could lose selectors or fail to bind its first goal.
- An unchanged repeat command could replace useful planning or model settings.
- Initial planning could delay an already authorized incident mitigation.
- Late findings could bypass disposition and active tracking.
- A partial cutover could remove a fallback that the goal explicitly retained.
- A performance task could require a redundant benchmark or favor a small patch
  over faster delivery.
- Competing time metrics could suppress valuable early delivery despite an
  acceptable recovery period.

Four fresh threads produced read-only plans for fifteen independent scenarios.
Two threads used `gpt-6.2-astra` at `ultra`.
Two threads used `gpt-6.2-sol` at `ultra`.
They received the current skill, task facts, and scope without expected answers.
They performed no project changes or live operations.

| Scenario | Observed behavior |
| --- | --- |
| G1: Full renderer replacement from a five-step plan | Kept verified inventory, removed speculative framework work, combined caller migration, and retained final removal and checks. |
| G2: Parser optimization cannot reach the request target | Used the sequential timing bound and selected a bounded downstream experiment. Preserved exact results and resource limits. |
| G3: Direct enum addition | Kept the sufficient three-step plan and selected no specialist practice. |
| S1: Armed mode receives its first goal | Retained requested selectors, bound the goal once, and prepared a whole-plan request. |
| S2: Mode disabled before a new goal and a late result | Kept the new goal inactive and rejected the stale result as authority. |
| S3: Unchanged repeated activation after host defaults change | Retained the accepted plan, generation, and explicit planner settings. |
| S4: Status with open repair and tracking work | Reported the actual fields without writes, execution, or replanning. |
| S5: Quoted activation and a child request | Continued ordinary work without activating the mode. |
| E1: Incident mitigation during initial planning | Selected the authorized writer pause immediately and retained diagnosis, actual effects, and required restoration. |
| E2: Partial cutover with retained fallback | Preserved the fallback interval and separate client. Restricted removal to the requested boundary. |
| E3: Late findings and a tracker timeout | Kept required fixes in the goal and preserved active or pending tracking for the optional improvement. |
| E4: Authorized documentation integration with red CI | Selected the admin batch and shared repair. Preserved revision checks and honest timing. |
| V1: Earlier useful delivery with later restoration | Selected hour-two delivery with hour-eight restoration under the accepted hour-ten limit. Kept recovery active. |
| V2: Earlier delivery exceeds the restoration deadline | Selected the route that met the binding hour-seven deadline. |
| V3: Early artifact lacks consumer access and required behavior | Excluded the preview from useful delivery and selected the earlier complete capability. |

These scenarios examine instruction behavior under supplied facts.
They do not establish empirical speed gains or native support across all agents.
The earlier delivery scenarios remain historical evidence for the previous
revision.

### Current model iteration

The next 2026-11-20 iteration examined nine documented model products.
The [model research](model-research.md) records their IDs, controls, and sources.
GPT-6.2 Astra and GPT-6.2 Sol performed the research and instruction reviews.
The delegation interface accepted `ultra` for those tasks.
The other seven models were examined through published documentation.

Two reviewers examined the integrated changes.
Their findings restored immediate authorized mitigation and focused recovery of
an incomplete planning response.
Both reviewers found their final material findings resolved.
The core remains generic at 206 lines.
Its detailed model controls remain in the host reference.

Three fresh threads handled ten read-only scenarios with task-local facts.
Two threads used Astra at `ultra`.
One thread used Sol at `ultra`.
The prompts supplied no expected answers.

| Scenario | Observed behavior |
| --- | --- |
| A: Valuable CSV before the required API | Counted consumer-ready CSV delivery and retained API acceptance before completion. |
| B: Export shared by every migration route | Started the independent authorized export while the whole-plan report remained pending. |
| C: Conversion completed during a handoff | Reconciled the completed job and advanced to consumer verification without another submission. |
| R1: Wonder Full requested through a base-model API route | Preserved the product selection, reported the unavailable route, and continued ordinary work. |
| R2: Known effort cap or undisclosed effort | Distinguished an unauthorized mismatch from an unverified effective setting. |
| R3: Idle, timeout, and partial planner events | Retained the pending child and judged later content by usable whole-goal coverage. |
| R4: pi child with writable MCP extensions | Selected disabled extensions and restricted evidence tools, then required actual tool-surface evidence. |
| M1: Mitigation forecloses live diagnostics | Selected the authorized writer pause immediately and supplied its effects to the planner. |
| M2: Terminated incomplete report | Selected a focused retry on the requested model and effort within the useful decision window. |
| M3: One capped profile and another matching profile | Used the existing authorized matching route before selecting a fallback. |

These exercises inspect decisions under supplied evidence.
They do not measure delivery gains or establish runtime support on other hosts.
No live production operation or external model installation occurred.

## Release

1. Update the version in the portable manifest.
2. Update the two host manifests to the same version.
3. Describe the change in `CHANGELOG.md`.
4. Run the local verification commands.
5. Regenerate CI if its inputs changed.
6. Publish the release commit and its `vVERSION` tag.
7. Record that exact revision in the central marketplace catalog.
8. Regenerate all native catalogs in the marketplace.
9. Verify the published tag, revision, and catalog entry.

Use the actual release version in place of `VERSION`.
Do not publish a catalog entry before its source and tag exist.
The first release uses version `0.1.0` and tag `v0.1.0`.
