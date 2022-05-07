import ReviewsList from './ReviewsList';
import {mockReview} from '../../testMocks';
import {render, screen} from '@testing-library/react';

const reviews = [mockReview];

describe('Component: ReviewsList', () => {
  it('should render correctly', () => {

    render(
      <ReviewsList reviews={reviews}/>,
    );

    expect(screen.getByTestId('reviews-list')).toBeInTheDocument();
  });
});
