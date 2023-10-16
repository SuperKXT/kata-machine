export default function quick_sort(
    arr: number[],
    start: number = 0,
    end: number = arr.length - 1,
): void {
    if (start >= end) return;
    let idx = start - 1;
    const pivot = arr[end];
    for (let i = start; i < end; i++) {
        if (arr[i] > pivot) continue;
        idx++;
        const tmp = arr[i];
        arr[i] = arr[idx];
        arr[idx] = tmp;
    }
    idx++;
    arr[end] = arr[idx];
    arr[idx] = pivot;
    quick_sort(arr, start, idx - 1);
    quick_sort(arr, idx + 1, end);
}
