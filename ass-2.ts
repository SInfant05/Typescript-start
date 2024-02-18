// var input:number = parseInt(prompt('Enter a number'));

// if (input/2 === 0) {
//     alert('Even number');
// }
// else{
//     alert('odd');
// }


var employee = {
    id:10,
    ename:"john",
    salary:200000,
};
 for (const key in employee) {
    console.log(key);
    
 }
 var {id, ename, salary} = employee;

 console.log(id,"Employee id"); console.log(ename,"Employee Name"); console.log(salary,"Employee Salary");