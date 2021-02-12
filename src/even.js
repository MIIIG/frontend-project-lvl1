import readlineSync from 'readline-sync';
import name, { printCorrect, printNoIsCorrect, printYesIsCorrect, printFinal } from '../src/cli.js'
import getRandomNumber from '../src/number.js';



export default function even(number) {
  let i = 0;
  const isEven = (number) => number % 2 === 0;
  while (i < 3) {
    number = getRandomNumber(1,15);
    console.log(`'Question: ${number}`);
    const answer = readlineSync.question('Answer: ', {
      trueValue: ['yes'],
      falseValue: ['no']
    });
    if ((answer === true && isEven(number) === true) ||
        (answer === false && isEven(number) === false)) {
      printCorrect(name);
    } else if (answer === true && isEven(number) === false) {
      printNoIsCorrect(name);
      return;
    } else if (answer === false && isEven(number) === true) {
      printYesIsCorrect(name);
      return;
    }
    i += 1
  }
  printFinal(name);
};
