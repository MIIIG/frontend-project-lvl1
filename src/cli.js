import readlineSync from 'readline-sync';
import even from '../src/even.js';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
export default name;

export const printCorrect = () => console.log('Correct!');
export const printNoIsCorrect = (name) => console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
export const printYesIsCorrect = (name) => console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
export const printFinal = (name) => console.log(`Congratulation, ${name}!`);