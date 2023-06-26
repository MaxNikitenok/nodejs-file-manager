import { parse, resolve } from 'path';
import { rename as fsRename } from 'node:fs/promises';

export const rn = async (oldName, newName) => {
  const oldPath = resolve(oldName);
  const newPath = resolve(parse(oldName).dir, newName);
  try {
    await fsRename(oldPath, newPath);
    process.stdout.write(
      `\nfile/directory ${oldName} file renamed to ${newName}\n`
    );
  } catch (err) {
    console.log('Operation failed', err);
  }
};
