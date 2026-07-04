import { type JSX } from 'react';

export interface LoadingSkeletonProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  count?: number;
}

export function LoadingSkeleton({
  width = '100%',
  height = '20px',
  borderRadius = '4px',
  count = 1,
}: LoadingSkeletonProps): JSX.Element {
  const skeletonStyle: React.CSSProperties = {
    width,
    height,
    borderRadius,
    backgroundColor: '#edf2f7',
    animation: 'pulse 1.5s ease-in-out infinite',
    marginBottom: count > 1 ? '8px' : '0',
  };

  return (
    <div role="status" aria-label="Loading">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} style={skeletonStyle} />
      ))}
      <style>{`@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }`}</style>
    </div>
  );
}
