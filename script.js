// const foo = { name: "tony", age: 30, nervous: false };
// const bar = { name: "dick", age: 31, nervous: false };
// const baz = { name: "harry", age: 32, nervous: true };
// const moo = { name: "monkey", age: 30, nervous: false };
// const boo = { name: "dunky", age: 31, nervous: false };
// const too = { name: "punky", age: 32, nervous: true };

// const PromptSync = require("prompt-sync");

// console.log("%c My Friends", "color: orange;font-weight: bold");
// console.table([foo, bar, baz, moo, boo, too]);

// //practice
// let userAge = prompt("What is your age?");

// if (userAge >=14 && userAge <=90) {
//   alert("Your ticket will be $1,000,000.");
// }
// else{
//   alert("Come back next year.")
// }

// //practice
// let userAge = prompt("What is your age?");

// if (!(userAge >=14 && userAge <=90)) {
//   alert("You are not greater than 14 and less than 90.");
// }
// else{alert("You're 14 to 90 years old. Yikes.");}

// //entering password
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

// //learning switch

// let veggies = "okra";

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

// //functions()
// const myText = "I am a string";
// const newString = myText.replace("string", "sausage");
// console.log(newString);

// // the replace() string function takes a source string,
// // and a target string and replaces the source string,
// // with the target string, and returns the newly formed string

// //
// const myArray = ["I", "love", "chocolate", "frogs"];
// myArray[0] = "We";
// console.log(myArray);
// const madeAString = myArray.join(" ");
// console.log(madeAString);

// // the join() function takes an array, joins
// // all the array items together into a single
// // string, and returns this new string

// //using map function
// const myList = [5, 10, 15, 20, 25];
// const newList = myList.map((myArray) => myArray * 2);
// console.log(newList);

// //
// practising functions
// const animal = window.prompt("What is your favorite animal?");

// //
// function favAnimal(animal) {
//   return animal + " is my favorite animal.";
// }

// console.log(favAnimal(animal));

// //
// practising functions
// let xy = function sumNum(a, ...b) {
//   return 2 * (Number(a) + Number(b));
// };

// console.log(xy(3, 4));

// //
// let xy = function sumNum(a, ...b) {
//   return (+a + +b);
// };
// console.log(xy(4, 2));

// //
// const myNums = [1, 3];
// myNums.reduce(calcNumbers);
// function calcNumbers = (a, b) => a + b;

// //
// const calcFloat = (a, b) => a * b;
// console.log(calcFloat(8, 3));

// //
// for (let i = 5; i < 20; i++){
//     console.log(i)
// }

// //
// let i = 0;

// do {
//   i += 1;
//   console.log(i);
// } while (i < 5);

// //
// function playing() {
//   const prompt = require("prompt-sync")();

//   const playerPrompt = prompt("Choose rock, paper, scissors. ");

//   const toLowerString = playerPrompt.toLowerCase(); //prep user response to match userPick condition inside playGame
//   const userPick =
//     toLowerString.charAt(0).toUpperCase() + toLowerString.slice(1);

//   console.log(userPick);
// }

// //
// function game() {
//   for (let i = 5; i >= 0; i--) {
//     console.log(`You have ${i} more games.`);
//     if (i === 0) {
//       console.log("Game Over");
//     } else {
//       playing();
//     }
//   }
// }
// game();

// //
// const numList = [];

// const calcNums = (a, b) => {
//   if (a < b) {
//     for (let i = a; i <= b; i++) {
//       numList.push(i);
//     }
//   } else {
//     for (let i = a; i >= b; i--) {
//       numList.push(i);
//     }
//   }
//   return numList;
// };
// console.log(calcNums(10, 1));

// //
// const expenses = [30, 50, 30];

// const sumAll = expenses.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);

// console.log(sumAll);

// //
// const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

// for (let i = 0; i<cats.length; i++) {
//   console.log(cats[i]);
// }

// function toUpper(string) {
//   return string.toUpperCase();
// }

// const cats = ["Pete", "Biggles", "Jasmine"];

// const bigCats = cats.map(toUpperCase);

// console.log(bigCats);

// //
// let names, admin;
// names = "John";
// admin = names;
// console.log(admin)

