import { Shape } from "./Shape";
export class Rectangle extends Shape{
    constructor(x: number, y: number, private width: number, private length: number){
        super(x, y);
    }

    public getInfo(): string {
        return super.getInfo() + `, width=${this.width}, length=${this.length}`
    }

    public calArea(): number {
        return this.x * this.y * this.width * this.length;
    }
}
