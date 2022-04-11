function extractSpice(yield) {
  let spice = 0;
  let days = 0;

  for (let i = yield; i >= 100; i -= 10) {
    days++;
    spice += i - 26;
    if (spice < 0) {
      spice = 0;
    }
  }

  spice -= 26;
  if (spice < 0) {
    spice = 0;
  }

  console.log(days);
  console.log(spice);
}
solve(111);
