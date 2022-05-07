import { Review } from '../../types/review';
import ReviewItem from '../ReviewItem/ReviewItem';
import {getMaxAmount} from '../../utils';
import {MAX_REVIEWS_AMOUNT} from '../../consts';

type ReviewsListProps = {
  reviews: Review[];
}

function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list" data-testid="reviews-list">
      {reviews.slice(0, getMaxAmount(reviews.length, MAX_REVIEWS_AMOUNT))
        .sort((reviewA: Review, reviewB: Review) => reviewB.date.localeCompare(reviewA.date))
        .map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
    </ul>
  );
}

export default ReviewsList;
