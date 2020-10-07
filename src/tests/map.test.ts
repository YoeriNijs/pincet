import { flatMap, map } from "../internal/map";

test('It should map according to the provided function', () => {
    const arr = [0, 1, 2];
    const fn = (v: number) => `${v + 1}`;
    const result = map<number, string>(arr, fn);
    expect(result).toEqual(['1', '2', '3'])
});

test('It should flatmap according to the provided function', () => {
    const arr = [1, [2, [3]]];
    const fn = (v: number) => v + 1;
    const result = flatMap<number, number>(arr, fn);
    expect(result).toEqual([2, 3, 4])
});

test('It should flatmap according to the provided depth', () => {
    const arr = [['aap', ['noot', ['mies']]]];
    const fn = (v: string | string[]) => Array.isArray(v) ? v : 'wim';
    const result = flatMap<string, string>(arr, fn, 1);
    expect(result).toEqual(['wim', ['noot', ['mies']]])
});
