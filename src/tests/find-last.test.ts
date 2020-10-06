import { findLast } from "../internal/find-last";

test('Should pick the last of an array', () => {
    const arr = ['one', 'two', 'three'];
    const last = findLast<string>(arr);
    expect(last).toBe('three');
});

test('Should pick the last of a nested array', () => {
    const arr = ['one', 'two', ['three']];
    const last = findLast<string>(arr);
    expect(last).toBe('three');
});

test('Should pick the last of a nested array when there is an empty array', () => {
    const arr = ['one', 'two', ['three'], [], [[]]];
    const last = findLast<string>(arr);
    expect(last).toBe('three');
});

test('Should return undefined when the array is empty', () => {
    const last = findLast<string>([]);
    expect(last).toBeUndefined();
});


