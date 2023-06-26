import { resolve } from 'path';

export const up = async () => {
  try {
    process.chdir(resolve('..'));
  } catch (err) {
    console.log('Operation failed', err);
  }
};
