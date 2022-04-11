function solve(input) {
    let schoolGrades = new Map();
    for (entry of input) {
        entry = entry.split(' ');
        let name = entry.shift();
        let grades = entry.map(Number)

        if (schoolGrades.has(name)) {
            let currentGrades = schoolGrades.get(name);
            for (grade of grades) {
            currentGrades.push(grade);
            }
            schoolGrades.set(name, currentGrades);
        } else {
            schoolGrades.set(name, grades);
        }
    }
    let sortedSchoolGrades = Array.from(schoolGrades.entries())
                                  .sort((a, b) => averageSort(a, b))

    for (let gradesEntry of sortedSchoolGrades) {
        let studentName = gradesEntry[0];
        let studentGrade = gradesEntry[1];
        console.log(`${studentName}: ${studentGrade.join(', ')}`)
    }
    function averageSort(a, b) {
        let sumA = 0;
        let sumB = 0;

        let gradesA = a[1];
        let gradesB = b[1];

        gradesA.forEach(ga => sumA += ga)
        gradesB.forEach(gb => sumB += gb)

        let averageA = sumA / gradesA.length;
        let averageB = sumB / gradesB.length;
        
        return averageA - averageB;
    }
}
solve(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
)