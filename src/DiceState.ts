import {Dice} from "./Dice";

export class DiceState {

    private readonly currentDice: Dice[];

    constructor() {
        this.currentDice = [new Dice(6)]
    }

    public getDice = () => this.currentDice;
}