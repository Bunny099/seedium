use anchor_lang::prelude::*;

declare_id!("7k4ph9yGrNyEbs965ryCybJgXjpqWkZtcTTv9z7fTvkp");

#[program]
pub mod seedium {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
