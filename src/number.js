export default function getRandomNumber(min, max) {
  const getMin = Math.ceil(min);
  const getMax = Math.floor(max);
  return Math.floor(Math.random() * (getMax - getMin + 1)) + getMin;
}
export const multiply = (x, y) => x * y;
export const sum = (x, y) => x + y;
export const minus = (x, y) => x - y;
