import merge from '../src/mergeArrays'

describe('Merge Sorted Arrays', () => {
  test('should merge *already sorted* arrays of numbers', () =>
    expect(merge([1, 3, 5], [2, 4])).toEqual([1, 2, 3, 4, 5]))

  test('should merge *already sorted* arrays of strings', () =>
    expect(merge(['a', 'c'], ['b', 'd', 'e']).join('')).toBe('abcde'))
})
