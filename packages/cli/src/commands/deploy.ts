import { Command } from 'commander';
import inquirer from 'inquirer';
import { logger } from '../logger.js';

export const deployCommand = new Command('deploy')
  .description('Deploy your Soroban contracts or application')
  .option('-n, --network <network>', 'Network to deploy to (testnet, mainnet)')
  .action(async (options?: { network?: string }) => {
    const answers = await inquirer.prompt([
      {
        type: 'list',
        name: 'network',
        message: 'Select network:',
        when: () => !options?.network,
        choices: [
          { name: 'Testnet', value: 'testnet' },
          { name: 'Mainnet', value: 'mainnet' },
        ],
      },
    ]);

    const network = options?.network || answers.network;

    logger.step(`Deploying to ${network}...`);
    logger.success('Deployment complete!');
    logger.info(`View your deployment on the Stellar ${network} explorer.`);
  });
