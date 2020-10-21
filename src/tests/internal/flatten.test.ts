import { flatten } from "../../internal/flatten";

test('It should flatten infinite', () => {
   const arr = ['aap', ['noot'], [[['mies']]]];
   const result = flatten<string>(arr);
   expect(result).toEqual(['aap', 'noot', 'mies']);
});

test('It should flatten one level', () => {
    const arr = ['aap', ['noot'], [[['mies']]]];
    const result = flatten<string>(arr, 1);
    expect(result).toEqual(['aap', 'noot', [['mies']]]);
});

test('It should flatten two levels', () => {
    const arr = ['aap', ['noot'], [[['mies']]]];
    const result = flatten<string>(arr, 2);
    expect(result).toEqual(['aap', 'noot', ['mies']]);
});

test('It should flatten three levels', () => {
    const arr = ['aap', ['noot'], [[['mies']]]];
    const result = flatten<string>(arr, 3);
    expect(result).toEqual(['aap', 'noot', 'mies']);
});
