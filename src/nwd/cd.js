import { resolve } from 'path';
import { currentDirMessage } from "../currentDirMessage.js";

export const cd = async (folderPath) => {
  try {
    process.chdir(resolve(folderPath));
    process.stdout.write(`\n${currentDirMessage(process.cwd())}\n`);
  } catch {
    console.log(
      '\n!!!folder with this name does not exist, check input!!!\n'
    );
  }
};