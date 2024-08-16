import { Link } from "react-router-dom";
import "./RecipeDetails.scss";

const RecipeDetails = () => {

    return(
        <>
        <section className="recipeDetails">
            <div className="recipeDetails__detailsBox">
                <div className="recipeDetails__imageBox">
                    <img className="recipeDetails__image" src="" alt="" />
                </div>
                <div className="recipeDetails__details">
                    <input className="recipeDetails__title" type="text" placeholder="Title" />
                    <textarea className="recipeDetails__description" type="text" placeholder="Description" />
                </div>
            </div>
            <div className="recipeDetails__wrapper">
                <textarea className="recipeDetails__textarea ingredients" placeholder="Ingredients" />
                <textarea className="recipeDetails__textarea" placeholder="Steps" />
            </div>
        </section>
        </>
    )
}
export default RecipeDetails;