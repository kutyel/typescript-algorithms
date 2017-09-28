export default (...classes: any[]) =>
  classes
    .filter(c => !!c)
    .map(
      o =>
        typeof o === 'object'
          ? Object.entries(o).reduce(
              (s, [key, value]) => (value ? [...s, key] : s),
              []
            )
          : o
    )
    .reduce((x, y) => [...x, ...y], [])
    .join(' ')
