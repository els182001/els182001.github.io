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

//Problem 3

let anna = {
    firstName: 'Anna',
    department: 'Tech',
    designation: 'Executive',
    salary: 25600,
    raiseEligible: false
}


employees.push(anna);
console.log('P3', techStars);

//Problem 4

let totalSalary=0;

for(let i = 0; i<employees.length; i++){
    totalSalary += employees[i].salary;
}

console.log('P4', totalSalary)

//Problem 5

function giveRaises(){
    for(let i = 0; i < employees.length; i++){
        if(employees[i].raiseEligible){
            employees[i].salary*0.1;
            employees[i].raiseEligible=false;
        }
    }
}

giveRaises()
console.log('P5', techStars);

//Problem 6

let wfhEmployees = ['Anna','Same'];

for(let i = 0; i<employees.length; i++){
    if(wfhEmployees.includes(employees[i].firstName)){
        employees[i].wfh=true;

    }else{
        employees[i].wfh=false;
    }
}

console.log('P6',techStars);