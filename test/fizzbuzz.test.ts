import fizzbuzz, { isFizz, isBuzz } from "../src/fizzbuzz"

describe("FizzBuzz", () => {
  const result = fizzbuzz()

  it("isFizz() should check correcty multiples of 3", () =>
    expect([3, 6, 9, 12, 15].every(isFizz)).toBeTruthy())

  it("isBuzz() should check correcty multiples of 5", () =>
    expect([5, 10, 15, 20].every(isBuzz)).toBeTruthy())

  it('should return "Fizz" for multiples of 3', () =>
    result.forEach((x, index) => isFizz(index) && expect(x).toBe("Fizz")))

  it('should return "Buzz" for multiples of 5', () =>
    result.forEach((x, index) => isBuzz(index) && expect(x).toBe("Buzz")))

  it('should return "FizzBuzz" for multiples of 3 and 5', () =>
    result.forEach(
      (x, index) => isFizz(index) && isBuzz(index) && expect(x).toBe("FizzBuzz")
    ))
})
