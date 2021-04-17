import engine from '../src/game-engine.js';
import progression from '../src/games/prog.js';
import getName from '../src/cli.js';

const name = getName();
engine(name, progression);
