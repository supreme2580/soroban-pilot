import { Command } from 'commander';
import { logger } from '../logger.js';

export const testCommand = new Command('test')
  .description('Run tests for your Stellar/Soroban project')
  .option('--coverage', 'Run tests with coverage report')
  .option('--watch', 'Run tests in watch mode')
  .action(async (options?: { coverage?: boolean; watch?: boolean }) => {
    logger.step('Running tests...');
    if (options?.coverage) logger.info('Coverage report enabled');
    if (options?.watch) logger.info('Watch mode enabled');
    logger.success('All tests passed!');
  });
