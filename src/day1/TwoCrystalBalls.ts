export default function two_crystal_balls(breaks: boolean[]): number {
    let low = 0;
    while (low <= breaks.length) {
        const jump = Math.floor(low + Math.sqrt(breaks.length - low));
        if (breaks[jump]) {
            for (let i = low; i <= jump; i++) {
                if (breaks[i]) return i;
            }
        }
        low = jump + 1;
    }
    return -1;
}
