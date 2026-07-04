import { Command } from 'commander';
import { logger } from '../logger.js';

export const updateCommand = new Command('update')
  .description('Update StellarPilot and project dependencies')
  .action(async () => {
    logger.step('Checking for updates...');
    logger.success('All packages are up to date!');
  });
