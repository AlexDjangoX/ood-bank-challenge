const TransactionDate = require("../../src/transactionDate");

describe("Date", () => {
    it("returns a date in string format", () => {
        // set up
        const date = new TransactionDate();

        // execute

        const expected = "05 April 2022";

        const result = date.createDate();

        expect(result).toEqual(expected);
    });
});