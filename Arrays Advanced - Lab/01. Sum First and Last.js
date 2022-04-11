function sum(arr) {
    let firstEl = Number(arr.shift());
    let lastEl = Number(arr.pop());
    console.log(firstEl + lastEl);
}
sum(['20', '30', '40'])