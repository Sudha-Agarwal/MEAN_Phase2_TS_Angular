// Define an interface representing a "Person" with a name property
interface Person {
    name: string;
  }
  
  // Create an object with the same shape as the "Person" interface
  const person1: Person = { name: "Alice" };
  
  // Define another object with the same shape
  const person2 = { name: "Bob" };
  
  // Even though "person2" doesn't explicitly implement the "Person" interface,
  // it's considered compatible because it has the same shape.
  const greet = (person: Person) => {
    console.log(`Hello, ${person.name}!`);
  };
  
  greet(person1); // Outputs: "Hello, Alice!"
  greet(person2); // Outputs: "Hello, Bob!"

  export {}
  