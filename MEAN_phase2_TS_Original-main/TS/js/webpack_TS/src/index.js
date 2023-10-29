class Greeter {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, ${this.name}!`);
    }
}
const greeter = new Greeter('World');
greeter.greet();
