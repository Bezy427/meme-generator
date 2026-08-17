import { useState } from "react";
import Entry from "./components/Entry";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  const [isGoingOut, setIsGoingOut] = useState(true)

  // function toggleIsGoingOut() {
  //   setIsGoingOut(prevCount)
  // }

  function changeMind() {
    setIsGoingOut(prev => !prev)
  }

  return (
    <main>
      <div>
        <h2>Do i feel like going out tonight?</h2>
        <button onClick={changeMind} className="value" aria-label={`Current answer is ${isGoingOut ? "Yes" : "No"}. Click to change it.`}>{isGoingOut ? "Yes" : "No"}</button>
      </div>
    </main>
    // <>
    //   <Header />
    //   <main className="container">
    //     <Entry />
    //   </main>
    // </>
  )
}