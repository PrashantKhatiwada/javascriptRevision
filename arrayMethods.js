let fruits = ["mango", "litchi", "banana", "pomegranate"];
console.log(fruits);
fruits.push("pear"); // we can push multiple items separating with comma
// push and pop methods make changes in our original array
console.log(fruits);
let deleted = fruits.pop(); // returns the deleted value
console.log(deleted);
console.log(fruits);

let arrNum = [1232, 434, 323, 12]
console.log(typeof(arrNum))
console.log(typeof(arrNum[0]))
retValue = arrNum.toString() // returns a signle string
console.log(retValue);
console.log(typeof(retValue));


// concat

let letters = ["a", "b", "c", "d", "e"];
let numbers = ["1", "2", "3", "4", "5"];

let letNum = letters.concat(numbers); // returns a new array and no change to original one
console.log(letNum);

letters.unshift("z"); // adds to the start of original array
console.log(letters);
letters.shift(); // removes from the start of original array
console.log(letters);

//slice array

ret = letters.slice(2,4);  // returns a new array and no change to original one
console.log(ret);

// splice array

letters.splice(1,2,"f"); // makes changes to original array
console.log(letters);


/* Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"
 a. remove the first company from the array
 b. remove uber and add Ola in its place
 c. Add Amzazon at the end
 */

// a
//  let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
//  companies.shift();
// companies.splice(0,1);
// console.log(companies);

//b
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies.splice(2,1,"Ola");
console.log(companies);
companies.push("Amazon");
console.log(companies);

