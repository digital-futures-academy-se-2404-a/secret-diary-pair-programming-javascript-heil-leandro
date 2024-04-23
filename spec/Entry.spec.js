import Entry from "../src/Entry.js";

describe("Entry Class Tests:", () => {
    describe("Entry Initialisation Tests:", () => {
        const testDate = '2024-04-23';
        const testText = 'Today I learned about Jasmine.';

        it("should create a new instance of the Entry class", () => {
            // Arrange & Act
            const testEntry = new Entry(testDate, testText);

            // Assert
            expect(testEntry).toBeInstanceOf(Entry);
        });

        it("should have a date property that is set upon initialization", () => {
            // Arrange & Act
            const testEntry = new Entry(testDate, testText);

            // Assert
            expect(testEntry.date).toBe(testDate);
        });

        it("should have a text property that is set upon initialization", () => {
            // Arrange & Act
            const testEntry = new Entry(testDate, testText);

            // Assert
            expect(testEntry.text).toBe(testText);
        });
    });

});
