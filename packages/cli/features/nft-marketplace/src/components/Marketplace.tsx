// stellarpilot add nft-marketplace — Marketplace component

import { type JSX } from 'react';

interface Listing {
  id: number;
  tokenId: number;
  price: string;
  seller: string;
  imageUrl?: string;
}

interface MarketplaceProps {
  listings: Listing[];
  onBuy: (id: number) => void;
  onList: () => void;
}

export function Marketplace({ listings, onBuy, onList }: MarketplaceProps): JSX.Element {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '24px',
        }}
      >
        <h2>NFT Marketplace</h2>
        <button onClick={onList}>List NFT</button>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '16px',
        }}
      >
        {listings.map((l) => (
          <div
            key={l.id}
            style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px' }}
          >
            <p style={{ fontWeight: 600 }}>Token #{l.tokenId}</p>
            <p>{l.price}</p>
            <p style={{ fontSize: '12px', color: '#718096' }}>Seller: {l.seller.slice(0, 8)}...</p>
            <button onClick={() => onBuy(l.id)} style={{ marginTop: '8px', width: '100%' }}>
              Buy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
