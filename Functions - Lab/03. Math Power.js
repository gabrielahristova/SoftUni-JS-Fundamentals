function solve(num, pow) {
  let result = 1;
  for (let i = 1; i <= pow; i++) {
    result = result * num;
  }
  return result;
}
solve(2, 8);
