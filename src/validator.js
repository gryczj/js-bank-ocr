function validate(inputAccountNumber) {
    const accountNumberArray = inputAccountNumber.split("");
    const sum = accountNumberArray
        .reverse()
        .reduce((prev, curr, i) => prev + curr * (i + 1), 0);
    return sum % 11 === 0;
}

module.exports = {
    validate
}