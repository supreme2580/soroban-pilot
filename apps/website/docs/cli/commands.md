---
id: commands
title: CLI Commands
sidebar_position: 1
---

# CLI Commands

## stellarpilot create

Create a new project from a template.

```bash
stellarpilot create [name] [options]
```

Options:
- `-t, --template <template>` - Template to use

## stellarpilot doctor

Check your environment for Stellar development.

```bash
stellarpilot doctor
```

## stellarpilot update

Update StellarPilot and project dependencies.

```bash
stellarpilot update
```

## stellarpilot add

Add components or integrations.

```bash
stellarpilot add [item]
```

## stellarpilot deploy

Deploy Soroban contracts or applications.

```bash
stellarpilot deploy [options]
```

Options:
- `-n, --network <network>` - Network (testnet/mainnet)

## stellarpilot test

Run project tests.

```bash
stellarpilot test [options]
```

Options:
- `--coverage` - With coverage
- `--watch` - Watch mode
