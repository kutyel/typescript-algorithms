const ROMAN: { [index: string]: number } = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
}

export const toDecimal = (num: string) =>
  num
    .split('')
    .reduce(
      (n, x, i, a) =>
        (ROMAN[a[i + 1]] || 0) <= ROMAN[x] ? n + ROMAN[x] : n - ROMAN[x],
      0
    )

export const toRoman = (num: number) =>
  Object.entries(ROMAN).reduce((str, [key, value]) => {
    while (num >= value) {
      num -= value
      str += key
    }
    return str
  }, '')
