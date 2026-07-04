#![no_std]
use soroban_sdk::{contractimpl, symbol_short, Env, Symbol};

pub struct HelloContract;

#[contractimpl]
impl HelloContract {
    pub fn hello(env: Env, to: Symbol) -> Symbol {
        let greet = symbol_short!("Hello");
        greet
    }
}
