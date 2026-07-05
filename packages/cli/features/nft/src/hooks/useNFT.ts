// stellarpilot add nft — NFT hook

export function useNFT(contractId: string) {
  async function mint(to: string, uri: string) {
    return { hash: '', status: 'success' as const };
  }

  async function transfer(from: string, to: string, tokenId: number) {}

  async function balance(owner: string): Promise<number> {
    return 0;
  }

  return { mint, transfer, balance };
}
