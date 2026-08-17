import { useState } from "react";
import Entry from "./components/Entry";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  const [contact, setContact] = useState({
    firstName = "John",
    lastName = "Doe",
    phone: "+1 (212) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false
  })

  function toggleFavorite() {
    console.log("Toggle Favorite")
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