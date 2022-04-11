function solve(lostFights, helmetPrice, swordsPrice, shieldPrice, armorPrice) {
  let price = 0;
  for (let currendFight = 1; currendFight <= lostFights; currendFight++) {
    if (currendFight % 2 === 0) {
      price += helmetPrice;
    }
    if (currendFight % 3 === 0) {
      price += swordsPrice;
    }
    if (currendFight % 6 === 0) {
      price += shieldPrice;
    }
    if (currendFight % 12 === 0) {
      price += armorPrice;
    }
  }
  console.log(`Gladiator expenses: ${price.toFixed(2)} aureus`);
}
solve(7, 2, 3, 4, 5);
