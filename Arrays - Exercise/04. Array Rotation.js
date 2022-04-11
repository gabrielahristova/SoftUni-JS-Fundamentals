function solve(arr, rotationsCount) {
  let arrayOfElement = arr;
  let rotations = rotationsCount;
  for (let i = 0; i < rotations; i++) {
    let numberToMove = arrayOfElement.shift();
    arrayOfElement.push(numberToMove);
  }
  console.log(arrayOfElement.join(' '));
}
solve([51, 47, 32, 61, 21], 2);
