import { ArrayStack } from '../modules'

describe('TEST ARRAY-STACK', () => {
  it('should convert stack into an array', () => {
    const stack = new ArrayStack()
    stack.push(1).push(2).push(3)
    expect(stack.toArray()).toEqual([1, 2, 3])
  })

  it('should push items into the stack', () => {
    const stack = new ArrayStack()
    stack.push(1)
    expect(stack.toArray()).toEqual([1])
  })

  it('should pop the top item from stack', () => {
    const stack = new ArrayStack()
    const topItem = stack.push(1).push(2).push(3).pop()
    const allItems = stack.toArray()
    expect([topItem, allItems]).toEqual([3, [1, 2]])
  })

  it('should peak the top item from stack', () => {
    const stack = new ArrayStack()
    const topItem = stack.push(1).push(2).push(3).peek()
    const allItems = stack.toArray()
    expect([topItem, allItems]).toEqual([3, [1, 2, 3]])
  })

  it('should check if a stack is empty', () => {
    const emptyStack = new ArrayStack()
    const filledStack = new ArrayStack()
    filledStack.push(1)
    expect([emptyStack.isEmpty(), filledStack.isEmpty()]).toEqual([true, false])
  })

  it('should clear all items from stack', () => {
    const stack = new ArrayStack()
    stack.push(1).push(2).clear()
    expect(stack.toArray()).toEqual([])
  })
})
