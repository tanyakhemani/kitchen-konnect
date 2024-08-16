import { Link } from "react-router-dom";
import RecipeDetails from "../../components/RecipeDetails/RecipeDetails";
import "./ViewRecipe.scss";

const ViewRecipe = () => {

    return(
        <>
            <RecipeDetails />
            
            <div className="viewRecipe__icons">
                <Link to={"/back"}>
                    <img className="viewRecipe__icon viewRecipe__back" src="/src/assets/Icons/back-arrow.svg" alt="Back Icon" />
                </Link>
                <img className="viewRecipe__icon" src="/src/assets/Icons/like.svg" alt="Likes Icon" />
                <img className="viewRecipe__icon" src="/src/assets/Icons/edit.svg" alt="Edit Icon" />
                <img className="viewRecipe__icon viewRecipe__upload" src="/src/assets/Icons/upload.svg" alt="Upload Icon" />
                <img className="viewRecipe__icon" src="/src/assets/Icons/icon-delete.svg" alt="Delete Icon" />
            </div>
        </>
    )
}
export default ViewRecipe;