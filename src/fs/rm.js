import { resolve } from 'path';
import { rm as remove } from 'node:fs/promises';

export const rm = async (file) => {
  try {
    await remove(resolve(file));
  } catch (err) {
    console.log(err);
  }
};