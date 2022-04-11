function print(collection, number) {
    let elementToCut = number[0];
    let elementToDel = number[1];
    let elementToFind = number[2];
    let modifiedArr = collection.slice(0, elementToCut);
    modifiedArr.splice(0, elementToDel);
    let counter = 0;
    let modifiedArrL = modifiedArr.length;
    for (let i = 0; i < modifiedArrL; i++) {
        if (elementToFind === modifiedArr[i]) {
            counter++;
        }
    }
    console.log(`Number ${elementToFind} occurs ${counter} times.`);
}
print([5, 2, 3, 4, 1, 6],
    [5, 2, 3])