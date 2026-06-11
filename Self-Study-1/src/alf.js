function findSpaceship(map) {
    // Karte in einzelne Zeilen aufteilen
    const rows = map.split('\n');
    const height = rows.length;

    // jede Zeile von oben nach unten durchgehen
    for (let rowIndex = 0; rowIndex < height; rowIndex++) {
        // nach 'X' in der aktuellen Zeile suchen
        const colIndex = rows[rowIndex].indexOf('X');
        if (colIndex !== -1) {
            // Spaltenindex = x-Koordinate
            const x = colIndex;
            // y-Koordinate von unten zaehlen, da [0,0] unten links ist
            const y = height - 1 - rowIndex;
            return [x, y];
        }
    }

    // kein X gefunden
    return 'Spaceship lost forever.';
}

module.exports = { findSpaceship };