function deprecatedMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    if (descriptor && typeof descriptor.value === 'function') {
      const originalMethod = descriptor.value;
  
      descriptor.value = function (...args: any[]) {
        console.log(`${propertyKey} is deprecated and will be removed in a future version.`);
        return originalMethod.apply(this, args);
      };
    }
  }
  
  class Rocket {
    @deprecatedMethod
    isReadyForLaunch(): boolean {
      return true;
    }
  }
  
  const rocket = new Rocket();
  console.log(`Is the rocket ready for launch? ${rocket.isReadyForLaunch()}`);
  