import {findAny} from "..";

interface Creature {
    name: string
}

interface Human extends Creature {
    philosophize: () => void,
    laugh: () => void,
    race: 'homo sapiens'
}

interface Rabbit extends Creature {
    chinning: () => void,
    race: 'french lop'
}

const CREATURES: Creature[] = [
    {
        name: 'Thomas Hobbes',
        philosophize: () => {
            // think about something
        },
        laugh: () => {
            // Laugh about something
        },
        race: 'homo sapiens'
    } as Human,
    {
        name: 'John Stuart Mill',
        philosophize: () => {
            // think about something
        },
        laugh: () => {
            // Laugh about something
        },
        race: 'homo sapiens'
    } as Human,
    {
        name: 'Jazz Jack Rabbit',
        chinning: () => {
            // Chin a piece of wood
        },
        race: 'french lop'
    } as Rabbit
];

test('It should find rabbits in list of creatures', () => {
    const rabbits = findAny<Rabbit>(CREATURES, (creature: any) => creature.race === 'french lop');
    expect(rabbits).toHaveLength(1);
    expect(rabbits[0].name).toEqual('Jazz Jack Rabbit');
});

test('It should not find creatures when type guard is set to do so', () => {
    const creatures = findAny<any>(CREATURES, (_: any) => false);
    expect(creatures).toHaveLength(0);
});

test('It should find humans in list of creatures', () => {
    const humans = findAny<Human>(CREATURES, (creature: any) => creature.race === 'homo sapiens');
    expect(humans).toHaveLength(2);
    expect(humans[0].name).toEqual('Thomas Hobbes');
    expect(humans[1].name).toEqual('John Stuart Mill');
});
