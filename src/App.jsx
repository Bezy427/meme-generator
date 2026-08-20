import { use, useState } from "react";
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
const [messages, setMessages] = useState(["a"])


//   let starIcon = contact.isFavorite ? starFilled : starEmpty;

//   function toggleFavorite() {
//     setContact(prevContact => ({
// 		...prevContact,
// 		isFavorite: !prevContact.isFavorite
// 	}))
//   }
//   function signup(formData) {
// 	const data = Object.fromEntries(formData)
// 	const dietaryRestrictions = formData.getAll("dietaryRestrictions")
// 	const allData = {
// 		...data,
// 		dietaryRestrictions
// 	}
// 	console.log(allData)
//   }	

	function determineText() {
		if (messages.length === 0) {
			return "You're all caught up!"
		} else if (messages.length === 1) {
			return "You've 1 unread message"
		} else {
			return `You've ${messages.length} unread messages`
		}
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
	// <section>
	// 	<h1>Signup Form</h1>
	// 	<form action={signup}>
	// 		<label htmlFor="email">Email:</label>
	// 		<input id="email" type="email" name="email" placeholder="joe@gmail.com"/>
	// 		<br />

	// 		<label htmlFor="password">Password:</label>
	// 		<input id="password" type="password" name="password" />
	// 		<br />

	// 		<fieldset>
	// 			<legend>Employment Status:</legend>
	// 			<label>
	// 				<input type="radio" name="employmentStatus" value="unemployed"/>
	// 				Unemployed
	// 			</label>
	// 			<label>
	// 				<input type="radio" name="employmentStatus" value="part-time"/>
	// 				Part-Time
	// 			</label>
	// 			<label>
	// 				<input type="radio" name="employmentStatus" defaultChecked={true} value="full-time"/>
	// 				Full-Time
	// 			</label>
	// 		</fieldset>
			
	// 		<fieldset>
	// 			<legend>Dietary Restrictions:</legend>
	// 			<label>
	// 				<input type="checkbox" name="dietaryRestrictions" value="kosher"/>
	// 				Kosher
	// 			</label>
	// 			<label>
	// 				<input type="checkbox" name="dietaryRestrictions" value="vegan"/>
	// 				Vegan
	// 			</label>
	// 			<label>
	// 				<input type="checkbox" name="dietaryRestrictions" defaultChecked={true} value="glutten-free"/>
	// 				Glutten-free
	// 			</label>
	// 		</fieldset>

	// 		<label htmlFor="favColor">What is your favorite color?</label>
	// 		<select name="favColor" id="favColor" defaultValue="" required>
	// 			<option value="" disabled>-- Choose a color --</option>
	// 			<option value="red">Red</option>
	// 			<option value="orange">Orange</option>
	// 			<option value="yellow">Red</option>
	// 			<option value="green">Green</option>
	// 			<option value="blue">Blue</option>
	// 			<option value="indigo">Indigo</option>
	// 			<option value="violet">Violet</option>
	// 			<option value="silver">Silver</option>
	// 		</select>
	// 		<button>Submit</button>
	// 	</form>
	// </section>

		<div>
			<h1>{determineText()}</h1>		
		</div>
  )
}