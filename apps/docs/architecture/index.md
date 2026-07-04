# Architecture

## Overview

StellarPilot follows a modular architecture with separate packages for different concerns.

## Package Structure

```
packages/
  cli/        - Command-line interface
  sdk/        - Core SDK utilities
  ui/         - React component library
  templates/  - Starter templates
  devtools/   - Developer tools
```

## Data Flow

```
Developer → CLI → Templates → SDK → Wallet → Soroban Contracts
                                                ↓
                                         Deployment
                                                ↓
                                           Testing
                                                ↓
                                        Production
```

## Design Decisions

- TypeScript for type safety
- pnpm workspaces for monorepo management
- Vitest for testing
- Modular packages for composability
