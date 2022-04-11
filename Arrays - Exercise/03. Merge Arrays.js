function solve(firstArr, secondArr) {
  let firstArray = firstArr;
  let secondArray = secondArr;
  let firstL = firstArray.length;
  let secondL = secondArray.length;
  let resultArray = [];
  for (let i = 0; i < firstL; i++) {
    let resultArrayElement;
    if (i % 2 === 0) {
      resultArrayElement = Number(firstArray[i]) + Number(secondArray[i]);
    } else {
      resultArrayElement = firstArray[i] + secondArray[i];
    }
    resultArray.push(resultArrayElement);
  }
  console.log(resultArray.join(" - "));
}
solve(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
