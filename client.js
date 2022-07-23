$(document).ready(readyNow);

// console.log('javascript works');

function readyNow(){
    //console.log('jquery works!');
    //click events:
    $('#addEmployeeButton').on('click', addEmployee);


};

let employees = [];

function addEmployee(){
    console.log('button');
}// end of addEmployee function

function createEmployee(employeeFirstName, lastName, idNumber, jobTitle, annualSalary){
    console.log('in the createEmployee function', employeeFirstName, lastName, idNumber, jobTitle, annualSalary )
    let employee = {
        employeeFirstName: employeeFirstName,
        lastName: lastName,
        idNumber: idNumber,
        jobTitle: jobTitle,
        annualSalary: annualSalary
    }//end of employee object
    employees.push(employee);
}// end of newEmployee Function

createEmployee('Kelsey ', 'Kuno', 78, 'driver', 100);
console.log(employees);
