import { Sorter } from "../model/sorter";
import { sortByStringAsc, sortByStringDesc } from "./sorters/by-string";
import { flatDeep } from "../util/flat-deep";
import { sortByNumberAsc, sortByNumberDesc } from "./sorters/by-number";

export const byStringAsc: Sorter<string> = { sort: sortByStringAsc };
export const byStringDesc: Sorter<string> = { sort: sortByStringDesc };
export const byNumberAsc: Sorter<number> = { sort: sortByNumberAsc };
export const byNumberDesc: Sorter<number> = { sort: sortByNumberDesc };

export function sort<T>(values: any[], sorter: Sorter<T>, depth = 0): T[] {
    return flatDeep(values, depth).sort(sorter.sort);
}
