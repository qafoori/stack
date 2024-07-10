import { SinglyLinkedList } from 'dsa-linked-list'

import { Stack } from '../../types'

export class SinglyLinkedListStack<T> implements Stack<T> {
  private readonly stack: SinglyLinkedList<T>

  constructor() {
    this.stack = new SinglyLinkedList<T>()
  }

  push(value: T): this {
    this.stack.appendTail(value)
    return this
  }

  pop(): T | null {
    if (this.stack.length === 0) {
      return null
    }
    const topValue = this.stack.getTail().value || null
    this.stack.removeTail()
    return topValue
  }

  peek(): T | null {
    return this.stack.getTail().value || null
  }

  isEmpty(): boolean {
    return this.stack.length === 0
  }

  clear(): this {
    this.stack.clear()
    return this
  }

  toArray(): T[] {
    return this.stack.toArray()
  }

  toString(): string {
    return 'SinglyLinkedListStack'
  }
}
