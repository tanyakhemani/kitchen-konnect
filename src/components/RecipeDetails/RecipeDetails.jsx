import "./RecipeDetails.scss";

const RecipeDetails = ({recipe, saveRecipe, errors, viewOnly}) => {

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

    return(
        <>
        <section className="recipeDetails">
            <div className="recipeDetails__detailsBox">
                <div className="recipeDetails__imageBox">
                    <img className="recipeDetails__image" src="" alt="" />
                </div>
                <div className="recipeDetails__details">
                    <div>
                        <h3 className="recipeDetails__heading">Title</h3>
                        <input className={`recipeDetails__title ${errors?.title? 'errorBox':''}`} type="text" placeholder="Title" value={recipe.title} onChange={handleChangeTitle} disabled={viewOnly} />
                        { errors?.title && <div className="errorMsg">Please fill in the details</div> }
                    </div>
                    <div>
                        <h3 className="recipeDetails__heading">Description</h3>
                        <textarea className="recipeDetails__description" type="text" placeholder="Description" value={recipe.description} onChange={handleChangeDescription} disabled={viewOnly} />
                    </div>
                </div>
            </div>
            <div className="recipeDetails__wrapper">
                <div>
                    <h3 className="recipeDetails__heading">Ingredients</h3>
                    <textarea className={`recipeDetails__textarea ingredients ${errors?.ingredients? 'errorBox' : ''}`} placeholder="Ingredients" value={recipe.ingredients} onChange={handleChangeIngredients} disabled={viewOnly} />
                    { errors?.ingredients && <div className="errorMsg">Please fill in the details</div> }
                </div>
                
                <div>
                    <h3 className="recipeDetails__heading">Steps</h3>
                    <textarea className={`recipeDetails__textarea ${errors?.steps? 'errorBox' : ''}`} placeholder="Steps" value={recipe.steps} onChange={handleChangeSteps} disabled={viewOnly} />
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