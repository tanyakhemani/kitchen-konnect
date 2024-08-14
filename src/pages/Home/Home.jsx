import Card from "../../components/Card/Card";
import Search from "../../components/Search/Search";
import "./Home.scss";

const Home = () => {

    return(
        <>
            <section className="home">
                <Search />
                <div className="home__allCards">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </section>
            
            
        </>
    )
}
export default Home;