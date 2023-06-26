import { createWriteStream, createReadStream } from 'fs';
import { parse, resolve } from 'path';
import { pipeline } from 'stream/promises';
import { rm } from 'node:fs/promises';

export const mv = async (file, directoryPath) => {
  const fileName = parse(file).base
  const targetFilePath = resolve(directoryPath, fileName);
  try {
    const input = createReadStream(file);
    const output = createWriteStream(targetFilePath);
    await pipeline(input, output);
    console.log(`\nfile ${fileName} moved to folder ${targetFilePath}\n`);
    await rm(resolve(file));
  } catch (err) {
    console.log('Operation failed', err);
  }
};
