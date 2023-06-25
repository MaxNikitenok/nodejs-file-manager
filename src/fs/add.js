import { resolve } from 'path';
import { writeFile } from 'node:fs/promises';
import { currentDirMessage } from '../currentDirMessage.js';

export const add = async (fileName) => {
  const filePath = resolve(process.cwd(), fileName);
  try {
    await writeFile(filePath, '', { flag: 'ax' });
    process.stdout.write(`\nfile ${fileName} created in folder ${resolve(process.cwd())}\n`)
    process.stdout.write(`\n${currentDirMessage(process.cwd())}\n`);
  } catch (err) {
    console.log(err);
  }
};
