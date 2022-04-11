function solve(input) {
    let numberAsString = input.toString();
    let sumOfDigits = 0;
    let stringL = numberAsString.length;
    for (let index = 0; index < stringL; index++) {
      let currentNum = Number(numberAsString[index]);
      sumOfDigits += currentNum;
    }
    console.log(sumOfDigits);
  }
  solve(245678);