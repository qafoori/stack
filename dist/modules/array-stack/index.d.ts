import { Stack } from '../../types';
export declare class ArrayStack<T> implements Stack<T> {
    private stack;
    constructor();
    push(value: T): this;
    pop(): T | null;
    peek(): T | null;
    isEmpty(): boolean;
    clear(): this;
    toArray(): T[];
    toString(): string;
}
