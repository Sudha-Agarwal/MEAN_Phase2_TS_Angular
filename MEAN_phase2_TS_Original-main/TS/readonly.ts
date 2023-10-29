const array: readonly number[] = [1, 2, 3];
//array.push(4); // Error: Property 'push' does not exist on type 'readonly number[]'


class Person {
    private readonly name: string;
  
    public constructor(name: string) {
      // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
      this.name = name;
    }
  
    public getName(): string {
      return this.name;
    }
  }
        
  const person = new Person("Jane");
  
  console.log(person.getName());

  export {};