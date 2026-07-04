export type StellarNetwork = 'testnet' | 'mainnet' | 'standalone';

export interface StellarConfig {
  network: StellarNetwork;
  horizonUrl: string;
  rpcUrl: string;
  passphrase: string;
}

export const STELLAR_NETWORKS: Record<StellarNetwork, StellarConfig> = {
  testnet: {
    network: 'testnet',
    horizonUrl: 'https://horizon-testnet.stellar.org',
    rpcUrl: 'https://soroban-testnet.stellar.org',
    passphrase: 'Test SDF Network ; September 2015',
  },
  mainnet: {
    network: 'mainnet',
    horizonUrl: 'https://horizon.stellar.org',
    rpcUrl: 'https://soroban.stellar.org',
    passphrase: 'Public Global Stellar Network ; September 2015',
  },
  standalone: {
    network: 'standalone',
    horizonUrl: 'http://localhost:8000',
    rpcUrl: 'http://localhost:8001/soroban/rpc',
    passphrase: 'Standalone Network ; February 2017',
  },
};

export function getNetworkConfig(network: StellarNetwork): StellarConfig {
  return STELLAR_NETWORKS[network];
}

export function isValidStellarAddress(address: string): boolean {
  return /^G[A-Z0-9]{55}$/.test(address);
}

export function isValidContractId(contractId: string): boolean {
  return /^C[A-Z0-9]{55}$/.test(contractId);
}

export function isValidTransactionHash(hash: string): boolean {
  return /^[a-f0-9]{64}$/i.test(hash);
}
