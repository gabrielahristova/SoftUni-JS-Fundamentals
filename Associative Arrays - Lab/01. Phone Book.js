function solve(input) {
    let assocArray = {}

    for (let entry of input) {
        entry = entry.split(' ');
        assocArray[entry[0]] = entry[1];
    }

    for (let assocKey in assocArray) {
        console.log(`${assocKey} -> ${assocArray[assocKey]}`)
    }
}
solve(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
])