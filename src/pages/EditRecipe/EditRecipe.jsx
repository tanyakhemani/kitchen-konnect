import { Link, useNavigate, useParams } from "react-router-dom";
import RecipeDetails from "../../components/RecipeDetails/RecipeDetails";
import axios from "axios";
import { useEffect, useState } from "react";
import "./EditRecipe.scss";

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
                const formData = new FormData();
                formData.append('title', editedRecipe.title);
                formData.append('image', editedRecipe.image);
                formData.append('description', editedRecipe.description);
                formData.append('ingredients', editedRecipe.ingredients);
                formData.append('steps', editedRecipe.steps);
                formData.append('likes', editedRecipe.likes);

                const response = await axios.put(`http://localhost:8080/api/recipes/${id}`, formData);
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
        scroll({top:0});
    }, [id])

    return(
        <>
            <section className="editRecipe">
                <RecipeDetails recipe={editedRecipe} saveRecipe={setEditedRecipe} errors={errors}/>
                
                <div className="recipeDetails">
                    <div className="recipeDetails__buttons">
                        <div className="recipeDetails__buttonBox">
                            <button className="recipeDetails__button cancelbtn" onClick={()=>navigate(-1)}>Cancel</button>
                        </div>
                        
                        <div className="recipeDetails__buttonBox">
                            <button className="recipeDetails__button savebtn" onClick={handleSave}>Save</button>
                        </div>
                    </div>
                </div>
            </section>
            
            
        </>
    )
}
export default EditRecipe;