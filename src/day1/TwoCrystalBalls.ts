export default function two_crystal_balls(breaks: boolean[]): number {
    const jump = Math.floor(Math.sqrt(breaks.length));
    let i = 0;
    for (; i < breaks.length; i += jump) {
        if (breaks[i]) break;
    }
    i -= jump;
    for (let j = i; j < i + jump; j++) {
        if (breaks[j]) return j;
    }
    return -1;
}
