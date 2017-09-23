/**
 * A palindrome is a string that reads the same backwards and forwards
 */
export default (str: string): boolean =>
  str ===
  str
    .split('')
    .reverse()
    .join('')

export const isAnyPermutationPalindrome = (str: string): boolean => {
  const unmatched = new Set<string>()
  str
    .split('')
    .forEach(c => (unmatched.has(c) ? unmatched.delete(c) : unmatched.add(c)))
  return unmatched.size <= 1
}
