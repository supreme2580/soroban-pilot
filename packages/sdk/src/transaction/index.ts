export type TransactionStatus = 'pending' | 'success' | 'failed' | 'unknown';

export interface TransactionResult {
  hash: string;
  status: TransactionStatus;
  ledger?: number;
  createdAt?: string;
  applicationOrder?: number;
  feeCharged?: string;
  envelopeXdr?: string;
  resultXdr?: string;
}

export interface TransactionBuilderOptions {
  fee?: string;
  timeout?: number;
  memo?: string;
}

export class TransactionBuilder {
  private options: TransactionBuilderOptions;

  constructor(options: TransactionBuilderOptions = {}) {
    this.options = options;
  }

  setFee(fee: string): this {
    this.options.fee = fee;
    return this;
  }

  setTimeout(timeout: number): this {
    this.options.timeout = timeout;
    return this;
  }

  setMemo(memo: string): this {
    this.options.memo = memo;
    return this;
  }

  build(): TransactionBuilderOptions {
    return { ...this.options };
  }
}

export function createTransactionBuilder(options?: TransactionBuilderOptions): TransactionBuilder {
  return new TransactionBuilder(options);
}

export function parseTransactionStatus(status: string): TransactionStatus {
  const valid: TransactionStatus[] = ['pending', 'success', 'failed', 'unknown'];
  return valid.includes(status as TransactionStatus) ? (status as TransactionStatus) : 'unknown';
}
