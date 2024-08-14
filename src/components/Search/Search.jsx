import "./Search.scss";

const Search = () => {

    return(
        <>
        <section className="search">
            <div className="search__searchBox">
                <img className="search__searchIcon" src="/src/assets/Icons/search.svg" alt="Search Icon" />
                <input className="search__searchInput" type="text" placeholder="Search Recipes" />
            </div>
        </section>  
        </>
    )
}
export default Search;