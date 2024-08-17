import { Link, useNavigate } from "react-router-dom";
import ViewCard from "../ViewCard/ViewCard";
import "./ListAllRecipes.scss";
import Search from "../Search/Search";

const ListAllRecipes = () => {

    const navigate = useNavigate();

    return(
        <>
        <section className="allRecipes">
            <div className="allRecipes__top">
                <img className="allRecipes__backBtn" src="/src/assets/Icons/back-arrow.svg" alt="Back Icon" onClick={()=> navigate(-1)}/>
                <Search />
            </div>
            <ViewCard />
        </section>
        </>
    )
}
export default ListAllRecipes;