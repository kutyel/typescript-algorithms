/**
 * A word is an anagram if you can rearrange its characters to produce the second word
 */
export default (s1: string, s2: string): boolean => {
  const chars: any = {}
  for (const c of s1.split('')) {
    chars[c] = (chars[c] || 0) + 1
  }
  for (const c of s2.split('')) {
    if (!chars[c]) return false
    chars[c] = (chars[c] || 0) - 1
  }
  return Object.values(chars).every(v => v === 0)
}
