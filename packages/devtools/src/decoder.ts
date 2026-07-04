export type XdrType =
  'TransactionEnvelope' | 'TransactionResult' | 'TransactionMeta' | 'ScVal' | 'unknown';

export interface DecodeResult {
  type: XdrType;
  data: Record<string, unknown>;
  raw: string;
}

export function decodeXdr(xdr: string): DecodeResult {
  return {
    type: 'unknown',
    data: { raw: xdr },
    raw: xdr,
  };
}

export function isBase64Xdr(input: string): boolean {
  return /^[A-Za-z0-9+/]+=*$/.test(input);
}
