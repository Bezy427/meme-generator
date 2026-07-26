import Contact from "./Contact";

function App(props) {
  

  return (
    <div className="contacts">
      <Contact 
        img="../images/mr-whiskerson.png"
        name="Mr. Whiskerson"
        phone="(212) 555 1234"
        email="mr.whickerson@catnap.com"
      />
      <Contact />
      <Contact />
      <Contact />
    </div>
  )
}
export default App;