export type AssetType = 'native' | 'credit_alphanum4' | 'credit_alphanum12';

export interface AssetDescriptor {
  type: AssetType;
  code: string;
  issuer?: string;
  contractId?: string;
}

export const NATIVE_ASSET: AssetDescriptor = {
  type: 'native',
  code: 'XLM',
};

export function createAsset(code: string, issuer?: string): AssetDescriptor {
  if (!issuer) return NATIVE_ASSET;
  return {
    type: code.length <= 4 ? 'credit_alphanum4' : 'credit_alphanum12',
    code,
    issuer,
  };
}

export function formatAsset(asset: AssetDescriptor): string {
  if (asset.type === 'native') return 'XLM';
  return `${asset.code}:${asset.issuer}`;
}

export function parseAssetString(assetStr: string): AssetDescriptor {
  if (assetStr === 'XLM' || assetStr === 'native') return NATIVE_ASSET;
  const [code, issuer] = assetStr.split(':');
  return createAsset(code, issuer);
}

export function isNativeAsset(asset: AssetDescriptor): boolean {
  return asset.type === 'native';
}
