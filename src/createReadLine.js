import readlinePromises from 'node:readline/promises';
import { currentDirMessage, goodbye } from './messages.js';
import { homedir } from 'os';
import { commandSwitcher } from './commandSwitcher.js';


export const createReadline = () => {
  const rl = readlinePromises.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  process.chdir(homedir());

  console.log(currentDirMessage(process.cwd()));

  rl.setPrompt('please enter the command>');

  rl.prompt();

  rl.on('line', async (line) => {
    const args = line.trim().split(' ');

    await commandSwitcher(args);

    console.log(currentDirMessage(process.cwd()));
    rl.prompt();
  });

  rl.on('SIGINT', () => {
    console.log(`\n${goodbye}`);
    process.exit(0);
  });
};
