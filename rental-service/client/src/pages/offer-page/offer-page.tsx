import {Logo} from "../../components/logo/logo.tsx";
import type {FullOffer} from "../../types/offer.ts";
import {Link, useParams} from "react-router-dom";
import {NotFound} from "../../components/not-found/not-found.tsx";
import {ReviewForm} from "../../components/review-form/review-form.tsx";
import {ReviewsList} from "../../components/review-list/review-list.component.tsx";
import type {ReviewType, User} from "../../types/reviews.ts";
import Map from "../../components/map/map.tsx";
import {CitiesCardList} from "../../components/cities-card-list/cities-card-list.tsx";
import {mapFullOffersToOffersList} from "../../mocks/offers-list.ts";
import {useEffect, useState} from "react";
import {AppRoute} from "../../constants.ts";

type OfferPageProps = {
    favoriteCount: number,
    offers: FullOffer[],
    reviews: ReviewType[];
};

function OfferPage({favoriteCount, offers, reviews}: OfferPageProps) {
    const params = useParams();
    const offer = offers.find(offer => offer.id === params.id);

    if (!offer) {
        return <NotFound />;
    }

    const [offerReviews, setOfferReviews] = useState<ReviewType[]>(
        reviews.filter(review => review.offerId === offer.id)
    );

    const nearbyOffers: FullOffer[] = offer
        .neighbors
        .map((neighborId) => offers.find((offer) => offer.id === neighborId))
        .filter((offer) => offer !== undefined) as FullOffer[];

    const city = offers.find((offer: FullOffer) => offer.id === params.id)?.city;
    const points = nearbyOffers.map((offer: FullOffer) => offer.location);
    points.push(offer.location);
    const selectedPoint = offer.location;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [params.id]);

    const handleAddReview = (newReviewData: { rating: number; comment: string }) => {
        const currentUser: User = {
            name: "Myemail@gmail.com",
            avatarUrl: "/img/avatar.svg",
            isPro: false
        };

        const newReview: ReviewType = {
            id: Date.now(),
            offerId: offer.id,
            rating: newReviewData.rating,
            comment: newReviewData.comment,
            date: new Date().toISOString(),
            user: currentUser
        };

        setOfferReviews(prevReviews => [newReview, ...prevReviews]);
    };

    return (
        <div className="page">
            <header className="header">
                <div className="container">
                    <div className="header__wrapper">
                        <div className="header__left">
                            <Logo/>
                        </div>
                        <nav className="header__nav">
                            <ul className="header__nav-list">
                                <li className="header__nav-item user">
                                    <Link to={`${AppRoute.Favorites}`} className="header__nav-link header__nav-link--profile">
                                        <div>
                                            <span className="header__user-name user__name">Myemail@gmail.com</span>
                                            <span className="header__favorite-count">{favoriteCount}</span>
                                        </div>
                                    </Link>
                                </li>
                                <li className="header__nav-item">
                                    <a className="header__nav-link" href="#">
                                        <span className="header__signout">Sign out</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>

            <main className="page__main page__main--offer">
                <section className="offer">
                    <div className="offer__gallery-container container">
                        <div className="offer__gallery">
                            {offer.images.map((image) => (
                                <div key={image} className="offer__image-wrapper">
                                    <img className="offer__image" src={image} alt="Photo studio"/>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="offer__container container">
                        <div className="offer__wrapper">
                            {offer.isPremium ? (
                                <div className="offer__mark">
                                    <span>Premium</span>
                                </div>
                            ) : null}
                            <div className="offer__name-wrapper">
                                <h1 className="offer__name">
                                    {offer.title}
                                </h1>
                                <button className="offer__bookmark-button button" type="button">
                                    <svg className="offer__bookmark-icon" width="31" height="33">
                                        <use href="#icon-bookmark"></use>
                                    </svg>
                                    <span className="visually-hidden">To bookmarks</span>
                                </button>
                            </div>
                            <div className="offer__rating rating">
                                <div className="offer__stars rating__stars">
                                    <span style={{width: `${offer.rating * 20}%`}}></span>
                                    <span className="visually-hidden">Rating</span>
                                </div>
                                <span className="offer__rating-value rating__value">{offer.rating}</span>
                            </div>
                            <ul className="offer__features">
                                <li className="offer__feature offer__feature--entire">
                                    {offer.type}
                                </li>
                                <li className="offer__feature offer__feature--bedrooms">
                                    {offer.bedrooms} Bedrooms
                                </li>

                                <li className="offer__feature offer__feature--adults">
                                    Max {offer.maxAdults} adults
                                </li>
                            </ul>
                            <div className="offer__price">
                                <b className="offer__price-value">&euro;{offer.price}</b>
                                <span className="offer__price-text">&nbsp;night</span>
                            </div>
                            <div className="offer__inside">
                                <h2 className="offer__inside-title">What&apos;s inside</h2>
                                <ul className="offer__inside-list">
                                    {offer.goods.map((good) => (
                                        <li key={good} className="offer__inside-item">
                                            {good}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="offer__host">
                                <h2 className="offer__host-title">Meet the host</h2>
                                <div className="offer__host-user user">
                                    <div className={`offer__avatar-wrapper ${offer.host.isPro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                                        <img className="offer__avatar user__avatar" src={offer.host.avatarUrl}
                                             width="74" height="74" alt="Host avatar"/>
                                    </div>
                                    <span className="offer__user-name">
                                        {offer.host.name}
                                    </span>
                                    {offer.host.isPro ? (
                                        <span className="offer__user-status">
                                            Pro
                                        </span>
                                    ) : null}
                                </div>
                                <div className="offer__description">
                                    <p className="offer__text">
                                        {offer.description}
                                    </p>
                                </div>
                            </div>
                            <section className="offer__reviews reviews">
                                <ReviewsList reviews={offerReviews} />

                                <ReviewForm onReviewAdded={handleAddReview} />
                            </section>
                        </div>
                    </div>
                    <section className="offer__map map" style={{width: '1144px', margin: '0 auto', display: 'block'}}>
                        {city && points.length > 0 && (
                            <Map
                                city={city}
                                points={points}
                                selectedPoint={selectedPoint}
                            />
                        )}
                    </section>
                </section>
                <div className="container">
                    <section className="near-places places">
                        <h2 className="near-places__title">Other places in the neighbourhood</h2>
                        <div className="near-places__list places__list">
                            <CitiesCardList
                                offersList={mapFullOffersToOffersList(nearbyOffers)}
                                setSelectPoint={() => {}}
                            />
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}

export { OfferPage };