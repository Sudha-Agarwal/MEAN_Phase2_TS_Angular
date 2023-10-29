const button = document.querySelector("#myButton") as HTMLButtonElement;

button.addEventListener("click", () => {
  alert("button clicked");
});

interface Person {
    name: string;
    age: number;
  }
  
  const person: Person = { name: "John", age: 30 };
  
  const element = document.createElement("div");
  element.textContent = `Name: ${person.name}, Age: ${person.age}`;
  document.body.appendChild(element);
  
export {};



