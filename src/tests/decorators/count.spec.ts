import { Count } from "../../decorators/count";

class HostDecorator {

    @Count() allValues: unknown[];

    @Count(1) valuesWithDepthOne: unknown[];

    constructor(...values: unknown[]) {
        this.allValues = values;
        this.valuesWithDepthOne = values;
    }
}

test('It should count the values with the decorator', () => {
    const host = new HostDecorator('aap', 'noot', 'mies', 'wim');
    expect(host.allValues).toBe(4);
    expect(host.valuesWithDepthOne).toBe(4);
});

test('It should work for nested arrays as well', () => {
    const host = new HostDecorator('aap', 'noot', ['mies', ['wim', ['zus']]]);
    expect(host.allValues).toBe(5);
    expect(host.valuesWithDepthOne).toBe(4);
});
