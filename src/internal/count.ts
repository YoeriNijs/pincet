import { flatDeep } from "../util/flat-deep";

export function count(values: any[], depth: number = Infinity): Readonly<number> {
    if (!values || values.length < 1) {
        return 0;
    }

    return flatDeep(values, depth).length;
}
