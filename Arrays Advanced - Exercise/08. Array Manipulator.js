function print(numbers, commands) {
    for (let command of commands) {
        let tokens = command.split(' ');
        let currentCom = tokens[0];

        if (currentCom === 'add') {
            let index = Number(tokens[1]);
            let element = Number(tokens[2]);
            numbers.splice(index, 0, element);
        } else if (currentCom === 'addMany') {
            let index = Number(tokens[1]);
            tokens.splice(0, 2);
            let numbersToAdd = tokens.map(Number);
            numbers.splice(index, 0, ...numbersToAdd);
        } else if (currentCom === 'contains') {
            let result = numbers.indexOf(+tokens[1]);
            console.log(result)
        } else if (currentCom === 'remove') {
            let index = Number(tokens[1]);
            numbers.splice(index, 1);
        } else if (currentCom === 'shift') {
            let position = tokens[1];
            for (let i = 0; i < position; i++) {
                let fNum = numbers.shift();
                numbers.push(fNum);
            }
        } else if (currentCom === 'sumPairs') {
            let result = [];
            if (numbers.length % 2 !== 0) {
                numbers.push(0);
            }
            for (let i = 0; i < numbers.length - 1; i+=2) {
                let sum = numbers[i] + numbers[i + 1];
                result.push(sum);
            }
            numbers = result
        } else if (currentCom === 'print') {
            console.log(`[ ${numbers.join(', ')} ]`)
        }
    }
}
print([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']
)