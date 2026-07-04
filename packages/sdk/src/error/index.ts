export class StellarPilotError extends Error {
  public code: string;
  public details?: Record<string, unknown>;

  constructor(message: string, code: string, details?: Record<string, unknown>) {
    super(message);
    this.name = 'StellarPilotError';
    this.code = code;
    this.details = details;
  }
}

export class WalletError extends StellarPilotError {
  constructor(message: string, details?: Record<string, unknown>) {
    super(message, 'WALLET_ERROR', details);
    this.name = 'WalletError';
  }
}

export class NetworkError extends StellarPilotError {
  constructor(message: string, details?: Record<string, unknown>) {
    super(message, 'NETWORK_ERROR', details);
    this.name = 'NetworkError';
  }
}

export class TransactionError extends StellarPilotError {
  constructor(message: string, details?: Record<string, unknown>) {
    super(message, 'TRANSACTION_ERROR', details);
    this.name = 'TransactionError';
  }
}

export class ValidationError extends StellarPilotError {
  constructor(message: string, details?: Record<string, unknown>) {
    super(message, 'VALIDATION_ERROR', details);
    this.name = 'ValidationError';
  }
}

export function isStellarPilotError(error: unknown): error is StellarPilotError {
  return error instanceof StellarPilotError;
}
