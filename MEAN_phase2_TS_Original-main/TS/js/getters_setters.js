class Person {
    get age() {
        return this._age;
    }
    set age(theAge) {
        if (theAge <= 0 || theAge >= 200) {
            console.log('The age is invalid');
        }
        this._age = theAge;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(theFirstName) {
        if (!theFirstName) {
            console.log('Invalid first name.');
        }
        this._firstName = theFirstName;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(theLastName) {
        if (!theLastName) {
            throw new Error('Invalid last name.');
        }
        this._lastName = theLastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
let person1 = new Person();
person1.age = -1;
console.log(person1.age);
