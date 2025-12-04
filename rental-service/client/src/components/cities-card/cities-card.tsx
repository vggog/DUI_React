import {type Dispatch, type SetStateAction, useState} from "react";
import {Link} from "react-router-dom";
import {AppRoute} from "../../constants.ts";

type CitiesCardProps = {
    id: string;
    title: string;
    type: string;
    price: number;
    isPremium: boolean;
    previewImage: string;
    rating: number;
    setSelectPoint: Dispatch<SetStateAction<string | null>>
}

function CitiesCard({ id, title, type, price, previewImage, isPremium, rating, setSelectPoint }: CitiesCardProps) {
    const [, setOfferId] = useState('');

    return(
        <article
            className="cities__card place-card"
            onMouseEnter={() => setSelectPoint(id)}
            onMouseOver={() => {
                setOfferId(id);
                setSelectPoint(id);
            }}
            onMouseOut={() => setOfferId('')}
        >
            {isPremium ? (
                <div className="place-card__mark">
                    <span>Premium</span>
                </div>) : null}
            <div className="cities__image-wrapper place-card__image-wrapper">
                <Link to={`${AppRoute.Offers}/${id}`}>
                    <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
                </Link>
            </div>
            <div className="place-card__info">
                <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                        <b className="place-card__price-value">&euro;{ price }</b>
                        <span className="place-card__price-text">&#47;&nbsp;night</span>
                    </div>
                    <button className="place-card__bookmark-button button" type="button">
                        <svg className="place-card__bookmark-icon" width="18" height="19">
                            <use href="#icon-bookmark"></use>
                        </svg>
                        <span className="visually-hidden">To bookmarks</span>
                    </button>
                </div>
                <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                        <span style={{width: "80%"}}>{rating}</span>
                        <span className="visually-hidden">Rating</span>
                    </div>
                </div>
                <h2 className="place-card__name">
                    <Link to={`${AppRoute.Offers}/${id}`}>{title}</Link>
                </h2>
                <p className="place-card__type">{type}</p>
            </div>
        </article>
    )
}

export {CitiesCard};
