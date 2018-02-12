import merge from '../src/deepMerge'

const a = {
  a: {
    b: {
      c: 'z',
    },
  },
}
const b = {
  a: {
    b: {
      d: 'y',
    },
  },
}
const expected = {
  a: {
    b: {
      c: 'z',
      d: 'y',
    },
  },
}

test('should merge deep', () => expect(merge(a, b)).toEqual(expected))
