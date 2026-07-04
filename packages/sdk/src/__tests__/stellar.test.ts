import { describe, it, expect } from 'vitest';
import {
  getNetworkConfig,
  isValidStellarAddress,
  isValidContractId,
  isValidTransactionHash,
} from '../stellar/index.js';

describe('stellar utilities', () => {
  it('getNetworkConfig returns testnet config', () => {
    const config = getNetworkConfig('testnet');
    expect(config.network).toBe('testnet');
    expect(config.horizonUrl).toContain('testnet');
  });

  it('isValidStellarAddress validates addresses', () => {
    const validKey = 'G' + 'A'.repeat(55);
    expect(isValidStellarAddress(validKey)).toBe(true);
    expect(isValidStellarAddress('invalid')).toBe(false);
  });

  it('isValidContractId validates contract IDs', () => {
    const validId = 'C' + 'A'.repeat(55);
    expect(isValidContractId(validId)).toBe(true);
    expect(isValidContractId('invalid')).toBe(false);
  });

  it('isValidTransactionHash validates hashes', () => {
    expect(isValidTransactionHash('a'.repeat(64))).toBe(true);
    expect(isValidTransactionHash('short')).toBe(false);
  });
});
