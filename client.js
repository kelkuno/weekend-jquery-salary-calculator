$(document).ready(readyNow);

// console.log('javascript works');

function readyNow(){
    //console.log('jquery works!');
    //click events:
    $('#addEmployeeButton').on('click', addEmployee);
    $('#displayEmployee').on('click', deleteRow);

};

let employees = [];

function deleteRow(){
    console.log('delete');
}

function addEmployee(){
    // let el = $('#displayEmployee');
    // el.empty();

    console.log('button');
    //store user input into variables 
    let employeeFirstName = $('#firstNameInput').val();
    let lastName = $('#lastNameInput').val();
    let idNumber = $('#idNumberInput').val();
    let jobTitle = $('#jobTitleInput').val();
    let annualSalary = parseInt($('#annualSalaryInput').val());
    
    //check to make sure input fields are not empty
    if(employeeFirstName !=''&& lastName !=''&& idNumber !='' && jobTitle !='' && annualSalary !='') {
        //call createEmployee function w user input
        createEmployee(employeeFirstName, lastName, idNumber, jobTitle, annualSalary);
    } // end of conditional

    //get sum of array
    getSum();
    //test getSum function
    console.log(getSum());

    //use Sum to calculate monthly totals
    getMonthly();
    //test getMonthly();
    console.log(getMonthly());

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
            <td><button id="deleteBtn">Delete</button></td>
        </tr>
    `)

    
}// end of addEmployee function

function getMonthly(){
    let totalSum = getSum();
    const months = 12;
    let monthlyTotal = totalSum / months;

    return monthlyTotal;
} // end of getMonthly function


function getSum(){
    //sum up all the employees in the array w a loop
    let sum = 0 ;
    for(let i=0; i<employees.length; i++) {
        sum += employees[i].annualSalary;
    }//end of loop
    return sum;
} // end oof getSum function

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
