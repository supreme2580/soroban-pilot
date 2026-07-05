import { Command } from 'commander';
import inquirer from 'inquirer';
import { existsSync, cpSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { logger } from '../logger.js';
import { getFeature, listFeatures } from '../features/registry.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const featuresRoot = join(__dirname, '..', '..', 'features');

export const addCommand = new Command('add')
  .argument('[item]', 'Feature to add (e.g., wallet, nft, multisig)')
  .description('Add a feature to your project')
  .action(async (item?: string) => {
    if (!item) {
      const features = listFeatures();
      const answers = await inquirer.prompt<{ selected: string }>([
        {
          type: 'list',
          name: 'selected',
          message: 'What would you like to add?',
          choices: features.map((f) => ({
            name: `${f.name.padEnd(16)} ${f.description}`,
            short: f.name,
            value: f.name,
          })),
        },
      ]);
      item = answers.selected;
    }

    if (!item) return;

    const feature = getFeature(item);
    if (!feature) {
      logger.error(`Unknown feature "${item}"`);
      logger.info(
        `Available: ${listFeatures()
          .map((f) => f.name)
          .join(', ')}`,
      );
      process.exit(1);
    }

    const sourceDir = join(featuresRoot, item);
    const targetDir = process.cwd();

    if (!existsSync(sourceDir)) {
      logger.error(`Feature "${item}" source not found. Try rebuilding the CLI.`);
      process.exit(1);
    }

    logger.step(`Adding ${item} to your project…`);

    let copied = 0;
    let skipped = 0;
    for (const file of feature.files) {
      const src = join(sourceDir, file);
      const dest = join(targetDir, file);
      if (!existsSync(src)) {
        logger.warn(`  ${file} (template missing, skipping)`);
        skipped++;
        continue;
      }
      mkdirSync(dirname(dest), { recursive: true });
      cpSync(src, dest);
      copied++;
      logger.info(`  ${file}`);
    }

    logger.success(
      `${item} added successfully! (${copied} files${skipped ? `, ${skipped} skipped` : ''})`,
    );

    if (feature.dependencies?.length) {
      logger.info(`Install: ${feature.dependencies.join(' ')}`);
    }
    if (feature.devDependencies?.length) {
      logger.info(`Dev install: ${feature.devDependencies.join(' ')}`);
    }
  });
