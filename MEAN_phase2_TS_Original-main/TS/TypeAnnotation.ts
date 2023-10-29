let counter: number;

let name1: string = 'John';
let age: number = 25;
let active: boolean = true;

//arrays
let names: string[] = ['John', 'Jane', 'Peter', 'David', 'Mary'];


//objects
let person: {
    name: string;
    age: number
 };
 
 person = {
    name: 'John',
    age: 25
 }; // valid

 //function types
 let greeting : (name: string) => string;

 greeting = function (name: string) {
    return `Hi ${name}`;
};

//union type

let result: number | string;
result = 10; // OK
result = 'Hi'; // also OK
//result = false; // a boolean value, not OK


function add(a: number | string, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}


//Type aliases
type chars = string;
let messsage: chars; // same as string type

type alphanumeric = string | number;
let input: alphanumeric;
input = 100; // valid
input = 'Hi'; // valid
//input = false; // Compiler error

//Type aliases using the intersection (&) operator in 
//TypeScript allow you to create new types by combining 
//multiple existing types. 

// Define two simple types
type Person = {
    name: string;
    age: number;
  };
  
  type Address = {
    street: string;
    city: string;
  };
  
  // Create a type alias that combines Person and Address using intersection
  type PersonWithAddress = Person & Address;
  
  // Create an object of the combined type
  const personWithAddress: PersonWithAddress = {
    name: "Alice",
    age: 30,
    street: "123 Main St",
    city: "New York",
  };
  
  // Access properties from both Person and Address
  console.log(personWithAddress.name);    // "Alice"
  console.log(personWithAddress.age);     // 30
  console.log(personWithAddress.street);  // "123 Main St"
  console.log(personWithAddress.city);    // "New York"
  

export {};

