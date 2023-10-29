// Class decorator
function MyClassDecorator(constructor: Function) {
    // Add a property to the class prototype
    constructor.prototype.newProperty = 'This is a new property';
  
    // Add a method to the class prototype
    constructor.prototype.newMethod = function () {
      console.log('This is a new method');
    };
  }
  
  // Apply the decorator to the class
  @MyClassDecorator
  class MyClass {
      newMethod() {
          throw new Error("Method not implemented.");
      }
      newProperty: any;
    // Class implementation
  }
  
  // Create an instance of MyClass
  const myInstance = new MyClass();
  
  // Access the added property and call the added method
  console.log(myInstance.newProperty); // Outputs: "This is a new property"
  myInstance.newMethod(); // Outputs: "This is a new method"
  

  function myDecorator(target: any) {
    console.log("Decorating:", target.name);
  }
  
  @myDecorator
  class MyClass1 {
    // Class implementation...
  }
  