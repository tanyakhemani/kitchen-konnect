import axios from "axios";
import "./ViewAllRecipes.scss";
import { useEffect, useState } from "react";
import Search from "../../components/Search/Search";
import ViewCard from "../../components/ViewCard/ViewCard";
import { useNavigate } from "react-router-dom";

const ViewAllRecipes = () => {

    const [recipeList, setRecipeList] = useState();
    const [searchValue, setSearchValue] = useState("");

    const listRecipes = async() => {
        const response = await axios.get("http://localhost:8080/api/recipes")
        const result = response.data;
        console.log("call api")
        setRecipeList(result);
    }
    
    useEffect(()=>{
        listRecipes();
        scroll({top:0});
    }, []);
    
    const navigate = useNavigate();

    return(
        <>
            <section className="allRecipes">
                <div className="allRecipes__top">
                    <img className="allRecipes__backBtn" src="/src/assets/Icons/back-arrow.svg" alt="Back Icon" onClick={()=> navigate(-1)}/>
                    <Search setSearchValue={setSearchValue}/>
                </div>
                {
                    recipeList?.filter((recipe) => (
                        recipe.title?.toLowerCase().includes(searchValue?.toLowerCase()) ||
                        recipe.description?.toLowerCase().includes(searchValue?.toLowerCase())
                    ))
                    .map((recipe)=>(
                        <ViewCard key={recipe.id} recipe={recipe}/>
                    ))
                }
                
            </section>
        </>
    )
}
export default ViewAllRecipes;