import Heap, { CompareFn } from '../heap'

export default <T>(list: T[], cmp: CompareFn<T>): (T | undefined)[] => {
  const heap = new Heap(cmp)
  for (const item of list) {
    heap.add(item)
  }
  const result = []
  for (let index = 0; index < list.length; index++) {
    result.push(heap.extractRoot())
  }
  return result
}
