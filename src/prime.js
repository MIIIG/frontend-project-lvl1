import readlineSync from 'readline-sync';
import {
  printCorrect,
  printResultIsNotCorrect,
  printFinal,
} from './cli.js';
import getRandomNumber from './number.js';

export default (name) => {
  let i = 0;
  while (i < 3) {
    const x = getRandomNumber(1, 100);
    // eslint-disable-next-line no-shadow
    const isPrime = (x) => {
      for (let e = 2; e < x; e += 1) {
        if (x % e === 0) return false;
      }
      return x > 1;
    };
    const result = (isPrime(x) === true) ? 'yes' : 'no';
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    console.log(`Question: ${x}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === result) {
      printCorrect(name);
    } else if (answer !== result) {
      printResultIsNotCorrect(name, result, answer);
      return;
    }
    i += 1;
  }
  printFinal(name);
};
