export interface Node<T> {
  value: T
  next?: Node<T>
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
    const node = { value, next: undefined }
    !this.head && (this.head = node)
    this.tail && (this.tail.next = node)
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
      !this.head && (this.tail = undefined)
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
