import { createReadline } from './createReadLine.js';
import { getUserName } from './getUserName.js';

const userName = getUserName();
const greetings = `Welcome to the File Manager, ${userName}!`;

console.log(greetings);

createReadline();
