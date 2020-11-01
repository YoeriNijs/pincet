import { flatDeep } from "../util/flat-deep";

export function convertMap<S, K extends keyof S>(values: S[][], key: K): K[][] {
    return flatDeep(values.map(sub => sub.map(s => s[key])), 0);
}
