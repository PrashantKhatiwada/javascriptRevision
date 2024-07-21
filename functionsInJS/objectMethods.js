// Object Methods in JS

const person = {
  firstName: "John",
  lastName: "Doe",
  greet: function greet() {
    console.log("Hello world");
    console.log("Hello " + this.firstName + " " + this.lastName);
  },
};

function sayHello() {
  console.log("Say Hello");
}

person.sayHello = sayHello;

person.sayHello();

person.greet(); // object method
