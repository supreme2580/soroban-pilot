import { type JSX } from 'react';

export interface NftCardProps {
  title: string;
  imageUrl: string;
  collection?: string;
  tokenId?: string;
  contractAddress?: string;
  isLoading?: boolean;
}

export function NftCard({
  title,
  imageUrl,
  collection,
  tokenId,
  isLoading = false,
}: NftCardProps): JSX.Element {
  return (
    <div
      style={{
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid #e2e8f0',
        backgroundColor: '#ffffff',
        maxWidth: '280px',
        transition: 'box-shadow 0.2s',
      }}
      role="article"
      aria-label={`NFT: ${title}`}
    >
      {isLoading ? (
        <div style={{ width: '100%', height: '200px', backgroundColor: '#edf2f7' }} />
      ) : (
        <img
          src={imageUrl}
          alt={title}
          style={{ width: '100%', height: '200px', objectFit: 'cover' }}
          loading="lazy"
        />
      )}
      <div style={{ padding: '12px' }}>
        {collection && (
          <div style={{ fontSize: '12px', color: '#718096', marginBottom: '4px' }}>
            {collection}
          </div>
        )}
        <div style={{ fontSize: '16px', fontWeight: 700, color: '#2d3748' }}>
          {isLoading ? '...' : title}
        </div>
        {tokenId && (
          <div style={{ fontSize: '12px', color: '#a0aec0', marginTop: '4px' }}>#{tokenId}</div>
        )}
      </div>
    </div>
  );
}
