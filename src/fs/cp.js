import { createWriteStream, createReadStream } from 'fs';
import { parse, resolve } from 'path';
import { pipeline } from 'stream/promises';

export const cp = async (file, directoryPath) => {
  const copyFilePath = resolve(directoryPath, parse(file).base);
  try {
    const input = createReadStream(file);
    const output = createWriteStream(copyFilePath);
    await pipeline(input, output);
    console.log(`\nfile ${parse(file).base} copied to folder ${copyFilePath}\n`)
  } catch (err) {
    console.log('Operation failed', err);
  }
};
