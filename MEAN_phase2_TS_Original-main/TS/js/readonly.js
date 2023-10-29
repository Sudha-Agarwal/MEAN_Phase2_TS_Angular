const array = [1, 2, 3];
//array.push(4); // Error: Property 'push' does not exist on type 'readonly number[]'
class Person {
    constructor(name) {
        // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const person = new Person("Jane");
console.log(person.getName());
export {};
