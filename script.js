// const foo = { name: "tom", age: 30, nervous: false };
// const bar = { name: "dick", age: 31, nervous: false };
// const baz = { name: "harry", age: 32, nervous: true };

// console.log("%c My Friends", "color: orange;font-weight: bold");
// console.table([foo, bar, baz])

// practice
// let userAge = prompt("What is your age?");

// if (userAge >=14 && userAge <=90) {
//   alert("Your ticket will be $1,000,000.");
// }
// else{
//   alert("Come back next year.")
// }

// practice
// let userAge = prompt("What is your age?");

// if (!(userAge >=14 && userAge <=90)) {
//   alert("You are not greater than 14 and less than 90.");
// }
// else{alert("You're 14 to 90 years old. Yikes.");}

// entering password
// let pwd = prompt("Who are you?");

// if (pwd === "Admin") {
//   let admin_pwd = prompt("Enter password now.");
//   if (admin_pwd !== "Master" || admin_pwd === "" || admin_pwd === null) {
//     alert("Invalid password.");
//   } else {
//     alert("Welcome");
//   }
// } else if (pwd === "" || pwd === null || pwd !== "Admin") {
//   alert("Invalid password");
// } else {
//   alert("Cancel");
// }

//learning switch

// let veggies = "tomatoes";

// switch (veggies) {
//   case "tomatoes":
//   case "brussels sprouts":
//   case "carrots":
//   case "swiss chard":
//     console.log("One of my favorite vegetables.");
//     break;
//   case "okra":
//   case "turnips":
//   default:
//     console.log("A least favorite veggie.");
// }

//learning functions()
// const myText = "I am a string";
// const newString = myText.replace("string", "sausage");
// console.log(newString);
// the replace() string function takes a source string,
// and a target string and replaces the source string,
// with the target string, and returns the newly formed string

const myArray = ["I", "love", "chocolate", "frogs"];
myArray[0] = "We";
console.log(myArray);
const madeAString = myArray.join(" ");
console.log(madeAString);

// the join() function takes an array, joins
// all the array items together into a single
// string, and returns this new string
