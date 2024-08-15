import { Link } from "react-router-dom";
import ViewCard from "../ViewCard/ViewCard";
import "./ListAllRecipes.scss";

const ListAllRecipes = () => {

    return(
        <>
        <section className="allRecipes">
            <div className="allRecipes__top">
                <Link to={"/back"}>
                    <img className="allRecipes__backBtn" src="/src/assets/Icons/back-arrow.svg" alt="Back Icon" />
                </Link>
                <div className="allRecipes__searchBox">
                    <img className="allRecipes__searchIcon" src="/src/assets/Icons/search.svg" alt="Search Icon" />
                    <input className="allRecipes__searchInput" type="text" placeholder="Search Recipes"/>
                </div>
            </div>
            <ViewCard />
        </section>
        </>
    )
}
export default ListAllRecipes;