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
const first = pincet.findFirst<string>(arr);
console.log(first); // 'one'
```

However, you can use Pincet for nested arrays as well. For instance:
```
const arr = [[], [[]], ['one'], 'two', 'three'];
const first = pincet.findFirst<string>(arr);
console.log(first); // 'one'
```

You can also search for more values, if you prefer:
```
const arr = [[], ['one'], ['two']];
const first = pincet.findFirstNumber<string>(arr, 2);
console.log(first); // ['one', 'two']
```

Or revert it:
```
const arr = [[], ['one'], ['two']];
const last = pincet.findLastNumber<string>(arr, 2);
console.log(last); // ['two', 'one']
```

You can also find values with a predicate:
```
interface Person {
    name: string,
    age: number
}

const people: Person[][] = [
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

const predicate = (person: Person) => person.age === 30;
const result = pincet.findWithPredicate<Person>(people, predicate);
console.log(result); // [{ name: 'AdultC', age: 30 }]
```

If you like syntactic sugar, you can use `pincet.findAny<Person>(people, predicate)` as well.

Interested in more results? Just split it:

```
interface Valid {
    valid: true;
}

interface Invalid {
    valid: false;
}

const arr: any[] = [
    {
        id: '1',
        valid: true
    },
    {
        id: '2',
        valid: false
    },
    {
        id: '3',
        valid: true
    },
];

const predicate = (value: any) => value.valid;
const [valid, invalid]  = pincet.splitByPredicate<Valid, Invalid, any>(arr, predicate);
console.log(valid); // [{ id: '1', valid: true }, { id: '3', valid: true }];
console.log(invalid); // [{ id: '2', valid: false }];
```

You can also revert it:
```
const predicate = (value: any) => !value.valid;
const [invalid, valid] = pincet.splitByPredicate<Invalid, Valid, any>(arr, predicate);
```

Wait, one more thing: flatten to the rescue! By default all arrays are flatten.
```
const arr = ['aap', ['noot'], [[['mies']]]];
const result = pincet.flatten(arr);
console.log(result); // ['aap', 'noot', 'mies']
```

But you can specify a depth. For example:
```
const arr = ['aap', ['noot'], [[['mies']]]];
const result = pincet.flatten(arr, 1);
console.log(result); // ['aap', 'noot', [['mies']]]
```

## Supported methods
- `findFirst<T>(values: T[])`
- `findFirstNumber<T>(values: T[], nValues: number)`
- `findLast<T>(values: T[])`
- `findLastNumber<T>(values: T[], nValues: number)`
- `findWithPredicate<T>(values: T[], predicate: (value: T) => boolean)`
- `findAny<T>(values: T[], guard: (value: T) => boolean`
- `splitByPredicate<T1, T2, S>(values: any[], predicate: (value: S) => boolean): [T1[], T2[]]`
- `flatten(values: any[], depth: number = Infinity)`

## Run tests
- Checkout locally
- Run `npm install`
- Run `npm run test`
