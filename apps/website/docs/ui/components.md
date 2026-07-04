---
id: components
title: UI Components
sidebar_position: 1
---

# UI Components

Reusable React components for Stellar applications.

## Available Components

- **WalletButton** - Connect/disconnect wallet button
- **WalletModal** - Wallet selection modal
- **AssetPicker** - Asset selection dropdown
- **TransactionStatus** - Transaction status display
- **ExplorerLink** - Stellar explorer link
- **BalanceCard** - Asset balance display card
- **NftCard** - NFT display card
- **PaymentButton** - Payment action button
- **LoadingSpinner** - Loading spinner indicator
- **LoadingSkeleton** - Skeleton loading placeholder

## Installation

```bash
pnpm add @stellarpilot/ui
```

## Usage

```tsx
import { WalletButton } from '@stellarpilot/ui';

function App() {
  return (
    <WalletButton
      isConnected={false}
      onConnect={() => console.log('connect')}
    />
  );
}
```
