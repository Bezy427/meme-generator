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

// const person = {
//     img: "./images/mr-whickerson.png",
//     name: "Mr. Whickerson",
//     phone: "(800) 555-1234",
//     email: "mr.whcikerson@catnap.com"
// }

// const {img, name} = person
// console.log(img)