import { type JSX } from 'react';

export interface WalletButtonProps {
  isConnected?: boolean;
  publicKey?: string;
  onConnect?: () => void;
  onDisconnect?: () => void;
  loading?: boolean;
  className?: string;
}

const buttonStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  padding: '10px 20px',
  borderRadius: '8px',
  border: 'none',
  fontWeight: 600,
  cursor: 'pointer',
  fontSize: '14px',
  transition: 'all 0.2s',
};

export function WalletButton({
  isConnected = false,
  publicKey,
  onConnect,
  onDisconnect,
  loading = false,
  className,
}: WalletButtonProps): JSX.Element {
  const handleClick = () => {
    if (loading) return;
    if (isConnected) {
      onDisconnect?.();
    } else {
      onConnect?.();
    }
  };

  const truncatedKey = publicKey ? `${publicKey.slice(0, 4)}...${publicKey.slice(-4)}` : '';

  const dynamicStyle: React.CSSProperties = {
    ...buttonStyle,
    backgroundColor: isConnected ? '#1a1a2e' : '#7c3aed',
    color: isConnected ? '#e2e8f0' : '#ffffff',
  };

  return (
    <button
      style={dynamicStyle}
      onClick={handleClick}
      disabled={loading}
      className={className}
      aria-label={isConnected ? 'Disconnect wallet' : 'Connect wallet'}
    >
      {loading ? (
        'Connecting...'
      ) : isConnected ? (
        <>
          <span aria-hidden="true">●</span>
          {truncatedKey}
        </>
      ) : (
        'Connect Wallet'
      )}
    </button>
  );
}
