import {findWithPredicate} from "../internal/find-predicate";

interface Person {
    name: string,
    age: number
}

const PEOPLE: Person[][] = [
    [
        {
            name: 'ChildA',
            age: 10
        },
        {
            name: 'ChildB',
            age: 8
        },
    ],
    [
        {
            name: 'AdultA',
            age: 40
        },
        {
            name: 'AdultB',
            age: 20
        },
        {
            name: 'AdultC',
            age: 30
        },
        {
            name: 'AdultD',
            age: 20
        }
    ]
];

test('Should find in nested arrays with predicate', () => {
    const predicate = (person: Person) => person.age === 30;
    const result = findWithPredicate<Person>(PEOPLE, predicate);
    expect(result.length).toBe(1);
    expect(result[0]).toEqual({ name: 'AdultC', age: 30 })
});

test('Should return empty array when array is empty', () => {
    const result = findWithPredicate<Person>([], () => true);
    expect(result.length).toBe(0);
});
