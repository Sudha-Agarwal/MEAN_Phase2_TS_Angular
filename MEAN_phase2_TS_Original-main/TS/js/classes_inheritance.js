class Person {
    constructor(name) {
        this.name = name;
    }
}
class Employee extends Person {
    constructor(empcode, name) {
        super(name);
        this.empCode = empcode;
    }
    displayName() {
        console.log("Name = " + this.name + ", Employee Code = " + this.empCode);
    }
}
let emp = new Employee(100, "Bill");
emp.displayName(); // Name = Bill, Employee Code = 100
export {};
