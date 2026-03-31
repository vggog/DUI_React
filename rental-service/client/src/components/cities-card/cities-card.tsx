import {type Dispatch, type SetStateAction, useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {AppRoute, AuthorizationStatus} from "../../constants.ts";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {toggleFavoriteAction} from "../../store/api-actions.ts";

type CitiesCardProps = {
    id: string;
    title: string;
    type: string;
    price: number;
    isPremium: boolean;
    previewImage: string;
    rating: number;
    isFavorite: boolean;
    setSelectPoint: Dispatch<SetStateAction<string | null>>
}

function CitiesCard({ id, title, type, price, previewImage, isPremium, rating, setSelectPoint, isFavorite }: CitiesCardProps) {
    const dispatch = useAppDispatch();
    const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
    const [isLocalFavorite, setIsLocalFavorite] = useState(isFavorite);
    const isAuth = authorizationStatus === AuthorizationStatus.Auth;

    useEffect(() => {
        setIsLocalFavorite(isFavorite);
    }, [isFavorite]);

    const handleToggleFavorite = async (e: React.MouseEvent) => {
        e.preventDefault();
        if (!isAuth) {
            return;
        }

        try {
            const result = await dispatch(toggleFavoriteAction(id)).unwrap();
            setIsLocalFavorite(result.isFavorite);
        } catch (error) {
            console.error('Failed to toggle favorite:', error);
        }
    };
    return(
        <article
            className="cities__card place-card"
            onMouseEnter={() => setSelectPoint(id)}
            onMouseLeave={() => setSelectPoint(null)}
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

                    <button
                        className={`place-card__bookmark-button button ${isLocalFavorite ? 'place-card__bookmark-button--active' : ''}`}
                        type="button"
                        onClick={handleToggleFavorite}
                    >
                        <svg className="place-card__bookmark-icon" width="18" height="19">
                            <use href="/img/sprite.svg#icon-bookmark"></use>

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
