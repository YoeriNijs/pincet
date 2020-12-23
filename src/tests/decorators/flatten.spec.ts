import {Flatten} from "../../decorators/flatten";

class HostWithInfiniteFlattening<T> {
    @Flatten<T>() values: T[];

    constructor(...values: any[]) {
        this.values = values;
    }
}

// tslint:disable-next-line:max-classes-per-file
class HostWithFlattenDepthOne<T> {
    @Flatten<T>(1) values: unknown[];

    constructor(...values: any[]) {
        this.values = values;
    }
}

// tslint:disable-next-line:max-classes-per-file
class HostWithFlattenDepthTwo<T> {
    @Flatten<T[]>(2) values: T[];

    constructor(...values: any[]) {
        this.values = values;
    }
}

test('it should flatten multidimensional arrays', () => {
    const host = new HostWithInfiniteFlattening<string>(['aap', ['noot', ['mies']]]);
    expect(host.values).toEqual(['aap', 'noot', 'mies']);
});

test('it should return the same array if it is already flat', () => {
    const host = new HostWithInfiniteFlattening<string>(['aap', 'noot', 'mies']);
    expect(host.values).toEqual(['aap', 'noot', 'mies']);
});

test('it should flatten the whole multidimensional array if depth is one', () => {
    const host = new HostWithFlattenDepthOne<string>(['aap', ['noot', ['mies']]]);
    expect(host.values).toEqual(['aap', ['noot', ['mies']]]);
});

test('it should not flatten the whole multidimensional array if depth is two', () => {
    const host = new HostWithFlattenDepthTwo<string>(['aap', ['noot', ['mies']]]);
    expect(host.values).toEqual(['aap', 'noot', ['mies']]);
});
