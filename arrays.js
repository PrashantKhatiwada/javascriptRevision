// let marks = [34, 23, 76, 43];
// console.log(marks.length); // property

// console.log(marks[1]);
// console.log(marks[5]); // undefined

str = "hello";
console.log(typeof str);

// looping over an array

//priting the elements in an array

// for loop
// for (let i = 0; i < marks.length; i++){
//     console.log(marks[i]);
// }

// for of loop

// for(let el of marks){
//     console.log(el);
// }

// for given array with marks of students [85, 97, 44, 37, 76, 60] find the average marks of the entire class.

let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let i = 0; i < marks.length; i++) {
  sum = sum + marks[i];
}
let avg = sum / marks.length;
console.log("The sum of marks in the array is: " + sum);
console.log("The average of marks in the array is: " + avg);
// for  agievn array with prices of 5 items [250, 645, 300, 900, 50] All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

let prices = [250, 645, 300, 900, 50];
console.log(prices);
for (let idx = 0; idx < prices.length; idx++) {
  prices[idx] = prices[idx] - prices[idx] * 0.1;
}
console.log(prices);
