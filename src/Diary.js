class Diary{
    #entries = [];
    isLocked = false;

    constructor() {
        
    } 

    readEntries = () => {
        if (this.isLocked === false) {
            return this.#entries
        } 
        return "Diary is locked";
    }

    addEntry(entry) {
        this.#entries.push(entry);
    }
}

export default Diary;