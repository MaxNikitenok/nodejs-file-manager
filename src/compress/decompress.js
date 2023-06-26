import { createReadStream, createWriteStream } from 'node:fs';
import { resolve, join } from 'node:path';
import { createBrotliDecompress } from 'node:zlib';

export const decompress = async (file, pathToDestination) => {
  const pathToFile = resolve(file);
  console.log('pathToFile', pathToFile)
  const source = createReadStream(pathToFile);
  const brFilePath = join(pathToDestination, `${file.split('.')[0]}.txt`);
  console.log('brFilePath', brFilePath)
  const destination = createWriteStream(brFilePath);
  const brotliDecompress = createBrotliDecompress();

  source.pipe(brotliDecompress).pipe(destination);
};
