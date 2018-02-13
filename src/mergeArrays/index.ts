/**
 * Merge *already sorted* arrays
 */
const merge = <T>(x: T[], y: T[], i = 0, j = 0, arr: T[] = []): T[] =>
  i + j < x.length + y.length
    ? !y[j] || x[i] < y[j]
      ? merge(x, y, i + 1, j, [...arr, x[i]])
      : merge(x, y, i, j + 1, [...arr, y[j]])
    : arr

export default merge
