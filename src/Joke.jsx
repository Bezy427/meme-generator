export default function Joke(props) {
    const [isShown, setIsShown] = React.useState()

    function toggleShown() {
        setIsShown(prevShown => !prevShown)
    }

    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            <p>{props.punchline}</p>
            <button onClick={toggleShown}>Show punchline</button>
            <hr />
        </div>
    )
}