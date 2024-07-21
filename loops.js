// for loop

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let progLangs = ["JavaScript", "C", "Python"];

// for (let i=0; i < progLangs.length; i++) {

// console.log(progLangs[i]);

// }

// Print the followting pattern
/*
 *
 **
 ***
 ****
 *****
 */

let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  // printing spaces
  //   for (let j = 0; j < n - i; j++) {
  //     string += " ";
  //   }
  // printing star
  for (let k = 0; k < i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

// while loop
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// do while loop

let y = 1;
do {
  console.log(y);
  y++;
} while (y <= 5);

for (let a = 1; a < 5; a++) {
  for (let b = 0; b < a; b++) {
    console.log("*");
  }
  console.log("\n");
}
