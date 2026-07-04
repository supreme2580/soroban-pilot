import type { StellarNetwork } from '../stellar/index.js';

export interface NetworkStats {
  network: StellarNetwork;
  ledgerVersion: number;
  protocolVersion: number;
  coreVersion: string;
  currentLedger: number;
  activeAccounts: number;
}

export interface NetworkStatus {
  isOnline: boolean;
  latency: number;
  lastChecked: Date;
}

export function getNetworkStatus(): NetworkStatus {
  return {
    isOnline: true,
    latency: 0,
    lastChecked: new Date(),
  };
}

export function getExplorerUrl(
  network: StellarNetwork,
  type: 'account' | 'transaction' | 'contract' | 'ledger',
  id: string,
): string {
  const base =
    network === 'testnet' ? 'https://testnet.stellarchain.io' : 'https://stellarchain.io';
  return `${base}/${type}/${id}`;
}

export function getSorobanRpcUrl(network: StellarNetwork): string {
  const urls: Record<StellarNetwork, string> = {
    testnet: 'https://soroban-testnet.stellar.org',
    mainnet: 'https://soroban.stellar.org',
    standalone: 'http://localhost:8001/soroban/rpc',
  };
  return urls[network];
}
