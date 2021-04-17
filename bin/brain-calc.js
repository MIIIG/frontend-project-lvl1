import engine from '../src/game-engine.js';
import calc from '../src/games/calc.js';
import getName from '../src/cli.js';

const name = getName();
engine(name, calc);
