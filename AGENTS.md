# Maintenance rules

This repository is the legacy source for Vitalik mode. Keep future procedure
changes in `tailrocks-agent-policy-skills`. Retain this source for migration
and existing pinned installations. Do not create a second development path.

This package contains one instruction skill: `vitalik-mode`.
Keep its procedure in `skills/vitalik-mode/SKILL.md`.
Keep required resources inside that skill directory.
Keep installation and maintenance details in `docs/`.
Start at [the package guide](docs/README.md).

## Package structure

- Use `plugin.json` as the source of package identity and version.
- Keep the Claude, Kimi, and Antigravity manifests and `package.json`
  consistent with that source.
- Keep skill frontmatter limited to `name`, `description`, `license`, and
  `disable-model-invocation`. Set `disable-model-invocation: true`.
- Keep explicit activation in the description and skill procedure.
- Keep `policy.allow_implicit_invocation: false` in `agents/openai.yaml`.
  Keep the explicit-only flags in the generated registration entries.
- Keep the OpenCode and Amp entry points limited to skill registration.
  Keep hooks and background processes out of the package.
- Do not store an active goal or operator configuration in this package.

## Changes and verification

Obey the central
[structure and writing rules](https://github.com/tailrocks/tailrocks-skills/tree/main/docs/standards)
.
Use short, direct instructions with one action per sentence.
Read [the maintenance guide](docs/maintenance.md) before release.
Run `python3 scripts/validate-package.py` and `alint check` before publication.

Change CI through `.velnor/config.toml` and `velnor-actions generate`.
Do not hand-edit generator-owned files under `.github/`.
Keep model reviews separate from static package verification.
Do not describe documentation or a sample task as runtime compatibility proof.
