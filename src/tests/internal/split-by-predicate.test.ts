import {splitByPredicate} from "../../internal/split-predicate";

interface Valid {
    valid: true;
}

interface Invalid {
    valid: false;
}

test('Split with valid predicate', () => {
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
    const [valid, invalid]  = splitByPredicate<Valid, Invalid, any>(arr, predicate);
    expect(valid).toHaveLength(2);
    expect(valid[0]).toHaveProperty('id', '1');
    expect(valid[1]).toHaveProperty('id', '3');
    expect(invalid).toHaveLength(1);
    expect(invalid[0]).toHaveProperty('id', '2');
});

test('Should flatten', () => {
    const arr: any[] = [
        {
            id: '1',
            valid: true
        },
        [
            {
                id: '2',
                valid: false
            },
            {
                id: '3',
                valid: true
            }
        ]
    ];

    const predicate = (value: any) => value.valid;
    const [valid, invalid]  = splitByPredicate<Valid, Invalid, any>(arr, predicate);
    expect(valid).toHaveLength(2);
    expect(valid[0]).toHaveProperty('id', '1');
    expect(valid[1]).toHaveProperty('id', '3');
    expect(invalid).toHaveLength(1);
    expect(invalid[0]).toHaveProperty('id', '2');
});

test('Should reverse when predicate is false', () => {
    const arr: any[] = [
        {
            id: '1',
            valid: true
        }
    ];

    const predicate = (_: any) => false;
    const [valid, invalid]  = splitByPredicate<Valid, Invalid, any>(arr, predicate);
    expect(valid).toHaveLength(0);
    expect(invalid).toHaveLength(1);
});
