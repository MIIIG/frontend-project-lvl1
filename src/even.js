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
    // eslint-disable-next-line no-shadow
    const isEven = (x) => ((x % 2 === 0));
    const result = (isEven(x) === true) ? 'yes' : 'no';
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    console.log(`'Question: ${x}`);
    const answer = readlineSync.question('Answer: ');
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
