export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number,
): number[] | null {
    const seen = new Array(graph.length).fill(false);
    const prev = new Array(graph.length).fill(-1);

    seen[source] = true;
    const queue = [source];
    do {
        const curr = queue.shift() as number;
        if (curr === needle) break;
        const adjacent = graph[curr];
        for (let i = 0; i < graph.length; i++) {
            if (!adjacent[i] || seen[i]) continue;
            seen[i] = true;
            prev[i] = curr;
            queue.push(i);
        }
    } while (queue.length);

    if (prev[needle] === -1) return null;

    let curr = needle;
    const path: number[] = [];
    while (prev[curr] !== -1) {
        path.push(curr);
        curr = prev[curr];
    }

    return [source, ...path.reverse()];
}
