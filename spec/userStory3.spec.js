const reader = require("../src/reader");

describe("UserStory 3 Unit Tests / ", () => {

    const testCases = [
        {
            input: `
 _  _  _  _  _  _  _  _    
| || || || || || || ||_   |
|_||_||_||_||_||_||_| _|  |`,
            output: "000000051"
        },
        {
            input: `
    _  _  _  _  _  _     _ 
|_||_|| || ||_   |  |  | _ 
  | _||_||_||_|  |  |  | _|`,
            output: "49006771? ILL"
        },
        {
            input: `
    _  _     _  _  _  _  _ 
  | _| _||_| _ |_   ||_||_|
  ||_  _|  | _||_|  ||_| _ `,
            output: "1234?678? ILL"
        },
        {
            input: `
 _  _     _  _        _  _ 
|_ |_ |_| _|  |  ||_||_||_ 
|_||_|  | _|  |  |  | _| _|`,
            output: "664371495 ERR"
        },
    ];

    testCases.forEach((test, index) => {

        it(`should parse acount number ${test.input}`, () => {
            const result = reader.parse(test.input, true, false);
            expect(result).toBe(test.output);
        })

    })
});