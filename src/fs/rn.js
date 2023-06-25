import { resolve } from 'path';
import { currentDirMessage } from '../currentDirMessage.js';
import { rename as fsRename } from 'node:fs/promises';

export const rn = async (oldName, newName) => {
  const oldPath = resolve(process.cwd(), oldName);
  const newPath = resolve(process.cwd(), newName);
  try {
    await fsRename(oldPath, newPath);
    process.stdout.write(`\nfile/directory ${oldName} file renamed to ${newName}\n`)
    process.stdout.write(`\n${currentDirMessage(process.cwd())}\n`);
  } catch (err) {
    console.log(err);
  }
};
