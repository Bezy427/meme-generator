import {useEffect, useState} from "react";
import Header from "./Header";
import Main from "./Main"
import Count from "./Count";
import Body from "./Body";
import Headers from "./Headers";
import WindowTracker from "./WindowTracker";
import Die from "./Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

export default function App() {
  // const [unreadMessages, setUnreadMessages] = useState(["a", "b"])
  // const [userName, setUserName] = useState("Joe")
  // const [starWarsData, setStarWarsData] = useState({})
  // const [count, setCount] = useState(1)
  // const [show, setShow] = useState(true)

  // function toggle() {
  //    setShow(prevShow => !prevShow)
  // }
  // console.log("Rendered!")

  // useEffect(() => {
  //   console.log("Effect ran")
  //   fetch(`https://swapi.dev/api/people/${count}`)
  //     .then(res => res.json())
  //     .then(data => setStarWarsData(data))
  // }, [count])

  const [dice, setDice] = useState(generateAllNewDice)

  const gameWon = dice.every(die => die.isHeld) &&
       dice.every(die => die.value === dice[0].value) 

  function generateAllNewDice() {
    return new Array(10)
      .fill(0)
      .map(() => ({
        value: Math.ceil(Math.random() * 6), 
        isHeld: false,
        id: nanoid() 
      }))
  }

  function rollDice() {
    setDice(oldDice => oldDice.map(die => 
      die.isHeld ?
        die :
        { ...die, value: Math.ceil(Math.random() * 6)}
    ))
  }

  function hold(id) {
    setDice(oldDice => oldDice.map(die => 
        die.id === id ?
          { ...die, isHeld: !die.isHeld} :
          die
    ))
  }

  const diceElements = dice.map(dieObject => (
      <Die 
        key={dieObject.id} 
        value={dieObject.value} 
        isHeld={dieObject.isHeld}
        hold={() => hold(dieObject.id)}
      />
    )
  )

  return (
    // <>
    //     <Header />
    //     <Main />

                 
    // </>
    // <>
    //   <Headers userName={userName} />
    //   <Body userName={userName} />
    // </>
    // <div>
    //   <h2>The count is {count}</h2>
    //   <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
    //   <prev>{JSON.stringify(starWarsData, null, 2)}</prev>
    // </div>
    // <main className="container">
    //   <button onClick={toggle}>
    //      Toggle WindowTracker
    //   </button>
    //   {show && <WindowTracker />}
    // </main>
    <main>
      {gameWon && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze
        it at its current value between rolls.</p>
      <div className="dice-container">
        {diceElements}
      </div>
      <button className="roll-dice" onClick={rollDice}>
        {gameWon ? "New Game" : "Roll"}
      </button>
    </main>
  )
} 