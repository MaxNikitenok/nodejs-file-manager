import readlinePromises from 'node:readline/promises';
import { getUserName } from './getUserName.js';
import { currentDirMessage } from './currentDirMessage.js';
import { homedir } from 'os';
import { up } from './nwd/up.js';
import { cd } from './nwd/cd.js';
import { ls } from './nwd/ls.js';
import { cat } from './fs/cat.js';
import { add } from './fs/add.js';
import { resolve } from 'path';
import { writeFile } from 'node:fs/promises';
import { rn } from './fs/rn.js';
import { cp } from './fs/cp.js';
import { mv } from './fs/mv.js';
import { rm } from './fs/rm.js';
import { os } from './os/os.js';
import { hash } from './hash/hash.js';
import { compress } from './compress/compress.js';
import { decompress } from './compress/decompress.js';

const userName = getUserName();
const goodbye = `Thank you for using File Manager, ${userName}, goodbye!`;

export const createReadline = () => {
  const rl = readlinePromises.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  process.chdir(homedir());

  console.log('\n', currentDirMessage(process.cwd()), '\n');

  rl.on('line', async (line) => {
    const parseLine = line.trim().split(' ');

    switch (parseLine[0]) {
      case '.exit':
        console.log(goodbye);
        process.exit(0);
      case 'up':
        up();
        break;

      case 'cd':
        await cd(parseLine[1]);
        break;

      case 'ls':
        await ls();
        break;

      case 'cat':
        await cat(parseLine[1]);
        break;

      case 'add':
        await add(parseLine[1]);
        break;

      case 'rn':
        await rn(parseLine[1], parseLine[2]);
        break;

      case 'cp':
        await cp(parseLine[1], parseLine[2]);
        break;

      case 'mv':
        await mv(parseLine[1], parseLine[2]);
        break;

      case 'rm':
        await rm(parseLine[1]);
        break;

      case 'os':
        os(parseLine[1]);
        break;

      case 'hash':
        hash(parseLine[1]);

      case 'compress':
        compress(parseLine[1], parseLine[2]);
        break;

      case 'decompress':
        decompress(parseLine[1], parseLine[2]);
        break;

      default:
        console.log('\nInvalid input\n');
    }
  });

  rl.on('SIGINT', () => {
    console.log(goodbye);
    process.exit(0);
  });
};
