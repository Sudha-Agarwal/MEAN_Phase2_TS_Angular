"use strict";
exports.__esModule = true;
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, jobTitle) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        Employee.headcount++;
    }
    Employee.getHeadcount = function () {
        return Employee.headcount;
    };
    Employee.headcount = 0;
    return Employee;
}());
var john = new Employee('John', 'Doe', 'Front-end Developer');
var jane = new Employee('Jane', 'Doe', 'Back-end Developer');
console.log(Employee.getHeadcount); // 2
