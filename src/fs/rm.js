import { parse, resolve } from 'path';
import { rm as remove } from 'node:fs/promises';

export const rm = async (file) => {
  try {
    await remove(resolve(file));
    console.log(`\nfile ${parse(file).base} deleted`);
  } catch (err) {
    console.log('Operation failed', err);
  }
};
