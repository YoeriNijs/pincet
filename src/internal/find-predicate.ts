import {flatDeep} from "../util/flat-deep";

export function findWithPredicate<T>(values: any[], predicate: (value: T) => boolean): T[] {
    return flatDeep(values, Infinity).filter((v: any): v is T => predicate(v));
}
