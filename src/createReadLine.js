import readlinePromises from 'node:readline/promises';
import { getUserName } from './getUserName.js';
import { resolve } from 'path';
import { currentDirMessage } from './currentDirMessage.js';
import { homedir } from 'os';
import { readdir } from 'fs/promises';

const userName = getUserName();
const goodbye = `Thank you for using File Manager, ${userName}, goodbye!`;

export const createReadline = () => {
  const rl = readlinePromises.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  process.chdir(homedir());

  console.log(currentDirMessage(process.cwd()));

  rl.on('line', async (line) => {
    const parseLine = line.trim().split(' ');

    switch (parseLine[0]) {
      case '.exit':
        console.log(goodbye);
        process.exit(0);
      case 'gg':
        console.log('qq');
        break;
      case 'up':
        process.chdir(resolve('..'));
        console.log(currentDirMessage(process.cwd()));
        break;
      case 'cd':
        process.chdir(resolve(parseLine[1]));
        console.log(currentDirMessage(process.cwd()));
        break;
      case 'ls':
        const ls = async () => {
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
        };

        ls();
        
        break;
      default:
        console.log('Invalid input');
    }
  });

  rl.on('SIGINT', () => {
    console.log(goodbye);
    process.exit(0);
  });
};
