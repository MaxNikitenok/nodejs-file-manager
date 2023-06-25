import { createWriteStream, createReadStream } from 'fs';
import { resolve } from 'path';
import { pipeline } from 'stream/promises';
import { rm } from 'node:fs/promises';

export const mv = async (file, directoryPath) => {
  const targetFilePath = resolve(directoryPath, file);
  try {
    const input = createReadStream(file);
    const output = createWriteStream(targetFilePath);
    await pipeline(input, output);
    await rm(resolve(file));
  } catch (err) {
    console.log(err);
  }
};