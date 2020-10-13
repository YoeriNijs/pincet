/**
 * Util method to filter unique values from a provided array
 */
export function filterUnique(value: any, index: number, self: any[]) {
    return self.indexOf(value) === index;
}
