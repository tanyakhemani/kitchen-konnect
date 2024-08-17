import { Link, Navigate, useNavigate } from "react-router-dom";
import RecipeDetails from "../../components/RecipeDetails/RecipeDetails";
import { useState } from "react";
import axios from "axios";

const AddRecipe = () => {

    const[errors, setErrors] = useState({
        title: false,
        ingredients: false,
        steps: false
    });

    const [newRecipe, setNewRecipe] = useState({
        image: null,
        title: "",
        description: "",
        ingredients: "",
        steps: ""
    });

    const validateRecipe = () => {
        let isValid = true;
        const currentErrors = {};

        if(!newRecipe.title || newRecipe.title.trim()===''){
            currentErrors.title = true;
            isValid = false;
        }
        if(!newRecipe.ingredients || newRecipe.ingredients.trim()===''){
            currentErrors.ingredients = true;
            isValid = false;
        }
        if(!newRecipe.steps || newRecipe.steps.trim()===''){
            currentErrors.steps = true;
            isValid = false;
        }
        console.log(currentErrors)
        
        setErrors(currentErrors);
        return isValid;
    }

    const handleAddRecipe = async()=>{
        try {
            if(validateRecipe()){
                const response = await axios.post("http://localhost:8080/api/recipes", newRecipe);
                alert(`Recipe:${response.data.title} added`);  
            }else{
                alert("Invalid field value");
            } 
        } catch (error) {
            alert(`Cannot add recipe, some error occured`);
        }
    }
        
    const navigate = useNavigate();

    return(
        <>
            <RecipeDetails recipe={newRecipe} saveRecipe={setNewRecipe} errors={errors} />

            <div className="recipeDetails">
                <div className="recipeDetails__buttons">
                    <img className="recipeDetails__button backbtn" src="/src/assets/Icons/back-arrow.svg" alt="Back Icon" onClick= {() => navigate(-1)}/>

                    <Link className="recipeDetails__buttonBox" to={"/"} >
                        <button className="recipeDetails__button cancelbtn">Cancel</button>
                    </Link>
                    
                    <div className="recipeDetails__buttonBox">
                        <button className="recipeDetails__button savebtn" onClick={handleAddRecipe}>Add</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddRecipe;