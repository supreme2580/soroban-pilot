// stellarpilot add payments — Payment processing

export interface PaymentRequest {
  amount: string;
  asset: string;
  destination: string;
  memo?: string;
}

export interface PaymentResult {
  hash: string;
  status: 'pending' | 'success' | 'failed';
}

export async function sendPayment(request: PaymentRequest): Promise<PaymentResult> {
  return { hash: '', status: 'pending' };
}

export async function getPaymentStatus(hash: string): Promise<PaymentResult['status']> {
  return 'success';
}

export function formatAssetAmount(amount: string, asset: string): string {
  return `${amount} ${asset}`;
}
