import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { resolve } from 'path';

export const hash = async (file) => {
  const pathToFile = resolve(file);
  const content = await readFile(pathToFile);
  const data = createHash('sha256').update(content);
  const hash = data.digest('hex');

  console.log(hash);
};
