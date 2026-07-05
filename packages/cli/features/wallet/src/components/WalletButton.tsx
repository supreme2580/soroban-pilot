// stellarpilot add wallet — Wallet button component

import { type JSX } from 'react';

interface WalletButtonProps {
  isConnected: boolean;
  publicKey?: string;
  onConnect: () => void;
  onDisconnect: () => void;
}

export function WalletButton({
  isConnected,
  publicKey,
  onConnect,
  onDisconnect,
}: WalletButtonProps): JSX.Element {
  return (
    <button onClick={isConnected ? onDisconnect : onConnect}>
      {isConnected ? `${publicKey?.slice(0, 4)}...${publicKey?.slice(-4)}` : 'Connect Wallet'}
    </button>
  );
}
