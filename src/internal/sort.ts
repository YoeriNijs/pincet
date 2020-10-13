import { Sorter } from "../model/sorter";
import { sortByStringAsc, sortByStringDesc } from "./sorters/by-string";
import { flatDeep } from "../util/flat-deep";
import { sortByNumberAsc, sortByNumberDesc } from "./sorters/by-number";

export function byStringAsc(): Sorter<string> {
    return {
        sort: sortByStringAsc
    }
}

export function byStringDesc(): Sorter<string> {
    return {
        sort: sortByStringDesc
    }
}

export function byNumberAsc(): Sorter<number> {
    return {
        sort: sortByNumberAsc
    }
}

export function byNumberDesc(): Sorter<number> {
    return {
        sort: sortByNumberDesc
    }
}

export function sort<T>(values: any[], sorter: Sorter<T>, depth = 0): T[] {
    return flatDeep(values, depth).sort(sorter.sort);
}
