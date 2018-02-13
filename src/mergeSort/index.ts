import merge from '../mergeArrays'

/**
 * Merge sort algorithm recursive implementation
 */
export default function mergeSort<T>(array: T[]): T[] {
  if (array.length < 2) return array

  const mid = array.length >>> 1
  const left = array.slice(0, mid)
  const right = array.slice(mid)
  // Merge (conquer) step of mergeSort
  return merge(mergeSort(left), mergeSort(right))
}
