#!/usr/bin/env node
import engine from '../src/game-engine.js';
import gcd from '../src/gcd.js';
import getName from '../src/cli.js';

const name = getName();
engine(name, gcd);
