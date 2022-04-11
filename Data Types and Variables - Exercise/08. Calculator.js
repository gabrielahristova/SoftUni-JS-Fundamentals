function solve(fNum, oper, sNum) {
  let firstNum = fNum;
  let operator = oper;
  let secondNum = sNum;
  let result = 0;
  switch (operator) {
    case "+":
      result = firstNum + secondNum;
      break;
    case "-":
      result = firstNum - secondNum;
      break;
    case "*":
      result = firstNum * secondNum;
      break;
    case "/":
      result = firstNum / secondNum;
      break;
  }
  console.log(result.toFixed(2));
}
solve(5, "+", 10);
