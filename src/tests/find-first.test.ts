import { findFirst } from "../internal/find-first";

test('Should pick the first of an array', () => {
    const arr = ['one', 'two', 'three'];
    const first = findFirst<string>(arr);
    expect(first).toBe('one');
});

test('Should pick the first of a nested array', () => {
    const arr = [['one'], 'two', 'three'];
    const first = findFirst<string>(arr);
    expect(first).toBe('one');
});

test('Should pick the first of a nested array when there is an empty array', () => {
    const arr = [[], [[]], ['one'], 'two', 'three'];
    const first = findFirst<string>(arr);
    expect(first).toBe('one');
});


