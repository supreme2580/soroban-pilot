// stellarpilot add multisig — Multisig dashboard

import { type JSX } from 'react';

interface Proposal {
  id: number;
  description: string;
  approvals: number;
  threshold: number;
  executed: boolean;
}

interface MultisigDashboardProps {
  proposals: Proposal[];
  onApprove: (id: number) => void;
  onExecute: (id: number) => void;
}

export function MultisigDashboard({
  proposals,
  onApprove,
  onExecute,
}: MultisigDashboardProps): JSX.Element {
  return (
    <div>
      <h2>Multisig Dashboard</h2>
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
          <p>{p.description}</p>
          <p>
            {p.approvals}/{p.threshold} approvals
          </p>
          {!p.executed && (
            <div style={{ display: 'flex', gap: '8px' }}>
              <button onClick={() => onApprove(p.id)}>Approve</button>
              {p.approvals >= p.threshold && (
                <button onClick={() => onExecute(p.id)}>Execute</button>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
