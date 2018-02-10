/**
 * Merge (conquer) step of mergeSort
 */
export const merge = <T>(left: T[], right: T[]): T[] => {
  const array: T[] = []
  let i = 0
  let j = 0
  while (i + j < left.length + right.length) {
    const x = left[i]
    const y = right[j]
    if (!y || x < y) {
      array.push(x)
      i++
    } else {
      array.push(y)
      j++
    }
  }
  return array
}

/**
 * Merge sort algorithm recursive implementation
 */
export default function mergeSort<T>(array: T[]): T[] {
  if (array.length < 2) return array

  const mid = array.length >>> 1
  const left = array.slice(0, mid)
  const right = array.slice(mid)

  return merge(mergeSort(left), mergeSort(right))
}
