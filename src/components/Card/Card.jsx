import { Link } from "react-router-dom";
import "./Card.scss"

const Card = ({ card }) => {

    return(
        <>
            <Link className="card" to={`/view/${card.id}`}>
                <img className="card__img" src={card?.image || "/public/vite.svg"} alt="" />
                <div className="card__title">{card?.title || 'Some title'}</div>
            </Link>
        </>
    )
}
export default Card;