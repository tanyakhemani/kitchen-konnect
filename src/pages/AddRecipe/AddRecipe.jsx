import { Link, Navigate, useNavigate } from "react-router-dom";
import RecipeDetails from "../../components/RecipeDetails/RecipeDetails";
import { useEffect, useState } from "react";
import axios from "axios";
import "./AddRecipe.scss";

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
        
        setErrors(currentErrors);
        return isValid;
    }

    const handleAddRecipe = async()=>{
        try {
            if(validateRecipe()){
                const formData = new FormData();
                formData.append('title', newRecipe.title);
                formData.append('image', newRecipe.image);
                formData.append('description', newRecipe.description);
                formData.append('ingredients', newRecipe.ingredients);
                formData.append('steps', newRecipe.steps);
                
                const response = await axios.post("http://localhost:8080/api/recipes", formData);
                alert(`Recipe:${response.data.title} added`);  
            }else{
                alert("Invalid field value");
            } 
        } catch (error) {
            alert(`Cannot add recipe, some error occured`);
        }
    }
        
    const navigate = useNavigate();

    useEffect(()=>{
        scroll({top:0});
    }, [])

    return(
        <>
            <section className="addRecipe">
                <RecipeDetails recipe={newRecipe} saveRecipe={setNewRecipe} errors={errors} />

                <div className="recipeDetails">
                    <div className="recipeDetails__buttons">
                        <Link className="recipeDetails__buttonBox" to={"/"} >
                            <button className="recipeDetails__button cancelbtn">Cancel</button>
                        </Link>
                        
                        <div className="recipeDetails__buttonBox">
                            <button className="recipeDetails__button savebtn" onClick={handleAddRecipe}>Add</button>
                        </div>
                    </div>
                </div>

            </section>
            
        </>
    )
}
export default AddRecipe;