import { toDecimal } from '../src/roman'

describe('Roman Numerals', () => {
  test('should convert from roman to decimal', () => {
    expect(toDecimal('XXVI')).toBe(26)
    expect(toDecimal('MCMXIV')).toBe(1914)
    expect(toDecimal('MMXVII')).toBe(2017)
  })
})
