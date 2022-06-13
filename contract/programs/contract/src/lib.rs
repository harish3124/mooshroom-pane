use anchor_lang::prelude::*;


declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

#[program]
pub mod contract {
    use super::*;

    pub fn start(ctx: Context<Start>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Start {}
