export function isEqual<T>(...arrays: T[][]): boolean {
    if (!arrays || arrays.length < 1 || !Array.isArray(arrays)) {
        return false;
    }

    const first = arrays[0];
    for (let i = 1; i < arrays.length; i++) {
        const next = arrays[i];
        if (first.length !== next.length) {
            return false;
        }

        for (let y = 0; y < first.length; y++) {
            const a = first[y];
            const b = next[y];

            if (Array.isArray(a) && !Array.isArray(b)) {
                return false;
            } else if (!Array.isArray(a) && Array.isArray(b)) {
                return false;
            } else if (Array.isArray(a) && Array.isArray(b)) {
                const equalArrays = isEqual<T>(a, b);
                if (!equalArrays) {
                    return false;
                }
            } else if (a !== b) {
                return false;
            }
        }
    }

    return true;
}
