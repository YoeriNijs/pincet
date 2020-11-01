import { flatDeep } from "../util/flat-deep";

export function findLast<T>(values: any[]): T | undefined {
    const result = getValues<T>(values, 1);
    return result && result.length === 1 ? result[0] : undefined;
}

export function findLastNumber<T>(values: any[], nValues: number): T[] | undefined {
    const result = getValues<T>(values, nValues);
    return result && result.length <= nValues ? result : undefined;
}

function getValues<T>(values: T[], nValues: number): T[] | undefined {
    if (!values || values.length < 1) {
        return undefined;
    }

    const flattened = flatDeep<T>(values, Infinity);
    if (!flattened) {
        return undefined;
    }

    if (Array.isArray(flattened)) {
        if (flattened.length < 1) {
            return undefined;
        } else if (flattened.length === 1) {
            return [flattened[0]];
        } else {
            return flattened
                .reverse()
                .slice(0, nValues);
        }
    }

    return undefined;
}
