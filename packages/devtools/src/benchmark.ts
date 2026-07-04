export interface BenchmarkResult {
  name: string;
  duration: number;
  operations: number;
  opsPerSecond: number;
}

export async function measureOperation<T>(
  name: string,
  fn: () => Promise<T> | T,
  iterations: number = 100,
): Promise<BenchmarkResult> {
  const start = performance.now();
  for (let i = 0; i < iterations; i++) {
    await fn();
  }
  const duration = performance.now() - start;

  return {
    name,
    duration,
    operations: iterations,
    opsPerSecond: Math.round((iterations / duration) * 1000),
  };
}

export function formatBenchmark(result: BenchmarkResult): string {
  return `${result.name}: ${result.opsPerSecond.toLocaleString()} ops/s (${result.duration.toFixed(2)}ms for ${result.operations} ops)`;
}
