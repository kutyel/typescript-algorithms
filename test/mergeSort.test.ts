import mergeSort, { merge } from '../src/mergeSort'

describe('Merge Sort', () => {
  test('should merge various arrays of numbers', () =>
    expect(merge([1, 3, 5], [2, 4])).toEqual([1, 2, 3, 4, 5]))

  test('should merge various arrays of strings', () =>
    expect(merge(['a', 'c'], ['b', 'd', 'e']).join('')).toBe('abcde'))

  it('should sort an array of numbers', () =>
    expect(mergeSort([4, 3, 2, 1])).toEqual([1, 2, 3, 4]))

  it('should sort an array of strings', () =>
    expect(
      mergeSort(['cherries', 'kiwi', 'grapes', 'avocado', 'pineapple', 'peach'])
    ).toEqual(['avocado', 'cherries', 'grapes', 'kiwi', 'peach', 'pineapple']))
})
