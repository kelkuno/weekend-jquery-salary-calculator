$(document).ready(readyNow);

// console.log('javascript works');

function readyNow(){
    //console.log('jquery works!');
    //click events:
    $('#addEmployeeButton').on('click', addEmployee);


};

let employees = [];

function addEmployee(){
    // let el = $('#displayEmployee');
    // el.empty();

    console.log('button');
    //store user input into variables 
    let employeeFirstName = $('#firstNameInput').val();
    let lastName = $('#lastNameInput').val();
    let idNumber = $('#idNumberInput').val();
    let jobTitle = $('#jobTitleInput').val();
    let annualSalary = $('#annualSalaryInput').val();
    
    //check to make sure input fields are not empty
    if(employeeFirstName !=''&& lastName !=''&& idNumber !='' && jobTitle !='' && annualSalary !='') {
        //call createEmployee function w user input
        createEmployee(employeeFirstName, lastName, idNumber, jobTitle, annualSalary);
    } // end of conditional

    //empty input fields
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idNumberInput').val('');
    $('#jobTitleInput').val('');
    $('#annualSalaryInput').val('');
    
    //append data onto DOM
    $('#displayEmployee').append(`
        <tr>
            <td>${employeeFirstName}</td>
            <td>${lastName}</td>
            <td>${idNumber}</td>
            <td>${jobTitle}</td>
            <td>${annualSalary}</td>
            <td> </td>
        </tr>
    `)

    
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
