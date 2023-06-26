import { createReadStream, createWriteStream } from 'node:fs';
import { resolve, parse } from 'node:path';
import { createBrotliDecompress } from 'node:zlib';

export const decompress = async (file, pathToDestination) => {
  try {
    const source = createReadStream(resolve(file));
    const decompressedFilePath = resolve(
      pathToDestination,
      `${parse(file).name}.txt`
    );
 
    const destination = createWriteStream(decompressedFilePath);
    const brotliDecompress = createBrotliDecompress();

    source.pipe(brotliDecompress).pipe(destination);

    console.log(
      `\nfile ${
        parse(file).base
      } is decompressed and placed in ${decompressedFilePath}`
    );
  } catch (err) {
    console.log('Operation failed', err);
  }
};
