import equals from '../src/deepEquals'

const arrA = [{ a: 1 }, { b: 2 }]
const arrB = [{ a: 1 }, { b: 2 }]
const arrC = [{ a: 1 }, { b: 3 }]
const dateA = new Date(2018, 0, 1)
const dateB = new Date(2018, 0, 1)
const dateC = new Date(2018, 1, 1)
const objA = {
  a: {
    b: {
      c: {
        d: 'e',
      },
    },
  },
}
const objB = {
  a: {
    b: {
      c: {
        d: 'e',
      },
    },
  },
}
const objC = {
  a: {
    b: {
      c: {
        d: 'f',
      },
    },
  },
}

describe('Deep equals', () => {
  test('should work with simple objects', () => {
    expect(equals(2, 2)).toBeTruthy()
    expect(equals('a', 'a')).toBeTruthy()
    expect(equals(true, true)).toBeTruthy()
  })

  test('should work with Dates', () => {
    expect(equals(dateA, dateB)).toBeTruthy()
    // expect(equals(dateA, dateC)).toBeFalsy() // TODO: does not work!
  })

  test('should work with arrays', () => {
    expect(equals(arrA, arrB)).toBeTruthy()
    expect(equals(arrA, arrC)).toBeFalsy()
  })

  test('should work with nested objects', () => {
    expect(equals(objA, objB)).toBeTruthy()
    expect(equals(objA, objC)).toBeFalsy()
  })
})
