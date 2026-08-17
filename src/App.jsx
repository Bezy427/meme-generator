import { useState } from "react";
import Entry from "./components/Entry";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  const [myFavoriteThings, setMyFavoriteThings] = useState([])

  const allFavoriteThings = ["raindrops and roses", "kittens", "whiskers", "fire"]
  const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)

  function addFavoriteThings() {
    setMyFavoriteThings(
      prevFav => [
        ...prevFav, 
        allFavoriteThings[prevFav.length]
      ]
    )
  }

  return (
    <main>
      <button onClick={addFavoriteThings}>Add item</button>
      <section aria-live="polite">
        {thingsElements}
      </section>
    </main>
    // <>
    //   <Header />
    //   <main className="container">
    //     <Entry />
    //   </main>
    // </>
  )
}