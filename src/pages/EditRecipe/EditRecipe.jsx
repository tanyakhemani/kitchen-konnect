import { Link } from "react-router-dom";
import RecipeDetails from "../../components/RecipeDetails/RecipeDetails";

const EditRecipe = () => {

    return(
        <>
            <RecipeDetails />
            
            <div className="recipeDetails">
                <div className="recipeDetails__buttons">
                    <Link className="recipeDetails__buttonBox" to={"/back"} >
                        <img className="recipeDetails__button" src="/src/assets/Icons/back-arrow.svg" alt="Back Icon" />
                    </Link>

                    <Link className="recipeDetails__buttonBox" to={"/add"} >
                        <button className="recipeDetails__button cancelbtn">Cancel</button>
                    </Link>
                    
                    <Link className="recipeDetails__buttonBox" to={""}>
                        <button className="recipeDetails__button savebtn">Save</button>
                    </Link>
                </div>
            </div>
            
        </>
    )
}
export default EditRecipe;