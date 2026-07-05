// stellarpilot add nft-marketplace — Marketplace hook

export function useMarketplace(contractId: string) {
  async function list(tokenAddress: string, tokenId: number, price: string) {
    return { id: 0 };
  }

  async function buy(listingId: number) {
    return { hash: '' };
  }

  async function cancel(listingId: number) {}

  async function getListings() {
    return [] as Array<{
      id: number;
      tokenAddress: string;
      tokenId: number;
      price: string;
      seller: string;
    }>;
  }

  return { list, buy, cancel, getListings };
}
