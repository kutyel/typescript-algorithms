import binarySearch from '../src/binarySearch'

describe('Binary search', () => {
  it('should return the index of the given element', () =>
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2))

  it('should return -1 if the element is not found', () =>
    expect(binarySearch(['a', 'b', 'c'], 'd')).toBe(-1))
})
