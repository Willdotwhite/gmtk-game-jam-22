export class Dice {

    private readonly size: number;
    private readonly value: number;

    constructor(size: number) {
        this.size = size
        this.value = this.roll(size)
    }

    private roll = (size: number) => Math.ceil(Math.random() * size)

    public toString = () => `[d${this.size}]: ${this.value}`
}