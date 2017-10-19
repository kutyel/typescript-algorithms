export interface Node<T> {
  value: T
  next?: Node<T>
  prev?: Node<T> // This makes the LinkedList doubly linked
}

/**
 * Linked list for items of type <T>
 */
export default class LinkedList<T> {
  public head?: Node<T>
  public tail?: Node<T>

  /**
   * Adds an item in O(1)
   */
  add(value: T) {
    const node: Node<T> = { value, next: undefined, prev: undefined }
    !this.head && (this.head = node)
    if (this.tail) {
      this.tail.next = node
      node.prev = this.tail
    }
    this.tail = node
  }

  /**
   * Deletes the first item in O(1)
   * @returns the deleted item
   */
  delete(): T | undefined {
    if (this.head) {
      const value = this.head.value
      this.head = this.head.next
      !this.head ? (this.tail = undefined) : (this.head.prev = undefined)
      return value
    }
  }

  /**
   * Deletes the last element in O(1) - Doubly LinkedList
   * @returns the deleted item
   */
  pop(): T | undefined {
    if (this.tail) {
      const value = this.tail.value
      this.tail = this.tail.prev
      !this.tail ? (this.head = undefined) : (this.tail.next = undefined)
      return value
    }
  }

  /**
   * @returns {Iterator} values of the LinkedList
   */
  *values<T>() {
    let current = this.head
    while (current) {
      yield current.value
      current = current.next
    }
  }
}
