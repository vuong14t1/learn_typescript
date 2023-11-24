"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const Shape_1 = require("./Shape");
class Rectangle extends Shape_1.Shape {
    constructor(x, y, width, length) {
        super(x, y);
        this.width = width;
        this.length = length;
    }
    getInfo() {
        return super.getInfo() + `, width=${this.width}, length=${this.length}`;
    }
    calArea() {
        return this.x * this.y * this.width * this.length;
    }
}
exports.Rectangle = Rectangle;
