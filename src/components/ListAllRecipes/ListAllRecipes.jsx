import ViewCard from "../ViewCard/ViewCard";
import "./ListAllRecipes.scss";

const ListAllRecipes = () => {

    return(
        <>
        <section className="allRecipes">
            <div className="allRecipes__top">
                <div className="allRecipes__backbtn">
                    <button className="allRecipes__back">Back</button>
                </div>
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