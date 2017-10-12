/**
 * @returns the first repeated element of a list
 * @throws {Error} if there is no item repetition
 */
export default <T>(list: T[]): T | Error => {
  const aux: T[] = []
  for (const element of list) {
    if (aux.includes(element)) return element
    else aux.push(element)
  }
  throw Error('No item repetition')
}
