import { count } from "../internal/count";

export function Count<T>(depth: number = Infinity) {
    return (target: any, propertyKey: string) => {
        let value: T[];
        const getter = (): number => count(value, depth);
        const setter = (array: T[]) => value = array;
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    }
}
