import { flatDeep } from "../util/flat-deep";
import { filterUnique } from "../util/filters";

export function unique<T>(values: any, depth = 0): T[] {
    return flatDeep(values, depth).filter(filterUnique);
}
