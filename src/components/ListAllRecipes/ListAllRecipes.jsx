import { Link } from "react-router-dom";
import ViewCard from "../ViewCard/ViewCard";
import "./ListAllRecipes.scss";
import Search from "../Search/Search";

const ListAllRecipes = () => {

    return(
        <>
        <section className="allRecipes">
            <div className="allRecipes__top">
                <Link to={"/back"}>
                    <img className="allRecipes__backBtn" src="/src/assets/Icons/back-arrow.svg" alt="Back Icon" />
                </Link>
                <Search />
            </div>
            <ViewCard />
        </section>
        </>
    )
}
export default ListAllRecipes;