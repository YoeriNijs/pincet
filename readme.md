# Pincet: for precise array operations only

## What is does
Pincet (Dutch for 'tweezers') is a plain simple array utility that is currently under development. It is written in Typescript and, therefore, type safe.

At the moment, Pincet supports some operations for deep nested arrays. For instance: 
```
const arr = ['one', 'two', 'three'];
const first = findFirst<string>(arr);
console.log(first); // 'one'
```

As aforementioned, Pincet supports nested arrays. So:

But of course, you can do pretty advanced stuff with it, such as:
```
const arr = [[], [[]], ['one'], 'two', 'three'];
const first = findFirst<string>(arr);
console.log(first); // 'one'
```

Or, if you want more values:
```
const arr = [[], ['one'], ['two']];
const first = findFirstNumber<string>(arr, 2);
console.log(first); // ['one', 'two']
```

You can also find values with a predicate:
```
interface Person {
    name: string,
    age: number
}

const PEOPLE: Person[] = [
    {
        name: 'PersonA',
        age: 40
    },
    {
        name: 'PersonB',
        age: 20
    },
    {
        name: 'PersonC',
        age: 30
    },
    {
        name: 'PersonD',
        age: 20
    }
];

const predicate = (person: Person) => person.age === 30;
const result = findWithPredicate<Person>(PEOPLE, predicate);
console.log(result); // { name: 'AdultC', age: 30 }
```

## Supported methods
- `findFirst<T>(values: T[])`
- `findFirstNumber<T>(values: T[], nValues: number)`
- `findLast<T>(values: T[])`
- `findLastNumber<T>(values: T[], nValues: number)`
- `findWithPredicate<T>(values: T[], predicate: (value: T) => boolean)`

## Install
`npm i pincet`

## Run tests
- Checkout locally
- Run `npm install`
- Run `npm run test`
