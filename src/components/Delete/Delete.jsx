import { Link, useNavigate } from "react-router-dom";
import "./Delete.scss";

const Delete = () => {

    const navigate = useNavigate();

    return(
        <>
            <section className="deleteRecipe">
                <div className="deleteRecipe__msg">Are you sure you want to Delete this Recipe?</div>
                <div className="deleteRecipe__buttons">
                    <button className="deleteRecipe__button cancelbtn" onClick={()=> navigate(-1)}>Cancel</button>
                    
                    <Link className="deleteRecipe__buttonBox" to={"/delete/:id"}>
                        <button className="deleteRecipe__button deletebtn">Delete</button>
                    </Link>
                </div>
            </section>
        </>
    )
}
export default Delete;