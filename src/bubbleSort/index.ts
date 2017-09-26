/**
 * Idiomatic bubble sort implementation with early breaking
 */
export default <T>(array: T[]): T[] => {
  array = [...array]
  while (true) {
    let swapped = false
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        ;[array[i], array[i + 1]] = [array[i + 1], array[i]]
        swapped = true
      }
    }
    if (!swapped) break
  }
  return array
}
