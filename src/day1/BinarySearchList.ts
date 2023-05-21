export default function bs_list(haystack: number[], needle: number): boolean {
    let start = 0;
    let end = haystack.length;
    while (start !== end) {
        const middle = Math.floor(start + (end - start) / 2);
        if (haystack[middle] === needle) return true;
        if (haystack[middle] > needle) end = middle;
        else start = middle + 1;
    }
    return false;
}
