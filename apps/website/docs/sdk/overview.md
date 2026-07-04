---
id: overview
title: SDK Overview
sidebar_position: 1
---

# SDK Overview

The StellarPilot SDK provides core utilities for building Stellar and Soroban applications.

## Modules

- **Wallet** - Wallet connection and management
- **Stellar** - Network configuration and validation
- **Transaction** - Transaction building and parsing
- **Account** - Account information and balances
- **Asset** - Asset creation and management
- **Network** - Network status and explorer URLs
- **Error** - Typed error classes

## Installation

```bash
pnpm add @stellarpilot/sdk
```

## Usage

```typescript
import { getNetworkConfig, isValidStellarAddress } from '@stellarpilot/sdk';

const config = getNetworkConfig('testnet');
console.log(config.horizonUrl);
```
