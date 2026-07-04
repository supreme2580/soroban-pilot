import { type JSX } from 'react';

const sectionStyle: React.CSSProperties = {
  maxWidth: '720px',
  margin: '0 auto',
  padding: '80px 24px',
  textAlign: 'center',
};

const buttonStyle: React.CSSProperties = {
  display: 'inline-block',
  padding: '12px 32px',
  borderRadius: '8px',
  backgroundColor: '#7c3aed',
  color: '#ffffff',
  textDecoration: 'none',
  fontWeight: 600,
  fontSize: '16px',
  margin: '8px',
};

export function App(): JSX.Element {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', color: '#1a202c' }}>
      <section style={sectionStyle}>
        <h1 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '16px' }}>🚀 StellarPilot</h1>
        <p style={{ fontSize: '20px', color: '#4a5568', marginBottom: '32px', lineHeight: 1.6 }}>
          The open-source toolkit for building production-ready applications on the Stellar Network.
        </p>
        <div>
          <a href="https://github.com/supreme2580/soroban-pilot" style={buttonStyle}>
            View on GitHub
          </a>
          <a href="/docs" style={{ ...buttonStyle, backgroundColor: '#2d3748' }}>
            Documentation
          </a>
        </div>
      </section>
    </div>
  );
}
