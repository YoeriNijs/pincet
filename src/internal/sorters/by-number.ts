export function sortByNumberAsc(a: number, b: number): number {
    if (a < b) { return -1; }
    if (a > b) { return 1; }
    return 0;
}

export function sortByNumberDesc(a: number, b: number): number {
    if (a < b) { return 1; }
    if (a > b) { return -1; }
    return 0;
}
