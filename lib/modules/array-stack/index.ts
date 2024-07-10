import { Stack } from '../../types'

export class ArrayStack<T> implements Stack<T> {
  private stack: T[]
  private pointer: number

  constructor() {
    this.stack = []
    this.pointer = 0
  }

  push(value: T): this {
    this.stack[this.pointer] = value
    this.pointer++
    return this
  }

  pop(): T | null {
    if (this.pointer === 0) {
      return null
    }
    this.pointer--
    const value = this.stack[this.pointer]
    this.stack.length = this.pointer
    return value
  }

  peek(): T | null {
    if (this.pointer === 0) {
      return null
    }
    return this.stack[this.pointer - 1]
  }

  isEmpty(): boolean {
    return this.pointer === 0
  }

  clear(): this {
    this.stack = []
    this.pointer = 0
    return this
  }

  toArray(): T[] {
    return this.stack.slice(0, this.pointer)
  }

  toString(): string {
    return `ArrayStack(${this.toArray().join(', ')})`
  }
}
