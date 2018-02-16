const deepEquals = (a: any, b: any): boolean =>
  Object.entries(a).every(
    ([key, val]) =>
      typeof val === 'object' ? deepEquals(b[key], val) : b[key] === val
  )

export default deepEquals
