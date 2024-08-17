import { Link } from "react-router-dom";
import "./RecipeDetails.scss";
import { useEffect, useState } from "react";

const RecipeDetails = ({newRecipe, setNewRecipe, errors}) => {

    const handleChangeTitle = (event)=> {
        const title = event.target.value;
        setNewRecipe({...newRecipe, title});
    }

    const handleChangeDescription = (event)=> {
        const description = event.target.value;
        setNewRecipe({...newRecipe, description});
    }

    const handleChangeIngredients = (event)=>{
        const ingredients = event.target.value;
        setNewRecipe({...newRecipe, ingredients});
    }

    const handleChangeSteps = (event)=>{
        const steps = event.target.value;
        setNewRecipe({...newRecipe, steps});
    }

    return(
        <>
        <section className="recipeDetails">
            <div className="recipeDetails__detailsBox">
                <div className="recipeDetails__imageBox">
                    <img className="recipeDetails__image" src="" alt="" />
                </div>
                <div className="recipeDetails__details">
                    <div>
                        <input className={`recipeDetails__title ${errors.title? 'fieldError':''}`} type="text" placeholder="Title" value={newRecipe.title} onChange={handleChangeTitle} />
                        { errors.title && <div className="errorMsg">Please fill in the details</div> }
                    </div>
                    <textarea className="recipeDetails__description" type="text" placeholder="Description" value={newRecipe.description} onChange={handleChangeDescription}/>
                </div>
            </div>
            <div className="recipeDetails__wrapper">
                <div>
                    <textarea className={`recipeDetails__textarea ingredients ${errors.ingredients? 'fieldError' : ''}`} placeholder="Ingredients" value={newRecipe.ingredients} onChange={handleChangeIngredients} />
                    { errors.ingredients && <div className="errorMsg">Please fill in the details</div> }
                </div>
                
                <div>
                    <textarea className={`recipeDetails__textarea ${errors.steps? 'fieldError' : ''}`} placeholder="Steps" value={newRecipe.steps} onChange={handleChangeSteps}/>
                    { errors.steps && (
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