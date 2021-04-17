import getRandomNumber from './number.js';

export default () => {
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
  const question = 'What number is missing in the progression?';
  const questionCli = `Question: ${missedText}`;
  console.log(question);
  console.log(questionCli);
  return result;
};
