import { DoublyLinkedList } from 'dsa-linked-list'

import { Stack } from '../../types'

export class DoublyLinkedListStack<T> implements Stack<T> {
  private readonly stack: DoublyLinkedList<T>
  private pointer: number

  constructor() {
    this.stack = new DoublyLinkedList<T>()
    this.pointer = 0
  }

  push(value: T): this {
    this.stack.appendTail(value)
    this.pointer++
    return this
  }

  pop(): T | null {
    if (this.pointer === 0) {
      return null
    }
    const topValue = this.stack.getTail()?.value || null
    this.stack.removeTail()
    this.pointer--
    return topValue
  }

  peek(): T | null {
    if (this.pointer === 0) {
      return null
    }
    return this.stack.getTail()?.value || null
  }

  isEmpty(): boolean {
    return this.pointer === 0
  }

  clear(): this {
    this.stack.clear()
    this.pointer = 0
    return this
  }

  toArray(): T[] {
    return this.stack.toArray()
  }

  toString(): string {
    return 'DoublyLinkedListStack'
  }
}
