import React from 'react';
import { ScoreBoard } from './ScoreBoard';
import { shallow } from 'enzyme';

describe('ScoreBoard', () => {

  let wrapper;

  beforeEach(() => {
    const mockProps = {
     roundCount: 0,
     startGame: jest.fn(),
     playerClickDisplay: 0,
     randomNumArray: [1, 0, 3, 1, 2, 0, 2, 1, 0, 2]
    }
      wrapper = shallow(<ScoreBoard {...mockProps}/>);
    })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
