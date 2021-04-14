#!/usr/bin/env node
import gcd from '../src/gcd.js';
import getName from '../src/cli.js';

const name = getName();
export default gcd(name);
