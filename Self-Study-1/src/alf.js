function findSpaceship(map) {
    const rows = map.split('\n');
    const height = rows.length;

    for (let rowIndex = 0; rowIndex < height; rowIndex++) {
        const colIndex = rows[rowIndex].indexOf('X');
        if (colIndex !== -1) {
            const x = colIndex;
            const y = height - 1 - rowIndex;
            return [x, y];
        }
    }

    return [0, 0];
}

module.exports = { findSpaceship };