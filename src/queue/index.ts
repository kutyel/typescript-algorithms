/**
 * First In First Out (FIFO) with O(1) key operations
 */
export default class Queue<T> {
  private lastDeqIndex = 0
  private nextEnqIndex = 0
  private data: { [index: number]: T } = {}

  /**
   * Enqueues the element in O(1)
   */
  enqueue(element: T): void {
    this.data[this.nextEnqIndex] = element
    this.nextEnqIndex++
  }

  /**
   * Dequeues the first inserted element in O(1)
   * @returns {undefined} if there are no elements
   */
  dequeue(): T | undefined {
    if (this.lastDeqIndex !== this.nextEnqIndex) {
      const deq = this.data[this.lastDeqIndex]
      delete this.data[this.lastDeqIndex]
      this.lastDeqIndex++
      return deq
    }
  }

  /**
   * @returns {number} the number of elements in the Queue O(1)
   */
  size(): number {
    return this.nextEnqIndex - this.lastDeqIndex
  }
}
