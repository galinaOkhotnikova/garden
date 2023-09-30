import { MAX_APPLE_AGE, MAX_APPLE_SIZE, APPLES_COLORS} from "./const.js";

export default class Apple {
    constructor() {
        this._age = parseInt(Math.random() * MAX_APPLE_AGE);
        this._color = APPLES_COLORS[parseInt(Math.random() * (APPLES_COLORS.length - 1))];
        this._size = parseInt(Math.random() * MAX_APPLE_SIZE);
        this._isFresh = 0;
        this._onTree = 0;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }
    
    get isFresh() {
        return this._isFresh;
    }

    set isFresh(value) {
        this._isFresh = value;
    }

    get onTree() {
        return this._onTree;
    }

    set onTree(value) {
        this._onTree = value;
    }
    
    isFresh() {
        if (this.age === 31) {
            this.isFresh = 1;
        }
        else {
            return;
        }
    }

    fallDown() {
        if (this.age === 30) {
            this.onTree = 1;
        }
        else {
            return;
        }
    }
}
