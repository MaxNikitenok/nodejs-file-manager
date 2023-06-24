import { createReadline } from './createReadLine.js';
import { getUserName } from './getUserName.js';
import { homedir } from 'os';


const userName = getUserName();
const greetings = `Welcome to the File Manager, ${userName}!`;
const homeDir = homedir();

console.log(greetings);

process.chdir(homeDir);

const currentDirMessage = `You are currently in ${process.cwd()}`;

console.log(currentDirMessage);

createReadline();
