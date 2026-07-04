import { useState, type JSX } from 'react';

export interface AssetOption {
  code: string;
  issuer?: string;
  balance?: string;
  icon?: string;
}

export interface AssetPickerProps {
  assets: AssetOption[];
  selected?: string;
  onSelect: (code: string) => void;
  label?: string;
}

const pickerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
};

export function AssetPicker({
  assets,
  selected,
  onSelect,
  label = 'Select Asset',
}: AssetPickerProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const selectedAsset = assets.find((a) => a.code === selected);

  return (
    <div style={pickerStyle}>
      <label style={{ fontSize: '14px', fontWeight: 600, color: '#4a5568' }}>{label}</label>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '10px 16px',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          backgroundColor: '#ffffff',
          cursor: 'pointer',
          textAlign: 'left',
          fontSize: '14px',
        }}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {selectedAsset
          ? `${selectedAsset.code}${selectedAsset.balance ? ` (${selectedAsset.balance})` : ''}`
          : 'Select...'}
      </button>
      {isOpen && (
        <div
          style={{
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            backgroundColor: '#ffffff',
            overflow: 'hidden',
          }}
          role="listbox"
        >
          {assets.map((asset) => (
            <button
              key={asset.code}
              onClick={() => {
                onSelect(asset.code);
                setIsOpen(false);
              }}
              style={{
                display: 'block',
                width: '100%',
                padding: '10px 16px',
                border: 'none',
                backgroundColor: selected === asset.code ? '#ebf4ff' : 'transparent',
                cursor: 'pointer',
                textAlign: 'left',
                fontSize: '14px',
              }}
              role="option"
              aria-selected={selected === asset.code}
            >
              <strong>{asset.code}</strong>
              {asset.balance && (
                <span style={{ marginLeft: '8px', color: '#718096' }}>{asset.balance}</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
