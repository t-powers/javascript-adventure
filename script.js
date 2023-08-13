const button = document.querySelector("button");

function greet() {
  const name = window.prompt("What is your name?");
  window.alert(`Hello ${name}, nice to see you!`);
}

button.addEventListener("click", greet);
