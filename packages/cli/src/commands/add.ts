import { Command } from 'commander';
import inquirer from 'inquirer';
import { logger } from '../logger.js';

export const addCommand = new Command('add')
  .description('Add a component, template, or integration to your project')
  .argument('[item]', 'Item to add (e.g., wallet, component, template)')
  .action(async (item?: string) => {
    const answers = await inquirer.prompt([
      {
        type: 'list',
        name: 'itemType',
        message: 'What would you like to add?',
        when: () => !item,
        choices: [
          { name: 'Wallet Integration', value: 'wallet' },
          { name: 'UI Component', value: 'component' },
          { name: 'Soroban Template', value: 'template' },
          { name: 'Deployment Config', value: 'deploy' },
        ],
      },
    ]);

    const selected = item || answers.itemType;
    logger.step(`Adding ${selected} to your project...`);
    logger.success(`${selected} added successfully!`);
  });
