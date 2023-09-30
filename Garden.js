import { MAX_APPLES_AMOUNT, MAX_TREES_AMOUNT } from './const.js';

import Tree from './Tree.js';

class Garden {
    constructor() {
        this._age = 0;
        this._amount = parseInt(Math.random() * MAX_TREES_AMOUNT);;
        this._trees = [];
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }

    get amount() {
        return this._amount;
    }

    set amount(value) {
        this._amount = value;
    }

    get trees() {
        return this._trees;
    }

    set trees(value) {
        this._trees = value;
    }

    createGarden() {
        for (let i = 0; i < this.amount; i++) {
            this.addTree();
        }
    }

    getCountApples() {
        let count = 0;
        console.log(`Age of the Garden is ${this.age}`);
        console.log(`Garden has ${this.amount} trees`);
        for (let i = 0; i < this.amount; i++) {
            count += this.trees[i].amount;
            console.log(`Tree number ${i} with ${this.trees[i].amount} apples: `, this.trees[i].apples);
        }
        console.log(`There are ${count} apples in the Garden`);
    }

    addTree() {
        let newTree = new Tree(parseInt(Math.random() * MAX_APPLES_AMOUNT));
        newTree.createTree();
        this.trees.push(newTree);

        if (this.trees.length > this.amount) {
            this.amount = this.amount + 1;
        }
    }

    passDay() {
        this.age = this.age + 1;
        for (let i = 0; i < this.amount; i++) {
            for (let j = 0; j < this.trees[i].amount; j++) {
                this.trees[i].apples[j].age += 1;
                this.trees[i].apples[j].isFresh();
                this.trees[i].apples[j].fallDown();

                if (this.trees[i].apples[j].onTree) {
                    this.trees[i].amount -= 1;
                }
            }

            //Каждые 30 суток на каждом дереве рождается новое яблоко.
            if (this.age % 30 === 0) {
                this.trees[i].addApple();
            }
        }
    }
}

let garden = new Garden();
garden.createGarden();
garden.passDay();
garden.getCountApples();
garden.passDay();
garden.getCountApples();