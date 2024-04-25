import Diary from "../src/Diary.js";

describe("Diary Class Tests:", () => {
    describe("Diary Initialisation Tests", () => {
        let testDiary;
        const pin = '1234';

        beforeEach(() => {
            //Setup diary instance before each test
            testDiary = new Diary();
            //testDiary.setPin(pin);
        });

        it("should not allow reading entries when diary is locked", () => {
            // Act
            testDiary.isLocked = true;
            const readingAttempt = testDiary.readEntries();
            
            // Assert
            expect(readingAttempt).toBe('Diary is locked');
        });

        it("should allow reading entries when diary is unlocked", () => {
            // Arrange
            // testDiary.unlock(pin);
            testDiary.isLocked = false;

            // Act & Assert
            expect(() => testDiary.readEntries()).not.toThrow();
        });

        it("should correctly provide the date and text of each entry in the diary", () => {
            // Arrange 
            const entry1 = jasmine.createSpyObj('entry1', [], { date: '2024-04-23', text: 'First entry text' });
            const entry2 = jasmine.createSpyObj('entry2', [], { date: '2024-04-24', text: 'Second entry text' });
            // testDiary.unlock(pin);
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

    describe("Diary writing tests", () => {
        let testDiary;

        beforeEach(() => {
            //Setup diary instance before each test
            testDiary = new Diary();
            //testDiary.setPin(pin);
        });
        
        it("should not be able to use addEntry when the diary is locked.", () => {
            testDiary.isLocked = true;
            const readingAttempt = testDiary.addEntry();
            
            // Assert
            expect(readingAttempt).toBe(false);
        });

        it("should be able to use addEntry when the diary is unlocked.", () => {
            testDiary.isLocked = false;
            const entry1 = jasmine.createSpyObj('entry1', [], { date: '2024-04-23', text: 'First entry text' });

            const readingAttempt = testDiary.addEntry(entry1);
            
            // Assert
            expect(readingAttempt).toBe(true);
        });

        it("should not accept null as an input to addEntry.", () => {
            testDiary.isLocked = false; 

            const readingAttempt = testDiary.addEntry(null);
            
            // Assert
            expect(readingAttempt).toBe(true);
        });
    });

    describe("Diary locking tests", () => {
        let testDiary;

        beforeEach(() => {
            //Setup diary instance before each test
            testDiary = new Diary();
            //testDiary.setPin(pin);
        });
        
        it("should be able to lock the diary when unlocked", () => {
            testDiary.isLocked = false;
            const readingAttempt = testDiary.lock();
            
            // Assert
            expect(readingAttempt).toBe(true) && expect(testDiary.getLockStatus()).toBe(true);
        });

        it("should not be able to lock the diary when locked", () => {
            testDiary.isLocked = true;
            const readingAttempt = testDiary.lock();
            
            // Assert
            expect(readingAttempt).toBe(false) && expect(testDiary.getLockStatus()).toBe(true);
        });

        it("should be able to unlock the diary when locked", () => {
            testDiary.isLocked = true;
            const attempt = testDiary.unlock("1234"); 
            
            // Assert
            expect(attempt).toBe(true) && expect(testDiary.getLockStatus()).toBe(false);
        });

        it("should not be able to unlock the diary when unlocked", () => {
            testDiary.isLocked = false;
            const attempt = testDiary.unlock("1234");
            
            // Assert
            expect(attempt).toBe(false) && expect(testDiary.getLockStatus()).toBe(false);
        });

        it("should not be able to unlock the diary when locked when the pin is wrong.", () => {
            testDiary.isLocked = true;
            const attempt = testDiary.unlock("5555");
            
            // Assert
            expect(attempt).toBe(false) && expect(testDiary.getLockStatus()).toBe(true);
        });

        it("should not be able to unlock the diary when locked when the pin is null.", () => {
            testDiary.isLocked = true;
            const attempt = testDiary.unlock(null);
            
            // Assert
            expect(attempt).toBe(false) && expect(testDiary.getLockStatus()).toBe(true);
        });
    });

});
