import { Link } from "react-router-dom";
import "./ListOneRecipe.scss";

const ListOneRecipe = () => {

    return(
        <>
            <div className="viewRecipe">
                <div className="viewRecipe__imgBox">
                    <img className="viewRecipe__img" src="" alt="Image" />
                </div>
                <div className="viewRecipe__detailBox">
                    <div className="viewRecipe__details">
                        <input type="text" className="viewRecipe__title" placeholder="Title" />
                    </div>
                    <div className="viewRecipe__descriptionBox">
                        <textarea className="viewRecipe__description" placeholder="Description" />
                    </div>
                </div>
            </div>
            <div className="viewRecipe__wrapper">
                <textarea className="viewRecipe__textarea viewRecipe__ingredients" placeholder="Ingredients" />
                <textarea className="viewRecipe__textarea" placeholder="Steps" />
            </div> 
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
export default ListOneRecipe;