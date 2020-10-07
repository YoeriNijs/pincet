import { flatDeep } from "../util/flat-deep";

export function isEmpty(values: any[]): boolean {
    if (!values || values.length < 1) {
        return true;
    }

    return flatDeep(values).length < 1;
}
