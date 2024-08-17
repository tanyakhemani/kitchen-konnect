import axios from "axios";
import "./ViewAllRecipes.scss";
import { useEffect, useState } from "react";
import Search from "../../components/Search/Search";
import ViewCard from "../../components/ViewCard/ViewCard";

const ViewAllRecipes = () => {

    const [recipeList, setRecipeList] = useState();

    const listRecipes = async() => {
        const response = await axios.get("http://localhost:8080/api/recipes")
        const result = response.data;
        setRecipeList(result);
    }
    
    useEffect(()=>{
        listRecipes();
    }, []);
    

    return(
        <>
            <section className="allRecipes">
                <div className="allRecipes__top">
                    <img className="allRecipes__backBtn" src="/src/assets/Icons/back-arrow.svg" alt="Back Icon" onClick={()=> navigate(-1)}/>
                    <Search />
                </div>
                {
                    recipeList?.map((recipe)=>(
                        <ViewCard key={recipe.id}
                        recipe={recipe}/>
                    ))
                }
                
            </section>
        </>
    )
}
export default ViewAllRecipes;