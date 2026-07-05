// stellarpilot add payments — Payment hook

import { useState } from 'react';

interface PaymentState {
  isProcessing: boolean;
  hash?: string;
  error?: string;
}

export function usePayment() {
  const [state, setState] = useState<PaymentState>({ isProcessing: false });

  async function pay(amount: string, destination: string) {
    setState({ isProcessing: true });
    // Payment logic
    setState({ isProcessing: false, hash: '0x...' });
  }

  return { ...state, pay };
}
