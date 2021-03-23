const reader = require("../src/reader");

describe("UserStory 4 Unit Tests / ", () => {

    const testCases = [
        {
            input: `
                           
  |  |  |  |  |  |  |  |  |
  |  |  |  |  |  |  |  |  |`,
            output: "711111111"
        },
        {
            input: `
 _  _  _  _  _  _  _  _  _ 
  |  |  |  |  |  |  |  |  |
  |  |  |  |  |  |  |  |  |`,
            output: "777777177"
        },
        {
            input: `
 _  _  _  _  _  _  _  _  _ 
 _|| || || || || || || || |
|_ |_||_||_||_||_||_||_||_|`,
            output: "200800000"
        },
        {
            input: `
 _  _  _  _  _  _  _  _  _ 
 _| _| _| _| _| _| _| _| _|
 _| _| _| _| _| _| _| _| _|`,
            output: "333393333"
        },
        {
            input: `
 _  _  _  _  _  _  _  _  _ 
|_||_||_||_||_||_||_||_||_|
|_||_||_||_||_||_||_||_||_|`,
            output: "888888888 AMB ['888886888', '888888880', '888888988']"
        },
        {
            input: `
 _  _  _  _  _  _  _  _  _ 
|_ |_ |_ |_ |_ |_ |_ |_ |_ 
 _| _| _| _| _| _| _| _| _|`,
            output: "555555555 AMB ['555655555', '559555555']"
        },
        {
            input: `
 _  _  _  _  _  _  _  _  _ 
|_ |_ |_ |_ |_ |_ |_ |_ |_ 
|_||_||_||_||_||_||_||_||_|`,
            output: "666666666 AMB ['666566666', '686666666']"
        },
        {
            input: `
 _  _  _  _  _  _  _  _  _ 
|_||_||_||_||_||_||_||_||_|
 _| _| _| _| _| _| _| _| _|`,
            output: "999999999 AMB ['899999999', '993999999', '999959999']"
        },
        {
            input: `
    _  _  _  _  _  _     _ 
|_||_|| || ||_   |  |  ||_ 
  | _||_||_||_|  |  |  | _|`,
            output: "490067715 AMB ['490067115', '490067719', '490867715']"
        },
        {
            input: `
    _  _     _  _  _  _  _ 
 _| _| _||_||_ |_   ||_||_|
  ||_  _|  | _||_|  ||_| _|`,
            output: "123456789"
        },
        {
            input: `
 _     _  _  _  _  _  _    
| || || || || || || ||_   |
|_||_||_||_||_||_||_| _|  |`,
            output: "000000051"
        },
        {
            input: `
    _  _  _  _  _  _     _ 
|_||_|| ||_||_   |  |  | _ 
  | _||_||_||_|  |  |  | _|`,
            output: "490867715"
        }];

    testCases.forEach((test, index) => {

        it(`should parse acount number ${test.input}`, () => {
            const result = reader.parse(test.input);
            expect(result).toBe(test.output);
        })

    })

});