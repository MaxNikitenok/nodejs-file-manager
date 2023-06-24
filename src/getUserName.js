export const getUserName = () => {
  try {
    if (process.argv[2].startsWith('--username=')) {
      return process.argv[2].split('=')[1];
    }
  } catch {
    throw new Error(
      'wrong command (please run the program with the script according to the example: "npm run start -- --username=your_username")'
    );
  }
};
