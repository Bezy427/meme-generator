export default function Contact(props) {
    return (
        <article className="contact-card">
            <img 
                src={"src\images\mr-whiskerson.png" }
                alt="Photo of Mr. Whiskerson" 
            />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img 
                    src={props.img} 
                    alt={props.name} />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img 
                    src={props.img} 
                    alt={props.email} 
            />
            </div>
        </article>
    )
}