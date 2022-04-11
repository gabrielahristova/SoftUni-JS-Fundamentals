function solve(input) {
  let arrOfNubers = input;
  let modifyArr = [];
  let firstSum = 0;
  let secondSum = 0;
  let arrLength = arrOfNubers.length;
  for (let i = 0; i < arrLength; i++) {
    let curr = arrOfNubers[i];
    firstSum += curr;
    let newNumber = 0;

    if (curr % 2 === 0) {
      newNumber = curr + i;
    } else {
      newNumber = curr - i;
    }
    modifyArr.push(newNumber);
    secondSum += newNumber;
  }

  console.log(modifyArr);
  console.log(firstSum);
  console.log(secondSum);
}
solve([5, 15, 23, 56, 35]);
