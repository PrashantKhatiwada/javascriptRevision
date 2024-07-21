// Conditional Statements

// If and else statements

// let age = 20;

// if (age > 21) {
//   console.log("You should learn driving");
// } else if (age == 20) {
//   console.log("Yayy, you completed your teenage");
// } else {
//   console.log("You are not an adult yet");
// }

// Switch Statements

let value = "Saturday";

switch (value) {
  case "Sunday":
    console.log("First day of the week");
    break;
  case "Monday":
    console.log("Second day of the week");
    break;
  case "Tuesday":
    console.log("Third day of the week");
    break;
  case "Wednesday":
    console.log("Fourth day of the week");
    break;
  case "Thursday":
    console.log("Fifth day of the week");
    break;
  case "Friday":
    console.log("Sixth day of the week");
    break
  case "Saturday":
    console.log("Last day of the week");
    break;
  default:
    console.log("Error!")

}

// Ternary Operator

let age = 21;
(age==20) ? console.log("Your age is 20") : console.log("You're not 20");
