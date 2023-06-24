import readlinePromises from 'node:readline/promises';
import { getUserName } from './getUserName.js';

const userName = getUserName();
const goodbye = `Thank you for using File Manager, ${userName}, goodbye!`;

export const createReadline = () => {
  const rl = readlinePromises.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on('line', async (line) => {
    if (line === '.exit') {
      console.log(goodbye);
      process.exit(0);
    }
    console.log(line);
  });

  rl.on('SIGINT', () => {
    console.log(goodbye);
    process.exit(0);
  });
};
