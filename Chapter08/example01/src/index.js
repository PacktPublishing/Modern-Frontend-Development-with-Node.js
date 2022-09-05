import { readFile } from "fs";
import { resolve } from "path";

export function getLibName() {
  const packagePath = resolve(__dirname, "../package.json");
  return new Promise((resolve, reject) => {
    readFile(packagePath, "utf8", (err, content) => {
      if (err) {
        reject(err);
      } else {
        const { name, version } = JSON.parse(content);
        resolve(`${name}@${version}`);
      }
    });
  });
}
