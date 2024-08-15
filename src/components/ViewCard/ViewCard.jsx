import "./ViewCard.scss";

const ViewCard = () => {

    return(
        <>
            <div className="viewCard">
                <div className="viewCard__imgBox">
                    <img className="viewCard__img" src="" alt="Image" />
                </div>
                <div className="viewCard__detailBox">
                    <div className="viewCard__details">
                        <input type="text" className="viewCard__title" placeholder="Title" />
                            <img className="viewCard__delete" src="/src/assets/Icons/icon-delete.svg" alt="Delete Icon" />
                    </div>
                    <div className="viewCard__descriptionBox">
                        <textarea className="viewCard__description" placeholder="Description" />
                            <div className="viewCard__icons">
                                <img className="viewCard__icon" src="/src/assets/Icons/like.svg" alt="Likes Icon" />
                                <img className="viewCard__icon" src="/src/assets/Icons/edit.svg" alt="Edit Icon" />
                                <img className="viewCard__icon viewCard__upload" src="/src/assets/Icons/upload.svg" alt="Upload Icon" />
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ViewCard;