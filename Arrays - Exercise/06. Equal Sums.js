function sum(arr) {
  let sum = 0;
  let left = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  for (let i = 0; i < arr.length; i++) {
    if (left * 2 === sum - arr[i]) {
      console.log(i);
      return;
    } else {
      left += arr[i];
    }
  }
  console.log("no");
}
sum([1, 2, 3, 3])
