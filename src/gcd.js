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
    const x = getRandomNumber(1, 15);
    const y = getRandomNumber(1, 15);
    // eslint-disable-next-line no-shadow
    const gcd = (x, y) => {
      if (y === 0) {
        return x;
      }
      return gcd(y, x % y);
    };
    const result = gcd(x, y);
    console.log('Find the greatest common divisor of given numbers.');
    console.log(`Question: ${x} ${y}`);
    const strAnswer = readlineSync.question('Your answer: ');
    const answer = Number(strAnswer);
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
