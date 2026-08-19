import { useState } from "react";
import Entry from "./components/Entry";
import Header from "./components/Header";
import Main from "./components/Main";
import avatar from "./images/avatar.png";
import starEmpty from "./images/star-empty.png";
import starFilled from "./images/star-filled.png";

export default function App() {
  const [contact, setContact] = useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (212) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false
  })

  function toggleFavorite() {
    console.log("Toggle Favorite")
  }

  return (
    <main>
      <article className="card">
        <img 
          src={avatar} 
          alt="User profile picture of John Doe" 
        />
        <div className="info">
          <button
            onClick={toggleFavorite}
            aria-pressed={false}
            className="favorite-button"
          >
            <img 
              src={starEmpty} 
              alt="empty star icon" 
              className="favorite" 
            />
          </button>
          <h2 className="name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="contact">{contact.phone}</p>
          <p className="contact">{contact.email}</p>
        </div>
      </article>
    </main>
    // <>
    //   <Header />
    //   <main className="container">
    //     <Entry />
    //   </main>
    // </>
  )
}