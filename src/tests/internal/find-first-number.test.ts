import { findFirstNumber } from "../../internal/find-first";

test('Should pick the first one of an array', () => {
    const arr = ['one', 'two', 'three'];
    const first = findFirstNumber<string>(arr, 1);
    expect(first).toEqual(['one']);
});

test('Should pick the first two of an array', () => {
    const arr = ['one', 'two', 'three'];
    const first = findFirstNumber<string>(arr, 2);
    expect(first).toEqual(['one', 'two']);
});

test('Should pick the first three of an array', () => {
    const arr = ['one', 'two', 'three'];
    const first = findFirstNumber<string>(arr, 3);
    expect(first).toEqual(['one', 'two', 'three']);
});

test('Should pick all values of an array when nValues is above real size', () => {
    const arr = ['one', 'two', 'three'];
    const first = findFirstNumber<string>(arr, 99);
    expect(first).toEqual(['one', 'two', 'three']);
});

test('Should return undefined when the array is empty', () => {
    const first = findFirstNumber<string>([], 1);
    expect(first).toBeUndefined();
});

test('Should pick the first one of a nested array', () => {
    const arr = [['one'], ['two'], ['three']];
    const first = findFirstNumber<string>(arr, 1);
    expect(first).toEqual(['one']);
});

test('Should pick the first one of a nested array', () => {
    const arr = [[], ['one'], ['two']];
    const first = findFirstNumber<string>(arr, 1);
    expect(first).toEqual(['one']);
});

test('Should pick the first three of a nested array', () => {
    const arr = [['one'], ['two'], ['three']];
    const first = findFirstNumber<string>(arr, 3);
    expect(first).toEqual(['one', 'two', 'three']);
});

test('Should pick the first two of a nested array', () => {
    const arr = [[], ['one'], ['two']];
    const first = findFirstNumber<string>(arr, 2);
    expect(first).toEqual(['one', 'two']);
});




