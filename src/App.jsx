import {useState} from "react";
import Header from "./Header";
import Main from "./Main"
import Count from "./Count";

export default function App() {
  const [unreadMessages, setUnreadMessages] = useState(["a", "b"])


  return (
    <>
        <Header />
        <Main />
                 
    </>
  
  )
} 