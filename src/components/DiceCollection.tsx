import React from "react";
import {DiceState} from "./classes/DiceState";
import {Dice} from "../classes/Dice";

export const DiceCollection: React.FC<{diceState: DiceState}> = ({diceState}) => {
    return (
        <>
            <h2>Current Dice</h2>
            {diceState.getDice().map(dice => <DiceCollectionItem dice={dice} />)}
        </>
    )
}

const DiceCollectionItem: React.FC<{dice: Dice}> = ({dice}) => {
    return (
        <>
            <p>{dice.toString()}</p>
        </>
    )
}