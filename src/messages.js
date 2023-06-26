import { getUserName } from './getUserName.js';

const userName = getUserName();

export const greetings = `Welcome to the File Manager, ${userName}!`;

export const currentDirMessage = (path) => `\nYou are currently in ${path}`;

export const goodbye = `\nThank you for using File Manager, ${userName}, goodbye!`;
