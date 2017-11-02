const ROMAN: { [index: string]: number } = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

export const toDecimal = (num: string) =>
  num
    .split('')
    .reduce(
      (n, x, i, a) =>
        (ROMAN[a[i + 1]] || 0) <= ROMAN[x] ? n + ROMAN[x] : n - ROMAN[x],
      0
    )
