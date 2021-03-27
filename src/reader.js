const { validate } = require("./validator");

const numbersRepresentation = [
  [
    [" _ "],
    ["| |"],
    ["|_|"]
  ],
  [
    ["   "],
    ["  |"],
    ["  |"]
  ],
  [
    [" _ "],
    [" _|"],
    ["|_ "]
  ],
  [
    [" _ "],
    [" _|"],
    [" _|"]
  ],
  [
    ["   "],
    ["|_|"],
    ["  |"]
  ],
  [
    [" _ "],
    ["|_ "],
    [" _|"]
  ],
  [
    [" _ "],
    ["|_ "],
    ["|_|"]
  ],
  [
    [" _ "],
    ["  |"],
    ["  |"]
  ],
  [
    [" _ "],
    ["|_|"],
    ["|_|"]
  ],
  [
    [" _ "],
    ["|_|"],
    [" _|"]
  ]
];

const ROW_LENGTH = 27;
const NUMBER_LENGTH = 3;
const NUMBER_OF_ROW = 3;
const ACOUNT_NUMBER_LENGTH = 9;
const WRONG_ACCOUNT_NUMBER_MESSAGE = "ILL";
const WRONG_SUM_MESSAGE = "ERR";

function initializeArray(arrayLength) {
  const matrix = [];
  for (let row = 0; row < arrayLength; row++) {
    matrix.push([]);
  }
  return matrix;
}

function printArray(array, arraySize, elementSize) {
  for (let i = 0; i < arraySize; i++) {
    for (let j = 0; j < elementSize; j++) {
      let line = array[i][j];
      console.log(line);
    }
    line = "";
  }
}

function splitInput(input, numberOfRow, rowLength) {
  const splitedLines = [];
  for (let i = 0; i < numberOfRow * rowLength; i += rowLength) {
    const substring = input.substr(i, rowLength);
    splitedLines.push(substring);
  }
  return splitedLines;
}

function setRow(array, value, position) {
  const row = [value];
  array[position].push(row);
}

function createNumbersRepresentation(array, splittedLines, numberOfRow, numberLength, rowLength) {
  for (let i = 0; i < numberOfRow; i++) {
    for (let j = 0; j < rowLength; j += numberLength) {
      const position = j == 0 ? 0 : j / numberLength;
      const value = splittedLines[i].substr(j, numberLength);
      setRow(array, value, position);
    }
  }
}

function compareNumbersRepresentations(number1, number2) {
  return number1.every((e, i) => e.toString() === number2[i].toString()
  );
}

function findActualNumber(numberRepresentation) {
  const index = numbersRepresentation.findIndex(el => compareNumbersRepresentations(numberRepresentation, el));
  return index === -1 ? "?" : index;
}

function addAccountNumberStatus(accountNumber, considerStatus) {
  if (!considerStatus) {
    return accountNumber;
  }
  if (accountNumber.includes("?")) {
    return accountNumber + " " + WRONG_ACCOUNT_NUMBER_MESSAGE;
  }
  if (!validate(accountNumber)) {
    return accountNumber + " " + WRONG_SUM_MESSAGE;
  }
  return accountNumber;
}

function findActualAccountNumbers(array) {
  let actualAccountNumbers = "";
  array.forEach(number => actualAccountNumbers += findActualNumber(number));
  return actualAccountNumbers;
}

function parse(input, considerStatus) {
  const inputInOneLine = input.split("").filter(sign => sign !== "\n").join("");
  const lines = splitInput(inputInOneLine, NUMBER_OF_ROW, ROW_LENGTH);
  const array = initializeArray(ACOUNT_NUMBER_LENGTH);
  createNumbersRepresentation(array, lines, NUMBER_OF_ROW, NUMBER_LENGTH, ROW_LENGTH);
  printArray(array, ACOUNT_NUMBER_LENGTH, NUMBER_LENGTH);
  const actualAccountNumbers = findActualAccountNumbers(array);
  const finalAccountNumber = addAccountNumberStatus(actualAccountNumbers, considerStatus);
  return finalAccountNumber;
}

module.exports = {
  parse
}