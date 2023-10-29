class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const myRect = new Rectangle(10, 20);
console.log(myRect.getArea());
class Employee {
    constructor(empcode, name) {
        this.empCode = empcode;
        this.name = name;
    }
    display() {
        console.log("Name = " + this.name + ", Employee Code = " + this.empCode);
    }
    display1() {
        console.log("Name = " + this.name + ", Employee Code = " + this.empCode);
    }
}
let per = new Employee(100, "Bill");
per.display(); // Name = Bill, Employee Code = 100
let emp = new Employee(100, "Bill");
//emp.display(); //Compiler Error: Property 'display' does not exist on type 'IEmployee'
