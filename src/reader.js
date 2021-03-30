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
const SAME_NUMBER_DIFF = 0;
const SIMMILAR_NUMBER_DIFF = 1;

const WRONG_ACCOUNT_NUMBER_MESSAGE = "ILL";
const WRONG_SUM_MESSAGE = "ERR";

function initializeArray(arrayLength) {
  const array = [];
  for (let row = 0; row < arrayLength; row++) {
    array.push([]);
  }
  return array;
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

function compareEverySign(row1, row2) {
  const diff = row1.split("").filter((e, i) => e !== row2.split("")[i]).length;
  return diff;
}

function checkSimmilarity(numberRepresentation, diff) {
  const values =
    numbersRepresentation.filter(n => {
      const difference =
        n.reduce((prev, curr, i) => prev + compareEverySign(curr.toString(), numberRepresentation[i].toString()), 0);
      return difference === diff;
    });
  const indexes = values.map(v => numbersRepresentation.findIndex(n => n === v));
  return indexes;
}

// this function was used before implementing checkSimmilarity() - UserStory4
// function compareNumbersRepresentations(number1, number2) {
//   return number1.every((e, i) =>
//     e.toString() === number2[i].toString()
//   );
// }

function findActualNumber(numberRepresentation, parseRow) {
  // will find only the same number
  const index = checkSimmilarity(numberRepresentation, SAME_NUMBER_DIFF);
  if (!parseRow) {
    return index.length === 0 ? "?" : index[0];
  }

  // UserStory 4 - will find all simmilar number with difference 1
  const simmilarNumbers = checkSimmilarity(numberRepresentation, SIMMILAR_NUMBER_DIFF);
  const allIndexes = [...index, ...simmilarNumbers].filter(i => i);
  return allIndexes;
}

function findActualAccountNumbers(array, parseRow) {
  if (!parseRow) {
    let actualAccountNumbers = "";
    array.forEach(number => actualAccountNumbers += findActualNumber(number, parseRow));
    return actualAccountNumbers;
  }
  // find all possible options
  return array
    .map(number => findActualNumber(number, parseRow).filter(n => n !== -1));
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

function parse(input, considerStatus, parseRow) {
  const inputInOneLine = input.split("").filter(sign => sign !== "\n").join("");
  const lines = splitInput(inputInOneLine, NUMBER_OF_ROW, ROW_LENGTH);
  const array = initializeArray(ACOUNT_NUMBER_LENGTH);
  createNumbersRepresentation(array, lines, NUMBER_OF_ROW, NUMBER_LENGTH, ROW_LENGTH);
  printArray(array, ACOUNT_NUMBER_LENGTH, NUMBER_LENGTH);
  const actualAccountNumbers = findActualAccountNumbers(array, parseRow);
  return addAccountNumberStatus(actualAccountNumbers, considerStatus);

  //  In this place function to find all possible options should be called - UserStory4
  // const possibilities = actualAccountNumbers.reduce((prev, curr) => prev * curr.length, 1);
  // for (let possibility = 0; possibility < possibilities; i++) {
  //  
  // }
}

module.exports = {
  parse
}