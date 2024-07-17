// objects in js

const person = {
  firstName: "Prashant",
  lastName: "Khatiwada",
  age: 19,

  //Nested object
  address: {
    street: "Washburn Place",
    city: "Caldwell",
    state: "New Jersey",
    country: "United States",
    zipCode: "07006",
  },
};

person.company = "YCombinator";
console.log(person);
console.log(person.firstName);
console.log(person["firstName"]);
console.log(person.address);
console.log(person.address.street);

console.log("address" in person);
console.log("hello" in person);

for (let key in person) {
  console.log(key + " : " + person[key]);
}

// creating object with new keyword

const animal = new Object();
animal.name = "Tiger";
animal.color = "red";

console.log(animal);

const bird = new Object({
  name: "parrot",
  color: "green",
});

console.log(bird);
