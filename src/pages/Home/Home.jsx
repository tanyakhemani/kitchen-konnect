import axios from "axios";
import Card from "../../components/Card/Card";
import Search from "../../components/Search/Search";
import "./Home.scss";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {

    const [recipes, setRecipes] = useState();

    const someFunction = async() => {
        const response = await axios.get("http://localhost:8080/api/recipes");
        const allRecipes = response.data;
        
        const topRecipes = allRecipes.sort((a,b)=>(
            b.likes - a.likes
        ))
        topRecipes.splice(6, topRecipes.length-6)
        
        setRecipes(topRecipes);
    }

    useEffect(()=>{
        someFunction();
    },[])
    
    return(
        <>
            <section className="home">
                <Search />
                <div className="home__allCards">
                    {
                        recipes?.map((recipe)=>(
                            <Card key={recipe.id} card={recipe} />
                        ))
                    }
    
                </div>
            </section>
            
            
        </>
    )
}
export default Home;