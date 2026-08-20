import { useState } from "react";
import Entry from "./components/Entry";
import Header from "./components/Header";
import Main from "./components/Main";
import avatar from "./images/avatar.png";
import starEmpty from "./images/star-empty.png";
import starFilled from "./images/star-filled.png";

export default function App() {
//   const [contact, setContact] = useState({
//     firstName: "John",
//     lastName: "Doe",
//     phone: "+1 (212) 555-1212",
//     email: "itsmyrealname@example.com",
//     isFavorite: true
//   })

//   let starIcon = contact.isFavorite ? starFilled : starEmpty;

//   function toggleFavorite() {
//     setContact(prevContact => ({
// 		...prevContact,
// 		isFavorite: !prevContact.isFavorite
// 	}))
//   }
  function signup(formData) {
	const email = formData.get("email")
	const password = formData.get("password")
	console.log(password)
  }	

  return (
    // <main>
    //   <article className="card">
    //     <img 
    //       src={avatar} 
    //       alt="User profile picture of John Doe" 
    //     />
    //     <div className="info">
    //       <button
    //         onClick={toggleFavorite}
    //         aria-pressed={contact.isFavorite}
    //         aria-label={contact.isFavorite ? "Remove from favorites" : "Add to favorites"}
    //         className="favorite-button"
    //       >
    //         <img 
    //           src={starIcon} 
    //           alt={contact.isFavorite ? "filled star icon" : "empty star icon"} 
    //           className="favorite" 
    //         />
    //       </button>
    //       <h2 className="name">
    //         {contact.firstName} {contact.lastName}
    //       </h2>
    //       <p className="contact">{contact.phone}</p>
    //       <p className="contact">{contact.email}</p>
    //     </div>
    //   </article>
    // </main>
    // <>
    //   <Header />
    //   <main className="container">
    //     <Entry />
    //   </main>
    // </>
	<section>
		<h1>Signup Form</h1>
		<form action={signup}>
			<label htmlFor="email">Email:</label>
			<input id="email" type="email" name="email" placeholder="joe@gmail.com"/>
			<br />

			<label htmlFor="password">Password:</label>
			<input id="password" type="password" name="password" />
			<br />

			<button>Submit</button>
		</form>
	</section>
  )
}