import { useState } from 'react';

export function App() {
  const [connected, setConnected] = useState(false);

  return (
    <div>
      <h1>Stellar React App</h1>
      <button onClick={() => setConnected(!connected)}>
        {connected ? 'Disconnect' : 'Connect Wallet'}
      </button>
    </div>
  );
}
