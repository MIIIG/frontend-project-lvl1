export default function getRandomNumber(min, max) {
  const getMin = Math.ceil(min);
  const getMax = Math.floor(max);
  return Math.floor(Math.random() * (getMax - getMin + 1)) + getMin;
}
