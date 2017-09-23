import isPalindrome, { isAnyPermutationPalindrome } from '../src/palindrome'

describe('Anagram', () => {
  it('"radar" should be palindromes', () =>
    expect(isPalindrome('radar')).toBeTruthy())

  it('"madam" should be palindromes', () =>
    expect(isPalindrome('madam')).toBeTruthy())

  it('"civic" should be a palindrome', () =>
    expect(isPalindrome('civic')).toBeTruthy())

  it('"civic" should be a permutation palindrome', () =>
    expect(isAnyPermutationPalindrome('civic')).toBeTruthy())

  it('"civil" should not be a palindrome', () =>
    expect(isPalindrome('civil')).toBeFalsy())
})
