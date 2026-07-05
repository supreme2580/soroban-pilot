// stellarpilot add dao — DAO dashboard

import { type JSX } from 'react';

interface Proposal {
  id: number;
  description: string;
  forVotes: number;
  againstVotes: number;
  executed: boolean;
}

interface DAODashboardProps {
  proposals: Proposal[];
  treasuryBalance?: string;
  onVote: (id: number, support: boolean) => void;
  onExecute: (id: number) => void;
  onCreateProposal: () => void;
}

export function DAODashboard({
  proposals,
  treasuryBalance,
  onVote,
  onExecute,
  onCreateProposal,
}: DAODashboardProps): JSX.Element {
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
        <h2>DAO Dashboard</h2>
        {treasuryBalance && <p>Treasury: {treasuryBalance}</p>}
      </div>
      <button onClick={onCreateProposal} style={{ marginBottom: '16px' }}>
        New Proposal
      </button>
      {proposals.map((p) => (
        <div
          key={p.id}
          style={{
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            padding: '16px',
            marginBottom: '12px',
          }}
        >
          <p style={{ fontWeight: 600 }}>{p.description}</p>
          <p>
            For: {p.forVotes} | Against: {p.againstVotes}
          </p>
          {!p.executed && (
            <div style={{ display: 'flex', gap: '8px' }}>
              <button onClick={() => onVote(p.id, true)}>Vote For</button>
              <button onClick={() => onVote(p.id, false)}>Vote Against</button>
              {p.forVotes > p.againstVotes && (
                <button onClick={() => onExecute(p.id)}>Execute</button>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