// function weatherCheck(weather){
//     return weather + " and so nice today!";
// }
// console.log(weatherCheck("snowy"));

// //
// const fruit = ["apples", "oranges", "grapes"];

// function applesAndOranges() {
//   for (let i = 0; i < fruit.length; i++) {
//     if (fruit[i] === "🍎") {
//       appleShelf.textContent += "🍎";
//     } else if (fruit[i] === "🍊") {
//       orangeShelf.textContent += "🍊";
//     }
//   }
// }

// //
// function appOrg() {
//     fruit.forEach(function(fruitItem) {
//         console.log(fruitItem);
//     })
// }
// appOrg()

// //
// const dreamHoliday = {
//   destination: "Cupertino, CA",
//   activity: "Jobs Theater at Apple Park",
//   accommodation: "plush hotel",
//   companion: "my lovely wife",
// };

// const {
//   destination,
//   activity,
//   accommodation,
//   companion,
// } = dreamHoliday`My dream weekend vacation would be traveling to ${destination} to visit ${activity}. Afterwards, I'd stay at a ${accommodation} with ${companion} and order room service.`;

// //Convert these Miles to KM!
// const distanceWalkedMilesArr = [140, 153, 161, 153, 128, 148];

// const conversionFactorMilesToKm = 1.6;

// function convertMilesToKilometers() {
//   const distanceWalkedKilometer = distanceWalkedMilesArr.map(function (
//     distanceMiles
//   ) {
//     return distanceWalkedKilometer * conversionFactorMilesToKm;
//   });
// }

// convertMilesToKilometers();

// //innerHTML alternative
// const filmInput = document.getElementById('film-input')
// const addBtn = document.getElementById('add-btn')
// const filmList = document.getElementById('film-list')

// addBtn.addEventListener('click', function() {
//     const newFilm = document.createElement('div')
//     newFilm.classList.add('film-item')
//     newFilm.textContent = filmInput.value
//     filmList.appendChild(newFilm)
//     filmInput.value = ''
// })

// const limes = ["small", "small", "large", "medium", "small"];

// export function limesToCut(wedgesNeeded, limes) {
//   let wedges = 0;
//   let count = 0;

//   const limeWedges = {
//     small: 6,
//     medium: 8,
//     large: 10,
//   };

//   for (const lime of limes) {
//     if (wedges >= wedgesNeeded) break;
//     wedges += limeWedges[lime];
//     count++;
//   }

//   return count;
// }
// console.log(limesToCut(70,limes));

// function limesToCut(wedgesNeeded, limes) {
//   let limeCount = 0;
//   let wedgeCount = 0;
//   while (wedgeCount <= wedgesNeeded) {
//     switch (limes) {
//       case "small":
//         limeCount++;
//         wedgeCount += 6;
//         break;
//       case "medium":
//         limeCount++;
//         wedgeCount += 8;
//         break;
//       case "large":
//         limeCount++;
//         wedgeCount += 10;
//         break;
//     }

//   }

// }

// // create new array of objects, use name and surname to create fullname, include id.
// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [john, pete, mary];

// let usersMapped = users.map((user) => {
//   return {
//     fullName: `${user.name} ${user.surname}, ${user.id}`,
//     id: `${user.id}`,
//   };
// });
// //take 'users' and map a new array

// console.log( usersMapped[2].id ) // 1
// console.log(usersMapped[2].fullName); // John Smith

// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */

// function sortByAge(arr) {
//   return arr.sort((b, a) => b.age - a.age);
// }

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [pete, john, mary];

// sortByAge(arr);

// // now: [john, mary, pete]
// console.log(arr[0].name); // John
// console.log(arr[1].name); // Mary
// console.log(arr[2].name); // Pete

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// function getAverageAge(arr){
//   return arr.reduce((acc, ages)=>acc + ages.age, 0)/arr.length
// }

// console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

// let users = [
//   { id: "john", name: "John Smith", age: 20 },
//   { id: "ann", name: "Ann Smith", age: 24 },
//   { id: "pete", name: "Pete Peterson", age: 31 },
// ];

// const groupById = (array) =>
//   array.reduce((obj, value) => ({ ...obj, [value.id]: value }), {});

// let usersById = groupById(users);

// console.log(usersById);


/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
