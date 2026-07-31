import {useState} from "react";
import Header from "./Header";
import Main from "./Main"

export default function App() {
  const [unreadMessages, setUnreadMessages] = useState(["a"])
 
  return (
    <>
        {/* <Header />
        <Main /> */}
        {
          unreadMessages.length > 0 &&
          <h1>You have {unreadMessages.length} unread messages!</h1>
        }  
    </>
  )
} 