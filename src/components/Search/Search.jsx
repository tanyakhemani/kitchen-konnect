import { useNavigate } from "react-router-dom";
import "./Search.scss";

const Search = ({searchValue, setSearchValue}) => {

    const navigate = useNavigate();

    const handleSearch = (event) => {
        const searchVal = event.target.value;
        setSearchValue(searchVal);
    }

    const handleKeyDown = (event) => {
        if(event.key === "Enter"){
            navigate(`/view?searchParam=${searchValue}`)
        }
    }


    return(
        <>
        <section className="search">
            <div className="search__searchBox">
                <img className="search__searchIcon" src="/src/assets/Icons/search.svg" alt="Search Icon" />
                <input className="search__searchInput" type="text" placeholder="Search Recipes" onChange={handleSearch} onKeyDown={handleKeyDown} />
            </div>
        </section>  
        </>
    )
}
export default Search;