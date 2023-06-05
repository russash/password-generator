const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let passOneEl = document.getElementById("passone-el");
let passTwoEl = document.getElementById("passtwo-el");
let passwordLength = 15;

function genRandom() {
  let random = Math.floor(Math.random() * characters.length);
  return characters[random];
}

function generatePasswords() {
  let passOne = "";
  let passTwo = "";
  for (let i = 0; i < passwordLength; i++) {
    passOne += genRandom();
    passTwo += genRandom();
  }
  passOneEl.textContent = passOne;
  passTwoEl.textContent = passTwo;
}

// COPY
function copyPassword1() {
  navigator.clipboard.writeText(passOneEl.textContent);
  passOneEl.textContent = "Copied to Clipboard!";
}

function copyPassword2() {
  navigator.clipboard.writeText(passTwoEl.textContent);
  passTwoEl.textContent = "Copied to Clipboard!";
}

passOneEl.addEventListener("click", copyPassword1);
passTwoEl.addEventListener("click", copyPassword2);
