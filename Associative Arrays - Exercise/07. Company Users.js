function solve(input) {
    let listOfCompanies = {};

    for (let item of input) {
        let [company, number] = item.split(' -> ');

        if (!listOfCompanies.hasOwnProperty(company)) {
            listOfCompanies[company] = [];
        }
        if (!listOfCompanies[company].includes(number)) {
            listOfCompanies[company].push(number);
        }
    }
    let keys = Object.keys(listOfCompanies);
    keys.sort((a, b) => a.localeCompare(b));

    for (let company of keys) {
        console.log(company);
        for (let id of listOfCompanies[company]) {
            console.log(`-- ${id}`);
        }
    }
}
solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
])