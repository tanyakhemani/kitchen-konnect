import { useEffect, useState } from "react";
import "./RecipeDetails.scss";
import axios from "axios";

const RecipeDetails = ({recipe, saveRecipe, errors, viewOnly}) => {
    
    const [recipeImage, setRecipeImage] = useState("/src/assets/icons/img-placeholder.svg");

    const loadRecipeImage = async() => {
        const response = await axios.get(`http://localhost:8080/api/recipes/${recipe.id}/images`)
        const imgData = response.data;

        if(imgData){
            const image = `data:image/${imgData.image_type};base64,${imgData.image}`;
            setRecipeImage(image);
        }

    }

    useEffect(()=>{
        if (recipe && recipe.id) {
            loadRecipeImage();            
        }
    }, [recipe])

    const handleChangeTitle = (event)=> {
        if(!viewOnly){
            const title = event.target.value;
            saveRecipe({...recipe, title});
        }  
    }

    const handleChangeDescription = (event)=> {
        if(!viewOnly){
            const description = event.target.value;
            saveRecipe({...recipe, description});
        }  
    }

    const handleChangeIngredients = (event)=>{
        if(!viewOnly){
            const ingredients = event.target.value;
            saveRecipe({...recipe, ingredients});
        }
    }

    const handleChangeSteps = (event)=>{
        if(!viewOnly){
            const steps = event.target.value;
            saveRecipe({...recipe, steps});
        }
    }

    const handleSelectedFile = (event) => {
        if (!viewOnly) {
            saveRecipe( {...recipe, image: event.target.files[0]} );
        }
    }

    return(
        <>
        <section className="recipeDetails">
            <div className="recipeDetails__detailsBox">
                <div className="recipeDetails__imageBox">
                    <img className="recipeDetails__image" src={recipeImage} alt="" />
                    {!viewOnly && (<input className="recipeDetails__fileUpload" type="file" onChange={handleSelectedFile} />)}
                </div>
                <div className="recipeDetails__details">
                    <div>
                        <h3 className="recipeDetails__heading">Title</h3>
                        <input className={`recipeDetails__title ${errors?.title? 'errorBox':''}`} type="text" placeholder="Title" value={recipe.title || ""} onChange={handleChangeTitle} disabled={viewOnly} />
                        { errors?.title && <div className="errorMsg">Please fill in the details</div> }
                    </div>
                    <div>
                        <h3 className="recipeDetails__heading">Description</h3>
                        <textarea className="recipeDetails__description" type="text" placeholder="Description" value={recipe.description || ""} onChange={handleChangeDescription} disabled={viewOnly} />
                    </div>
                </div>
            </div>
            <div className="recipeDetails__wrapper">
                <div>
                    <h3 className="recipeDetails__heading">Ingredients</h3>
                    <textarea className={`recipeDetails__textarea ingredients ${errors?.ingredients? 'errorBox' : ''}`} placeholder="Ingredients" value={recipe.ingredients || ""} onChange={handleChangeIngredients} disabled={viewOnly} />
                    { errors?.ingredients && <div className="errorMsg">Please fill in the details</div> }
                </div>
                
                <div>
                    <h3 className="recipeDetails__heading">Steps</h3>
                    <textarea className={`recipeDetails__textarea ${errors?.steps? 'errorBox' : ''}`} placeholder="Steps" value={recipe.steps || ""} onChange={handleChangeSteps} disabled={viewOnly} />
                    { errors?.steps && (
                        <>
                            <div></div>
                            <div className="errorMsg">Please fill in the details</div>
                        </>
                    )}
                </div>
                
            </div>
        </section>
        </>
    )
}
export default RecipeDetails;