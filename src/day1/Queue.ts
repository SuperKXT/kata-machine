type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    enqueue(item: T): void {
        const node = { value: item };
        if (this.tail) this.tail.next = node;
        else this.head = node;
        this.tail = node;
        this.length++;
    }

    deque(): T | undefined {
        if (!this.head) return undefined;
        const h = this.head;
        this.head = h.next;
        h.next = undefined;
        this.length--;
        if (this.length === 0) this.tail = undefined;
        return h.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
