import {render, screen} from '@testing-library/react';
import LoadingScreen from './LoadingScreen';

describe('Component: LoadingScreen', () => {
  it('should render correctly', () => {
    render(
      <LoadingScreen />
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
