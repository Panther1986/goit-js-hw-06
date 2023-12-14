
class StringBuilder {

    #value = " ";
    

    constructor(value) {
        this.#value = value;
      
    }

    getValue() {
        return this.#value;
    }

    padEnd(str) {
        this.#value = str;
        const unionStr = this.#value.concat(str);
        return unionStr;
    
    }

    padStart(str) {
        this.#value = str;
        const startUnion = this.#value.padStart(str);
        return startUnion;
        
    }

}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="