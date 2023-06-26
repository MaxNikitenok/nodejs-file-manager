import { resolve } from 'path';
import { writeFile } from 'node:fs/promises';

export const add = async (fileName) => {
  const filePath = resolve(process.cwd(), fileName);
  try {
    await writeFile(filePath, '', { flag: 'ax' });
    console.log(`\nfile ${fileName} created in folder ${resolve(process.cwd())}\n`)
  } catch (err) {
    console.log('Operation failed', err);
  }
};
