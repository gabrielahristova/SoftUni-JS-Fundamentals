function solve(str, quatity) {
  let result = 0;
  switch (str) {
    case "water":
      result = 1.0 * quatity;
      console.log(result.toFixed(2));
      break;
    case "coffee":
      result = 1.5 * quatity;
      console.log(result.toFixed(2));
      break;
    case "coke":
      result = 1.4 * quatity;
      console.log(result.toFixed(2));
      break;
    case "snacks":
      result = 2.0 * quatity;
      console.log(result.toFixed(2));
      break;
  }
}
solve("water", 5);
