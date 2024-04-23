import Diary from "../src/Diary.js";
import Entry from "../src/Entry.js";

describe("Diary Class Tests:", () => {
    describe("Diary Initialisation Tests", () => {
        let testDiary;
        const pin = '1234';

        beforeEach(() => {
            //Setup diary instance before each test
            testDiary = new Diary();
            testDiary.setPin(pin);
        });

        it("should not allow reading entries when diary is locked", () => {
            // Act
            const readingAttempt = () => testDiary.readEntries();
            
            // Assert
            expect(readingAttempt).toThrow('Diary is locked');
        });

        it("should allow reading entries when diary is unlocked", () => {
            // Arrange
            testDiary.unlock(pin);

            // Act & Assert
            expect(() => testDiary.readEntries()).not.toThrow();
        });

        it("should correctly provide the date and text of each entry in the diary", () => {
            // Arrange
            const entry1 = new Entry('2024-04-23', 'First entry text');
            const entry2 = new Entry('2024-04-24', 'Second entry text');
            testDiary.unlock(pin);
            testDiary.addEntry(entry1);
            testDiary.addEntry(entry2);

            // Act
            const entries = testDiary.readEntries();

            // Assert
            expect(entries.length).toBe(2);
            expect(entries[0].date).toBe('2024-04-23');
            expect(entries[0].text).toBe('First entry text');
            expect(entries[1].date).toBe('2024-04-24');
            expect(entries[1].text).toBe('Second entry text');
        });
    });

});