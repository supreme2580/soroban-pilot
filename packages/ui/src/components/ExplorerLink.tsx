import { type JSX } from 'react';

export interface ExplorerLinkProps {
  hash: string;
  type?: 'transaction' | 'account' | 'contract' | 'ledger';
  network?: 'testnet' | 'mainnet';
  label?: string;
  className?: string;
}

function getExplorerUrl(type: string, hash: string, network: string): string {
  const base =
    network === 'mainnet' ? 'https://stellarchain.io' : 'https://testnet.stellarchain.io';
  return `${base}/${type}/${hash}`;
}

export function ExplorerLink({
  hash,
  type = 'transaction',
  network = 'testnet',
  label,
  className,
}: ExplorerLinkProps): JSX.Element {
  const url = getExplorerUrl(type, hash, network);
  const displayLabel = label ?? `${hash.slice(0, 8)}...${hash.slice(-4)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: '#7c3aed',
        textDecoration: 'none',
        fontWeight: 500,
        fontSize: '14px',
      }}
      className={className}
      aria-label={`View ${type} on Stellar Explorer`}
    >
      {displayLabel}
      <span aria-hidden="true" style={{ marginLeft: '4px' }}>
        ↗
      </span>
    </a>
  );
}
