// Decorator factory
function myDecoratorFactory(prefix: string) {
    return function (target: Object, propertyKey: string) {
      let value: string;
  
      const getter = function () {
        return `${prefix} ${value}`;
      };
  
      const setter = function (newValue: string) {
        value = newValue;
      };
  
      // Redefine the property with getter and setter
      Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter
      });
    };
  }
  
  // Usage of decorator factory
  class Example {
    @myDecoratorFactory('Hello')
    private _message: string = 'World';
  
    get message(): string {
      return this._message;
    }
  
    set message(value: string) {
      this._message = value;
    }
  }
  
  const exampleInstance = new Example();
  
  console.log(exampleInstance.message); // Outputs: "Hello World"
  
  // Changing the value
  exampleInstance.message = 'Universe';
  
  console.log(exampleInstance.message); // Outputs: "Hello Universe"
  