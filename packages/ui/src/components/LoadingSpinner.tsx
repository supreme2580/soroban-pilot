import { type JSX } from 'react';

export interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  label?: string;
}

const sizeMap = { small: 16, medium: 32, large: 48 };

export function LoadingSpinner({
  size = 'medium',
  color = '#7c3aed',
  label = 'Loading...',
}: LoadingSpinnerProps): JSX.Element {
  const px = sizeMap[size];

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        color: '#718096',
        fontSize: '14px',
      }}
      role="status"
      aria-label={label}
    >
      <svg
        width={px}
        height={px}
        viewBox="0 0 24 24"
        fill="none"
        style={{ animation: 'spin 1s linear infinite' }}
        aria-hidden="true"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke={color}
          strokeWidth="3"
          strokeDasharray="31.4 31.4"
          strokeLinecap="round"
          opacity={0.3}
        />
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke={color}
          strokeWidth="3"
          strokeDasharray="31.4 31.4"
          strokeLinecap="round"
          transform="rotate(-90 12 12)"
        />
      </svg>
      {label}
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
