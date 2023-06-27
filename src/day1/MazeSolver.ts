const directions = [
    { x: -1, y: 0 },
    { x: 1, y: 0 },
    { x: 0, y: -1 },
    { x: 0, y: 1 },
];

const walk = (
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    seen: boolean[][],
    path: Point[],
): boolean => {
    if (
        curr.x < 0 ||
        curr.x > maze[0].length ||
        curr.y < 0 ||
        curr.y > maze.length
    ) {
        return false;
    }
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }
    if (seen[curr.y][curr.x]) {
        return false;
    }
    seen[curr.y][curr.x] = true;
    path.push(curr);
    if (curr.x === end.x && curr.y === end.y) {
        return true;
    }
    for (let i = 0; i < directions.length; i++) {
        const result = walk(
            maze,
            wall,
            { x: curr.x + directions[i].x, y: curr.y + directions[i].y },
            end,
            seen,
            path,
        );
        if (result) return true;
    }
    path.pop();
    return false;
};

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const seen = maze.map((row) => row.split("").map(() => false));
    const path: Point[] = [];
    walk(maze, wall, start, end, seen, path);
    return path;
}
