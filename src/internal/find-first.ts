import { flatDeep } from "../util/flat-deep";

export function findFirst<T>(values: T[] | unknown[]): T | undefined {
    const result = getValues<T>(values, 1);
    return result && result.length === 1 ? result[0] : undefined;
}

export function findFirstNumber<T>(values: T[] | unknown[], nValues: number): T[] | undefined {
    const result = getValues<T>(values, nValues);
    return result && result.length <= nValues ? result : undefined;
}

function getValues<T>(values: T[] | unknown[], nValues: number): T[] | undefined {
    if (!values || values.length < 1) {
        return undefined;
    }

    const flattened = flatDeep(values, Infinity);
    if (!flattened) {
        return undefined;
    }

    if (Array.isArray(flattened)) {
        if (flattened.length < 1) {
            return undefined;
        } else if (flattened.length === 1) {
            return [flattened[0]];
        } else {
            return flattened.slice(0, nValues);
        }
    }

    return undefined;
}
