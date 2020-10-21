import { isEmpty } from "./empty";
import { flatDeep } from "../util/flat-deep";

export function remove<T>(values: any[], value: T): T[] {
    return values.reduce((acc, cur) => {
        if (Array.isArray(cur)) {
            const result = remove<T>(cur, value);
            return isEmpty(result) ? acc : acc.concat([result]);
        } else {
            return acc.concat(cur).filter((v: T) => v !== value);
        }
    }, []);
}

export function flatRemove<T>(values: any[], value: T): T[] {
    return remove<T>(flatDeep<T>(values, Infinity), value);
}
