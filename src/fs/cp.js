import { createWriteStream, createReadStream } from 'fs';
import { resolve } from 'path';
import { pipeline } from 'stream/promises';

export const cp = async (file, directoryPath) => {
  const copyFilePath = resolve(directoryPath, file);
  try {
    const input = createReadStream(file);
    const output = createWriteStream(copyFilePath);
    await pipeline(input, output);
  } catch (err) {
    console.log(err);
  }
};
