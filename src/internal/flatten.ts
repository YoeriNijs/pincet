import {flatDeep} from "../util/flat-deep";

export function flatten<T>(values: any[], depth: number = Infinity): T[] {
    return flatDeep<T>(values, depth);
}
