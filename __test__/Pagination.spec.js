import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon';

import Pagination from '../src/Pagination';

const handleChange = spy();

const shallowComponent = props =>
  shallow(
    <Pagination
      activePage={ 0 }
      perPageItemCount={ 10 }
      totalCount={ 40 }
      handleChangePage={ handleChange }
      { ...props }
    />,
  );

const mountComponent = props =>
  mount(<Pagination { ...props } perPageItemCount={ 10 } totalCount={ 30 } activePage={ 0 } />);

describe('Test Pagination', () => {
  beforeEach(() => {
    handleChange.reset();
  });

  it('should have props', () => {
    const wrapper = shallowComponent();
    expect(wrapper.instance().props).eql({
      activePage: 0,
      totalCount: 40,
      perPageItemCount: 10,
      nextPageText: '下一頁',
      prePageText: '上一頁',
      className: 'react-pagination-status',
      handleChangePage: handleChange,
    });
  });

  it('should apply class .active by defaultProps: activePage', () => {
    const wrapper = shallowComponent({ activePage: 2 });
    expect(wrapper.find('.react-pagination-status').childAt(3).hasClass('active')).to.equal(true);
  });

  it('should have correct number of button', () => {
    const defaultProps = {
      prePageText: 'prev',
      nextPageText: 'next',
    };
    /* perPageItemCount / totalCount */
    const pageCount = 40 / 10;
    const wrapper = shallowComponent(defaultProps);

    expect(wrapper.state('pageCount')).to.equal(pageCount);
    expect(wrapper.find('.react-pagination-status').children('li')).to.have.length(pageCount + 2);
    expect(wrapper.find('.react-pagination-status').children('li').first().text()).to.equal(defaultProps.prePageText);
    expect(wrapper.find('.react-pagination-status').children('li').last().text()).to.equal(defaultProps.nextPageText);
  });

  it('should trigger handleChangePage when click nextPageButton or prePageButton', () => {
    const wrapper = mountComponent({ handleChangePage: handleChange });

    /* Click Prev Button */
    wrapper.find('.react-pagination-status').children('li').first().simulate('click');
    expect(handleChange.callCount).to.equal(1);
    expect(handleChange.calledWith(2)).to.equal(true);

      /* Click Next Button */
    wrapper.find('.react-pagination-status').children('li').last().simulate('click');
    expect(handleChange.callCount).to.equal(2);
    expect(handleChange.calledWith(1)).to.equal(true);
  });


  it('should trigger handleChangePage when click page button and apply active css', () => {
    const wrapper = mountComponent({ handleChangePage: handleChange });

    wrapper.find('.react-pagination-status').childAt(2).simulate('click');
    expect(handleChange.callCount).to.equal(1);
    expect(handleChange.calledWith(1)).to.equal(true);
    wrapper.setProps({ activePage: 1 });
    expect(wrapper.find('.react-pagination-status').childAt(2).hasClass('active')).to.equal(true);

    wrapper.find('.react-pagination-status').childAt(3).simulate('click');
    expect(handleChange.callCount).to.equal(2);
    expect(handleChange.calledWith(2)).to.equal(true);
    wrapper.setProps({ activePage: 2 });
    expect(wrapper.find('.react-pagination-status').childAt(3).hasClass('active')).to.equal(true);
  });
});
