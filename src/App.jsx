import {useState} from "react";
import Header from "./Header";
import Main from "./Main"
import Count from "./Count";
import Body from "./Body";
import Headers from "./Headers";

export default function App() {
  // const [unreadMessages, setUnreadMessages] = useState(["a", "b"])
  const [userName, setUserName] = useState("Joe")

  return (
    // <>
    //     <Header />
    //     <Main />
                 
    // </>
    <>
      <Headers userName={userName} />
      <Body userName={userName} />
    </>
  )
} 