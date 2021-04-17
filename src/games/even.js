import getRandomNumber from './number.js';

export default () => {
  const x = getRandomNumber(1, 15);
  // eslint-disable-next-line no-shadow
  const isEven = (x) => ((x % 2 === 0));
  const result = (isEven(x) === true) ? 'yes' : 'no';
  const question = 'Answer "yes" if the number is even, otherwise answer "no".';
  const questionCli = `'Question: ${x}`;
  console.log(question);
  console.log(questionCli);
  return result;
};
