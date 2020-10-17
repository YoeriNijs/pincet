import { flatRemove, remove } from "../../internal/remove";

describe('#remove', () => {
    test('It should remove a value from an array', () => {
        const arr = [0, 1, 2, 3];
        const result = remove<number>(arr, 2);
        expect(result).toEqual([0, 1, 3])
    });

    test('It should not remove a value from an array if it does not exist', () => {
        const arr = [0, 1, 2, 3];
        const result = remove<number>(arr, 99);
        expect(result).toEqual([0, 1, 2, 3])
    });

    test('It should remove a value from a nested array', () => {
        const arr = [0, 1, [2], 3];
        const result = remove<number>(arr, 2);
        expect(result).toEqual([0, 1, 3])
    });

    test('It should not remove a value from a nested array if it does not exist', () => {
        const arr = [0, 1, [2], 3];
        const result = remove<number>(arr, 99);
        expect(result).toEqual([0, 1, [2], 3])
    });

    test('It should remove a value from a deep nested array', () => {
        const arr = [0, 1, [[2], 3]];
        const result = remove<number>(arr, 2);
        expect(result).toEqual([0, 1, [3]])
    });

    test('It should not remove a value from a deep nested array if it does not exist', () => {
        const arr = [0, 1, [[2], 3]];
        const result = remove<number>(arr, 99);
        expect(result).toEqual([0, 1, [[2], 3]])
    });
});

describe('#flatRemove', () => {
    test('It should remove a value from an array and flatten it', () => {
        const arr = [0, 1, 2, 3];
        const result = flatRemove<number>(arr, 2);
        expect(result).toEqual([0, 1, 3])
    });

    test('It should not remove a value from an array if it does not exist and flatten it', () => {
        const arr = [0, 1, 2, 3];
        const result = flatRemove<number>(arr, 99);
        expect(result).toEqual([0, 1, 2, 3])
    });

    test('It should remove a value from a nested array and flatten it', () => {
        const arr = [0, 1, [2], 3];
        const result = flatRemove<number>(arr, 2);
        expect(result).toEqual([0, 1, 3])
    });

    test('It should not remove a value from a nested array if it does not exist and flatten it', () => {
        const arr = [0, 1, [2], 3];
        const result = flatRemove<number>(arr, 99);
        expect(result).toEqual([0, 1, 2, 3])
    });

    test('It should remove a value from a deep nested array and flatten it', () => {
        const arr = [0, 1, [[2], 3]];
        const result = flatRemove<number>(arr, 2);
        expect(result).toEqual([0, 1, 3])
    });

    test('It should not remove a value from a deep nested array if it does not exist and flatten it', () => {
        const arr = [0, 1, [[2], 3]];
        const result = flatRemove<number>(arr, 99);
        expect(result).toEqual([0, 1, 2, 3])
    });
});

