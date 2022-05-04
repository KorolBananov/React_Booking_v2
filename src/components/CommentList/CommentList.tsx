import {Review} from '../../types/review';
import CommentItem from '../CommentItem/CommentItem';
import {lengthOfReviews, sortReviewsDate} from '../../utils';

type CommentListProps = {
  reviews: Review[];
}

function CommentList({reviews}: CommentListProps): JSX.Element {
  const  sortReviews: Review[] = sortReviewsDate(reviews);
  const shownReviews: Review[] = lengthOfReviews(sortReviews);

  return (
    <ul className="reviews__list">
      {shownReviews.map((review) => (
        <CommentItem review={review} key={review.id} />
      ))}
    </ul>
  );
}

export default CommentList;

