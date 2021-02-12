import readlineSync from 'readline-sync';
import {
  printCorrect,
  printNoIsCorrect,
  printYesIsCorrect,
  printFinal,
} from './cli.js';
import getRandomNumber from './number.js';

const isEven = (evenNum) => evenNum % 2 === 0;

export default (name) => {
  let i = 0;
  while (i < 3) {
    const number = getRandomNumber(1, 15);
    console.log(`'Question: ${number}`);
    const answer = readlineSync.question('Answer: ', {
      trueValue: ['yes'],
      falseValue: ['no'],
    });
    if ((answer === true && isEven(number) === true)
      || (answer === false && isEven(number) === false)) {
      printCorrect(name);
    } else if (answer === true && isEven(number) === false) {
      printNoIsCorrect(name);
      return;
    } else if (answer === false && isEven(number) === true) {
      printYesIsCorrect(name);
      return;
    }
    i += 1;
  }
  printFinal(name);
};
