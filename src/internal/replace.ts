export function replace<T>(original: T, newValue: Partial<T>): T {
    return replaceValues<T>(original)(newValue);
}

export function replaceWithPredicate<T>(original: T, newValue: Partial<T>, predicate: (value: T) => boolean): T {
    return predicate(original) ? replaceValues<T>(original)(newValue) : original;
}

export function replaceAll<T>(originalValues: T[], newValue: Partial<T>): T[] {
    return originalValues.map((source: T) => replaceValues<T>(source)(newValue));
}

export function replaceAllWithPredicate<T>(originalValues: T[], newValue: Partial<T>, predicate: (value: T) => boolean): T[] {
    return originalValues.map((source: T) => predicate(source) ? replaceValues<T>(source)(newValue) : source);
}

function replaceValues<T>(source: T): (target?: Partial<T>) => T {
    return (target: Partial<T> = {}) => Object.assign<Partial<T>, T, Partial<T>>({}, source, target);
}
