import clone from '../src/deepClone'

const array = [{ a: 1 }, { b: 2 }]
const object = {
  a: {
    b: {
      c: {
        d: true
      }
    }
  }
}

describe('Deep clone', () => {
  const copy = clone(object)
  const copiedArray = clone(array)

  it('should not break', () => expect(clone({})).not.toBe({}))

  it('should work with arrays', () => expect(copiedArray[0]).not.toBe(array[0]))

  it('should copy in 1st level', () => expect(object).not.toBe(copy))

  it('should copy in 2nd level', () => expect(object.a).not.toBe(copy.a))

  it('should copy in 3rd level', () => expect(object.a.b).not.toBe(copy.a.b))

  it('should copy in 4rd level', () =>
    expect(object.a.b.c).not.toBe(copy.a.b.c))

  it('should copy in 5rd level', () =>
    expect(object.a.b.c.d).not.toBe(copy.a.b.c.d))
})
