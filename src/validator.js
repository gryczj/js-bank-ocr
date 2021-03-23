const ACCOUNT_NUMBER_LENGTH = 9;
const LENGTH_ERROR_MESSAGE = "Account Number should contain 9 numbers.";
const INPUT_TYPE_ERROR_MESSAGE = "Account Number should contain only numbers.";

function validate(inputAccountNumber) {
    if (inputAccountNumber.length !== ACCOUNT_NUMBER_LENGTH) {
        throw Error(LENGTH_ERROR_MESSAGE);
    }
    const accountNumberArray = inputAccountNumber.split("");
    const containsOnlyNumbers = accountNumberArray.every(n => !isNaN(n));

    if (!containsOnlyNumbers) {
        throw Error(INPUT_TYPE_ERROR_MESSAGE);
    }
    const sum = accountNumberArray
        .reverse()
        .reduce((prev, curr, i) => prev + curr * (i + 1), 0);
    return sum % 11 === 0;
}

module.exports = {
    validate
}