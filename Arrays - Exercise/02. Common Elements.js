function solve(firstArr, secondArr) {
  let firstArray = firstArr;
  let secondArray = secondArr;
  let firstL = firstArray.length;
  let secondL = secondArray.length;
  for (let i = 0; i < firstL; i++) {
    let firstArrEl = firstArray[i];
    for (let j = 0; j < secondL; j++) {
      let secondArrEl = secondArray[j];
      if (firstArrEl === secondArrEl) {
        console.log(firstArrEl);
      }
    }
  }
}
solve(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);
