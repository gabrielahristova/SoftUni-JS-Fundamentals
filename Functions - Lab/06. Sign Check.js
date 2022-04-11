function solve(num1, num2, num3) {
  let result = "";
  if (num1 >= 0 && num2 >= 0 && num3 >= 0) {
    console.log("Positive");
  } else if (num1 < 0 && num2 < 0 && num3 >= 0) {
    console.log("Positive");
  } else if (num1 >= 0 && num2 < 0 && num3 < 0) {
    console.log("Positive");
  } else if (num1 < 0 && num2 >= 0 && num3 < 0) {
    console.log("Positive");
  } else {
    console.log("Negative");
  }
}
solve(5, 12, -15);
