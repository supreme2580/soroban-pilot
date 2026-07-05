// stellarpilot add escrow — Escrow dashboard

import { type JSX } from 'react';

interface Escrow {
  id: number;
  depositor: string;
  beneficiary: string;
  amount: string;
  status: 'pending' | 'released' | 'refunded' | 'disputed';
}

interface EscrowDashboardProps {
  escrows: Escrow[];
  onRelease: (id: number) => void;
  onRefund: (id: number) => void;
}

export function EscrowDashboard({
  escrows,
  onRelease,
  onRefund,
}: EscrowDashboardProps): JSX.Element {
  return (
    <div>
      <h2>Escrows</h2>
      {escrows.map((e) => (
        <div
          key={e.id}
          style={{
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            padding: '16px',
            marginBottom: '12px',
          }}
        >
          <p>Amount: {e.amount}</p>
          <p>Status: {e.status}</p>
          {e.status === 'pending' && (
            <div style={{ display: 'flex', gap: '8px' }}>
              <button onClick={() => onRelease(e.id)}>Release</button>
              <button onClick={() => onRefund(e.id)}>Refund</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
