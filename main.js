"use strict";

// Завдання 1
function countLetter(str, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i).toLowerCase() === letter.toLowerCase()) {
      count++;
    }
  }
  return count;
}

function getRow(firstRow, secondRow, letter) {
  const firstCount = countLetter(firstRow, letter);
  const secondCount = countLetter(secondRow, letter);

  if (firstCount > secondCount) return firstRow;
  if (secondCount > firstCount) return secondRow;
  return "Однакова кількість літер!";
}

const firstRow = prompt("Введи перший рядок:", "Slow and steady wins the race");
const secondRow = prompt("Введи другий рядок:", "You can say that again");
const letter = prompt("Яку літеру порахувати?", "a");

const resultRow = getRow(firstRow, secondRow, letter);
alert(`Рядок з більшою кількістю "${letter}":\n${resultRow}`);


console.log("Завдання 2");


// Завдання 2
function formattedPhone(phone) {
  let digits = phone.replace(/\D/g, "");

  if (digits.length === 13 && digits.startsWith("380")) {
    digits = digits;
  } else if (digits.length === 12 && digits.startsWith("380")) {
    digits = digits;
  } else if (digits.length === 10 && digits.startsWith("0")) {
    digits = "38" + digits;
  } else {
    return "Невірний формат номера";
  }

  const country = "+38";
  const operator = digits.slice(2, 5);
  const part1 = digits.slice(5, 8);
  const part2 = digits.slice(8, 10);
  const part3 = digits.slice(10, 12);

  return `${country} (${operator}) ${part1}-${part2}-${part3}`;
}
const inputPhone = prompt("Введи номер телефону (приклад: +380971234567, 0971234567, 80971234567):", "0971234567");
const formatted = formattedPhone(inputPhone);
alert(`Результат форматування: ${formatted}`);