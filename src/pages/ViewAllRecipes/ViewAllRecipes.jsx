import axios from "axios";
import "./ViewAllRecipes.scss";
import { useEffect, useState } from "react";
import Search from "../../components/Search/Search";
import ViewCard from "../../components/ViewCard/ViewCard";
import { useLocation } from "react-router-dom";

const ViewAllRecipes = () => {

    const [recipeList, setRecipeList] = useState();
    const [searchValue, setSearchValue] = useState("");

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    // const [searchParam, setSearchParam] = ;

    const listRecipes = async() => {
        const response = await axios.get("http://localhost:8080/api/recipes")
        const result = response.data;
        console.log("call api")
        setRecipeList(result);
    }
    
    useEffect(()=>{
        listRecipes();
        if (queryParams.size!==0) {
            setSearchValue(queryParams.get('searchParam'));            
        }
        scroll({top:0});
    }, []);

    return(
        <>
            <section className="allRecipes">
                <div className="allRecipes__top">
                    <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
                </div>
                
                <div className="allRecipes__viewCards">
                {
                    recipeList?.filter((recipe) => (
                        recipe.title?.toLowerCase().includes(searchValue?.toLowerCase()) ||
                        recipe.description?.toLowerCase().includes(searchValue?.toLowerCase())
                    ))
                    .map((recipe)=>(
                        <ViewCard key={recipe.id} recipe={recipe}/>
                    ))
                }
                </div>
                
                
            </section>
        </>
    )
}
export default ViewAllRecipes;