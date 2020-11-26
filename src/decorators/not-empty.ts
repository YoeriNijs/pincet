import { isEmpty } from "../internal/empty";

/**
 *  EXPERIMENTAL: property decorator for
 *  checking if a value is not empty
 */
export function NotEmpty() {
    return (target: any, propertyKey: string) => {
        let value: any[];
        const getter = (): boolean => !isEmpty(value);
        const setter = (array: any[]) => value = array;
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    }
}
