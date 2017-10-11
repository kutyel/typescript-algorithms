/**
 * Searches for specific element in a given sorted array
 * @returns the index of the lement (-1 if its not found)
 */
export default function binarySearch<T>(
  list: T[],
  element: T,
  low = 0,
  high = list.length - 1
): number {
  if (high < low) return -1
  const mid = Math.round((low + high) / 2)
  return list[mid] === element
    ? mid
    : element < list[mid]
      ? binarySearch(list, element, low, mid - 1)
      : binarySearch(list, element, mid + 1, high)
}
