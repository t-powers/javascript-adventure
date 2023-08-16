// entering password
let visitor = prompt("Who's there?");

if (visitor == "Admin") {
  let password = prompt("Add password.");

  if (password == "TheMaster") {
    alert("Welcome");
  }
} else if (visitor == "" || visitor == null) {
  alert("Wrong Password.");
} else {
  alert("Access Denied");
}
