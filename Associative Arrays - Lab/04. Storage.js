function solve(input) {
    let storage = new Map();
    for (entry of input) {
        entry = entry.split(' ');
        let name = entry[0];
        let quentity = Number(entry[1]);
        if (storage.has(name)) {
            let newQuentity = storage.get(name) + quentity;
            storage.set(name, newQuentity);
        } else {
            storage.set(name, quentity);
        }

    }
    for (storageEntries of storage) {
        console.log(`${storageEntries[0]} -> ${storageEntries[1]}`)
    }
}
solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'
])