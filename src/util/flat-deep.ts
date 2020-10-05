/**
 * Util method that is used to flatten nested arrays. See:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
 */
export function flatDeep(arr: any[], depth = 1): any | any[] {
    return depth > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, depth - 1) : val), [])
        : arr.slice();
}
