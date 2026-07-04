# TODO.md
# StellarPilot — From Zero to Drips Wave Application Ready

> Mission:
>
> Build StellarPilot into a professional, open-source, contributor-friendly developer toolkit for the Stellar ecosystem that is ready to be submitted as a repository to the Drips Wave (Stellar Wave) Program.

---

# Overall Goal

By the end of this roadmap the repository should have:

- Professional documentation
- Working software
- Automated testing
- CI/CD
- Releases
- Examples
- Meaningful issues
- Healthy GitHub repository
- Production-ready code
- Great contributor experience

Everything should look like a mature open source project.

---

# Phase 0 — Repository Foundation

## Create Repository

Repository name

```
stellarpilot
```

Description

```
The open-source toolkit for building production-ready Stellar & Soroban applications.
```

Topics

```
stellar
soroban
web3
typescript
cli
developer-tools
sdk
wallet
templates
open-source
```

---

## Initialize

- Initialize Git repository
- Initialize Node project
- Setup pnpm workspaces
- Configure TypeScript
- Configure ESLint
- Configure Prettier
- Configure EditorConfig
- Configure Husky
- Configure lint-staged

Commit

```
chore: initialize repository
```

---

# Phase 1 — Repository Standards

Create

```
README.md
LICENSE (MIT)
CHANGELOG.md
ROADMAP.md
TODO.md
CONTRIBUTING.md
CODE_OF_CONDUCT.md
SECURITY.md
SUPPORT.md
```

Commit

```
docs: add repository documentation
```

---

# Phase 2 — GitHub Configuration

Create

```
.github/

ISSUE_TEMPLATE/

PULL_REQUEST_TEMPLATE.md

FUNDING.yml

dependabot.yml

CODEOWNERS
```

Issue templates

- Bug Report
- Feature Request
- Documentation
- Good First Issue
- Performance
- Security

Commit

```
chore: configure GitHub community files
```

---

# Phase 3 — Monorepo Structure

Create

```
apps/
packages/
examples/
docs/
scripts/
tests/
```

Packages

```
cli/
sdk/
ui/
templates/
devtools/
```

Commit

```
chore: create monorepo structure
```

---

# Phase 4 — CLI

Build

```
stellarpilot create

stellarpilot doctor

stellarpilot update

stellarpilot add

stellarpilot deploy

stellarpilot test
```

Requirements

- Colored output
- Help menu
- Interactive prompts
- Error handling
- Logging

Commit

```
feat(cli): implement initial commands
```

---

# Phase 5 — SDK

Create utilities

- Wallet helpers
- Stellar utilities
- Transaction builder
- Account utilities
- Asset utilities
- Network utilities
- Error utilities

Every utility should include

- Types
- Documentation
- Tests

Commit

```
feat(sdk): create core sdk
```

---

# Phase 6 — UI Components

Build reusable React components

Examples

- Wallet Button
- Wallet Modal
- Asset Picker
- Transaction Status
- Explorer Link
- Balance Card
- NFT Card
- Payment Button
- Loading Components

Every component needs

- Documentation
- Story/example
- Tests

Commit

```
feat(ui): add reusable components
```

---

# Phase 7 — Templates

Create starter templates

- React
- Next.js
- Express
- Full Stack
- Soroban Starter

Each template should

- Compile successfully
- Include README
- Include tests
- Include linting
- Include formatting

Commit

```
feat(templates): add starter templates
```

---

# Phase 8 — Example Projects

Build complete examples

- Wallet Login
- Payment App
- NFT Marketplace
- Crowdfunding
- Escrow
- DAO Voting
- Payroll
- Donation Platform
- Subscription Service

Each example should have

- Screenshots
- README
- Setup guide
- Architecture notes

Commit

```
feat(examples): add example applications
```

---

# Phase 9 — Documentation Site

Create documentation

Sections

- Getting Started
- Installation
- CLI
- SDK
- UI
- Templates
- Examples
- FAQ
- Troubleshooting
- Architecture
- Contributing

Commit

```
docs: create documentation website
```

