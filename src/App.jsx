import {useState} from "react";
import Header from "./Header";
import Main from "./Main"

export default function App() {
  const [unreadMessages, setUnreadMessages] = useState(["a", "b"])
 
  return (
    <>
        <Header />
        <Main />
                 
    </>
  )
} 