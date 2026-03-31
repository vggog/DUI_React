import type {ReviewType} from "../../types/reviews.ts";

type ReviewProps ={
    review: ReviewType;
}

function Review(props: ReviewProps) {
    const { review } = props;

    return (
        <li className="reviews__item">
        <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper" style={{width: '54px', height: '54px', overflow: 'hidden', borderRadius: '50%'}}>
        <img
            className="reviews__avatar user__avatar"
    src={review.user.avatarUrl}
    width="54"
    height="54"
    alt="Reviews avatar"
            style={{objectFit: 'cover', width: '100%', height: '100%'}}
        />
        </div>
        <span className="reviews__user-name">
        {review.user.name}
        </span>
        </div>
        <div className="reviews__info">
    <div className="reviews__rating rating">
    <div className="reviews__stars rating__stars">
    <span style={{width: `${review.rating * 20}%`}}></span>
    <span className="visually-hidden">Rating</span>
        </div>
        </div>
        <p className="reviews__text">
        {review.comment}
        </p>
        <time className="reviews__time" dateTime={review.date}>
        {new Date(review.date).toLocaleDateString('en-US', {
                month: 'long',
                year: 'numeric'
            })}
        </time>
        </div>
        </li>
);
}

export { Review };