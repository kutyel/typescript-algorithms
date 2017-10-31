export default (x?: any) => {
  if (!x) return true
  if (typeof x === 'number' && !!x) return false
  return !(Array.isArray(x) ? x : Object.keys(x)).length
}
