import "./Search.scss";

const Search = ({setSearchValue}) => {

    const handleSearch = (event) => {
        const searchValue = event.target.value;
        setSearchValue(searchValue);
        console.log(searchValue);
    }

    return(
        <>
        <section className="search">
            <div className="search__searchBox">
                <img className="search__searchIcon" src="/src/assets/Icons/search.svg" alt="Search Icon" />
                <input className="search__searchInput" type="text" placeholder="Search Recipes" onChange={handleSearch}/>
            </div>
        </section>  
        </>
    )
}
export default Search;