import { type JSX } from 'react';

export interface WalletOption {
  id: string;
  name: string;
  icon?: string;
  description?: string;
}

export interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (walletId: string) => void;
  wallets?: WalletOption[];
}

const overlayStyle: React.CSSProperties = {
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
};

const modalStyle: React.CSSProperties = {
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  padding: '24px',
  minWidth: '320px',
  maxWidth: '400px',
  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
};

const defaultWallets: WalletOption[] = [
  { id: 'freighter', name: 'Freighter', description: 'Stellar wallet browser extension' },
  { id: 'xbull', name: 'xBull', description: 'Stellar wallet for web and mobile' },
  { id: 'albedo', name: 'Albedo', description: 'Stellar wallet with Ledger support' },
  { id: 'rabet', name: 'Rabet', description: 'Stellar wallet browser extension' },
];

export function WalletModal({
  isOpen,
  onClose,
  onSelect,
  wallets = defaultWallets,
}: WalletModalProps): JSX.Element | null {
  if (!isOpen) return null;

  return (
    <div
      style={overlayStyle}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Select wallet"
    >
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        <h2 style={{ margin: '0 0 16px', fontSize: '18px', fontWeight: 700 }}>Connect Wallet</h2>
        {wallets.map((wallet) => (
          <button
            key={wallet.id}
            onClick={() => onSelect(wallet.id)}
            style={{
              display: 'block',
              width: '100%',
              padding: '12px 16px',
              marginBottom: '8px',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              backgroundColor: '#f8fafc',
              cursor: 'pointer',
              textAlign: 'left',
              fontSize: '14px',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#edf2f7';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#f8fafc';
            }}
            aria-label={`Connect ${wallet.name}`}
          >
            <strong>{wallet.name}</strong>
            {wallet.description && (
              <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#718096' }}>
                {wallet.description}
              </p>
            )}
          </button>
        ))}
        <button
          onClick={onClose}
          style={{
            display: 'block',
            width: '100%',
            padding: '10px',
            marginTop: '8px',
            border: 'none',
            borderRadius: '8px',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            color: '#718096',
            fontSize: '14px',
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
