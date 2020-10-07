import {isEmpty} from "../internal/empty";

test('It should return true when an array is empty', () => {
   const arr: any[] = [];
   const result = isEmpty(arr);
   expect(result).toBe(true);
});

test('It should return true when a nested array is empty', () => {
    const arr: any[] = [[], []];
    const result = isEmpty(arr);
    expect(result).toBe(true);
});

test('It should return false when an array is not empty', () => {
    const arr: any[] = ['value'];
    const result = isEmpty(arr);
    expect(result).toBe(false);
});

test('It should return false when a nested array is not empty', () => {
    const arr: any[] = [[], ['value']];
    const result = isEmpty(arr);
    expect(result).toBe(false);
});
