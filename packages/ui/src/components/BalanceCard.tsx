import { type JSX } from 'react';

export interface BalanceCardProps {
  asset: string;
  amount: string;
  usdValue?: string;
  icon?: string;
  isLoading?: boolean;
}

const cardStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '16px',
  borderRadius: '12px',
  backgroundColor: '#ffffff',
  border: '1px solid #e2e8f0',
  minWidth: '240px',
};

export function BalanceCard({
  asset,
  amount,
  usdValue,
  icon,
  isLoading = false,
}: BalanceCardProps): JSX.Element {
  return (
    <div style={cardStyle} role="region" aria-label={`${asset} balance`}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {icon && (
          <img src={icon} alt="" style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
        )}
        <div>
          <div style={{ fontSize: '14px', fontWeight: 600, color: '#2d3748' }}>
            {isLoading ? '...' : asset}
          </div>
          {usdValue && (
            <div style={{ fontSize: '12px', color: '#718096' }}>{isLoading ? '...' : usdValue}</div>
          )}
        </div>
      </div>
      <div style={{ fontSize: '18px', fontWeight: 700, color: '#1a202c' }}>
        {isLoading ? '...' : amount}
      </div>
    </div>
  );
}
