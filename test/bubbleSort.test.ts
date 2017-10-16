import bubbleSort from '../src/bubbleSort'

describe('Bubble Sort', () => {
  test('should sort an array of numbers', () =>
    expect(bubbleSort([4, 3, 2, 1])).toEqual([1, 2, 3, 4]))

  test('should sort an array of strings', () =>
    expect(
      bubbleSort([
        'cherries',
        'kiwi',
        'grapes',
        'avocado',
        'pineapple',
        'peach',
      ])
    ).toEqual(['avocado', 'cherries', 'grapes', 'kiwi', 'peach', 'pineapple']))
})
