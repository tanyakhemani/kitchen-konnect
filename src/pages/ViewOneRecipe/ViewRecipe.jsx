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
                <Link to={"/edit/:id"}>
                    <img className="viewRecipe__icon" src="/src/assets/Icons/edit.svg" alt="Edit Icon" />
                </Link>
                <Link to={""}>
                    <img className="viewRecipe__icon viewRecipe__upload" src="/src/assets/Icons/share.svg" alt="Share Icon" />
                </Link>
                <Link to={"/delete/:id"}>
                    <img className="viewRecipe__icon" src="/src/assets/Icons/icon-delete.svg" alt="Delete Icon" />
                </Link>
            </div>
        </>
    )
}
export default ViewRecipe;