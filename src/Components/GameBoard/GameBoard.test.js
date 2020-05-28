import React from 'react';
import { GameBoard } from './GameBoard';
import { shallow } from 'enzyme';

describe('GameBoard', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<GameBoard />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
