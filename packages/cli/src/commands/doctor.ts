import { execSync } from 'node:child_process';
import { Command } from 'commander';
import { logger } from '../logger.js';

function checkTool(name: string, command: string, args: string[]): string | null {
  try {
    return execSync(`${command} ${args.join(' ')}`, { encoding: 'utf8', timeout: 5000 }).trim();
  } catch {
    return null;
  }
}

export const doctorCommand = new Command('doctor')
  .description('Check your environment for Stellar development')
  .action(async () => {
    logger.step('Running environment checks...');

    const checks = [
      { name: 'Node.js', check: () => process.version },
      { name: 'pnpm', check: () => checkTool('pnpm', 'pnpm', ['--version']) },
      { name: 'Git', check: () => checkTool('Git', 'git', ['--version']) },
      { name: 'Node', check: () => checkTool('Node', 'node', ['--version']) },
    ];

    for (const check of checks) {
      const result = check.check();
      if (result) {
        logger.success(`${check.name}: ${result}`);
      } else {
        logger.error(`${check.name}: Not found`);
      }
    }

    logger.success('Environment check complete!');
  });
