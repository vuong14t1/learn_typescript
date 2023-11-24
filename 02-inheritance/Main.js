"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rectangle_1 = require("./Rectangle");
const Circle_1 = require("./Circle");
let cicle = new Circle_1.Circle(11, 22, 33);
let ractangle = new Rectangle_1.Rectangle(1, 2, 3, 4);
let hold = [cicle, ractangle];
for (const shape of hold) {
    console.log(`Cicle: ${shape.calArea()}`);
}
