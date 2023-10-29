//Generic Function
function identity<T>(arg: T): T {
    return arg;
  }
  
  // Usage:
  let result = identity<number>(42); // result has type number
  let strResult = identity<string>("Hello"); // strResult has type string

  let myIdentity: <Type>(arg: Type) => Type = identity;
  console.log(myIdentity(42));

  //Generic Class
  class Box<T> {
    private value: T;
  
    constructor(value: T) {
      this.value = value;
    }
  
    getValue(): T {
      return this.value;
    }
  }
  
  // Usage:
  const numberBox = new Box<number>(42);
  console.log(numberBox.getValue()); // Output: 42
  
  const stringBox = new Box<string>("Hello");
  console.log(stringBox.getValue()); // Output: "Hello"

  //Generic Interface
  interface List<T> {
    add(item: T): void;
    get(index: number): T | undefined;
  }
  
  class ArrayList<T> implements List<T> {
    private items: T[] = [];
  
    add(item: T): void {
      this.items.push(item);
    }
  
    get(index: number): T | undefined {
      return this.items[index];
    }
  }
  
  // Usage:
  const myList: List<number> = new ArrayList<number>();
  myList.add(1);
  myList.add(2);
  console.log(myList.get(0)); // Output: 1
  console.log(myList.get(1)); // Output: 2
  
  