import {replace, replaceAll, replaceAllWithPredicate, replaceWithPredicate} from "../../internal/replace";

interface Person {
    name: string;
    gender: string;
}

it('Should replace all', () => {
    const persons: Person[] = [
        { name: 'Bradley Edward Manning', gender: 'man' },
        { name: 'Nikkie de Jager', gender: 'man' }
    ];

    const result = replaceAll<Person>(persons, { gender: 'woman' });
    expect(result).toEqual([
        { name: 'Bradley Edward Manning', gender: 'woman' },
        { name: 'Nikkie de Jager', gender: 'woman' }
    ]);
});

it('Should replace with predicate', () => {
    const persons: Person[] = [
        { name: 'Bradley Edward Manning', gender: 'man' },
        { name: 'Nikkie de Jager', gender: 'man' }
    ];

    const predicate = (person: Person) => person.name === 'Nikkie de Jager';
    const result = replaceAllWithPredicate<Person>(persons, { gender: 'woman' }, predicate);
    expect(result).toEqual([
        { name: 'Bradley Edward Manning', gender: 'man' },
        { name: 'Nikkie de Jager', gender: 'woman' }
    ]);
});

it('Should not replace all when predicate is false', () => {
    const persons: Person[] = [
        { name: 'Bradley Edward Manning', gender: 'man' },
        { name: 'Nikkie de Jager', gender: 'man' }
    ];

    const result = replaceAllWithPredicate<Person>(persons, { gender: 'woman' }, (_: Person) => false);
    expect(result).toEqual([
        { name: 'Bradley Edward Manning', gender: 'man' },
        { name: 'Nikkie de Jager', gender: 'man' }
    ]);
});

it('Should replace', () => {
    const person: Person = { name: 'Bradley Edward Manning', gender: 'man' };
    const result = replace<Person>(person, { gender: 'woman' });
    expect(result).toEqual({ name: 'Bradley Edward Manning', gender: 'woman' });
});

it('Should replace with predicate', () => {
    const person: Person = { name: 'Bradley Edward Manning', gender: 'man' };
    const predicate = (p: Person) => p.name === 'Bradley Edward Manning';
    const result = replaceWithPredicate<Person>(person, { gender: 'woman' }, predicate);
    expect(result).toEqual({ name: 'Bradley Edward Manning', gender: 'woman' });
});

it('Should not replace when predicate is false', () => {
    const person: Person = { name: 'Bradley Edward Manning', gender: 'man' };
    const result = replaceWithPredicate<Person>(person, { gender: 'woman' }, (_: Person) => false);
    expect(result).toEqual({ name: 'Bradley Edward Manning', gender: 'man' });
});
