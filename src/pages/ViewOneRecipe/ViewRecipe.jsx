import { Link, useParams } from "react-router-dom";
import RecipeDetails from "../../components/RecipeDetails/RecipeDetails";
import "./ViewRecipe.scss";
import axios from "axios";
import { useEffect, useState } from "react";

const ViewRecipe = () => {

    const { id } = useParams();

    const[ recipe, setRecipe ] = useState({
        image: null,
        title:"",
        description: "",
        ingredients: "",
        steps: ""
    });

    const loadRecipe = async() => {
        const response = await axios.get(`http://localhost:8080/api/recipes/${id}`)
        const oneRecipe = response.data;
        setRecipe(oneRecipe);
    }

    useEffect(()=> {
        loadRecipe();
    }, [id])

    return(
        <>
            <RecipeDetails recipe={recipe} saveRecipe={setRecipe} viewOnly={true} />
            
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