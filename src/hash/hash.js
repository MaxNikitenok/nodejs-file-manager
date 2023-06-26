import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { parse } from 'node:path';
import { resolve } from 'path';

export const hash = async (file) => {
  const pathToFile = resolve(file);
  try {
    const content = await readFile(pathToFile);
    const data = createHash('sha256').update(content);
    const hash = data.digest('hex');

    console.log(`${parse(file).base} hash --> ${hash}`);
  } catch (err) {
    console.log('Operation failed', err);
  }
};
