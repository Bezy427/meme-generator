import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <Page />
)

function Page() {
  return (
    <main>
      <ol>
        <li>React is a popular library, so i will be able to fit in with all the coolest devs out there!</li>
        <li>I am more likely to get a job as a front end developer if i know React</li>
      </ol>
    </main>
  )
}