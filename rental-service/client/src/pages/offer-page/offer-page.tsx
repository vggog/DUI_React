import {Header} from "../../components/header/header.tsx";
import type {FullOffer} from "../../types/offer.ts";
import {useParams} from "react-router-dom";
import {NotFound} from "../../components/not-found/not-found.tsx";
import {ReviewForm} from "../../components/review-form/review-form.tsx";
import {ReviewsList} from "../../components/review-list/review-list.component.tsx";
import type {ReviewType} from "../../types/reviews.ts";
import Map from "../../components/map/map.tsx";
import {useEffect, useState} from "react";
import {fetchOfferByIdAction, fetchReviewsAction, addReviewAction, toggleFavoriteAction} from "../../store/api-actions.ts";
import {useAppDispatch, useAppSelector} from "../../hooks/index.ts";
import {AuthorizationStatus} from "../../constants.ts";

function OfferPage() {
    const params = useParams();
    const dispatch = useAppDispatch();
    const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
    const [offer, setOffer] = useState<FullOffer | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [offerReviews, setOfferReviews] = useState<ReviewType[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const isAuth = authorizationStatus === AuthorizationStatus.Auth;

    useEffect(() => {
        if (params.id) {
            setIsLoading(true);

            // Загружаем оффер и отзывы параллельно
            Promise.all([
                dispatch(fetchOfferByIdAction(params.id)).unwrap(),
                dispatch(fetchReviewsAction(params.id)).unwrap()
            ])
                .then(([offerData, reviewsData]) => {
                    setOffer(offerData);
                    setOfferReviews(reviewsData);
                    setIsLoading(false);
                })
                .catch(() => {
                    setIsLoading(false);
                });
        }
    }, [params.id, dispatch]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [params.id]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!offer) {
        return <NotFound />;
    }

    const city = offer.city;
    const points = [offer.location];
    const selectedPoint = offer.location;

    const handleAddReview = async (newReviewData: { rating: number; comment: string }) => {
        if (!offer || isSubmitting) return;

        setIsSubmitting(true);

        try {
            const newReview = await dispatch(addReviewAction({
                offerId: offer.id,
                comment: newReviewData.comment,
                rating: newReviewData.rating
            })).unwrap();

            // Добавляем новый отзыв в начало списка
            setOfferReviews(prevReviews => [newReview, ...prevReviews]);
        } catch (error) {
            console.error('Failed to add review:', error);
            alert('Failed to submit review. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleToggleFavorite = async () => {
        if (!offer || !isAuth) return;

        try {
            const result = await dispatch(toggleFavoriteAction(offer.id)).unwrap();
            setOffer({...offer, isFavorite: result.isFavorite});
        } catch (error) {
            console.error('Failed to toggle favorite:', error);
        }
    };

    return (
        <div className="page">
            <Header />

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
                                <button
                                    className={`offer__bookmark-button button ${offer.isFavorite ? 'offer__bookmark-button--active' : ''}`}
                                    type="button"
                                    onClick={handleToggleFavorite}
                                >
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
                                    <div className={`offer__avatar-wrapper ${offer.host.isPro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`} style={{width: '74px', height: '74px', overflow: 'hidden', borderRadius: '50%'}}>
                                        <img className="offer__avatar user__avatar" src={offer.host.avatarUrl}
                                             width="74" height="74" alt="Host avatar" style={{objectFit: 'cover', width: '100%', height: '100%'}}/>
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

                                {isAuth && <ReviewForm onReviewAdded={handleAddReview} />}
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
                {/* Nearby offers section removed - to be implemented with API */}
            </main>
        </div>
    )
}

export { OfferPage };