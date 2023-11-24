import { Shape } from "./Shape";
import { Rectangle } from "./Rectangle";
import { Circle } from "./Circle";

let cicle = new Circle(11, 22, 33);
let ractangle = new Rectangle(1, 2, 3, 4);
let hold: Shape[] = [cicle, ractangle];
for (const shape of hold) {
    console.log(`Cicle: ${shape.calArea()}`);
}

