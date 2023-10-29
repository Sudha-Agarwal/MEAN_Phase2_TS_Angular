class Greeter {
    greeting: string;
  
    constructor(message: string) {
      this.greeting = message;
    }
  
    greet() {
      console.log(`Hello, ${this.greeting}!`);
    }
  }
  
  const greeter = new Greeter("World");
  greeter.greet();
  