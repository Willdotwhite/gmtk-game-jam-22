export class Dice {

    private readonly size: number;

    constructor(size: number) {
        this.size = size
    }

    public toString = () => `[d${this.size}]`
}