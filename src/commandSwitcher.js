import { goodbye } from './messages.js';
import { up } from './nwd/up.js';
import { cd } from './nwd/cd.js';
import { ls } from './nwd/ls.js';
import { cat } from './fs/cat.js';
import { add } from './fs/add.js';
import { rn } from './fs/rn.js';
import { cp } from './fs/cp.js';
import { mv } from './fs/mv.js';
import { rm } from './fs/rm.js';
import { os } from './os/os.js';
import { hash } from './hash/hash.js';
import { compress } from './compress/compress.js';
import { decompress } from './compress/decompress.js';

export const commandSwitcher = async (args) => {
  switch (args[0]) {
    case '.exit':
      console.log(goodbye);
      process.exit(0);
    case 'up':
      await up();
      break;

    case 'cd':
      await cd(args[1]);
      break;

    case 'ls':
      await ls();
      break;

    case 'cat':
      await cat(args[1]);
      break;

    case 'add':
      await add(args[1]);
      break;

    case 'rn':
      await rn(args[1], args[2]);
      break;

    case 'cp':
      await cp(args[1], args[2]);
      break;

    case 'mv':
      await mv(args[1], args[2]);
      break;

    case 'rm':
      await rm(args[1]);
      break;

    case 'os':
      os(args[1]);
      break;

    case 'hash':
      await hash(args[1]);
      break;

    case 'compress':
      await compress(args[1], args[2]);
      break;

    case 'decompress':
      await decompress(args[1], args[2]);
      break;

    default:
      console.log('\nInvalid input\n');
  }
};
