import { Link, useNavigate, useParams } from "react-router-dom";
import "./Delete.scss";
import axios from "axios";
import { useEffect, useState } from "react";

const Delete = () => {

    const navigate = useNavigate();

    const { id } = useParams();

    const [ recipe, setRecipe ] = useState({
        image: null,
        title: "",
        description: "",
        ingredients: "",
        steps: ""
    });

    const loadRecipe = async() => {
        const response = await axios.get(`http://localhost:8080/api/recipes/${id}`);
        setRecipe(response.data);
        scroll({top:0})
    }

    const handleDelete = async() => {
        await axios.delete(`http://localhost:8080/api/recipes/${id}`)
        alert(`Recipe Deleted`)
        navigate(-1);
    }

    useEffect(() => {
        loadRecipe();
    }, [id])

    return(
        <>
            <section className="deleteRecipe">
                <div className="deleteRecipe__msg">Are you sure you want to delete {recipe.title} recipe?</div>
                <div className="deleteRecipe__buttons">
                    <button className="deleteRecipe__button cancelbtn" onClick={()=> navigate(-1)}>Cancel</button>
                    
                    <div className="deleteRecipe__buttonBox">
                        <button className="deleteRecipe__button deletebtn" onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Delete;