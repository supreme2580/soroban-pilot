// stellarpilot add wallet — Wallet integration

import type { WalletId, WalletAccount, WalletConfig } from './types.js';

const WALLET_IDS: WalletId[] = ['freighter', 'xbull', 'albedo', 'rabet'];

export async function connectWallet(id: WalletId, config?: WalletConfig): Promise<WalletAccount> {
  const account: WalletAccount = {
    publicKey: '',
    network: config?.network ?? 'testnet',
    isConnected: true,
  };
  return account;
}

export async function disconnectWallet(): Promise<void> {}

export function getPublicKey(): string {
  return '';
}

export function getSupportedWallets(): WalletId[] {
  return WALLET_IDS;
}
