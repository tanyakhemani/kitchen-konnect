import "./Card.scss"

const Card = ({ card }) => {

    return(
        <>
            <div className="card">
                <img className="card__img" src={card?.image || "/public/vite.svg"} alt="" />
                <div className="card__title">{card?.title || 'Some title'}</div>
            </div>
        </>
    )
}
export default Card;