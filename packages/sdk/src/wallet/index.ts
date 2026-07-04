export interface WalletInfo {
  publicKey: string;
  network: string;
  isConnected: boolean;
}

export interface WalletBalance {
  asset: string;
  amount: string;
}

export interface ConnectOptions {
  network?: string;
  timeout?: number;
}

export interface WalletConnector {
  connect(options?: ConnectOptions): Promise<WalletInfo>;
  disconnect(): Promise<void>;
  isConnected(): boolean;
  getPublicKey(): string;
  signTransaction(xdr: string): Promise<string>;
}

export function createWalletConnector(options?: ConnectOptions): WalletConnector {
  return {
    async connect() {
      return { publicKey: '', network: options?.network ?? 'testnet', isConnected: true };
    },
    async disconnect() {},
    isConnected() {
      return false;
    },
    getPublicKey() {
      return '';
    },
    async signTransaction(xdr: string) {
      return xdr;
    },
  };
}
