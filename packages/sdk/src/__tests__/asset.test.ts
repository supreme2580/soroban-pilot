import { describe, it, expect } from 'vitest';
import { createAsset, formatAsset, parseAssetString, isNativeAsset } from '../asset/index.js';

describe('asset utilities', () => {
  it('creates native asset', () => {
    const asset = createAsset('XLM');
    expect(asset.type).toBe('native');
    expect(isNativeAsset(asset)).toBe(true);
  });

  it('creates credit asset with issuer', () => {
    const asset = createAsset('USDC', 'GA5ZSEJYB37JRC5AVCIA5MOP4RHTM335X2KGX3IHOJAPP5RE34K4KZVN');
    expect(asset.type).toBe('credit_alphanum4');
    expect(asset.code).toBe('USDC');
  });

  it('formats native asset', () => {
    expect(formatAsset(createAsset('XLM'))).toBe('XLM');
  });

  it('parses asset string', () => {
    const asset = parseAssetString('USDC:GA5ZSEJYB37JRC5AVCIA5MOP4RHTM335X2KGX3IHOJAPP5RE34K4KZVN');
    expect(asset.code).toBe('USDC');
    expect(asset.issuer).toBeTruthy();
  });
});
