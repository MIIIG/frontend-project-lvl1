import readlineSync from 'readline-sync';
import {
  printCorrect,
  printResultIsNotCorrect,
  printFinal,
} from './cli.js';

export default (name, game) => {
  let i = 0;
  while (i < 3) {
    const result = game();
    const strAnswer = readlineSync.question('Answer: ');
    let answer;
    if (typeof result === 'number') {
      answer = Number(strAnswer);
    } else {
      answer = strAnswer;
    } // TODO: почистить от пробелов ответ игрока
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
