# 🚀 StellarPilot

> The toolbox every Stellar & Soroban developer installs first.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)
![Wave Ready](https://img.shields.io/badge/Drips-Wave%20Ready-purple)
![Built with TypeScript](https://img.shields.io/badge/Built%20With-TypeScript-3178c6)

---

## What is StellarPilot?

StellarPilot is an **ecosystem**, not a single tool. Instead of doing one thing, it's a developer toolkit, package manager, template library, and learning platform for the Stellar network.

| Existing Project | What it does | StellarPilot Equivalent |
|---|---|---|
| `create-next-app` | Creates a Next.js app | Creates a Stellar/Soroban app |
| shadcn/ui | Ready-made UI components | Ready-made Stellar/Web3 components |
| Awesome-\* lists | Curated resources | Curated Stellar resources and examples |
| Supabase Examples | Reference implementations | Soroban reference implementations |
| Hardhat | Ethereum dev toolkit | Soroban development toolkit |
| Foundry | Smart contract tooling | Soroban tooling and utilities |

---

## The Vision

A developer wants to build an escrow app.

Instead of spending hours searching GitHub, reading docs, and wiring everything together, they do:

```bash
npx stellarpilot create escrow-app
```

and immediately get:

```
escrow-app/
  contracts/
  frontend/
  wallet/
  tests/
  docker/
  README.md
```

Everything is already connected.

---

## A Package Manager for Soroban

Already have a project and need a feature? Install it like components with shadcn/ui:

```bash
npx stellarpilot add wallet
npx stellarpilot add nft
npx stellarpilot add multisig
npx stellarpilot add github-actions
npx stellarpilot add escrow
npx stellarpilot add payments
npx stellarpilot add dao
npx stellarpilot add nft-marketplace
```

Each command copies **production-ready code** directly into your project.

---

## A Learning Platform

Every feature links to a working example:

```
Examples/
  Wallet Login
    ↓ Source Code
    ↓ Architecture
    ↓ Tutorial
    ↓ Documentation
```

Learn by running real projects instead of reading theory.

---

## A Community Marketplace

Eventually, contributors publish their own templates:

```
Community
  ↓ Creates template
  ↓ Pull Request
  ↓ Reviewed
  ↓ Merged
  ↓ Available to everyone
```

Examples of community templates:

- Payroll Starter
- Crowdfunding Starter
- NFT Marketplace
- DAO Kit
- Escrow Kit
- Subscription Kit
- Donation Platform
- Loyalty Program
- Event Ticketing
- Invoice Payments

This gives contributors **meaningful, independent work**.

---

## Why this matters for Drips Wave

From the maintainer's perspective, there's a healthy, long-term backlog of well-scoped issues:

- Add a new starter template
- Improve an existing template
- Write tests
- Improve documentation
- Add another wallet integration
- Optimize deployment
- Fix CLI bugs
- Improve accessibility
- Translate documentation
- Add CI templates

---

## Core Packages

| Package | Description |
|---|---|
| `cli` | Project scaffolding, feature installer, deployment |
| `sdk` | Wallet helpers, Stellar utilities, transaction builder |
| `ui` | Reusable React components for Stellar dApps |
| `templates` | Starter templates for common project types |
| `devtools` | Transaction inspector, decoder, gas estimation |

---

## Quick Start

```bash
npx stellarpilot create my-app
cd my-app
pnpm install
pnpm dev
```

---

## Project Structure

```
stellarpilot/
  apps/
    docs/
    website/
  packages/
    cli/
    ui/
    sdk/
    devtools/
    templates/
  examples/
  docs/
  .github/
  scripts/
  tests/
```

---

## Tech Stack

TypeScript · Node.js · React · Next.js · Rust · Soroban SDK · Vitest · ESLint · Prettier · GitHub Actions

---

## Contributing

We welcome contributors of all experience levels. There are many ways to contribute:

- Documentation
- Bug fixes
- New templates
- Testing
- Examples
- UI components
- Soroban contracts
- CLI improvements
- DevTools

---

## License

MIT License. See [LICENSE](./LICENSE) for details.

---

## Get Involved

⭐ Star the repository · 🐛 Report issues · 💡 Suggest features · 📖 Improve documentation · 🚀 Open a pull request

**Together we can make building on Stellar simpler for everyone.**
