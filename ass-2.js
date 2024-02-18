// var input:number = parseInt(prompt('Enter a number'));
// if (input/2 === 0) {
//     alert('Even number');
// }
// else{
//     alert('odd');
// }
var employee = {
    id: 10,
    ename: "john",
    salary: 200000,
};
for (var key in employee) {
    console.log(key);
}
var id = employee.id, ename = employee.ename, salary = employee.salary;
console.log(id, "Employee id");
console.log(ename, "Employee Name");
console.log(salary, "Employee Salary");
