function printResult(first, second) {
  let firtSymbolAsNumbur = first.charCodeAt(0);
  let secondSymbolAsNumbur = second.charCodeAt(0);
  let smaller = Math.min(firtSymbolAsNumbur, secondSymbolAsNumbur);
  let bigger = Math.max(firtSymbolAsNumbur, secondSymbolAsNumbur);
  let result = [];
  for (let i = smaller + 1; i < bigger; i++) {
    let current = String.fromCharCode(i);
    result.push(current);
  }
  console.log(result.join(" "));
}
printResult("a", "d");
