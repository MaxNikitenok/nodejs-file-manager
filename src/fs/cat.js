import { createReadStream } from 'node:fs';
import { resolve } from 'path';
import { currentDirMessage } from '../currentDirMessage.js';

export const cat = async (fileName) => {
  new Promise(async (res, rej) => {
    try {
      const path = resolve(fileName);

      const readStream = createReadStream(path);

      readStream.pipe(process.stdout).on('error', rej);

      readStream.on('open', () => {
        process.stdout.write(`\n${fileName}--------------------\n`);
      });

      readStream.on('end', () => {
        process.stdout.write('\n--------------------------------\n');
        res();
      });
    } catch (err) {
      rej(err);
    }
  }).then(() => {
    console.log(`\n${currentDirMessage(process.cwd())}\n`);
  });
};