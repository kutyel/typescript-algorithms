/**
 * A word is an anagram if you can rearrange its characters to produce the second word
 */
export default (s1: string, s2: string): boolean => {
  const chars = s1
    .split('')
    .reduce(
      (map, char) => map.set(char, (map.get(char) || 0) + 1),
      new Map<string, number>()
    )
  for (const char of s2.split('')) {
    if (!chars.has(char)) return false
    chars.set(char, (chars.get(char) || 0) - 1)
  }
  return Array.from(chars.values()).every(v => v === 0)
}
