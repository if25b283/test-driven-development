const { electronsAroundTheCores } = require('../src/electrons');

describe('electronsAroundTheCores', () => {
    test('Wuerfel mit Wert 3 ergibt 2', () => {
        expect(electronsAroundTheCores([3])).toBe(2);
    });

    test('Wuerfel mit Wert 5 ergibt 4', () => {
        expect(electronsAroundTheCores([5])).toBe(4);
    });
});