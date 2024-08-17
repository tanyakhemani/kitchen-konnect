import { Link, useNavigate, useParams } from "react-router-dom";
import RecipeDetails from "../../components/RecipeDetails/RecipeDetails";
import axios from "axios";
import { useEffect, useState } from "react";

const EditRecipe = () => {

    const navigate = useNavigate();

    const[errors, setErrors] = useState({
        title: false,
        ingredients: false,
        steps: false
    });

    const { id } = useParams();

    const [ editedRecipe, setEditedRecipe ] = useState({
        image: null,
        title: "",
        description: "",
        ingredients: "",
        steps: ""
    });

    const loadRecipeToBeEdited = async() => {
        const response = await axios.get(`http://localhost:8080/api/recipes/${id}`);
        setEditedRecipe(response.data);
    }

    const handleSave = async() => {
        try {
            if(validateRecipe()){
                delete editedRecipe["updated_at"];
                delete editedRecipe["created_at"];
                const response = await axios.put(`http://localhost:8080/api/recipes/${id}`, editedRecipe);
                alert(`${response.data.title} saved`);
            }else{
                alert("Invalid field value");
            } 
        } catch (error) {
            alert(`Cannot edit recipe, some error occured`);
        }
    }

    const validateRecipe = () => {
        let isValid = true;
        const currentErrors = {};

        if(!editedRecipe.title || editedRecipe.title.trim()===''){
            currentErrors.title = true;
            isValid = false;
        }
        if(!editedRecipe.ingredients || editedRecipe.ingredients.trim()===''){
            currentErrors.ingredients = true;
            isValid = false;
        }
        if(!editedRecipe.steps || editedRecipe.steps.trim()===''){
            currentErrors.steps = true;
            isValid = false;
        }
        console.log(currentErrors)
        
        setErrors(currentErrors);
        return isValid;
    }

    useEffect(()=> {
        loadRecipeToBeEdited();
    }, [id])

    return(
        <>
            <RecipeDetails recipe={editedRecipe} saveRecipe={setEditedRecipe} errors={errors}/>
            
            <div className="recipeDetails">
                <div className="recipeDetails__buttons">
                    <img className="recipeDetails__button" src="/src/assets/Icons/back-arrow.svg" alt="Back Icon" onClick={()=>navigate(-1)}/>

                    <Link className="recipeDetails__buttonBox" to={"/"} >
                        <button className="recipeDetails__button cancelbtn">Cancel</button>
                    </Link>
                    
                    <Link className="recipeDetails__buttonBox" to={""}>
                        <button className="recipeDetails__button savebtn" onClick={handleSave}>Save</button>
                    </Link>
                </div>
            </div>
            
        </>
    )
}
export default EditRecipe;