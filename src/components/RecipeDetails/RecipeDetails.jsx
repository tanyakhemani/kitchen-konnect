import { Link } from "react-router-dom";
import "./RecipeDetails.scss";

const RecipeDetails = () => {

    return(
        <>
        <section className="addRecipe">
            <div className="addRecipe__detailsBox">
                <div className="addRecipe__imageBox">
                    <img className="addRecipe__image" src="" alt="" />
                </div>
                <div className="addRecipe__details">
                    <input className="addRecipe__title" type="text" placeholder="Title" />
                    <textarea className="addRecipe__description" type="text" placeholder="Description" />
                </div>
            </div>
            <div className="addRecipe__wrapper">
                <textarea className="addRecipe__textarea ingredients" placeholder="Ingredients" />
                <textarea className="addRecipe__textarea" placeholder="Steps" />
            </div>
            <div className="addRecipe__buttons">
                <Link className="addRecipe__buttonBox" to={"/back"} >
                    <img className="addRecipe__button" src="/src/assets/Icons/back-arrow.svg" alt="Back Icon" />
                </Link>

                <Link className="addRecipe__buttonBox" to={"/add"} >
                    <button className="addRecipe__button cancelbtn">Cancel</button>
                </Link>
                
                <Link className="addRecipe__buttonBox" to={""}>
                    <button className="addRecipe__button savebtn">Save</button>
                </Link>
            </div>
        </section>
        </>
    )
}
export default RecipeDetails;