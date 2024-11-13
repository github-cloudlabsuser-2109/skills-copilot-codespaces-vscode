class Calculator {
    constructor() {
        this.value = 0;
    }

    add(number) {
        this.value += number;
        return this;
    }

    subtract(number) {
        this.value -= number;
        return this;
    }

    multiply(number) {
        this.value *= number;
        return this;
    }

    divide(number) {
        if (number === 0) {
            throw new Error("Cannot divide by zero");
        }
        this.value /= number;
        return this;
    }

    clear() {
        this.value = 0;
        return this;
    }

    getResult() {
        return this.value;
    }
}

// Example usage:
const calc = new Calculator();
calc.add(10).subtract(2).multiply(3).divide(2);
console.log(calc.getResult()); // Output: 12

const Calculator = require('./test');

test('add method adds a positive number correctly', () => {
    const calc = new Calculator();
    calc.add(5);
    expect(calc.getResult()).toBe(5);
});

test('add method adds a negative number correctly', () => {
    const calc = new Calculator();
    calc.add(-3);
    expect(calc.getResult()).toBe(-3);
});

test('add method can be chained', () => {
    const calc = new Calculator();
    calc.add(2).add(3);
    expect(calc.getResult()).toBe(5);
});