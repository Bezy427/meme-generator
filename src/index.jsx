import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <>
    <Page />
  </>
)


function Page() {
  return (
    <div>  
      <Main />
      <Footer />
    </div>
    
  )
}

function Footer() {
  return (
    <footer>
        <small>2026 bitLabs development. All rights reserved.</small>
    </footer>
  )
}

function Header() {
  return (
    <>
      <header className="header">
        <img  src="react-logo.png" className="nav-logo" alt="react-logo" />
        <nav>
          <ul className="nav-list">
            <li className="nav-list-item">Pricing</li>
            <li className="nav-list-item">About</li>
            <li className="nav-list-item">Contact</li>
          </ul>
        </nav>
      </header>
    </>
  )
}

function Main() {
  return (
    <main>
        <Header />
        <h1>Reasons I'm excited to learn React!</h1>
        <ol>
          <li>React is a popular library, so i will be able to fit in with all the coolest devs out there!</li>
          <li>I am more likely to get a job as a front end developer if i know React</li>
        </ol>
        <br />
    </main>
  )
}
