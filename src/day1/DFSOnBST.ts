export default function dfs(
    head: BinaryNode<number> | null,
    needle: number,
): boolean {
    if (!head) return false;
    if (head.value === needle) return true;
    return dfs(needle > head.value ? head.right : head.left, needle);
}
