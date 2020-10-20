# Pincet: for precise array operations only

## What it does
Pincet (Dutch for 'tweezers') is a plain simple - but still very powerful - array utility that is written in Typescript and, therefore, type safe.

## Install
`npm i pincet`

## Usage
First, call Pincet in your code:
```
import * as pincet from 'pincet';
```

### Find methods
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

### Check for values
You can also check if a (nested) array contains a value:
```
const arr = ['do', ['re'], 'mi'];
const result = pincet.contains<string>(arr, 're');
console.log(result); // true
```

Optionally, you can pass multiple values. If one of the values is in the array, the contains method returns true:
```
const arr = ['do', 're', 'mi', 'fa'];
const result = pincet.contains<string>(arr, 'so', 'la', 'ti', 'do');
console.log(result); // true
```

If you want to check if multiple values exist in an array, you can use `pincet.containsAll()`:
```
const arr = ['aap', 'noot', 'mies', 'wim'];
const result = pincet.containsAll<string>(arr, 'mies', 'wim');
console.log(result); // true
```

Hence:
```
const arr = ['aap', 'noot', 'mies'];
const result = pincet.containsAll<string>(arr, 'mies', 'wim');
console.log(result); // false
```

### Distinct values
```
const arr = [0, 1, 1, 2, 3, 3];
const result = pincet.unique<number>(arr);
console.log(result); // [0, 1, 2, 3]
```

You can specify a depth as well:

```
const arr1 = [0, 0, 1, [1], 2, 3, [3]];
const result1 = pincet.unique<number>(arr1);
console.log(result1); // [0, 1, [1], 2, 3, [3]]

const arr2 = [0, 0, 1, [1], 2, 3, [3]];
const result2 = pincet.unique<number>(arr2, 1);
console.log(result2); // [0, 1, 2, 3]
```

### Split values
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

### Equality checking
Interested in equality? There is a method for that!
```
const arr1 = ['aap', ['noot', ['mies']]];
const arr2 = ['aap', ['noot', ['mies']]];
const result = pincet.isEqual(arr1, arr2);
console.log(result); // true
```

```
const arr1 = ['aap', 'noot', 'mies'];
const arr2 = ['aap', 'noot', 'mies'];
const arr3 = ['aap', 'noot', 'wim'];
const arr4 = ['aap', 'noot', 'mies'];
const result = pincet.isEqual(arr1, arr2, arr3, arr4);
console.log(result); // false
```

### Map values
```
const arr = [0, 1, 2];
const fn = (v: number) => `${v + 1}`;
const result = pincet.map<number, string>(arr, fn);
console.log(result); // ['1', '2', '3']
```

By default, the map method does not flatten you array. If you want to flat map, you can!
```
const arr = [1, [2, [3]]];
const fn = (v: number) => v + 1;
const result = pincet.flatMap<number, number>(arr, fn);
console.log(result); // [2, 3, 4]
```

You can specify a depth, if you prefer. Here, we just pass a depth of 1:
```
const arr = [['aap', ['noot', ['mies']]]];
const fn = (v: string | string[]) => Array.isArray(v) ? v : 'wim';
const result = pincet.flatMap<string, string>(arr, fn, 1);
console.log(result); // ['wim', ['noot', ['mies']]]
```

### Replace values
Sometimes, you want to replace some values. Well, now you can with ease!
```
interface Person {
    name: string;
    gender: string;
}

const persons: Person[] = [
    { name: 'Bradley Edward Manning', gender: 'man' },
    { name: 'Nikkie de Jager', gender: 'man' }
];

const result = pincet.replaceAll<Person>(persons, { gender: 'woman' });
console.log(result); // [ { name: 'Bradley Edward Manning', gender: 'woman' }, { name: 'Nikkie de Jager', gender: 'woman' } ]
```

Not interested in replacing all values? Just pass a predicate:
```
interface Person {
    name: string;
    gender: string;
}

const persons: Person[] = [
    { name: 'Bradley Edward Manning', gender: 'man' },
    { name: 'Nikkie de Jager', gender: 'man' }
];
const predicate = (person: Person) => person.name === 'Nikkie de Jager';

const result = pincet.replaceAllWithPredicate<Person>(persons, { gender: 'woman' }, predicate);
console.log(result); // [ { name: 'Bradley Edward Manning', gender: 'man' }, { name: 'Nikkie de Jager', gender: 'woman' } ]
```

Pincet supports replacing one value (optionally with predicate), if needed. Technically this is not array related, but may still be handy!
```
const person: Person = { name: 'Bradley Edward Manning', gender: 'man' };
const result = pincet.replace<Person>(person, { gender: 'woman' });
console.log(result); // { name: 'Bradley Edward Manning', gender: 'woman' }
```

### Remove values
With Pincet, it is easy to remove a value from a (nested) array:

```
const arr = [0, 1, 2, 3];
const result = pincet.remove<number>(arr, 2);
console.log(result); // [0, 1, 3]
```

By default, Pincet respects nested arrays. Only when the removal operations leads to an empty array, the array will be filtered out:

