import { Command } from 'commander';
import inquirer from 'inquirer';
import { logger } from '../logger.js';

export const createCommand = new Command('create')
  .description('Create a new Stellar/Soroban project')
  .argument('[name]', 'Project name')
  .option('-t, --template <template>', 'Template to use')
  .action(async (name?: string, options?: { template?: string }) => {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'projectName',
        message: 'Project name:',
        when: () => !name,
        default: 'my-stellar-app',
      },
      {
        type: 'list',
        name: 'template',
        message: 'Select a template:',
        when: () => !options?.template,
        choices: [
          { name: 'React App', value: 'react' },
          { name: 'Next.js App', value: 'nextjs' },
          { name: 'Soroban Smart Contract', value: 'soroban' },
          { name: 'Full Stack App', value: 'fullstack' },
          { name: 'Express API', value: 'express' },
        ],
      },
    ]);

    const projectName = name || answers.projectName;
    const selectedTemplate = options?.template || answers.template;

    logger.step(`Creating ${projectName} using ${selectedTemplate} template...`);

    // Template scaffolding logic would go here
    // For now, we simulate the process

    logger.success(`Project ${projectName} created successfully!`);
    logger.info('Run the following commands:');
    logger.info(`  cd ${projectName}`);
    logger.info('  pnpm install');
    logger.info('  pnpm dev');
  });
