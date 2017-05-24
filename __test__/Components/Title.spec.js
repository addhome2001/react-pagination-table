import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Titles from '../../src/Components/Titles';

const defaultProps = {};

const shallowComponent = (props = defaultProps) =>
  shallow(<div>{ Titles(props) }</div>);

describe('Test Components -> Title', () => {
  it('render both title and subTitle', () => {
    const wrapper = shallowComponent({ title: 'title', subTitle: 'subTitle' });
    expect(wrapper.find('h4').length).to.equal(2);
    expect(wrapper.find('h4').map(n => n.text())).to.eql(['title', 'subTitle']);
  });

  it('only render title', () => {
    const wrapper = shallowComponent({ title: 'title' });
    expect(wrapper.find('h4').length).to.equal(1);
    expect(wrapper.find('h4').map(n => n.text())).to.eql(['title']);
  });

  it('title and subTitle dose not exist', () => {
    const wrapper = shallowComponent({ title: {}, subTitle: [] });
    expect(wrapper.find('h4').length).to.equal(0);
  });
});
