import { flatDeep } from "../util/flat-deep";

export function contains<T>(values: unknown[], ...value: T[]): boolean {
    const actualValues = flatDeep(values, Infinity);
    const expectedValues = flatDeep(value, Infinity);

    return expectedValues.some((expected: T) =>
        actualValues.some((actual: T) => expected === actual));
}
