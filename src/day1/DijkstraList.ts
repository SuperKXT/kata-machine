function getLowestUnvisited(seen: boolean[], dists: number[]): number {
    let idx = -1;
    let lowestDistance = Infinity;
    for (let i = 0; i < seen.length; i++) {
        if (seen[i]) continue;
        if (!seen[i] && lowestDistance > dists[i]) {
            lowestDistance = dists[i];
            idx = i;
        }
    }
    return idx;
}

export default function dijkstra_list(
    source: number,
    needle: number,
    graph: WeightedAdjacencyList,
): number[] {
    const seen = new Array(graph.length).fill(false);
    const prev = new Array(graph.length).fill(-1);
    const dists = new Array(graph.length).fill(Infinity);

    dists[source] = 0;

    let curr = getLowestUnvisited(seen, dists);
    while (curr !== -1) {
        seen[curr] = true;

        for (const edge of graph[curr]) {
            if (seen[edge.to]) continue;
            const dist = dists[curr] + edge.weight;
            if (dist < dists[edge.to]) {
                dists[edge.to] = dist;
                prev[edge.to] = curr;
            }
        }

        curr = getLowestUnvisited(seen, dists);
    }

    const out: number[] = [];
    let i = needle;
    while (prev[i] !== -1) {
        out.push(i);
        i = prev[i];
    }

    return [source, ...out.reverse()];
}
