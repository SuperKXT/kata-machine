export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.length = 0;
        this.data = [];
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }

    delete(): number | undefined {
        if (this.length === 0) return undefined;
        this.length--;
        const val = this.data[0];
        this.data[0] = this.data[this.length];
        if (this.length > 0) this.heapifyDown(0);
        return val;
    }

    private heapifyDown(idx: number): void {
        if (idx >= this.length) return;

        const leftIdx = this.leftChild(idx);
        const rightIdx = this.rightChild(idx);
        if (leftIdx >= this.length) return;

        const leftVal = this.data[leftIdx];
        const rightVal = this.data[rightIdx];
        const val = this.data[idx];

        if (leftVal > rightVal && val > rightVal) {
            this.data[idx] = rightVal;
            this.data[rightIdx] = val;
            this.heapifyDown(rightIdx);
        } else if (rightVal > leftVal && val > leftVal) {
            this.data[idx] = leftVal;
            this.data[leftIdx] = val;
            this.heapifyDown(leftIdx);
        }
    }

    private heapifyUp(idx: number): void {
        if (idx === 0) return;
        const parentIdx = this.parent(idx);
        const parentVal = this.data[parentIdx];
        const val = this.data[idx];
        if (parentVal > val) {
            this.data[idx] = parentVal;
            this.data[parentIdx] = val;
            this.heapifyUp(parentIdx);
        }
    }

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private leftChild(idx: number): number {
        return idx * 2 + 1;
    }
    private rightChild(idx: number): number {
        return idx * 2 + 2;
    }
}
