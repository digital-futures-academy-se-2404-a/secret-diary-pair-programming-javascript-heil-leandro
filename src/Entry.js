class Entry {
    date = "";
    text = "";

    getDate() {
        return this.date;
    } 

    getText(){
        return this.text;
    }
    
    constructor(date, text) {
        this.date = date;
        this.text = text;
    }
}

export default Entry;