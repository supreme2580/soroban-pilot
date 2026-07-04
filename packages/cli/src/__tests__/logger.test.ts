import { describe, it, expect, vi } from 'vitest';
import { logger } from '../logger.js';

describe('logger', () => {
  it('info logs a message', () => {
    const spy = vi.spyOn(console, 'log').mockImplementation(() => {});
    logger.info('test info');
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  it('success logs a message', () => {
    const spy = vi.spyOn(console, 'log').mockImplementation(() => {});
    logger.success('test success');
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  it('warn logs a message', () => {
    const spy = vi.spyOn(console, 'log').mockImplementation(() => {});
    logger.warn('test warn');
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  it('error logs a message', () => {
    const spy = vi.spyOn(console, 'log').mockImplementation(() => {});
    logger.error('test error');
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  it('step logs a message', () => {
    const spy = vi.spyOn(console, 'log').mockImplementation(() => {});
    logger.step('test step');
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});
