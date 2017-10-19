import LinkedList from '../src/linkedList'

describe('LinkedList', () => {
  const list = new LinkedList()

  test('should add an element to the LinkedList', () => {
    list.add(1)
    list.add(2)
    list.add(3)
    expect(list.head.value).toBe(1)
  })

  test('should remove the first element of the LinkedList', () => {
    expect(list.delete()).toBe(1)
    expect(list.delete()).toBe(2)
    expect(list.delete()).toBe(3)
    expect(list.delete()).toBeUndefined()
  })

  test('should remove the last element of the LinkedList', () => {
    list.add(1)
    list.add(2)
    list.add(3)
    expect(list.pop()).toBe(3)
    expect(list.pop()).toBe(2)
    expect(list.pop()).toBe(1)
    expect(list.pop()).toBeUndefined()
  })

  test('should run all over the LinkedList', () => {
    let index = 0
    const aux = [1, 2, 3, 4, 5]
    aux.map(x => list.add(x))
    for (const item of list.values()) {
      expect(item).toBe(aux[index])
      index++
    }
  })
})
