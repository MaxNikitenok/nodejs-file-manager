import { resolve } from 'path';

export const cd = async (folderPath) => {
  try {
    process.chdir(resolve(folderPath));
  } catch (err) {
    console.log('Operation failed', err);
  }
};
