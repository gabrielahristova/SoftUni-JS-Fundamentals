function solve(input) {
    let neighborhoods = new Map();

    let currentNeighborhoods = input.shift().split(', ');

    for (let neighborhood of currentNeighborhoods) {
        neighborhoods.set(neighborhood, []);
    }
    for (let currentPerson of input) {
        currentPerson = currentPerson.split(' - ');
        let personNeighborhood = currentPerson[0];
        let person = currentPerson[1];

        if (neighborhoods.has(personNeighborhood)) {
            neighborhoods.get(personNeighborhood).push(person);
        }
    }
    let sortedNeighborhoods = Array.from(neighborhoods.entries());
    sortedNeighborhoods.sort((a, b) => b[1].length - a[1].length);

    for (let currentEntry of sortedNeighborhoods) {
        let neighborhoodToPrint = currentEntry[0];
        let peopleToPrint = currentEntry[1];
        console.log(`${neighborhoodToPrint}: ${peopleToPrint.length}`);
        for (currentPerson of peopleToPrint) {
            console.log(`--${currentPerson}`);
        }
    }
}
solve(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy'
])