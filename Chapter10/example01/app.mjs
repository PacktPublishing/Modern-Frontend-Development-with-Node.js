import { readFile } from 'fs/promises';

const content = await readFile('./sum.wasm');
const wasm = await WebAssembly.compile(content);
const instance = await WebAssembly.instantiate(wasm);
const { sum } = instance.exports;

console.log(sum(2, 3)); // logs 5
