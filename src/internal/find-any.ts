import { findWithPredicate } from "./find-predicate";

export function findAny<T>(values: any[], guard: (value: unknown) => boolean): T[] {
    return findWithPredicate<T>(values, guard);
}