```
const arr1 = [0, 1, [2], 3];
const result1 = pincet.remove<number>(arr1, 2);
console.log(result1); // [0, 1, 3]

const arr2 = [0, 1, [[2], 3]];
const result2 = pincet.remove<number>(arr2, 2);
console.log(result2); // [0, 1, [3]]
```

If you want, you can remove a value and flatten the array directly by using flatRemove:

```
const arr = [0, 1, [[2], 3]];
const result = pincet.flatRemove<number>(arr, 2);
console.log(result); // [0, 1, 3]
```

### Count values
```
const arr = ['one', ['two', ['three', 'four'], 'five']];
const result = pincet.count(arr);
console.log(result); // 5
```

You can specify a depth:
```
const arr1 = ['one', ['two', ['three', 'four'], 'five']];
const result1 = pincet.count(arr1, 1);
console.log(result1); // 4

const arr2 = ['one', ['two', ['three', 'four'], 'five']];
const result2 = pincet.count(arr2, 0);
console.log(result2); // 2
```

Or just check for empty arrays:
```
const arr1: any[] = [[], []];
const result1 = pincet.isEmpty(arr1);
console.log(result1); // true

const arr2: any[] = [[], ['value']];
const result2 = pincet.isEmpty(arr2);
console.log(result2); // false
```

There is also an experimental Count decorator. Please see 'supported decorators' in this readme.

### Sort values
Pincet provides a default sorting mechanism. By default, there are methods to sort on strings or numbers. For instance:

```
const arr = ['z', 'y', 'x'];
const result = pincet.sort<string>(arr, byStringAsc);
console.log(result); // ['x', 'y', 'z']
```

By default, Pincet does not flatten the array. If you want to, you can specify a depth:
```
const arr = [0, 1, [2]];
const result = pincet.sort<number>(arr, byNumberDesc, 1);
console.log(result); // [2, 1, 0]
```

At the moment, Pincet provided the following sorters by default:
- byStringAsc
- byStringDesc
- byNumberAsc
- byNumberDesc

You can, however, create your own sorter by extending the Sorter interface. The interface is just a type safe wrapper 
and holds a sorting function, that returns a number (just as the default comparator). Your implementation may look like this:

```
const myCustomSorter: Sorter<boolean> = { sort: (a, b) => a === b ? 1 : -1 };
```

You then may call it like:

```
const arr = [false, false, true, false, true];
const result = pincet.sort<boolean>(arr, myCustomSorter);
console.log(result); // [true, true, false, false, false]
```

Of course, Pincet supports nested arrays as well. Just pass a depth:

```
const arr = [false, [false], true, [false, [true]]];
const result = pincet.sort<boolean>(arr, myCustomSorter, 2);
console.log(result); // [true, true, false, false, false]
```

### Flatten
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
##### Find
- `findFirst<T>(values: T[])`
- `findFirstNumber<T>(values: T[], nValues: number)`
- `findLast<T>(values: T[])`
- `findLastNumber<T>(values: T[], nValues: number)`
- `findWithPredicate<T>(values: T[], predicate: (value: T) => boolean)`
- `findAny<T>(values: T[], guard: (value: T) => boolean)`
- `contains<T>(values: unknown[], ...value: T)`
- `containsAll<T>(values: unknown[], ...value: T[])`

##### Split
- `splitByPredicate<T1, T2, S>(values: any[], predicate: (value: S) => boolean): [T1[], T2[]]`

##### Flat
- `flatten(values: any[], depth: number = Infinity)`

##### Compare
- `isEqual<T>(...arrays: T[][]): boolean`

##### Map
- `map<S, T>(values: S[], fn: (v: S) => T)`
- `flatMap<S, T>(values: any[], fn: ((v: S | S[]) => T | any) | ((v: S) => T), depth: number = Infinity)`

##### Replace
- `replace<T>(original: T, newValue: Partial<T>)`
- `replaceWithPredicate<T>(original: T, newValue: Partial<T>, predicate: (value: T) => boolean)`
- `replaceAll<T>(originalValues: T[], newValue: Partial<T>)`
- `replaceAllWithPredicate<T>(originalValues: T[], newValue: Partial<T>, predicate: (value: T) => boolean)`

##### Count
- `count(values: any[], depth: number = Infinity)`
- `isEmpty(values: any[])`
- `unique<T>(values: any[], depth = 0)`

##### Sort
- `sort<T>(values: any[], sorter: Sorter<T>, depth = 0)`

##### Remove
- `remove<T>(values: any[], value: T)`
- `flatRemove<T>(values: any[], value: T)`

## Supported decorators (experimental)
To enable the experimental decorators, set `experimentalDecorators` in your tsconfig to true.

##### Count
By default, the count decorator flattens the whole array. However, you can specify an optional depth.

```
class HostDecorator {

    @Count()
    allValues: unknown[];

    @Count(1)
    valuesWithDepthOne: unknown[];

    constructor(...values: unknown[]) {
        this.allValues = values;
        this.valuesWithDepthOne = values;
    }
}

const host = new HostDecorator('aap', 'noot', ['mies', ['wim', ['zus']]]);
console.log(host.allValues); // 5
console.log(host.valuesWithDepthOne); // 4
```

## Run tests
- Checkout locally
- Run `npm install`
- Run `npm run test`

### Changelog
Just check CHANGELOG.md to see the latest technical changes.
