function maxSequenceofEqualElements(arr) {
  let arrL = arr.length;
  let counter = 1;
  let best = 0;
  let tempCounter = 1;
  let tempBest = 0;
  let result = "";

  for (let i = 0; i < arrL; i++) {
    let currentNum = arr[i];
    let nextNum = arr[i + 1];

    if (currentNum === nextNum) {
      tempBest = currentNum;
      tempCounter++;
    } else {
      tempCounter = 1;
    }

    if (tempCounter > counter) {
      counter = tempCounter;
      best = tempBest;
    }
  }
  for (let i = 0; i < counter; i++) {
    result += ` ${best}`;
  }
  console.log(result);
}
