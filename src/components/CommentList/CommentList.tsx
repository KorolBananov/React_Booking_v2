import {Reviews} from '../../types/review';
import Comment from '../Comment/Comment';

type CommentListProps = {
  reviews: Reviews;
}

function CommentList({reviews}: CommentListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {
        reviews.map((review) =>
          (
            <Comment review={review} key={review.id}/>
          ))
      }
    </ul>
  );
}

export default CommentList;

