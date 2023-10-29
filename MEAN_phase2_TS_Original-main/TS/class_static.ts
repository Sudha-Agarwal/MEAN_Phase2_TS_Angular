class Employee {
    private static headcount: number = 0;

    constructor(
        private firstName: string,
        private lastName: string,
        private jobTitle: string) {

        Employee.headcount++;
    }

    public static getHeadcount() {
        return Employee.headcount;
    }
}
let john = new Employee('John', 'Doe', 'Front-end Developer');
let jane = new Employee('Jane', 'Doe', 'Back-end Developer');


console.log(Employee.getHeadcount); // 2

/*In practice, you will find the library that contains 
many static properties and methods like the Math object. 
It has PI, E, … static properties and abs(), round(), etc., 
static methods*/

export{};