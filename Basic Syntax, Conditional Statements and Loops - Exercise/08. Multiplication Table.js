function solve(num) {
  let number = num;
  for (let i = 1; i <= 10; i++) {
    let product = number * i;
    console.log(`${number} X ${i} = ${product}`);
  }
}
solve(5);
