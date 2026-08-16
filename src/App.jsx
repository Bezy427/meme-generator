import Entry from "./components/Entry";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Entry />
      </main>
    </>
  )
}