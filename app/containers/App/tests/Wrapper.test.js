import React from 'react';
import { shallow } from 'enzyme';

import Wrapper from '../Wrapper';

describe('<Wrapper />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<Wrapper />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
