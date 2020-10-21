import {flatDeep} from "../util/flat-deep";

export function map<S, T>(values: S[], fn: (v: S) => T): T[] {
    return Array.from(values, fn);
}

export function flatMap<S, T>(values: any[], fn: ((v: S | S[]) => T | any) | ((v: S) => T), depth: number = Infinity): T[] {
    return Array.from(flatDeep<S>(values, depth), fn);
}
