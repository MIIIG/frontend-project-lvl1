#!/usr/bin/env node
import engine from '../src/game-engine.js';
import even from '../src/even.js';
import getName from '../src/cli.js';

const name = getName();
engine(name, even);
