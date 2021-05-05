import { flatDeep } from "../util/flat-deep";

export function contains<T>(values: unknown[], ...value: T[]): Readonly<boolean> {
    const actualValues = flatDeep<T>(values, Infinity);
    const expectedValues = flatDeep<T>(value, Infinity);

    return expectedValues.some((expected: T) =>
        actualValues.some((actual: T) => expected === actual));
}

export function containsAll<T>(values: unknown[], ...value: T[]): Readonly<boolean> {
    const actualValues = flatDeep<T>(values, Infinity);
    const expectedValues = flatDeep<T>(value, Infinity);

    return expectedValues.every((expected: T) =>
        actualValues.some((actual: T) => expected === actual));
}

export function containsPartial<T extends object>(array: object[], expectedPartial: Partial<T>): Readonly<boolean> {
    const mapToPropsAndValues = (value: any, properties: any[]) => {
        return properties.map(prop => {
            return {
                name: prop,
                value: value[prop]
            };
        });
    };

    const flattened = flatDeep<object>(array, Infinity);
    return flattened.some(actualValue => {
        const actualProps = Object.getOwnPropertyNames(actualValue);
        const actualPropsAndValues = mapToPropsAndValues(actualValue, actualProps);
        const expectedProps = Object.getOwnPropertyNames({...expectedPartial});
        const expectedPropsAndValues = mapToPropsAndValues({...expectedPartial}, expectedProps);
        return expectedPropsAndValues.every(expectedPropAndValue => {
            return actualPropsAndValues.some(actualPropAndValues => {
                return actualPropAndValues.name === expectedPropAndValue.name
                  && actualPropAndValues.value === expectedPropAndValue.value;
            })
        })
    })
}
