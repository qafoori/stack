import { Stack } from '../../types'

export class ArrayStack<T> implements Stack<T> {
  private stack: T[]

  constructor() {
    this.stack = []
  }

  push(value: T): this {
    this.stack.push(value)
    return this
  }

  pop(): T | null {
    if (this.stack.length === 0) {
      return null
    }
    return this.stack.pop() || null
  }

  peek(): T | null {
    return this.stack[this.stack.length - 1] || null
  }

  isEmpty(): boolean {
    return this.stack.length === 0
  }

  clear(): this {
    this.stack = []
    return this
  }

  toArray(): T[] {
    return this.stack
  }

  toString(): string {
    return 'ArrayStack'
  }
}
