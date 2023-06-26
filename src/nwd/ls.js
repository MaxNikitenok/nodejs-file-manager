import { readdir } from 'fs/promises';

export const ls = async () => {
  try {
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
  } catch (err) {
    console.log('Operation failed', err);
  }
};
