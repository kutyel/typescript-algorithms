import Queue from '../src/queue'

describe('Queue', () => {
  const aux = new Queue()

  test('should add an element at the beginning of the Queue', () => {
    expect(aux.size()).toBe(0)
    aux.enqueue(1)
    expect(aux.size()).toBe(1)
  })

  test('should remove the first element of the Queue', () => {
    expect(aux.dequeue()).toBe(1)
    expect(aux.dequeue()).toBeUndefined()
  })

  test('should return the size of the Queue', () => expect(aux.size()).toBe(0))
})
