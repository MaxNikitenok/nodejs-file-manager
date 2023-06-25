import { readdir } from 'fs/promises';
import { currentDirMessage } from '../currentDirMessage.js';

export const ls = async () => {
  const folderContent = await readdir(process.cwd(), {
    withFileTypes: true,
  });

  const sortedFolderContent = folderContent
    .map((file) => ({
      Name: file.name,
      Type: file.isFile() ? 'file' : 'directory',
    }))
    .sort((a, b) => {
      if (a.Type === b.Type) {
        return a.Name.localeCompare(b.Name);
      }
      return a.Type.localeCompare(b.Type);
    });

  console.table(sortedFolderContent);

  process.stdout.write(`\n${currentDirMessage(process.cwd())}\n`);
};