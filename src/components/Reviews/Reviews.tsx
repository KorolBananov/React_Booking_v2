import {useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getAuthorizationStatus} from '../../store/userData/selector';
import {getReviews} from '../../store/appData/selector';
import {memo, useEffect} from 'react';
import {fetchReviewsAction} from '../../store/apiActions';
import {AuthorizationStatus} from '../../consts';
import ReviewsList from '../ReviewsList/ReviewsList';
import ReviewForm from '../ReviewForm/ReviewForm';

function Reviews(): JSX.Element {
  const params = useParams();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const reviews = useAppSelector(getReviews);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchReviewsAction(params.id));
  }, [dispatch, params.id]);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;
        <span className="reviews__amount">{reviews.length}</span>
      </h2>
      {reviews.length > 0 && <ReviewsList reviews={reviews} />}
      {authorizationStatus === AuthorizationStatus.Auth && <ReviewForm />}
    </section>
  );
}

export default memo(Reviews);
