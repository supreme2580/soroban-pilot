// stellarpilot add nft — NFT gallery component

import { type JSX } from 'react';

interface NFT {
  id: string;
  name: string;
  imageUrl: string;
}

interface NftGalleryProps {
  nfts: NFT[];
  onSelect?: (id: string) => void;
}

export function NftGallery({ nfts, onSelect }: NftGalleryProps): JSX.Element {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '16px',
      }}
    >
      {nfts.map((nft) => (
        <div
          key={nft.id}
          onClick={() => onSelect?.(nft.id)}
          style={{
            cursor: 'pointer',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            padding: '12px',
          }}
        >
          <img
            src={nft.imageUrl}
            alt={nft.name}
            style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '4px' }}
          />
          <p style={{ fontWeight: 600, marginTop: '8px' }}>{nft.name}</p>
        </div>
      ))}
    </div>
  );
}
