import insertionSort from '../src/insertionSort'

describe('Insertion Sort', () => {
  it('should sort an array of numbers', () =>
    expect(insertionSort([4, 3, 2, 1])).toEqual([1, 2, 3, 4]))

  it('should sort an array of strings', () =>
    expect(
      insertionSort([
        'cherries',
        'kiwi',
        'grapes',
        'avocado',
        'pineapple',
        'peach',
      ])
    ).toEqual(['avocado', 'cherries', 'grapes', 'kiwi', 'peach', 'pineapple']))
})
