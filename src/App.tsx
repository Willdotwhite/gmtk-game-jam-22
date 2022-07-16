import React, { useState } from 'react'
import {DiceCollection} from "./components/DiceCollection";
import {DiceState} from "./classes/DiceState";
import {MenuBar} from "./components/MenuBar";

const columnStyles = "h-full inline-block"

function App() {
  const [diceState, setDiceState] = useState(new DiceState())
  const [view, setView] = useState("map")

  return (
    <>
        <div className={`${columnStyles} float-left w-3/12 bg-slate-400`}>
            <DiceCollection diceState={diceState} />
        </div>

        {/* Changable view */}
        <div className={`${columnStyles} float-right w-9/12 bg-slate-200`}>
            {view == "map" && <Map />}
            {view == "hero" && <Hero />}
        </div>

        <div className={`fixed w-full bottom-0 h-[64px] bg-black text-white`}>
            <MenuBar updateView={setView} />
        </div>
    </>
  )
}

const Map: React.FC = () => {
    return (
        <div>
            Here's the map!
        </div>
    )
}
const Hero: React.FC = () => {
    return (
        <div>
            Do a hero thing here
        </div>
    )
}

export default App
