import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Body from '../../src/Components/Body';

const defaultProps = {};

const shallowComponent = (props = defaultProps) =>
  shallow(<div>{ Body(props) }</div>);

describe('Test Components -> Body', () => {
  it('should transfer all properties correct', () => {
    const data = [
      { name: 'Ben', age: 20, size: ['M', 'L'] },
      { name: 'Ken', age: 20, size: ['S', 'L'] },
      { name: 'Jay', age: 20, size: ['M'] },
    ];
    const wrapper = shallowComponent({ arrayOption: ['size'], columns: 'name.age.size', data });
    const findTd = index => wrapper.find('tr').at(index);
    expect(findTd(0).children().map(n => n.text())).to.eql(['Ben', '20', 'ML']);
    expect(findTd(1).children().map(n => n.text())).to.eql(['Ken', '20', 'SL']);
    expect(findTd(2).children().map(n => n.text())).to.eql(['Jay', '20', 'M']);
  });

  it('should transfer all properties to string if not provide arrayOption', () => {
    const data = [
      { name: 'Ben', age: 20, size: ['M', 'L'] },
      { name: 'Ken', age: 20, size: ['S', 'L'] },
      { name: 'Jay', age: 20, size: ['M'] },
    ];
    const wrapper = shallowComponent({ columns: 'name.age.size', data });
    const findTd = index => wrapper.find('tr').at(index);
    expect(findTd(0).children().map(n => n.text())).to.eql(['Ben', '20', 'ML']);
    expect(findTd(1).children().map(n => n.text())).to.eql(['Ken', '20', 'SL']);
    expect(findTd(2).children().map(n => n.text())).to.eql(['Jay', '20', 'M']);
  });

  it('should throw Error if dose\'t provide columns', () => {
    const data = [
      { name: 'Ben', age: 20, size: ['M', 'L'] },
      { name: 'Ken', age: 20, size: ['S', 'L'] },
      { name: 'Jay', age: 20, size: ['M'] },
    ];
    expect(() => Body({ data })).throw('Can\'t reslove columns property.');
  });

  it('should throw Error if dose\'t provide data', () => {
    expect(Body).throw('Can\'t reslove data property.');
  });
});
