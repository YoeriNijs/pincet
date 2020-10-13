export interface Sorter<T> {
    sort: (a: T, b: T) => number
}
