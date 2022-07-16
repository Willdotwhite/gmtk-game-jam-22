import React from "react";
import {DiceState} from "../DiceState";

export const DiceCollection: React.FC<{diceState: DiceState}> = ({diceState}) => {
    return (
        <>Hi there - {diceState.getDice()[0].toString()}</>
    )
}