import { flatDeep } from "../util/flat-deep";

export function contains<T>(values: unknown[], value: T): boolean {
    return flatDeep(values).some((v: T) => v === value);
}
