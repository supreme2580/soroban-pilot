export interface AccountInfo {
  publicKey: string;
  balances: AccountBalance[];
  sequenceNumber: string;
  subentryCount: number;
  thresholds: AccountThresholds;
  flags: AccountFlags;
}

export interface AccountBalance {
  asset: string;
  amount: string;
  buyingLiabilities?: string;
  sellingLiabilities?: string;
}

export interface AccountThresholds {
  lowThreshold: number;
  medThreshold: number;
  highThreshold: number;
}

export interface AccountFlags {
  authRequired: boolean;
  authRevocable: boolean;
  authImmutable: boolean;
}

export function createAccount(publicKey: string): AccountInfo {
  return {
    publicKey,
    balances: [],
    sequenceNumber: '0',
    subentryCount: 0,
    thresholds: { lowThreshold: 0, medThreshold: 0, highThreshold: 0 },
    flags: { authRequired: false, authRevocable: false, authImmutable: false },
  };
}

export function getAccountBalance(account: AccountInfo, asset: string): AccountBalance | undefined {
  return account.balances.find((b) => b.asset === asset);
}

export function hasTrustline(account: AccountInfo, asset: string): boolean {
  return account.balances.some((b) => b.asset === asset);
}
