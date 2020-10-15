import { flatDeep } from "../util/flat-deep";

export function contains<T>(values: unknown[], value: T): boolean {
    return flatDeep(values, Infinity).some((v: T) => v === value);
}
