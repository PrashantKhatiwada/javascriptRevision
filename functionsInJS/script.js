function hello() {
  console.log("Hello, world!");
}
hello();

// Parameters and Arguments

function greet(firstName, lastName) {
  console.log("Hello, " + firstName + " " + lastName);
}

greet("Prashant", "Khatiwada");

//Default Parameters

function sum(x, y = 0) {
  // 0 is the default value of y here
  console.log(x + y);
}

sum(10, 15);
sum(10);

function add(a, b) {
  return a + b;
  console.log(a + " " + b); // this is not executed
}

let result = add(10, 15);
console.log(result);

// Function return

function fn1(c) {
  function fn2(d) {
    return c * d;
  }
  return fn2;
}

let resultt = fn1(10);
console.log(resultt);
console.log(resultt(5));

