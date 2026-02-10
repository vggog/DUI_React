import {Link} from "react-router-dom";
import {AppRoute} from "../../constants.ts";

type FavoritesCardProps = {
    id: string;
    title: string;
    type: string;
    price: number;
    isPremium: boolean;
    previewImage: string;
    isFavorite: boolean;
    rating: number;
}

function FavoritesCard({ id, title, type, price, previewImage, isPremium, rating, isFavorite }: FavoritesCardProps) {
    return(
        <article className="favorites__card place-card">
            {isPremium ? (
                <div className="place-card__mark">
                    <span>Premium</span>
                </div>) : null}
            <div className="favorites__image-wrapper place-card__image-wrapper">
                <Link to={`${AppRoute.Offers}/${id}`}>
                    <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place image"/>
                </Link>
            </div>
            <div className="favorites__card-info place-card__info">
                <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                        <b className="place-card__price-value">&euro;{ price }</b>
                        <span className="place-card__price-text">&#47;&nbsp;night</span>
                    </div>
                    {/*<button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">*/}
                    {/*    <svg className="place-card__bookmark-icon" width="18" height="19">*/}
                    {/*        <use href="#icon-bookmark"></use>*/}
                    {/*    </svg>*/}
                    {/*    <span className="visually-hidden">In bookmarks</span>*/}
                    {/*</button>*/}

                    <button className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`} type="button">
                        <svg className="place-card__bookmark-icon" width="18" height="19">
                            <use href="/img/sprite.svg#icon-bookmark"></use>
                            {/*<svg width="17" height="18" viewBox="0 0 17 18" xmlns="http://www.w3.org/2000/svg">*/}
                            {/*    <path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"/>*/}
                            {/*</svg>*/}

                        </svg>
                        <span className="visually-hidden">To bookmarks</span>
                    </button>
                </div>
                <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                        <span style={{width: `${rating * 20}%`}}></span>
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

export {FavoritesCard};
