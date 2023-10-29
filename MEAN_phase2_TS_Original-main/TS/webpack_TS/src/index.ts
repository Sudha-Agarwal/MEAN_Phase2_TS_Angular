import {sayHello} from './greet';
class Greeter {
    private name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    greet() {
      console.log(`Hello, ${this.name}!`);
    }
  }
  
  const greeter = new Greeter('World');
  greeter.greet();

  console.log(sayHello('John'));
  