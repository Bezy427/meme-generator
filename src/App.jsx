import { useState } from "react";
import Entry from "./components/Entry";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  const [count, setCount] = useState(0)

  function add() {
    setCount(prevCount => prevCount + 1)
  }

  function minus() {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <main>
      <div>
        <button onClick={minus} className="minus">-</button>
        <h2>{count}</h2>
        <button onClick={add} className="minus">+</button>
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