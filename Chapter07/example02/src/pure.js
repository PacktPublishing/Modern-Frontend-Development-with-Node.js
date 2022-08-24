export function pickSmallestNumber(...numbers) {
  if (numbers.length > 0) {
    return numbers.reduce((p, c) => Math.min(p, c), Number.MAX_VALUE);
  }

  return undefined;
}
