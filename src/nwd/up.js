import { resolve } from 'path';
import { currentDirMessage } from '../currentDirMessage.js';

export const up = async () => {
  process.chdir(resolve('..'));
  process.stdout.write(`\n${currentDirMessage(process.cwd())}\n`);
};