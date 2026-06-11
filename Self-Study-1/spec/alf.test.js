const { findSpaceship } = require('../src/alf');

describe('findSpaceship', () => {
    test('findet X in einer 1x1-Karte und gibt [0, 0] zurueck', () => {
        const map = 'X';
        expect(findSpaceship(map)).toEqual([0, 0]);
    });

    test('findet X in der Beispielkarte und gibt [7, 2] zurueck', () => {
        const map =
            '..........\n' +
            '..........\n' +
            '..........\n' +
            '.......X..\n' +
            '..........\n' +
            '..........';
        expect(findSpaceship(map)).toEqual([7, 2]);
    });
});