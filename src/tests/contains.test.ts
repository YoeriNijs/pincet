import { contains } from "../internal/contains";

test('It should return true when the value is in the array', () => {
    const arr = ['do', 're', 'mi'];
    const result = contains<string>(arr, 're');
    expect(result).toBe(true);
});

test('It should return false when the value is not in the array', () => {
    const arr = ['do', 're', 'mi'];
    const result = contains<string>(arr, 'fa');
    expect(result).toBe(false);
});

test('It should return true when the value is in a nested array', () => {
    const arr = ['do', ['re'], 'mi'];
    const result = contains<string>(arr, 're');
    expect(result).toBe(true);
});

test('It should return true when the value is in a deep nested array', () => {
    const arr = ['do', [['re'], 'mi']];
    const result = contains<string>(arr, 're');
    expect(result).toBe(true);
});

test('It should return false when the value is not in a nested array', () => {
    const arr = [['do'], ['re'], ['mi']];
    const result = contains<string>(arr, 'fa');
    expect(result).toBe(false);
});
