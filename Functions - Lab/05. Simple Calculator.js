function solve(num1, num2, operator) {
  let result = 0;
  switch (operator) {
    case "multiply":
      result = num1 * num2;
      console.log(result);
      break;
    case "divide":
      result = num1 / num2;
      console.log(result);
      break;
    case "add":
      result = num1 + num2;
      console.log(result);
      break;
    case "subtract":
      result = num1 - num2;
      console.log(result);
      break;
  }
}
solve(5, 5, "multiply");
