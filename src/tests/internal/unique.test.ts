import {unique} from "../../internal/unique";

test('It should filter unique values without depth', () => {
    const arr = [0, 1, 1, 2, 3, 3];
    const result = unique<number>(arr);
    expect(result).toEqual([0, 1, 2, 3]);
});

test('It should filter properly when depth is not provided', () => {
    const arr = [0, 0, 1, [1], 2, 3, [3]];
    const result = unique<number>(arr);
    expect(result).toEqual([0, 1, [1], 2, 3, [3]]);
});

test('It should filter properly when depth is provided', () => {
    const arr = [0, 0, 1, [1], 2, 3, [3]];
    const result = unique<number>(arr, 1);
    expect(result).toEqual([0, 1, 2, 3]);
});
