$(document).ready(readyNow);

// console.log('javascript works');

function readyNow(){
    //console.log('jquery works!');
    //click events:
    $('#addEmployeeButton').on('click', addEmployee);
    $('#displayEmployee').on('click', '#deleteBtn', deleteRow);

};

let employees = [];
let deletedSum = 0;

function deleteRow(){
    console.log('delete');
    //testing .text() as a getter
    //"it returns the text content of all matched elements"
    //storing the string of the annualSalary in deletedSal variable
    deletedSum = $(this).siblings('#addedSalary').text();
    //let numberSal = parseInt(deletedSum);
    //console.log(numberSal);
    console.log(deletedSum);
    $(this).closest('#addedRow').remove();

    getSum();
    getMonthly();
    displayMonthly();

    return true;
}

//////////////////////Kelsey Note: deletedRow does not return a number but the you can access deleted variable globally 


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

    //append monthly costs to DOM
    displayMonthly();

    //empty input fields
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idNumberInput').val('');
    $('#jobTitleInput').val('');
    $('#annualSalaryInput').val('');
    
    //append data onto DOM
    $('#displayEmployee').append(`
        <tr id="addedRow">
            <td class="addedContent">${employeeFirstName}</td>
            <td class="addedContent">${lastName}</td>
            <td class="addedContent">${idNumber}</td>
            <td class="addedContent">${jobTitle}</td>
            <td id="addedSalary">${annualSalary}</td>
            <td id="deleteBtn"><button class="addedContent">Delete</button></td>
        </tr>
    `)

    
}// end of addEmployee function

function displayMonthly(){
    //empty DOM
    $('#monthlyBudget').empty();
    let monthly = getMonthly();
    //tested out monthly value
    console.log('in the displayMonthly', monthly);
    //append monthly to DOM w/ two conditions:
    if(monthly <= 20000){
        $('#monthlyBudget').append(`
        <h3 id="budget">${monthly}</h3>
        `); 
    }//end of under budget monthly
    else if(monthly > 20000){
        $('#monthlyBudget').append(`
        <h3 class="overBudget">${monthly}</h3>
        `); 
    } 
}

function getMonthly(){
    let totalSum = getSum();
    const months = 12;
    let monthlyTotal = totalSum / months;

    //TEST try calling display Monthly again
    //displayMonthly(); (caused an infinate loop)

    return monthlyTotal;
} // end of getMonthly function


function getSum(){
    //sum up all the employees in the array w a loop
    let sum = 0 ;
   // let deletedSum = deleteRow();
    for(let i=0; i<employees.length; i++) {
        sum += employees[i].annualSalary;
    }//end of loop
    //subtract deletedSum from Sum
    sum = sum - deletedSum;
    console.log('in get sum function:', sum);
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
