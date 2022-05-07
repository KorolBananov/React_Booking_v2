import {SortingOptionsValues} from '../../consts';
import {render, screen} from '@testing-library/react';
import SortOptions from './SortOptions';

describe('Component: SortingOptions', () => {
  it('should render correctly', () => {

    const currentSortingOption = SortingOptionsValues.Popular;

    render(
      <SortOptions sortingOption={currentSortingOption} onOptionChange={() => null}/>,
    );

    expect(screen.getByText('Sort by')).toBeInTheDocument();
  });
});
