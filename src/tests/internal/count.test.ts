import { count } from "../../internal/count";

test('It should count nested arrays when no depth is provided', () => {
    const arr = ['one', ['two', ['three', 'four'], 'five']];
    const result = count(arr);
    expect(result).toBe(5);
});

test('It should count nested arrays when depth is provided', () => {
    const arr = ['one', ['two', ['three', 'four'], 'five']];
    const result = count(arr, 1);
    expect(result).toBe(4);
});

test('It should count nested arrays when depth zero is provided', () => {
    const arr = ['one', ['two', ['three', 'four'], 'five']];
    const result = count(arr, 0);
    expect(result).toBe(2);
});

test('It should count when array is empty', () => {
    const arr: any[] = [];
    const result = count(arr);
    expect(result).toBe(0);
});


