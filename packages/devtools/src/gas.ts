export interface GasEstimate {
  min: number;
  max: number;
  recommended: number;
  unit: 'stroops' | 'lumens';
}

export function estimateContractGas(operations: number, dataSize: number): GasEstimate {
  const base = 100_000;
  const perOp = 50_000;
  const perByte = 100;
  const estimated = base + operations * perOp + dataSize * perByte;

  return {
    min: Math.floor(estimated * 0.8),
    max: Math.ceil(estimated * 1.5),
    recommended: estimated,
    unit: 'stroops',
  };
}

export function stroopsToXlm(stroops: number): number {
  return stroops / 10_000_000;
}
