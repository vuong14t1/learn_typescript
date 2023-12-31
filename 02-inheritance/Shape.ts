export abstract class Shape{
    constructor(protected x: number, protected y: number){
    }

    public getInfo(): string{
        return `x=${this.x}, y= ${this.y}`;
    }

    public abstract calArea(): number
}
