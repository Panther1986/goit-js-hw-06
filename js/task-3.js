class StringBuilder {
    initialValue = StringBuilder.value;
    #value;

    constructor({value}) {
        this.#value = initialValue;
    }

    getValue() {
        return this.#value;
    }

    padEnd(str) {
        const unionStr = this.#value.concat(str);
        return unionStr;
    
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