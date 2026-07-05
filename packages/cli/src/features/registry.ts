export interface FeatureManifest {
  name: string;
  description: string;
  files: string[];
  dependencies?: string[];
  devDependencies?: string[];
}

export const featureRegistry: Record<string, FeatureManifest> = {
  wallet: {
    name: 'wallet',
    description: 'Wallet integration with Freighter, xBull, Albedo, and Rabet',
    files: ['src/wallet/index.ts', 'src/wallet/types.ts', 'src/components/WalletButton.tsx'],
    dependencies: ['@stellarpilot/sdk'],
  },
  nft: {
    name: 'nft',
    description: 'NFT minting and management contract + frontend',
    files: ['contracts/nft/src/lib.rs', 'src/components/NftGallery.tsx', 'src/hooks/useNFT.ts'],
    dependencies: ['@stellarpilot/sdk', '@stellarpilot/ui'],
  },
  multisig: {
    name: 'multisig',
    description: 'Multi-signature wallet contract + UI',
    files: ['contracts/multisig/src/lib.rs', 'src/components/MultisigDashboard.tsx'],
    dependencies: ['@stellarpilot/sdk'],
  },
  'github-actions': {
    name: 'github-actions',
    description: 'CI/CD workflows for Stellar/Soroban projects',
    files: ['.github/workflows/ci.yml', '.github/workflows/test.yml'],
    devDependencies: [],
  },
  escrow: {
    name: 'escrow',
    description: 'Escrow contract + dispute resolution UI',
    files: ['contracts/escrow/src/lib.rs', 'src/components/EscrowDashboard.tsx'],
    dependencies: ['@stellarpilot/sdk'],
  },
  payments: {
    name: 'payments',
    description: 'Payment processing with Stellar assets',
    files: ['src/payments/index.ts', 'src/components/PaymentButton.tsx', 'src/hooks/usePayment.ts'],
    dependencies: ['@stellarpilot/sdk', '@stellarpilot/ui'],
  },
  dao: {
    name: 'dao',
    description: 'DAO contract with proposal voting and treasury',
    files: ['contracts/dao/src/lib.rs', 'src/components/DAODashboard.tsx', 'src/hooks/useDAO.ts'],
    dependencies: ['@stellarpilot/sdk'],
  },
  'nft-marketplace': {
    name: 'nft-marketplace',
    description: 'Full NFT marketplace with listings and auctions',
    files: [
      'contracts/marketplace/src/lib.rs',
      'src/components/Marketplace.tsx',
      'src/hooks/useMarketplace.ts',
    ],
    dependencies: ['@stellarpilot/sdk', '@stellarpilot/ui'],
  },
};

export function getFeature(name: string): FeatureManifest | undefined {
  return featureRegistry[name];
}

export function listFeatures(): FeatureManifest[] {
  return Object.values(featureRegistry);
}
