#!/usr/bin/env node
import even from '../src/even.js';
import getName from '../src/cli.js';

const name = getName();
export default even(name);
