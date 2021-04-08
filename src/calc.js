import readlineSync from 'readline-sync';
import {
  printCorrect,
  printResultIsNotCorrect,
  printFinal,
} from './cli.js';
import getRandomNumber, { multiply, minus, sum } from './number.js';

export default (name) => {
  let i = 0;
  while (i < 3) {
    const x = getRandomNumber(1, 15);
    const y = getRandomNumber(1, 15);
    const operators = [multiply(x, y), minus(x, y), sum(x, y)];
    const operatorIndex = getRandomNumber(0, 2);
    let textOperator;
    switch (operatorIndex) {
      case 0:
        textOperator = '*';
        break;
      case 1:
        textOperator = '-';
        break;
      case 2:
        textOperator = '+';
        break;
      default:
        console.log('Nothing to operate!');
    }
    console.log('What is the result of the expression?');
    console.log(`'Question: ${x} ${textOperator} ${y}`);
    const strAnswer = readlineSync.question('Your answer: ');
    const answer = Number(strAnswer);
    const result = operators[operatorIndex];
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
