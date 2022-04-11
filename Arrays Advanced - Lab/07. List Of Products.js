function print(arr) {
    let sortedArr = arr.sort((a, b) => {
        return a.localeCompare(b);
    });
    let arrL = sortedArr.length;
    for (let i = 0; i < arrL; i++) {
        console.log(`${i + 1}.${sortedArr[i]}`);
    }
}
print(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])