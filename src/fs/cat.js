import { createReadStream } from 'node:fs';
import { resolve, parse } from 'path';

export const cat = async (fileName) => {
  await new Promise(async (res, rej) => {
    try {
      const path = resolve(fileName);

      const readStream = createReadStream(path);

      readStream.pipe(process.stdout).on('error', rej);

      readStream.on('open', () => {
        process.stdout.write(`\n${parse(fileName).base}--------------------\n`);
      });

      readStream.on('end', () => {
        process.stdout.write('\n--------------------------------\n');
        res();
      });
    } catch (err) {
      console.log('Operation failed', err);
    }
  });
};
