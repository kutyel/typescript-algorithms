/**
 * Last In First Out (LIFO) with O(1) key operations
 */
export default class Stack<T> {
  private data: T[] = []

  /**
   * Adds the element in O(1)
   */
  push(element: T): void {
    this.data.push(element)
  }

  /**
   * Pops the last inserted element in O(1)
   * @returns {undefined} if there are no elements
   */
  pop(): T | undefined {
    return this.data.pop()
  }

  /**
   * @returns {number} the number of elements in the Stack O(1)
   */
  size(): number {
    return this.data.length
  }
}
