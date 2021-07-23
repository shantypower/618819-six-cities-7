import React from 'react';
import {render} from '@testing-library/react';
import MainEmpty from './main-empty';


describe('Component: MainEmpty', () => {
  it('should render correctly', () => {
    const {getByText} = render(<MainEmpty/>);
    const mainText = getByText('No places to stay available');
    expect(mainText).toBeInTheDocument();
  });
});
