import { describe, it, expect } from 'vitest';
import { estimateContractGas, stroopsToXlm } from '../gas.js';

describe('gas estimation', () => {
  it('estimates gas for contract call', () => {
    const estimate = estimateContractGas(1, 100);
    expect(estimate.min).toBeGreaterThan(0);
    expect(estimate.recommended).toBeGreaterThan(estimate.min);
    expect(estimate.max).toBeGreaterThan(estimate.recommended);
  });

  it('converts stroops to XLM', () => {
    expect(stroopsToXlm(10_000_000)).toBe(1);
    expect(stroopsToXlm(1_000_000)).toBe(0.1);
  });
});
