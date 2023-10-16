type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class SinglyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    prepend(value: T): void {
        const node: Node<T> = { value };
        this.length++;
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }
    insertAt(value: T, idx: number): void {
        if (idx > this.length) throw new Error("Index out of bounds!");

        if (idx === this.length) {
            this.append(value);
            return;
        }

        if (idx === 0) {
            this.prepend(value);
            return;
        }

        this.length++;
        const node: Node<T> = { value };
        const curr = this.getAt(idx - 1) as Node<T>;
        node.next = curr.next;
        curr.next = node;
    }

    append(value: T): void {
        const node: Node<T> = { value };
        this.length++;
        if (!this.tail) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }
    remove(value: T): T | undefined {
        if (this.head?.value === value) {
            const curr = this.head;
            if (!curr) return;
            this.length--;
            this.head = curr.next;
            return curr.value;
        }

        let prev = this.head;
        for (let i = 0; prev && i < this.length; i++) {
            if (prev.next?.value === value) break;
            prev = prev.next;
        }
        const curr = prev?.next;
        if (!prev || !curr) return;
        this.length--;
        prev.next = curr.next;
        return curr.value;
    }

    get(idx: number): T | undefined {
        return this.getAt(idx)?.value;
    }

    removeAt(idx: number): T | undefined {
        if (idx === 0) {
            const curr = this.head;
            if (!curr) return;
            this.length--;
            this.head = curr.next;
            return curr.value;
        }

        const prev = this.getAt(idx - 1);
        const curr = prev?.next;
        if (!prev || !curr) return;
        this.length--;
        prev.next = curr.next;
        return curr.value;
    }

    getAt(idx: number): Node<T> | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < this.length; i++) {
            if (i === idx) break;
            curr = curr.next;
        }
        return curr;
    }
}
