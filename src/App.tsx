import { useState } from 'react'
import {DiceCollection} from "./components/DiceCollection";
import {DiceState} from "./DiceState";

const columnStyles = "h-full inline-block"

function App() {
  const [diceState, setDiceState] = useState(new DiceState())

  return (
    <>
        <div className={`${columnStyles} w-3/12 bg-slate-400`}>
            <DiceCollection diceState={diceState} />
        </div>
        <div className={`${columnStyles} w-9/12 bg-slate-200`}>
            Right(ish)
        </div>
    </>
  )
}

export default App
