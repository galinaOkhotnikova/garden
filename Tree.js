import  Apple from  './Apple.js';

export default class Tree {
    constructor(amount) {
        this._amount = amount;
        this._apples = [];
    }

    get amount() {
        return this._amount;
    }

    set amount(value) {
        this._amount = value;
    }

    get apples() {
        return this._apples;
    }

    set apples(value) {
        this._apples = value;
    }

    createTree() {
        for (let i = 0; i < this.amount; i++) {
            this.addApple();
        }
    }

    addApple() {
        this.apples.push(new Apple());
        if (this.apples.length > this.amount) {
            this.amount = this.amount + 1;
        }
    }
}
