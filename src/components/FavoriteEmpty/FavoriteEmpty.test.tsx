import {render, screen} from '@testing-library/react';
import FavoriteEmpty from './FavoriteEmpty';

describe('Component: FavoritesEmpty', () => {
  it('should render correctly', () => {

    render(
      <FavoriteEmpty />,
    );

    expect(screen.getByText('Nothing yet saved.')).toBeInTheDocument();
  });
});
