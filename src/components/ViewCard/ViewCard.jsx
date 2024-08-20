import { Link } from "react-router-dom";
import "./ViewCard.scss";
import axios from "axios";
import { useEffect, useState } from "react";

const ViewCard = ({recipe}) => {

    const [recipeImage, setRecipeImage] = useState("/src/assets/icons/img-placeholder.svg");

    const loadRecipeImage = async() => {
        const response = await axios.get(`http://localhost:8080/api/recipes/${recipe.id}/images`);
        const imageData = response.data;

        if (imageData){
            const image = `data:image/${imageData.image_type};base64,${imageData.image}`;
            setRecipeImage(image);
        }
    }

    const handleShare = (id) => {
        const recipeUrl = `${window.location}/${id}`;

        navigator.clipboard.writeText(recipeUrl).then(()=>{
            alert(`Recipe link copied to clipboard: ${recipeUrl}`);
        })
    }

    useEffect(()=>{
        loadRecipeImage();
    }, [recipe]);

    return(
        <>
            <div className="viewCard">
                <div className="viewCard__wrapper">
                    <div className="viewCard__imgBox">
                        <img className="viewCard__img" src={recipeImage} alt="Image" />
                    </div>
                    <div className="viewCard__detailBox">
                        <div className="viewCard__details">
                            <Link className="viewCard__titleBox" to={`/view/${recipe.id}`}>
                                <div type="text" className="viewCard__title" placeholder="Title">{recipe.title}</div>
                            </Link>
                            <Link to={`/delete/${recipe.id}`}>
                                <img className="viewCard__delete" src="/src/assets/Icons/icon-delete.svg" alt="Delete Icon" />
                            </Link>
                        </div>
                        <div className="viewCard__descriptionBox">
                            <div className="viewCard__description" placeholder="Description">{recipe.description}</div>
                            <div className="viewCard__icons">
                                <img className="viewCard__icon" src="/src/assets/Icons/like.svg" alt="Likes Icon" />
                                <Link to={`/edit/${recipe.id}`}>
                                    <img className="viewCard__icon" src="/src/assets/Icons/edit.svg" alt="Edit Icon" />
                                </Link>
                                <img className="viewCard__icon viewCard__upload" src="/src/assets/Icons/share.svg" alt="Share Icon" onClick={() => handleShare(recipe.id)} />
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default ViewCard;