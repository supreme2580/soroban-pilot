import { type JSX } from 'react';

export type TxStatus = 'pending' | 'success' | 'failed' | 'unknown';

export interface TransactionStatusProps {
  status: TxStatus;
  hash?: string;
  message?: string;
}

const statusConfig: Record<TxStatus, { color: string; bg: string; icon: string; label: string }> = {
  pending: { color: '#b7791f', bg: '#fffff0', icon: '⏳', label: 'Pending' },
  success: { color: '#276749', bg: '#f0fff4', icon: '✅', label: 'Success' },
  failed: { color: '#9b2c2c', bg: '#fff5f5', icon: '❌', label: 'Failed' },
  unknown: { color: '#718096', bg: '#f7fafc', icon: '❓', label: 'Unknown' },
};

export function TransactionStatus({ status, hash, message }: TransactionStatusProps): JSX.Element {
  const config = statusConfig[status];

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 16px',
        borderRadius: '8px',
        backgroundColor: config.bg,
        color: config.color,
        fontSize: '14px',
        fontWeight: 500,
      }}
      role="status"
      aria-label={`Transaction ${config.label.toLowerCase()}`}
    >
      <span aria-hidden="true">{config.icon}</span>
      <span>{config.label}</span>
      {hash && <code style={{ fontSize: '12px', opacity: 0.8 }}>{hash.slice(0, 8)}...</code>}
      {message && <span style={{ fontSize: '12px', opacity: 0.8 }}>{message}</span>}
    </div>
  );
}
