// stellarpilot add multisig — Multisig contract

#![no_std]
use soroban_sdk::{contract, contractimpl, Address, Env, Vec};

#[contract]
pub struct MultisigContract;

#[contractimpl]
impl MultisigContract {
    pub fn submit(env: Env, proposer: Address, hash: Vec<u8>) -> u32 {
        0
    }

    pub fn approve(env: Env, signer: Address, proposal_id: u32) {}

    pub fn execute(env: Env, proposal_id: u32) {}

    pub fn add_signer(env: Env, new_signer: Address) {}

    pub fn remove_signer(env: Env, old_signer: Address) {}
}
