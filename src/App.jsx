import {useState} from "react";
import Header from "./Header";
import Main from "./Main"
import Count from "./Count";

export default function App() {
  // const [unreadMessages, setUnreadMessages] = useState(["a", "b"])
  const [contact, setContact] = useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (212) 555-1212",
    email: "rusamubezel@gmail.com",
    isFavorite: true
  })

  function toggleFavorite() {
    setContact(prevContact => ({
      ...prevContact,
      isFavorite: !prevContact.isFavorite
    }))
  }

  return (
    // <>
    //     <Header />
    //     <Main />
                 
    // </>
    <main>
      <article className="card">
        <img 
          src={avatar} 
          alt="User profile picture of John Doe" 
        />
        <div className="info">
          <Star isFilled={contact.isFavorite} />
          <h2 className="name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="contact">{contact.phone}</p>
          <p className="contact">{contact.email}</p>
        </div>
      </article>
    </main>
  )
} 