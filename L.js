"use strict";

function askName() {
  let name = prompt("Як тебе звати?", "");
  if (name === null) {
    console.log("Користувач відмінив");
    return null;
  }
  name = name.trim();
  if (!name) {
    alert("Введи, будь ласка, ім'я.");
    return askName();
  }
  alert(`Привіт, ${name}!`);
  return name;
}

askName();