// stellarpilot add nft — NFT contract

#![no_std]
use soroban_sdk::{contract, contractimpl, symbol_short, Address, Env, String, Symbol};

#[contract]
pub struct NFTContract;

#[contractimpl]
impl NFTContract {
    pub fn mint(env: Env, to: Address, uri: String) -> Symbol {
        symbol_short!("minted")
    }

    pub fn transfer(env: Env, from: Address, to: Address, token_id: u32) {
    }

    pub fn balance(env: Env, owner: Address) -> u32 {
        0
    }
}
