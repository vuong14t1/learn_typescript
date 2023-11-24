"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const Shape_1 = require("./Shape");
class Circle extends Shape_1.Shape {
    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
    }
    getInfo() {
        return super.getInfo() + `, radius = ${this.radius}`;
    }
    calArea() {
        return 2 * this.x * this.radius;
    }
}
exports.Circle = Circle;
