#!/usr/bin/env node

import { Command } from 'commander';
import { createCommand } from './commands/create.js';
import { doctorCommand } from './commands/doctor.js';
import { updateCommand } from './commands/update.js';
import { addCommand } from './commands/add.js';
import { deployCommand } from './commands/deploy.js';
import { testCommand } from './commands/test.js';
import { logger } from './logger.js';

process.on('uncaughtException', (error) => {
  logger.error(`Unexpected error: ${error.message}`);
  process.exit(1);
});

process.on('unhandledRejection', (reason) => {
  logger.error(`Unhandled rejection: ${String(reason)}`);
  process.exit(1);
});

const program = new Command();

program
  .name('stellarpilot')
  .description(
    'The open-source toolkit for building production-ready Stellar & Soroban applications.',
  )
  .version('0.0.1')
  .configureHelp({
    sortSubcommands: true,
    showGlobalOptions: true,
  });

program.addCommand(createCommand);
program.addCommand(doctorCommand);
program.addCommand(updateCommand);
program.addCommand(addCommand);
program.addCommand(deployCommand);
program.addCommand(testCommand);

program.parse(process.argv);
