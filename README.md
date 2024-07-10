# Stack

Lightweight implementation of stacks in TypeScript.

You can use it to improve the performance of your node or browser applications built with JavaScript/TypeScript

This package contains five different implementations of stack:

1. Array stack (`new ArrayStack()`)
2. Singly linked list stack (`new SinglyLinkedListStack()`)
3. Doubly linked list stack (`new DoublyLinkedListStack()`)
4. Circular singly linked list stack (`new CircularSinglyLinkedListStack()`)
5. Circular doubly linked list stack (`new CircularDoublyLinkedListStack()`)

All stacks contains similar properties and methods.

Here is what each class contains:

> In all examples below, we used ArrayStack implementation. But the usages are just the same for all implementations.

## `.toArray<T>(): T[]`

> Converts the stack into an array

```ts
const stack = new ArrayStack()
const array = stack.push(1).push(2).push(3).toArray()
// [1, 2, 3]
```

## `.push<T>(value: T): this`

> Pushes a new item to the stack

```ts
const stack = new ArrayStack()
const array = stack.push(1).push(2).push(3).toArray()
// [1, 2, 3]
```

## `.pop<T>(): T | null`

> Removes the most top item from the stack and returns it

```ts
const stack = new ArrayStack()
const topItem = stack.push(1).push(2).push(3).pop()
// 3
```

## `.peek<T>(): T | null`

> Returns the most top item from the stack

```ts
const stack = new ArrayStack()
const topItem = stack.push(1).push(2).push(3).peek()
// 3
```

## `.clear<T>(): this`

> Removes all items from the stack

```ts
const stack = new ArrayStack()
const array = stack.push(1).push(2).push(3).clear().toArray()
// []
```

## `.isEmpty<T>(): boolean`

> Checks if the stack is empty

```ts
const stack = new ArrayStack()
const isEmpty = stack.isEmpty()
// true
```

