import getRandomNumber from './number.js';

export default () => {
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
  const question = 'Find the greatest common divisor of given numbers.';
  const questionCli = `Question: ${x} ${y}`;
  console.log(question);
  console.log(questionCli);
  return result;
};
