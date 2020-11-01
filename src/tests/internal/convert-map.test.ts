import { convertMap } from "../../internal/convert-map";

interface Person {
    name: string,
    age: number
}

test('It should map age and create new arrays', () => {
    const arr: Person[][] = [
        [
            { name: 'personA', age: 30 },
            { name: 'personB', age: 31 },
            { name: 'personC', age: 32 }
        ],
        [
            { name: 'personD', age: 40 },
            { name: 'personE', age: 41 },
            { name: 'personF', age: 42 }
        ]
    ];

    const result = convertMap<Person, 'age'>(arr, 'age');
    expect(result).toEqual([
        [30, 31, 32],
        [40, 41, 42]
    ]);
});

test('It should map name and create new arrays', () => {
    const arr: Person[][] = [
        [
            { name: 'personA', age: 30 },
            { name: 'personB', age: 31 },
            { name: 'personC', age: 32 }
        ],
        [
            { name: 'personD', age: 40 },
            { name: 'personE', age: 41 },
            { name: 'personF', age: 42 }
        ]
    ];

    const result = convertMap<Person, 'name'>(arr, 'name');
    expect(result).toEqual([
        ['PersonA', 'PersonB', 'PersonC'],
        ['PersonD', 'PersonE', 'PersonF']
    ]);
});

test('It should work when array is empty', () => {
    const arr: Person[][] = [];
    const result = convertMap<Person, 'age'>(arr, 'age');
    expect(result).toEqual([]);
});
