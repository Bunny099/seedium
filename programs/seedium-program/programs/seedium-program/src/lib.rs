use anchor_lang::prelude::*;

declare_id!("DawkW1wnGUEhhomY4caNKav5Nyt3XWyHqefLpGH3M8Wg");

#[program]
pub mod seedium_program {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
