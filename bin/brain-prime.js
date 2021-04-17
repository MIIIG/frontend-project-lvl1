import engine from '../src/game-engine.js';
import prime from '../src/games/prime.js';
import getName from '../src/cli.js';

const name = getName();
engine(name, prime);
