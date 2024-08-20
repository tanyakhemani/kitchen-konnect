import { Link } from "react-router-dom";
import "./Card.scss"
import { useEffect, useState } from "react";
import axios from "axios";

const Card = ({ card }) => {

    const [recipeImage, setRecipeImage] = useState("/public/vite.svg");

    const loadRecipeImage = async() => {
        const response = await axios.get(`http://localhost:8080/api/recipes/${card.id}/images`)
        const imgData = response.data;

        if(imgData){
            const image = `data:image/${imgData.image_type};base64,${imgData.image}`;
            setRecipeImage(image);
        }
    }

    useEffect(()=>{
        loadRecipeImage();
    }, [card])

    return(
        <>
            <Link className="card" to={`/view/${card.id}`}>
                <img className="card__img" src={recipeImage} alt="" />
                <div className="card__title">{card?.title || 'Some title'}</div>
            </Link>
        </>
    )
}
export default Card;