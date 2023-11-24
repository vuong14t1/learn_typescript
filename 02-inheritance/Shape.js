"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
class Shape {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    getInfo() {
        return `x=${this.x}, y= ${this.y}`;
    }
}
exports.Shape = Shape;
