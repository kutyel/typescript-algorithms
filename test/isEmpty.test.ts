import isEmpty from '../src/isEmpty'

describe('isEmpty', () => {
  test('should work with falsy values', () => {
    expect(isEmpty()).toBe(true)
    expect(isEmpty(NaN)).toBe(true)
    expect(isEmpty(null)).toBe(true)
    expect(isEmpty(undefined)).toBe(true)
  })

  test('should work with numbers', () => {
    expect(isEmpty(1)).toBe(false)
    expect(isEmpty(0)).toBe(true)
  })

  test('should work with strings', () => {
    expect(isEmpty('a')).toBe(false)
    expect(isEmpty('')).toBe(true)
  })

  test('should work with arrays', () => {
    expect(isEmpty([1])).toBe(false)
    expect(isEmpty([])).toBe(true)
  })

  test('should work with objects', () => {
    expect(isEmpty({ a: 1 })).toBe(false)
    expect(isEmpty({})).toBe(true)
  })
})
