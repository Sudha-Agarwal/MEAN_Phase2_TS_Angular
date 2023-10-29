import 'reflect-metadata';

// Define a decorator that accepts metadata as an object
function classWithMetadata(metadata: Record<string, any>) {
    return function (target: Function) {
      // Add metadata to the class
      Reflect.defineMetadata('classMetadata', metadata, target);
    };
  }
  
  // Apply the decorator with metadata to a class
  @classWithMetadata({ version: '1.0', author: 'John Doe' })
  class MyClass {
    // Class implementation
  }
  
  // Access the metadata
  const classMetadata = Reflect.getMetadata('classMetadata', MyClass);
  
  console.log(`Class Version: ${classMetadata.version}`);
  console.log(`Author: ${classMetadata.author}`);
  