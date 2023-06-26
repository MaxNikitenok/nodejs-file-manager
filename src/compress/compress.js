import { createReadStream, createWriteStream } from 'node:fs';
import { resolve, join } from 'node:path';
import { createBrotliCompress } from 'node:zlib';

export const compress = async (file, pathToDestination) => {
  const pathToFile = resolve(file);
  console.log('pathToFile', pathToFile)
  const source = createReadStream(pathToFile);
  const brFilePath = join(pathToDestination, `${file.split('.')[0]}.br`);
  console.log('brFilePath', brFilePath)
  const destination = createWriteStream(brFilePath);
  const brotliCompress = createBrotliCompress();

  source.pipe(brotliCompress).pipe(destination);
};
