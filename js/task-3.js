class StringBuilder {

    #value = "initialValue";

    constructor(value) {
        this.#value = value;
    }

    getValue() {
        return this.#value;
    }

    padEnd(str) {
        const unionStr = this.#value.push(str);
        return unionStr;
    
    }

    padStart(str) {
        const startUnion = this.#value.concat(str);
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