function electronsAroundTheCores(dice) {
    let total = 0;
    for (const value of dice) {
        if (value === 3) total += 2;
        if (value === 5) total += 4;
    }
    return total;
}

module.exports = { electronsAroundTheCores };