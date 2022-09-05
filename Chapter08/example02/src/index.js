import { name, version } from '../package.json';

export function getLibName() {
  return `${name}@${version}`;
}
