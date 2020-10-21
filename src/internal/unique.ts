import { flatDeep } from "../util/flat-deep";
import { filterUnique } from "../util/filters";

export function unique<T>(values: any[], depth = 0): T[] {
    return flatDeep<T>(values, depth).filter(filterUnique);
}
