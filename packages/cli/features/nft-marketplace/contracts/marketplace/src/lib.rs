// stellarpilot add nft-marketplace — NFT marketplace contract

#![no_std]
use soroban_sdk::{contract, contractimpl, Address, Env};

#[contract]
pub struct MarketplaceContract;

#[contractimpl]
impl MarketplaceContract {
    pub fn list(env: Env, seller: Address, token_address: Address, token_id: u32, price: i128) -> u32 {
        0
    }

    pub fn buy(env: Env, buyer: Address, listing_id: u32) {}

    pub fn cancel(env: Env, seller: Address, listing_id: u32) {}

    pub fn offer(env: Env, bidder: Address, listing_id: u32, amount: i128) {}

    pub fn accept_offer(env: Env, seller: Address, listing_id: u32, offer_id: u32) {}
}
