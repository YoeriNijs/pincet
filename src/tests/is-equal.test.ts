import {isEqual} from "../internal/is-equal";

test('Same arrays should be equal', () => {
    const arr1 = ['aap', 'noot', 'mies'];
    const arr2 = ['aap', 'noot', 'mies'];
    const result = isEqual(arr1, arr2);
    expect(result).toBe(true);
});

test('Same multiple arrays should be equal', () => {
    const arr1 = ['aap', 'noot', 'mies'];
    const arr2 = ['aap', 'noot', 'mies'];
    const arr3 = ['aap', 'noot', 'mies'];
    const arr4 = ['aap', 'noot', 'mies'];
    const result = isEqual(arr1, arr2, arr3, arr4);
    expect(result).toBe(true);
});

test('Same arrays should be equal when they have nested values', () => {
    const arr1 = ['aap', ['noot', ['mies']]];
    const arr2 = ['aap', ['noot', ['mies']]];
    const result = isEqual(arr1, arr2);
    expect(result).toBe(true);
});

test('Not same array length should not be equal', () => {
    const arr1 = ['aap', 'noot', 'mies'];
    const arr2 = ['aap', 'noot'];
    const result = isEqual(arr1, arr2);
    expect(result).toBe(false);
});

test('Not same array values should not be equal', () => {
    const arr1 = ['aap', 'noot', 'mies'];
    const arr2 = ['aap', 'noot', 'wim'];
    const result = isEqual(arr1, arr2);
    expect(result).toBe(false);
});

test('Not same array values with mulitple arrays should not be equal', () => {
    const arr1 = ['aap', 'noot', 'mies'];
    const arr2 = ['aap', 'noot', 'mies'];
    const arr3 = ['aap', 'noot', 'wim'];
    const arr4 = ['aap', 'noot', 'mies'];
    const result = isEqual(arr1, arr2, arr3, arr4);
    expect(result).toBe(false);
});

test('When first array has nested array is should not be the same', () => {
    const arr1 = ['aap', 'noot', ['mies']];
    const arr2 = ['aap', 'noot', 'mies'];
    const result = isEqual(arr1, arr2);
    expect(result).toBe(false);
});

test('When second array has nested array is should not be the same', () => {
    const arr1 = ['aap', 'noot', 'mies'];
    const arr2 = ['aap', 'noot', ['mies']];
    const result = isEqual(arr1, arr2);
    expect(result).toBe(false);
});

test('When strict equality is not the same then is should be false ', () => {
    const arr1 = ['true'];
    const arr2 = [true];
    const result = isEqual<any>(arr1, arr2);
    expect(result).toBe(false);
});
