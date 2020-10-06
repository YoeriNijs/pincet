import {flatDeep} from "../util/flat-deep";

export function splitByPredicate<T1, T2, S>(values: any[], predicate: (value: S) => boolean): [T1[], T2[]] {
    if (!values || values.length < 1) {
        return [[], []];
    }

    const t1: T1[] = [];
    const t2: T2[] = [];
    flatDeep(values, Infinity).forEach((v: any) => predicate(v) ? t1.push(v) : t2.push(v));

    return [t1, t2];
}
