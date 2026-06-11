const { electronsAroundTheCores } = require('../src/electrons');

describe('electronsAroundTheCores', () => {
    test('Wuerfel mit Wert 3 ergibt 2', () => {
        expect(electronsAroundTheCores([3])).toBe(2);
    });

    test('Wuerfel mit Wert 5 ergibt 4', () => {
        expect(electronsAroundTheCores([5])).toBe(4);
    });

    test('Wuerfel ohne Elektronen ergibt 0', () => {
        expect(electronsAroundTheCores([1])).toBe(0);
        expect(electronsAroundTheCores([2])).toBe(0);
        expect(electronsAroundTheCores([4])).toBe(0);
        expect(electronsAroundTheCores([6])).toBe(0);
    });

    test('mehrere Wuerfel werden korrekt summiert', () => {
        expect(electronsAroundTheCores([1, 2, 3, 4, 5])).toBe(6);
        expect(electronsAroundTheCores([2, 2, 3, 3])).toBe(4);
        expect(electronsAroundTheCores([6, 6, 4, 4, 1, 3])).toBe(2);
        expect(electronsAroundTheCores([3, 5, 3, 5, 4, 2])).toBe(12);
    });
});