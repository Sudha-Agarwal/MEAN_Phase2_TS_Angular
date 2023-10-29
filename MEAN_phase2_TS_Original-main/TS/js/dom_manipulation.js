const button = document.querySelector("#myButton");
button.addEventListener("click", () => {
    alert("button clicked");
});
const person = { name: "John", age: 30 };
const element = document.createElement("div");
element.textContent = `Name: ${person.name}, Age: ${person.age}`;
document.body.appendChild(element);
export {};
