import {flatten} from "../internal/flatten";

export function Flatten<T>(depth: number = Infinity) {
    return (target: any, propertyKey: string) => {
        let value: unknown[];
        const getter = (): T[] => flatten<T>(value, depth);
        const setter = (array: T[]) => value = array;
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    }
}
