import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TransactionStatus } from '../components/TransactionStatus.js';

describe('TransactionStatus', () => {
  it('renders pending status', () => {
    render(<TransactionStatus status="pending" />);
    expect(screen.getByText('Pending')).toBeDefined();
  });

  it('renders success status', () => {
    render(<TransactionStatus status="success" />);
    expect(screen.getByText('Success')).toBeDefined();
  });

  it('renders failed status', () => {
    render(<TransactionStatus status="failed" />);
    expect(screen.getByText('Failed')).toBeDefined();
  });

  it('displays truncated hash', () => {
    render(<TransactionStatus status="success" hash="abcdef1234567890" />);
    expect(screen.getByText(/abcdef12/)).toBeDefined();
  });
});
