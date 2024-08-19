import { Link, useNavigate, useParams } from "react-router-dom";
import RecipeDetails from "../../components/RecipeDetails/RecipeDetails";
import "./ViewRecipe.scss";
import axios from "axios";
import { useEffect, useState } from "react";

const ViewRecipe = () => {

    const navigate = useNavigate();

    const { id } = useParams();

    const[ recipe, setRecipe ] = useState({
        image: null,
        title:"",
        description: "",
        ingredients: "",
        steps: ""
    });

    const loadRecipe = async() => {
        try {
            const response = await axios.get(`http://localhost:8080/api/recipes/${id}`)
            const oneRecipe = response.data;
            setRecipe(oneRecipe);
        } catch (error) {
            alert(`Recipe with ID ${id} not found`);
            navigate("/view");
        }
        
    }

    const handleShare = () => {
        const recipeUrl = window.location;

        navigator.clipboard.writeText(recipeUrl).then(()=>{
            alert(`Recipe link copied to clipboard: ${recipeUrl}`);
        })
    }

    useEffect(()=> {
        loadRecipe();
        scroll({top:0})
    }, [id])

    return(
        <>
            <section className="viewRecipe">
                <RecipeDetails recipe={recipe} saveRecipe={setRecipe} viewOnly={true} />
                
                <div className="viewRecipe__icons">
                    <img className="viewRecipe__icon viewRecipe__back" src="/src/assets/Icons/back-arrow.svg" alt="Back Icon" onClick={()=> navigate(-1)}/>
                    <img className="viewRecipe__icon" src="/src/assets/Icons/like.svg" alt="Likes Icon" />
                    <Link to={`/edit/${recipe.id}`}>
                        <img className="viewRecipe__icon" src="/src/assets/Icons/edit.svg" alt="Edit Icon" />
                    </Link>
                    <img className="viewRecipe__icon viewRecipe__upload" src="/src/assets/Icons/share.svg" alt="Share Icon" onClick={handleShare}/>
                    <Link to={"/delete/:id"}>
                        <img className="viewRecipe__icon" src="/src/assets/Icons/icon-delete.svg" alt="Delete Icon" />
                    </Link>
                </div>
            </section>
            
        </>
    )
}
export default ViewRecipe;