import { EOL, cpus, homedir, hostname, arch } from 'os';

export function os(arg) {
  switch (arg) {
    case '--EOL':
      console.log(JSON.stringify(EOL));
      break;
    case '--cpus':
      const CPUs = cpus();
      console.log('amount: ', CPUs.length);
      console.table(
        CPUs.map((item) => ({
          Model: item.model,
          'Clock rate': `${item.speed} MGz`,
        }))
      );
      break;
    case '--homedir':
      console.log(homedir());
      break;
    case '--username':
      console.log(hostname());
      break;
    case '--architecture':
      console.log(arch());
      break;
    default:
      console.log('\nInvalid input\n');
  }
}
