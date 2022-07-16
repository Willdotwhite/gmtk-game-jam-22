import { useState } from 'react'
import {DiceCollection} from "./components/DiceCollection";
import {DiceState} from "./DiceState";

function App() {
  const [diceState, setDiceState] = useState(new DiceState())

  return (
    <div className="bg-black">
        <div className="w-1/2">
            <DiceCollection diceState={diceState} />
        </div>
        <div className="w-1/2">Right(ish)</div>
    </div>
  )
}

export default App
