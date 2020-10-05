import { findLastNumber } from "../internal/find-last";

test('Should pick the last one of an array', () => {
    const arr = ['one', 'two', 'three'];
    const first = findLastNumber<string>(arr, 1);
    expect(first).toEqual(['three']);
});

test('Should pick the last two of an array', () => {
    const arr = ['one', 'two', 'three'];
    const first = findLastNumber<string>(arr, 2);
    expect(first).toEqual(['three', 'two']);
});

test('Should pick the last three of an array', () => {
    const arr = ['one', 'two', 'three'];
    const first = findLastNumber<string>(arr, 3);
    expect(first).toEqual(['three', 'two', 'one']);
});

test('Should pick all values of an array when nValues is above real size', () => {
    const arr = ['one', 'two', 'three'];
    const first = findLastNumber<string>(arr, 99);
    expect(first).toEqual(['three', 'two', 'one']);
});

test('Should pick the last one of a nested array', () => {
    const arr = [['one'], ['two'], ['three']];
    const first = findLastNumber<string>(arr, 1);
    expect(first).toEqual(['three']);
});

test('Should pick the last one of a nested array', () => {
    const arr = [['one'], ['two'], []];
    const first = findLastNumber<string>(arr, 1);
    expect(first).toEqual(['two']);
});

test('Should pick the first three of a nested array', () => {
    const arr = [['one'], ['two'], ['three']];
    const first = findLastNumber<string>(arr, 3);
    expect(first).toEqual(['three', 'two', 'one']);
});

test('Should pick the first two of a nested array', () => {
    const arr = [['one'], ['two'], []];
    const first = findLastNumber<string>(arr, 2);
    expect(first).toEqual(['two', 'one']);
});




