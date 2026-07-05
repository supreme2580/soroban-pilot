// stellarpilot add wallet — Wallet types

export type WalletId = 'freighter' | 'xbull' | 'albedo' | 'rabet';

export interface WalletAccount {
  publicKey: string;
  network: 'testnet' | 'mainnet';
  isConnected: boolean;
}

export interface WalletConfig {
  network: 'testnet' | 'mainnet';
  timeout?: number;
}
