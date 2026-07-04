export interface TransactionInspection {
  hash: string;
  source: string;
  fee: string;
  memo?: string;
  operations: number;
  signatures: number;
  isValid: boolean;
}

export function inspectTransaction(xdr: string): TransactionInspection {
  return {
    hash: '',
    source: '',
    fee: '0',
    operations: 0,
    signatures: 0,
    isValid: xdr.length > 0,
  };
}

export function formatInspection(inspection: TransactionInspection): string {
  const lines = [
    `Hash: ${inspection.hash || 'N/A'}`,
    `Source: ${inspection.source}`,
    `Fee: ${inspection.fee}`,
    `Operations: ${inspection.operations}`,
    `Signatures: ${inspection.signatures}`,
    `Valid: ${inspection.isValid ? 'Yes' : 'No'}`,
  ];
  return lines.join('\n');
}
