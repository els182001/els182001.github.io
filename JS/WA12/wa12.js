//Problem 1
let sam = {
    firstName: 'Sam',
    department: 'Tech',
    designation: 'Manager',
    salary: 40000,
    raiseEligible: true
};

let mary = {
    firstName: 'Mary',
    department: 'Finance',
    designation: 'Trainee',
    salary: 18500,
    raiseEligible: true
};

let bill = {
    firstName: 'Bill',
    department: 'HR',
    designation: 'Executive',
    salary: 21200,
    raiseEligible: false
};

console.log('P1',sam, mary, bill);
//Problem 2
let employees = [sam,mary,bill]
let techStars = {
    companyName: 'Tech Stars',
    website: 'www.techstars.site',
    employees: employees
}

console.log('P2',techStars);