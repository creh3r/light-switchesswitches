// eslint-disable-next-line import/no-unresolved
import { shallow } from 'enzyme';
import React from 'react';
import Tile from './Tile';

describe('<Tile /> component', () => {
  it('... should match snapshot', () => {
    const wrapper = shallow(<Tile />);
    expect(wrapper).toMatchSnapshot();
  });
});
