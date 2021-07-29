import React from 'react';
import {render} from '@testing-library/react';
import GoodsList from './goods-list';

const mockFeatures = ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'];

describe('Component: GoodsList', () => {
  it('should render correctly', () => {
    const {getByText} = render(<GoodsList goods={mockFeatures} />);
    mockFeatures.forEach((item) => {
      const itemElement = getByText(item);
      expect(itemElement).toBeInTheDocument();
    });
  });
});
