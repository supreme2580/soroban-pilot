import { describe, it, expect } from 'vitest';
import { createCommand } from '../commands/create.js';
import { doctorCommand } from '../commands/doctor.js';
import { updateCommand } from '../commands/update.js';
import { addCommand } from '../commands/add.js';
import { deployCommand } from '../commands/deploy.js';
import { testCommand } from '../commands/test.js';

describe('CLI commands', () => {
  it('create command has correct name', () => {
    expect(createCommand.name()).toBe('create');
  });

  it('doctor command has correct name', () => {
    expect(doctorCommand.name()).toBe('doctor');
  });

  it('update command has correct name', () => {
    expect(updateCommand.name()).toBe('update');
  });

  it('add command has correct name', () => {
    expect(addCommand.name()).toBe('add');
  });

  it('deploy command has correct name', () => {
    expect(deployCommand.name()).toBe('deploy');
  });

  it('test command has correct name', () => {
    expect(testCommand.name()).toBe('test');
  });

  it('create command has description', () => {
    expect(createCommand.description()).toBeTruthy();
  });

  it('doctor command has description', () => {
    expect(doctorCommand.description()).toBeTruthy();
  });
});
