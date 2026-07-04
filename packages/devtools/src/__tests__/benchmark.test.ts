import { describe, it, expect } from 'vitest';
import { measureOperation, formatBenchmark } from '../benchmark.js';

describe('benchmark', () => {
  it('measures synchronous operations', async () => {
    const result = await measureOperation('test', () => 1 + 1, 10);
    expect(result.name).toBe('test');
    expect(result.operations).toBe(10);
    expect(result.opsPerSecond).toBeGreaterThan(0);
  });

  it('formats benchmark result', () => {
    const result = { name: 'test', duration: 100, operations: 100, opsPerSecond: 1000 };
    expect(formatBenchmark(result)).toContain('ops/s');
  });
});
