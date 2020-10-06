import {flatDeep} from "../util/flat-deep";

export function flatten(values: any[], depth: number = Infinity) {
    return flatDeep(values, depth);
}
