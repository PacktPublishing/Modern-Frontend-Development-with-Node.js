import "wasi";
import { Console, CommandLine } from "as-wasi/assembly";

const user = CommandLine.all[CommandLine.all.length - 1];

Console.log(`Hello ${user}!`);