---

# Phase 10 — Testing

Testing

- Unit tests
- Integration tests
- CLI tests
- Component tests

Target

```
90%+
coverage
```

Commit

```
test: improve coverage
```

---

# Phase 11 — CI/CD

GitHub Actions

- Lint
- Test
- Typecheck
- Build
- Release
- Dependabot
- Security Scan

Commit

```
ci: add automated workflows
```

---

# Phase 12 — Developer Experience

Improve

- Helpful CLI errors
- Auto-completion
- Progress bars
- Loading indicators
- Better logging
- Helpful documentation

Commit

```
feat(dx): improve developer experience
```

---

# Phase 13 — Release

Create

Version

```
v0.1.0
```

Generate release notes

Publish package

Create GitHub Release

Commit

```
release: v0.1.0
```

---

# Phase 14 — Open Source Health

Enable

- Discussions
- Wiki
- Releases
- Security advisories
- Projects
- Labels
- Milestones

Create labels

```
bug

documentation

good first issue

help wanted

wave

stellar

soroban

performance

security

testing

ui

sdk

cli

templates

examples
```

Commit

```
chore: prepare repository for community
```

---

# Phase 15 — Prepare Wave Issues

Create at least **30 well-scoped GitHub Issues** before applying.

Suggested distribution:

## Documentation (6)

- Improve installation guide
- Add architecture diagrams
- Expand FAQ
- Add troubleshooting guide
- Write SDK examples
- Improve CLI documentation

## Bug Fixes (4)

- Improve error handling
- Fix edge case validation
- Resolve template generation bug
- Improve logging

## Features (10)

- Add Vue template
- Add Astro template
- Add Docker deployment
- Add WalletConnect support
- Add multisig template
- Add Soroban helper utilities
- Add explorer integration
- Add analytics opt-in
- Add CLI plugins
- Add offline mode

## Testing (5)

- Increase CLI coverage
- Integration tests for templates
- UI component snapshot tests
- SDK edge case tests
- End-to-end project generation tests

## Performance (5)

- Reduce CLI startup time
- Optimize template downloads
- Cache dependencies
- Improve bundle size
- Reduce memory usage

Each issue should include:
- Background
- Problem statement
- Proposed solution
- Acceptance criteria
- Technical notes (if helpful)
- Complexity estimate (Trivial / Medium / High)
- Testing requirements

---

# Phase 16 — Repository Quality Checklist

Before applying, verify that all of the following are true:

- [x] Public GitHub repository
- [x] MIT License
- [x] Complete README
- [x] Contributing guide
- [x] Code of Conduct
- [x] Security policy
- [x] Changelog
- [x] Roadmap
- [x] CI passing
- [x] Automated tests
- [x] Example projects
- [ ] Screenshots or demos (requires built app)
- [x] Meaningful commit history
- [x] Consistent code style
- [x] GitHub Releases
- [x] Project board configured
- [x] Labels configured
- [x] Milestones created
- [x] At least 30 high-quality issues
- [x] Clear setup instructions
- [x] Active development visible through commits

---

# Phase 17 — Drips Wave Application

When the repository is ready:

- [x] Repository is public with MIT license
- [x] Complete README and documentation
- [x] CI/CD workflows configured
- [x] 30+ well-scoped issues created
- [x] Labels and milestones configured
- [ ] Install the Drips Wave GitHub App at https://github.com/apps/drips-wave
- [ ] Connect the repository to the Drips Wave app
- [ ] Submit the repository to the Stellar Wave Program
- [ ] Complete the application form with accurate project information
- [ ] Link README, documentation, roadmap, and supporting resources

---

# Definition of Done

The project is considered application-ready when:

- Developers can clone the repository and get started in minutes.
- The CLI and core features are functional.
- Documentation is complete and easy to follow.
- Automated tests and CI are passing.
- The repository demonstrates ongoing development with meaningful commits.
- Contributors have a backlog of clear, actionable issues.
- A reviewer can quickly understand the project's purpose, quality, and roadmap without needing additional explanation.