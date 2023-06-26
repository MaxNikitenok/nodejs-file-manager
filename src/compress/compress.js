import { createReadStream, createWriteStream } from 'node:fs';
import { resolve, parse } from 'node:path';
import { createBrotliCompress } from 'node:zlib';

export const compress = async (file, pathToDestination) => {
  try {
    const source = createReadStream(resolve(file));
    const compressedFilePath = resolve(
      pathToDestination,
      `${parse(file).name}.br`
    );

    const destination = createWriteStream(compressedFilePath);
    const brotliCompress = createBrotliCompress();

    source.pipe(brotliCompress).pipe(destination);

    console.log(
      `\nfile ${
        parse(file).base
      } is compressed and placed in ${compressedFilePath}`
    );
  } catch (err) {
    console.log('Operation failed', err);
  }
};
