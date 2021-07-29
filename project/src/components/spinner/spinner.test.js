import React from 'react';
import {render} from '@testing-library/react';
import Spinner from './spinner';


describe('Component: Spinner', () => {
  it('should render correctly', () => {
    const {getByRole} = render(<Spinner />);
    const mainElement = getByRole('img');
    expect(mainElement).toBeInTheDocument();
    expect(mainElement).toHaveAttribute('alt', 'Wait. It\'s loading..');
  });
});
