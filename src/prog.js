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
    const numbers = [];
    let x = getRandomNumber(1, 100);
    const step = getRandomNumber(1, 10);
    const length = getRandomNumber(5, 10);
    const missed = getRandomNumber(0, length);
    // eslint-disable-next-line no-shadow
    const progression = (numbers, length) => {
      while (length >= 0) {
        numbers.push(x);
        x += step;
        // eslint-disable-next-line no-param-reassign
        length -= 1;
      }
      return numbers;
    };
    const resultList = progression(numbers, length);
    const result = resultList[missed];
    resultList.splice(missed, 1, '..');
    const missedText = resultList.join(' ');
    console.log('What number is missing in the progression?');
    console.log(`Question: ${missedText}`);
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
