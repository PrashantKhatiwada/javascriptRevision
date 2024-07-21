// Callbacks in javaScript

function display(result) {
  console.log(result);
}

function add(num1, num2, callback) {
  let sum = num1 + num2;
  callback(sum);
}

add(10, 20, display);

// Anonymous functions in JavaScript

let sum = function (x, y) {
  return x + y;
};

console.log(sum(10, 30));

(function () {
  console.log("Hello world");
})();

setTimeout(function () {
  console.log("Hello world");
}, 3000);
