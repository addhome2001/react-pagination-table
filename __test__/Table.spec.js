import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import DataTable from '../src/Table-Pagination';

const defaultData = [
  { name: 'Ben', age: 20, id: 0, phone: ['IPhone6', 'IPhone4'] },
  { name: 'Ken', age: 21, id: 1, phone: ['IPhone7', 'IPhone3'] },
  { name: 'Ran', age: 22, id: 2, phone: ['Desire 820', 'Note 7'] },
  { name: 'Judy', age: 23, id: 3, phone: ['IPhone2', 'ONE', 'J7'] },
  { name: 'Raf', age: 24, id: 4, phone: ['IPhone5'] },
  { name: 'Bin', age: 25, id: 5, phone: ['HTC10', 'Note 7'] },
  { name: 'Echo', age: 26, id: 6, phone: ['Desire 820', 'J7'] },
];

const defaultTable = {
  columns: 'name.age.id',
  headers: ['Name', 'Age', 'ID'],
};

const paginationOption = {
  perPageItemCount: 2,
  totalCount: defaultData.length,
};

const arrayOption = {
  arrayOption: [['phone', 'all', ' ']],
  columns: 'name.age.id.phone',
  headers: ['Name', 'Age', 'ID', 'Phone'],
};

const shallowComponent = props =>
  shallow(<DataTable { ...props } data={ defaultData } />);

describe('Test Table', () => {
  it('correct props', () => {
    const wrapper = shallowComponent(defaultTable);
    const props = wrapper.instance().props;
    expect(props).eql({
      columns: 'name.age.id.phone',
      headers: ['Name', 'Age', 'ID', 'Phone'],
      arrayOption: [['phone', 'all', ' ']],
      perPageItemCount: 2,
      totalCount: 7,
      data: [
        { name: 'Ben', age: 20, id: 0, phone: ['IPhone6', 'IPhone4'] },
        { name: 'Ken', age: 21, id: 1, phone: ['IPhone7', 'IPhone3'] },
        { name: 'Ran', age: 22, id: 2, phone: ['Desire 820', 'Note 7'] },
        { name: 'Judy', age: 23, id: 3, phone: ['IPhone2', 'ONE', 'J7'] },
        { name: 'Raf', age: 24, id: 4, phone: ['IPhone5'] },
        { name: 'Bin', age: 25, id: 5, phone: ['HTC10', 'Note 7'] },
        { name: 'Echo', age: 26, id: 6, phone: ['Desire 820', 'J7'] },
      ],
      title: '',
      subTitle: '',
      className: 'react-pagination-table',
      nextPageText: 'Next',
      prePageText: 'Prev',
      paginationClassName: 'pagination-status',
    });
  });

  it('information(prePageText, nextPageText)', () => {
    const wrapper = shallowComponent(Object.assign(defaultTable, {
      nextPageText: 'Next',
      prePageText: 'Prev',
    }));
    const Pagination = wrapper.find('Pagination');

    expect(Pagination.prop('nextPageText')).to.equal('Next');
    expect(Pagination.prop('prePageText')).to.equal('Prev');
    expect(Pagination.dive().find('a').first().text()).to.equal('Prev');
    expect(Pagination.dive().find('a').last().text()).to.equal('Next');
  });

  it('information(title, subTitle, header)', () => {
    const wrapper = shallowComponent(Object.assign(defaultTable, {
      title: 'Test Title',
      subTitle: 'Test subTitle',
    }));
    const headers = wrapper.find('Header').prop('headers');

    expect(headers).to.eql(defaultTable.headers);
    expect(wrapper.find('h4').at(0).text()).to.equal('Test Title');
    expect(wrapper.find('h4').at(1).text()).to.equal('Test subTitle');
  });

  describe('Test defaultTable', () => {
    const wrapper = shallowComponent(defaultTable);

    it('without Pagination', () => {
      expect(wrapper.find('Pagination')).to.have.length(0);
    });

    it('render all data', () => {
      const tdData = wrapper.find('tbody tr').at(0).children('td').map(node => node.text());

      expect(wrapper.find('tbody tr')).to.have.length(defaultData.length);
      expect(tdData).to.eql(['Ben', '20', '0']);
    });
  });

  describe('Test arrayOption', () => {
    const wrapper = shallowComponent(Object.assign(defaultTable, arrayOption));

    it('information(header)', () => {
      const headers = wrapper.find('Header').prop('headers');
      expect(headers).to.eql(arrayOption.headers);
    });

    it('with arrayOption', () => {
      expect(wrapper.find('tbody tr').at(0).find('td').last()
        .text()).to.equal('IPhone6 IPhone4');
      expect(wrapper.find('tbody tr').at(1).find('td').last()
        .text()).to.equal('IPhone7 IPhone3');
      expect(wrapper.find('tbody tr').at(3).find('td').last()
        .text()).to.equal('IPhone2 ONE J7');
      expect(wrapper.find('tbody tr').at(4).find('td').last()
        .text()).to.equal('IPhone5');
      expect(wrapper.find('tbody tr').at(5).find('td').last()
        .text()).to.equal('HTC10 Note 7');
      expect(wrapper.find('tbody tr').at(6).find('td').last()
        .text()).to.equal('Desire 820 J7');

      wrapper.setProps({ arrayOption: [['phone', '0', ' ']] });
      expect(wrapper.find('tbody tr').at(2).find('td').last()
        .text()).to.equal('Desire 820');
      expect(wrapper.find('tbody tr').at(3).find('td').last()
        .text()).to.equal('IPhone2');
      expect(wrapper.find('tbody tr').at(4).find('td').last()
        .text()).to.equal('IPhone5');
    });
  });

  describe('Test paginationTable', () => {
    const wrapper = shallowComponent(Object.assign(defaultTable, paginationOption));

    it('with paginationTable', () => {
      expect(wrapper.find('.clearfix').children()).to.have.length(1);
    });

    it('modified activePage', () => {
      expect(wrapper.find('tbody td').at(0).text()).to.equal('Ben');
      wrapper.setState({ activePage: 2 });
      expect(wrapper.find('tbody td').at(0).text()).to.equal('Raf');
      wrapper.setState({ activePage: 3 });
      expect(wrapper.find('tbody td').at(0).text()).to.equal('Echo');
      wrapper.setState({ activePage: 4 });
      expect(wrapper.find('tbody td').at(0).text()).to.equal('Ben');
    });
  });
});
