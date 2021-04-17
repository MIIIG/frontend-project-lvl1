import getRandomNumber, { multiply, minus, sum } from './number.js';

export default () => {
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
  const question = 'What is the result of the expression?';
  const questionCli = `Question: ${x} ${textOperator} ${y}`;
  console.log(question);
  console.log(questionCli);
  const result = operators[operatorIndex];
  return result;
};
