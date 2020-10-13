import { byNumberAsc, byNumberDesc, byStringAsc, byStringDesc, sort } from "../internal/sort";
import {Sorter} from "../model";

it('Should sort strings properly with asc', () => {
    const arr = ['z', 'y', 'x'];
    const result = sort<string>(arr, byStringAsc());
    expect(result).toEqual(['x', 'y', 'z']);
});

it('Should sort strings properly with desc', () => {
    const arr = ['x', 'y', 'z'];
    const result = sort<string>(arr, byStringDesc());
    expect(result).toEqual(['z', 'y', 'x']);
});

it('Should sort strings properly with asc and depth zero', () => {
    const arr = ['z', ['y', 'x']];
    const result = sort<string>(arr, byStringAsc());
    expect(result).toEqual([['y', 'x'], 'z']);
});

it('Should sort strings properly with asc and depth one', () => {
    const arr = ['z', ['y', 'x']];
    const result = sort<string>(arr, byStringAsc(), 1);
    expect(result).toEqual(['x', 'y', 'z']);
});

it('Should sort strings properly with desc and depth zero', () => {
    const arr = ['x', ['y', 'z']];
    const result = sort<string>(arr, byStringDesc());
    expect(result).toEqual([['y', 'z'], 'x']);
});

it('Should sort strings properly with desc and depth one', () => {
    const arr = ['x', ['y', 'z']];
    const result = sort<string>(arr, byStringDesc(), 1);
    expect(result).toEqual(['z', 'y', 'x']);
});

it('Should sort numbers properly with asc', () => {
    const arr = [2, 1, 0];
    const result = sort<number>(arr, byNumberAsc());
    expect(result).toEqual([0, 1, 2]);
});

it('Should sort numbers properly with desc', () => {
    const arr = [0, 1, 2];
    const result = sort<number>(arr, byNumberDesc());
    expect(result).toEqual([2, 1, 0]);
});

it('Should sort numbers properly with asc and depth', () => {
    const arr = [[2], 1, 0];
    const result = sort<number>(arr, byNumberAsc(), 1);
    expect(result).toEqual([0, 1, 2]);
});

it('Should sort numbers properly with desc and depth', () => {
    const arr = [0, 1, [2]];
    const result = sort<number>(arr, byNumberDesc(), 1);
    expect(result).toEqual([2, 1, 0]);
});

it('Should work with custom sorters', () => {
    const myCustomSorter: Sorter<boolean> = { sort: (a, b) => a === b ? 1 : -1 };
    const arr = [false, false, true, false, true];
    const result = sort<boolean>(arr, myCustomSorter);
    expect(result).toEqual([true, true, false, false, false]);
});

it('Should work with custom sorters as well with depth', () => {
    const myCustomSorter: Sorter<boolean> = { sort: (a, b) => a === b ? 1 : -1 };
    const arr = [false, [false], true, [false, [true]]];
    const result = sort<boolean>(arr, myCustomSorter, 2);
    expect(result).toEqual([true, true, false, false, false]);
});
