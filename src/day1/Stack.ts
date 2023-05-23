type Node<T> = {
    value: T;
    next?: Node<T>;
};
export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        const node = { value: item, next: this.head };
        this.head = node;
        this.length++;
    }

    pop(): T | undefined {
        if (!this.head) return undefined;
        const head = this.head;
        this.head = head.next;
        this.length--;
        return head?.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
