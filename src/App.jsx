import Joke from "./Joke"

export default function App() {
  return (
    <main>
      <Joke 
        punchline="I can't wait to see her face light up when she opens it."
        upvotes={10}
        isPun={true}
      />
      <Joke
        setup="How did the hacker escape the police?"
        punchline="He just ransoware!"
      />
      <Joke 
        setup="Why don't pirates travel on mountain roads?"
        punchline="Scurvy."
      />
      <Joke 
        setup="Why do bees stay in the hive in the winter?"
        punchline="Swarm"
      />
      <Joke 
        setup="What's the best thing about Switzerland?"
        punchline="I don't know, but the flag is abig plus!"
      />
    </main>
  )
} 