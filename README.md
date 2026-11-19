# Vitalik Mode migration

The standalone Vitalik Mode plugin is retired. The `vitalik-mode` skill now
belongs to the private [Tailrocks Agent Policy package][agent-policy].
Version `0.5.0` is the first Agent Policy release that includes the skill.
Confirm that your account can read the private package.

## Switch packages

Install or update Agent Policy in the same scope as the old copy. Confirm
the replacement is available before removing the standalone plugin.

### Claude Code

For a new user-scoped installation from an existing Tailrocks marketplace,
run these commands.

```sh
claude plugin marketplace update tailrocks
claude plugin install tailrocks-agent-policy-skills@tailrocks --scope user
```

If Agent Policy is already installed, refresh the marketplace and use
`claude plugin update tailrocks-agent-policy-skills@tailrocks`.
Run `/reload-plugins`. Confirm the new qualified skill appears in the picker,
then remove the old copy and reload plugins again.

```sh
claude plugin uninstall tailrocks-vitalik-mode-skills@tailrocks --scope user
```

### Codex CLI

Refresh the marketplace and install the replacement.

```sh
codex plugin marketplace upgrade tailrocks
codex plugin add tailrocks-agent-policy-skills@tailrocks
```

Open a new session and find `$tailrocks-agent-policy-skills:vitalik-mode`
in `/skills`. Once it is available, remove the standalone package and open
a new session.

```sh
codex plugin remove tailrocks-vitalik-mode-skills@tailrocks
```

For another host, follow the [current installation guide][install]. Confirm
the replacement skill is available, then follow the [old removal steps][old-install].

## Invoke the skill

In Claude Code, enter `/tailrocks-agent-policy-skills:vitalik-mode on`.
In Codex CLI, enter `$tailrocks-agent-policy-skills:vitalik-mode on`.
Use `status` to inspect the mode and `off` to end it. Every skill in the
Agent Policy package requires its own explicit user invocation. Installing
the new package or copying saved goal state cannot enable a policy.

[agent-policy]: https://github.com/tailrocks/tailrocks-agent-policy-skills
[install]: https://github.com/tailrocks/tailrocks-agent-policy-skills/blob/main/docs/installation.md
[old-install]: https://github.com/tailrocks/tailrocks-vitalik-mode-skills/blob/d1e57b5ec0516c23b2c18d77846d7f2ee96674d3/docs/installation.md
