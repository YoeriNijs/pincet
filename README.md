# Pincet: for precise array operations only

## What is does
Pincet (Dutch for 'tweezers') is a plain simple array utility that is currently under development. It is written in Typescript and, therefore, type safe.

## Install
`npm i pincet`

## Usage
First, call Pincet in your code:
```
import pincet from "pincet";
```

Pincet supports some plain simple methods, such as:
```
const arr = ['one', 'two', 'three'];
const first = findFirst<string>(arr);
console.log(first); // 'one'
```

However, you can use Pincet for nested arrays as well. For instance:
```
const arr = [[], [[]], ['one'], 'two', 'three'];
const first = findFirst<string>(arr);
console.log(first); // 'one'
```

You can also search for more values, if you prefer:
```
const arr = [[], ['one'], ['two']];
const first = findFirstNumber<string>(arr, 2);
console.log(first); // ['one', 'two']
```

Or revert it:
```
const arr = [[], ['one'], ['two']];
const last = findLastNumber<string>(arr, 2);
console.log(last); // ['two', 'two']
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

## Run tests
- Checkout locally
- Run `npm install`
- Run `npm run test`
