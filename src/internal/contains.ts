import { flatDeep } from "../util/flat-deep";

export function contains<T>(values: unknown[], ...value: T[]): Readonly<boolean> {
    const actualValues = flatDeep<T>(values, Infinity);
    const expectedValues = flatDeep<T>(value, Infinity);

    return expectedValues.some((expected: T) =>
        actualValues.some((actual: T) => expected === actual));
}

export function containsAll<T>(values: unknown[], ...value: T[]): Readonly<boolean> {
    const actualValues = flatDeep<T>(values, Infinity);
    const expectedValues = flatDeep<T>(value, Infinity);

    return expectedValues.every((expected: T) =>
        actualValues.some((actual: T) => expected === actual));
}
