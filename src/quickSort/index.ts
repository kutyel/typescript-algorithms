/**
 * Get random element from list (as pivot)
 */
const random = <T>(list: T[]) => list[Math.floor(Math.random() * list.length)]

/**
 * Recursive implementation of the quick sort algorithm
 */
export default function quickSort<T>(list: T[]): T[] {
  if (list.length < 2) return list

  const pivot = random(list)
  const less = list.filter(i => i <= pivot)
  const greater = list.filter(i => i > pivot)

  return [...quickSort(less), pivot, ...quickSort(greater)]
}
