type Node<T> = {
    value: T;
    prev?: Node<T>;
    next?: Node<T>;
};
export default class DoublyLinkedList<T> {
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
            this.head.prev = node;
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
        let curr = this.getAt(idx) as Node<T>;
        node.next = curr;
        node.prev = curr.prev;
        if (curr.prev) curr.prev.next = node;
        curr.prev = node;
    }

    append(value: T): void {
        const node: Node<T> = { value };
        this.length++;
        if (!this.tail) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
    }

    remove(value: T): T | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < this.length; i++) {
            if (curr.value === value) break;
            curr = curr.next;
        }
        if (!curr) return;
        return this.removeNode(curr);
    }
    get(idx: number): T | undefined {
        return this.getAt(idx)?.value;
    }

    removeAt(idx: number): T | undefined {
        const curr = this.getAt(idx);
        if (!curr) return;
        return this.removeNode(curr);
    }

    private removeNode(node: Node<T>): T {
        this.length--;
        if (node.prev) node.prev.next = node.next;
        if (node.next) node.next.prev = node.prev;
        if (node === this.head) this.head = node.next;
        if (node === this.tail) this.tail = node.prev;
        return node.value;
    }

    private getAt(idx: number): Node<T> | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < this.length; i++) {
            if (i === idx) break;
            curr = curr.next;
        }
        return curr;
    }
}
