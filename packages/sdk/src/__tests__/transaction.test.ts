import { describe, it, expect } from 'vitest';
import { createTransactionBuilder, parseTransactionStatus } from '../transaction/index.js';

describe('transaction utilities', () => {
  it('creates transaction builder with defaults', () => {
    const builder = createTransactionBuilder();
    const built = builder.build();
    expect(built).toBeDefined();
  });

  it('builds transaction with custom options', () => {
    const builder = createTransactionBuilder({ fee: '100' });
    builder.setMemo('test');
    const built = builder.build();
    expect(built.fee).toBe('100');
    expect(built.memo).toBe('test');
  });

  it('parses transaction status', () => {
    expect(parseTransactionStatus('success')).toBe('success');
    expect(parseTransactionStatus('invalid')).toBe('unknown');
  });
});
