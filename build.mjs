import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';

const source = resolve('public-src');
const output = resolve('dist');

if (!existsSync(source)) throw new Error('Missing public-src directory.');
rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });
cpSync(source, output, { recursive: true });
console.log('Built SCP Essay Lab into dist/.');
