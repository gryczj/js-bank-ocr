const validator = require("../src/validator");

describe("UserStory 2 Unit Tests / ", () => {

    describe("Positive cases / ", () => {
        const testCases = [
            {
                input: "711111111",
                output: true
            },
            {
                input: "123456789",
                output: true
            },
            {
                input: "490867715",
                output: true
            },
            {
                input: "888888888",
                output: false
            },
            {
                input: "490067715",
                output: false
            },
            {
                input: "012345678",
                output: false
            }
        ];

        testCases.forEach((test, _index) => {

            it(`should validate acount number ${test.input}`, () => {
                const result = validator.validate(test.input);
                expect(result).toBe(test.output);
            })

        })

    });

    describe("Negative cases / ", () => {

        const cases = [
            ["12345678", "Account Number should contain 9 numbers."],
            ["12345678a", "Account Number should contain only numbers."]
        ];

        cases.forEach((test, _index) => {

            it(`"should throw error: ${test.output} , when input account number is: ${test.input}`, () => {
                expect(() => validator.validate(test.input)).toThrowError(test.output);
            })

        })
    });

});