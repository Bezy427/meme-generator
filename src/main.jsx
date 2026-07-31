import {useState} from "react"

export default function Main() {
    const [ingredients, setIngredients] = useState([])

    const ingredientsListItems = ingredients.map(i => (
      <li key={i}>{i}</li>  
    ))

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [
            ...prevIngredients,
            newIngredient
            ]
        )
    }

    return (
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    arial-label="Add ingredients" 
                    name="ingredient"
                    />
                <button>Add Ingredient</button>   
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}