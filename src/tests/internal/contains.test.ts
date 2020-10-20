import {contains, containsAll} from "../../internal/contains";

describe('#contains', () => {
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

    it('It should return true if one of the expecting values is in the array', () => {
        const arr = ['do', 're', 'mi'];
        const result = contains<string>(arr, 'fa', 'so', 'la', 'ti', 'do');
        expect(result).toBe(true);
    });

    it('It should return true if one of the expecting values is in a nested array', () => {
        const arr = [['do'], 're', 'mi'];
        const result = contains<string>(arr, 'fa', 'so', 'la', 'ti', 'do');
        expect(result).toBe(true);
    });

    it('It should return false if all values are not in the array', () => {
        const arr = ['do', 're', 'mi'];
        const result = contains<string>(arr, 'fa', 'so');
        expect(result).toBe(false);
    });

    it('It should return true if both values are in the array', () => {
        const arr = ['do', 're', 'mi'];
        const result = contains<string>(arr, 'do', 're');
        expect(result).toBe(true);
    });
});

describe('#containsAll', () => {
    it('It should return true if all values are in the array', () => {
       const arr = ['aap', 'noot', 'mies', 'wim'];
       const result = containsAll<string>(arr, 'mies', 'wim');
       expect(result).toBe(true);
    });

    it('It should return true if all values are in nested arrays', () => {
        const arr = ['aap', ['noot', [['mies'], 'wim']]];
        const result = containsAll<string>(arr, 'mies', 'wim');
        expect(result).toBe(true);
    });

    it('It should return false if not all values are in the array', () => {
        const arr = ['aap', 'noot', 'mies'];
        const result = containsAll<string>(arr, 'mies', 'wim');
        expect(result).toBe(false);
    });

    it('It should return false if not all values are in nested arrays', () => {
        const arr = ['aap', [['noot'], 'mies']];
        const result = containsAll<string>(arr, 'mies', 'wim');
        expect(result).toBe(false);
    });
});

