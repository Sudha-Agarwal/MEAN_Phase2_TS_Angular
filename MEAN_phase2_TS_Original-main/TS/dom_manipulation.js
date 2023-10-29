"use strict";
exports.__esModule = true;
var button = document.querySelector("#myButton");
button.addEventListener("click", function () {
    alert("button clicked");
});
var person = { name: "John", age: 30 };
var element = document.createElement("div");
element.textContent = "Name: ".concat(person.name, ", Age: ").concat(person.age);
document.body.appendChild(element);
