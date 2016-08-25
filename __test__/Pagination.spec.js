import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon';

import Pagination from '../src/Pagination.js';

const shallowComponent = (props) => {
    return shallow(<Pagination {...props} perPageItemCount={ 10 } totalCount={ 40 } />);
};

const mountComponent = (props) => {
    return mount(<Pagination {...props} perPageItemCount={ 10 } totalCount={ 30 } activePage={ 0 } />);
};

describe('Test Pagination', () => {

    it('should have props', () => {
        const wrapper = shallowComponent();

        expect(wrapper.props().handleChangePage).to.be.defined;
        expect(wrapper.props().activePage).to.be.defined;
        expect(wrapper.props().totalCount).to.be.defined;
        expect(wrapper.props().perPageItemCount).to.be.defined;
        expect(wrapper.props().nextPageText).to.be.defined;
        expect(wrapper.props().prePageText).to.be.defined;
    });

    it('should apply class .active by defaultProps: activePage', () => {
        const wrapper = shallowComponent({ activePage: 2 });
        expect(wrapper.find('.react-pagination-status').childAt(3).hasClass('active')).to.equal(true);
    });

    it('should have correct number of button', () => {
        const defaultProps = {
            prePageText: "prev",
            nextPageText: "next"
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
        const handleChanger = spy();
        const wrapper = mountComponent({ handleChangePage: handleChanger });

        /* Click Prev Button */
        wrapper.find('.react-pagination-status').children('li').first().simulate('click');
        expect(handleChanger.callCount).to.equal(1);
        expect(handleChanger.calledWith(2)).to.equal(true);

        /* Click Next Button */
        wrapper.find('.react-pagination-status').children('li').last().simulate('click');
        expect(handleChanger.callCount).to.equal(2);
        expect(handleChanger.calledWith(1)).to.equal(true);
    });


    it('should trigger handleChangePage when click page button and apply active css', () => {
        const handleChanger = spy();
        const wrapper = mountComponent({ handleChangePage: handleChanger });

        wrapper.find('.react-pagination-status').childAt(2).simulate('click');
        expect(handleChanger.callCount).to.equal(1);
        expect(handleChanger.calledWith(1)).to.equal(true);
        wrapper.setProps({ activePage: 1 });
        expect(wrapper.find('.react-pagination-status').childAt(2).hasClass('active')).to.equal(true);

        wrapper.find('.react-pagination-status').childAt(3).simulate('click');
        expect(handleChanger.callCount).to.equal(2);
        expect(handleChanger.calledWith(2)).to.equal(true);
        wrapper.setProps({ activePage: 2 });
        expect(wrapper.find('.react-pagination-status').childAt(3).hasClass('active')).to.equal(true);

    });

});
