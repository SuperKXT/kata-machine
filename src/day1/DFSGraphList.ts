function walk(
    graph: WeightedAdjacencyList,
    curr: number,
    needle: number,
    seen: boolean[],
    path: number[],
): boolean {
    if (seen[curr]) return false;

    seen[curr] = true;
    path.push(curr);
    if (curr === needle) return true;

    const list = graph[curr];
    for (const neighbor of graph[curr]) {
        if (walk(graph, neighbor.to, needle, seen, path)) {
            return true;
        }
    }

    path.pop();

    return false;
}

export default function dfs(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number,
): number[] | null {
    const seen = new Array(graph.length).fill(false);
    const path: number[] = [];
    const success = walk(graph, source, needle, seen, path);
    if (!success) return null;
    return path;
}
