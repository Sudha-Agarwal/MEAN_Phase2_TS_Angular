// app.js
const greet = (name) => {
    console.log(`Hello, ${name}!`);
  };
  
  greet("Alice");

  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    sayHello() {
      console.log(`Hello, my name is ${this.name}, and I am ${this.age} years old.`);
    }
  }
  
  const person = new Person("Alice", 30);
  person.sayHello();
  
  