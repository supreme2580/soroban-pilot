import { type JSX } from 'react';

export interface PaymentButtonProps {
  amount: string;
  asset: string;
  recipient: string;
  onPay: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

export function PaymentButton({
  amount,
  asset,
  recipient,
  onPay,
  disabled = false,
  loading = false,
  className,
}: PaymentButtonProps): JSX.Element {
  return (
    <button
      onClick={onPay}
      disabled={disabled || loading}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        width: '100%',
        padding: '12px 24px',
        borderRadius: '8px',
        border: 'none',
        backgroundColor: disabled ? '#a0aec0' : '#7c3aed',
        color: '#ffffff',
        fontWeight: 600,
        fontSize: '16px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'background-color 0.2s',
      }}
      className={className}
      aria-label={`Pay ${amount} ${asset} to ${recipient}`}
    >
      {loading ? 'Processing...' : `Pay ${amount} ${asset}`}
    </button>
  );
}
