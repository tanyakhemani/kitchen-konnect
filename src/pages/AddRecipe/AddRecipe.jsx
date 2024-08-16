import { Link } from "react-router-dom";
import RecipeDetails from "../../components/RecipeDetails/RecipeDetails";

const AddRecipe = () => {
    return(
        <>
            <RecipeDetails />

            <div className="recipeDetails">
                <div className="recipeDetails__buttons">
                    <Link className="recipeDetails__buttonBox" to={"/back"} >
                        <img className="recipeDetails__button backbtn" src="/src/assets/Icons/back-arrow.svg" alt="Back Icon" />
                    </Link>

                    <Link className="recipeDetails__buttonBox" to={"/add"} >
                        <button className="recipeDetails__button cancelbtn">Cancel</button>
                    </Link>
                    
                    <Link className="recipeDetails__buttonBox" to={"/add"}>
                        <button className="recipeDetails__button savebtn">Add</button>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default AddRecipe;