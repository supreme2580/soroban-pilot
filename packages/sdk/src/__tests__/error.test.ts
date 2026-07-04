import { describe, it, expect } from 'vitest';
import {
  StellarPilotError,
  WalletError,
  NetworkError,
  isStellarPilotError,
} from '../error/index.js';

describe('error utilities', () => {
  it('creates StellarPilotError with code', () => {
    const error = new StellarPilotError('test error', 'TEST_ERROR');
    expect(error.message).toBe('test error');
    expect(error.code).toBe('TEST_ERROR');
  });

  it('creates WalletError', () => {
    const error = new WalletError('wallet not found');
    expect(error.code).toBe('WALLET_ERROR');
    expect(error.name).toBe('WalletError');
  });

  it('creates NetworkError', () => {
    const error = new NetworkError('network timeout');
    expect(error.code).toBe('NETWORK_ERROR');
  });

  it('isStellarPilotError detects errors', () => {
    expect(isStellarPilotError(new StellarPilotError('', ''))).toBe(true);
    expect(isStellarPilotError(new Error(''))).toBe(false);
  });
});
