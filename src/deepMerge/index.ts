const deepMerge = (a: any, b: any): any =>
  Object.entries(a).reduce(
    (o, [key, val]) => ({
      ...o,
      [key]: typeof o[key] === 'object' ? deepMerge(o[key], val) : val,
    }),
    b
  )

export default deepMerge
