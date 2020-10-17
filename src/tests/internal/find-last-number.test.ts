import { findLastNumber } from "../../internal/find-last";

test('Should pick the last one of an array', () => {
    const arr = ['one', 'two', 'three'];
    const last = findLastNumber<string>(arr, 1);
    expect(last).toEqual(['three']);
});

test('Should pick the last two of an array', () => {
    const arr = ['one', 'two', 'three'];
    const last = findLastNumber<string>(arr, 2);
    expect(last).toEqual(['three', 'two']);
});

test('Should pick the last three of an array', () => {
    const arr = ['one', 'two', 'three'];
    const last = findLastNumber<string>(arr, 3);
    expect(last).toEqual(['three', 'two', 'one']);
});

test('Should pick all values of an array when nValues is above real size', () => {
    const arr = ['one', 'two', 'three'];
    const last = findLastNumber<string>(arr, 99);
    expect(last).toEqual(['three', 'two', 'one']);
});

test('Should pick the last one of a nested array', () => {
    const arr = [['one'], ['two'], ['three']];
    const last = findLastNumber<string>(arr, 1);
    expect(last).toEqual(['three']);
});

test('Should pick the last one of a nested array', () => {
    const arr = [['one'], ['two'], []];
    const last = findLastNumber<string>(arr, 1);
    expect(last).toEqual(['two']);
});

test('Should pick the first three of a nested array', () => {
    const arr = [['one'], ['two'], ['three']];
    const last = findLastNumber<string>(arr, 3);
    expect(last).toEqual(['three', 'two', 'one']);
});

test('Should pick the first two of a nested array', () => {
    const arr = [['one'], ['two'], []];
    const last = findLastNumber<string>(arr, 2);
    expect(last).toEqual(['two', 'one']);
});

test('Should return undefined when the array is empty', () => {
    const last = findLastNumber<string>([], 1);
    expect(last).toBeUndefined();
});




