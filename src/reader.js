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
const MATRIX_SIZE = 3;
const ACOUNT_NUMBER_LENGTH = 9;

// function initializeMatrix(matrixSize, defaultValue) {
//   const matrix = [];
//   for (let row = 0; row < matrixSize; row++) {
//     matrix.push([]);
//     let line = "";
//     for (let col = 0; col < matrixSize; col++) {
//       line += defaultValue;
//     }
//     matrix[row] = line;
//   }
//   return matrix;
// }

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
  return numbersRepresentation.findIndex(el => compareNumbersRepresentations(numberRepresentation, el));
}

function findActualAccountNumbers(array) {
  let actualAccountNumbers = "";
  array.forEach(number => actualAccountNumbers += findActualNumber(number));
  return actualAccountNumbers;
}

function parse(input) {
  const inputInOneLine = input.split("").filter(sign => sign !== "\n").join("");
  const lines = splitInput(inputInOneLine, NUMBER_OF_ROW, ROW_LENGTH);
  const array = initializeArray(ACOUNT_NUMBER_LENGTH);
  createNumbersRepresentation(array, lines, NUMBER_OF_ROW, NUMBER_LENGTH, ROW_LENGTH);
  printArray(array, ACOUNT_NUMBER_LENGTH, NUMBER_LENGTH);
  return findActualAccountNumbers(array);
}

module.exports = {
  parse
}