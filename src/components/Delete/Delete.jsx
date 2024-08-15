import { Link } from "react-router-dom";
import "./Delete.scss";

const Delete = () => {

    return(
        <>
            <section className="deleteRecipe">
                <div className="deleteRecipe__msg">Are you sure you want to Delete this Recipe?</div>
                <div className="deleteRecipe__buttons">
                    <Link className="deleteRecipe__buttonBox" to={"/add"} >
                        <button className="deleteRecipe__button cancelbtn">Cancel</button>
                    </Link>
                    
                    <Link className="deleteRecipe__buttonBox" to={"/save"}>
                        <button className="deleteRecipe__button deletebtn">Delete</button>
                    </Link>
                </div>
            </section>
        </>
    )
}
export default Delete;