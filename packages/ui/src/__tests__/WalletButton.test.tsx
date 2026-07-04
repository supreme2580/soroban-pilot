import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { WalletButton } from '../components/WalletButton.js';

describe('WalletButton', () => {
  it('renders connect button by default', () => {
    render(<WalletButton />);
    expect(screen.getByText('Connect Wallet')).toBeDefined();
  });

  it('shows connected state with truncated key', () => {
    render(<WalletButton isConnected publicKey="GA7QNFM3J6QOD7N6X5F5QJ6K5HJQ5J6K5HJQ5J6" />);
    expect(screen.getByText(/GA7Q.../)).toBeDefined();
  });

  it('calls onConnect when clicked', () => {
    const onConnect = vi.fn();
    render(<WalletButton onConnect={onConnect} />);
    fireEvent.click(screen.getByText('Connect Wallet'));
    expect(onConnect).toHaveBeenCalledOnce();
  });

  it('calls onDisconnect when connected and clicked', () => {
    const onDisconnect = vi.fn();
    render(<WalletButton isConnected publicKey="GABC" onDisconnect={onDisconnect} />);
    fireEvent.click(screen.getByText(/GABC/));
    expect(onDisconnect).toHaveBeenCalledOnce();
  });
});
