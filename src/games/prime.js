import getRandomNumber from './number.js';

export default () => {
  const x = getRandomNumber(1, 100);
  // eslint-disable-next-line no-shadow
  const isPrime = (x) => {
    for (let e = 2; e < x; e += 1) {
      if (x % e === 0) return false;
    }
    return x > 1;
  };
  const result = (isPrime(x) === true) ? 'yes' : 'no';
  const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const questionCli = `Question: ${x}`;
  console.log(question);
  console.log(questionCli);
  return result;
};
