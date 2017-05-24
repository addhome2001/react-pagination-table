import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Body from '../../src/Components/Body';

const defaultProps = {};

const shallowComponent = (props = defaultProps) =>
  shallow(<div>{ Body(props) }</div>);

describe('Test Components -> Body', () => {
  it('transfer all properties', () => {
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

  it('arrayOption dose not exist ', () => {
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
});
