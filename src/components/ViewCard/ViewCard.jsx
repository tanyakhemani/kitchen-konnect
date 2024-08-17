import { Link } from "react-router-dom";
import "./ViewCard.scss";

const ViewCard = ({recipe}) => {

    return(
        <>
            <div className="viewCard">
                <div className="viewCard__imgBox">
                    <img className="viewCard__img" src="" alt="Image" />
                </div>
                <div className="viewCard__detailBox">
                    <div className="viewCard__details">
                        <Link className="viewCard__titleBox" to={`/view/${recipe.id}`}>
                            <input type="text" className="viewCard__title" placeholder="Title" value={recipe.title} disabled/>
                        </Link>
                        <Link to={`/delete/${recipe.id}`}>
                            <img className="viewCard__delete" src="/src/assets/Icons/icon-delete.svg" alt="Delete Icon" />
                        </Link>
                    </div>
                    <div className="viewCard__descriptionBox">
                        <textarea className="viewCard__description" placeholder="Description" value={recipe.description} disabled/>
                            <div className="viewCard__icons">
                                <img className="viewCard__icon" src="/src/assets/Icons/like.svg" alt="Likes Icon" />
                                <Link to={`/edit/${recipe.id}`}>
                                    <img className="viewCard__icon" src="/src/assets/Icons/edit.svg" alt="Edit Icon" />
                                </Link>
                                <Link to={""}>
                                    <img className="viewCard__icon viewCard__upload" src="/src/assets/Icons/share.svg" alt="Share Icon" />
                                </Link>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ViewCard;