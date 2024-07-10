import { Stack } from '../../types';
export declare class SinglyLinkedListStack<T> implements Stack<T> {
    private readonly stack;
    private pointer;
    constructor();
    push(value: T): this;
    pop(): T | null;
    peek(): T | null;
    isEmpty(): boolean;
    clear(): this;
    toArray(): T[];
    toString(): string;
}
