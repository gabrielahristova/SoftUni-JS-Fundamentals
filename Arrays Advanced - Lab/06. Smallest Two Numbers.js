function print(arr) {
    let sortedInAscending = arr.sort((a, b) => {
        return a - b;
    });
    let newArr = sortedInAscending.slice(0, 2);
    console.log(arrAsNumbers);
}
print([30, 15, 50, 5])