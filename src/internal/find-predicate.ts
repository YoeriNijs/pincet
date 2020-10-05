import {flatDeep} from "../util/flat-deep";

export function findWithPredicate<T>(values: T[] | unknown[], predicate: (value: T) => boolean): T[] {
    if (!values || values.length < 1) {
        return [];
    }

    const flattened = flatDeep(values, Infinity);
    if (!flattened) {
        return [];
    }

    if (Array.isArray(flattened)) {
        const result = flattened.filter(predicate);
        if (result.length < 1) {
            return [];
        } else {
            return result;
        }
    }

    return [];
}
