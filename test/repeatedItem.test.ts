import repeatedItem from '../src/repeatedItem'

describe('Check if there is a repeated item', () => {
  it('should return the repeated element', () =>
    expect(repeatedItem([1, 2, 3, 3, 5])).toBe(3))

  it('should throw an error if there is no repeated element', () =>
    expect(() => repeatedItem(['a', 'b', 'c'])).toThrowError(
      /No item repetition/
    ))
})
