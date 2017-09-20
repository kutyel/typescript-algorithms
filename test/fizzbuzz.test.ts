import fizzbuzz, { isFizz, isBuzz } from '../src/fizzbuzz'

describe('FizzBuzz', () => {
  const aux = fizzbuzz()

  it('isFizz() should check correcty multiples of 3', () =>
    expect([3, 6, 9, 12, 15].every(isFizz)).toBeTruthy())

  it('isBuzz() should check correcty multiples of 5', () =>
    expect([5, 10, 15, 20, 25].every(isBuzz)).toBeTruthy())

  it('should return "Fizz" for multiples of 3', () =>
    aux.forEach(
      (x, i) => isFizz(i + 1) && !isBuzz(i + 1) && expect(x).toBe('Fizz')
    ))

  it('should return "Buzz" for multiples of 5', () =>
    aux.forEach(
      (x, i) => isBuzz(i + 1) && !isFizz(i + 1) && expect(x).toBe('Buzz')
    ))

  it('should return "FizzBuzz" for multiples of 3 and 5', () =>
    aux.forEach(
      (x, i) => isFizz(i + 1) && isBuzz(i + 1) && expect(x).toBe('FizzBuzz')
    ))
})
