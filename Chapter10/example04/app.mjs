import { readFile } from "fs/promises";
import { WASI } from "wasi";
import { argv, env } from "process";

const wasi = new WASI({
  args: argv,
  env,
});

const api = {
  wasi_snapshot_preview1: wasi.wasiImport,
};
const path = "./echo.wasm";
const content = await readFile(path);
const wasm = await WebAssembly.compile(content);
const instance = await WebAssembly.instantiate(wasm, api);

wasi.start(instance);
