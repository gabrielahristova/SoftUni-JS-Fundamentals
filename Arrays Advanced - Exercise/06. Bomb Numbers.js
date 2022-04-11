function print(sequance, bomb) {
    let specialNumber = bomb[0];
    let bombPower = bomb[1];
    while (sequance.includes(specialNumber)) {
        let index = sequance.indexOf(specialNumber);
        let elementsToRemove = bombPower * 2 + 1;
        let starIndex = index - bombPower;
        if (starIndex < 0) {
            elementsToRemove += starIndex;
            starIndex = 0;
        }
        sequance.splice(starIndex, elementsToRemove);
    }
    let finalResult = sequance.reduce((a, b) => {
        return a + b;
    }, 0);
    console.log(finalResult);
}
print([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2])