export interface Stack<T> {
    isEmpty(): boolean;
    clear(): this;
    push(value: T): this;
    pop(): T | null;
    peek(): T | null;
    toArray(): T[];
    toString(): string;
}
