export default function Contact({img, name, phone, email}) {
    return (
        <article className="contact-card">
            <img 
                src={img}
                alt="Photo of Mr. Whiskerson" 
            />
            <h3>{name}</h3>
            <div className="info-group">
                <img 
                    src={img} 
                    alt={name} />
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <img 
                    src={img} 
                    alt={email} 
            />
            </div>
        </article>
    )
}