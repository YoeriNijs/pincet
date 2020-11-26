import { NotEmpty } from "../../decorators/not-empty";

class HostDecorator {

    @NotEmpty()
    values: unknown[];

    constructor(...values: unknown[]) {
        this.values = values;
    }
}

test('It should return false when there is no value', () => {
    const host = new HostDecorator();
    expect(host.values).toBe(false);
});

test('It should return false when there is an empty array', () => {
    const host = new HostDecorator([]);
    expect(host.values).toBe(false);
});

test('It should return true when there is one value', () => {
    const host = new HostDecorator('one value');
    expect(host.values).toBe(true);
});

test('It should return true when there is are multiple value', () => {
    const host = new HostDecorator('one value', 'another value');
    expect(host.values).toBe(true);
});
