import React from 'react';
import {expect} from 'chai';
import {DivTable, DivRow} from 'ModularTable';
import {mount} from 'enzyme';

describe('DivTable', function() {
  it('expect render a DivTable', () => {
    const wrapper = mount(<DivTable/>);
    expect(wrapper).to.have.style('display').equal('table');
    expect(wrapper).to.have.style('width').equal('350px');
    expect(wrapper).to.have.style('height').equal('350px');
    expect(wrapper).to.have.style('boxSizing').equal('border-box');
    expect(wrapper).to.have.style('MozBoxSizing').equal('border-box');
    expect(wrapper).to.have.style('WebkitBoxSizing').equal('border-box');
    expect(wrapper).to.have.style('borderCollapse').equal('collapse');
  });

  it('expect render a DivTable, with customize width, height', () => {
    const wrapper = mount(<DivTable width={200} height={200}/>);
    expect(wrapper).to.have.style('width').equal('200px');
    expect(wrapper).to.have.style('height').equal('200px');
  });

  it('expect inner div have cusomize style in DivTable', () => {
    const wrapper = mount(<DivTable style={{border: '1px solid #CCC'}}/>);
    expect(wrapper.children()).to.have.style('border')
      .equal('1px solid rgb(204, 204, 204)');
  });

  it('should pass props to outer div in DivTable', () => {
    const wrapper = mount(<DivTable foo={'bar'}/>);
    expect(wrapper).to.have.prop('foo').equal('bar');
  });

  // it('should have warning when DivTable children is not DivRow', () => {
  //   const wrapper = mount(<DivTable><DivCell/></DivTable>);
  //   expect(wrapper).to.throw(warning(false,
  //     "Inside DivTable component should only have 'DivRow' component as children"));
  // });
});

describe('DivTable: Row', function() {
  it('expect render a DivRow in DivTable', () => {
    const wrapper = mount(<DivTable><DivRow/></DivTable>);
    const wrapperTable = wrapper.find('DivTable');
    expect(wrapperTable).to.have.style('display').equal('table');
    expect(wrapperTable).to.have.style('width').equal('350px');
    expect(wrapperTable).to.have.style('height').equal('350px');
    expect(wrapperTable).to.have.style('boxSizing').equal('border-box');
    expect(wrapperTable).to.have.style('MozBoxSizing').equal('border-box');
    expect(wrapperTable).to.have.style('WebkitBoxSizing').equal('border-box');
    expect(wrapperTable).to.have.style('borderCollapse').equal('collapse');
    // find DivRow
    const wrapperRow = wrapper.find('DivRow');
    expect(wrapperRow).to.have.length(1);
    expect(wrapperRow).to.have.prop('height').equal(350);
    expect(wrapperRow).to.have.prop('width').equal(350);
    expect(wrapperRow).to.have.style('display').equal('table-row');
    expect(wrapperRow).to.have.style('boxSizing').equal('inherit');
    expect(wrapperRow).to.have.style('MozBoxSizing').equal('inherit');
    expect(wrapperRow).to.have.style('WebkitBoxSizing').equal('inherit');
    // find inner div in DivRow
    const wrapperInnerRowDiv = wrapper.find('DivRow').children();
    expect(wrapperInnerRowDiv).to.have.length(1);
    expect(wrapperInnerRowDiv).to.have.style('height').equal('auto');
    expect(wrapperInnerRowDiv).to.have.style('width').equal('auto');
    expect(wrapperInnerRowDiv).to.have.style('boxSizing').equal('border-box');
    expect(wrapperInnerRowDiv).to.have.style('MozBoxSizing')
      .equal('border-box');
    expect(wrapperInnerRowDiv).to.have.style('WebkitBoxSizing')
      .equal('border-box');
    // expect(wrapperInnerRowDiv).to.have.style('display').equal('flex');
  });

  it('expect render multiple DivRow in DivTable', () => {
    const wrapper = mount(<DivTable><DivRow/><DivRow/></DivTable>);
    const wrapperRow = wrapper.find('DivRow');
    expect(wrapperRow).to.have.length(2);
    expect(wrapperRow.at(0)).to.have.prop('height').equal(350);
    expect(wrapperRow.at(0)).to.have.prop('width').equal(350);
    expect(wrapperRow.at(0)).to.have.style('height').equal('175px');
    expect(wrapperRow.at(0)).to.have.style('width').equal('100%');
    expect(wrapperRow.at(1)).to.have.prop('height').equal(350);
    expect(wrapperRow.at(1)).to.have.prop('width').equal(350);
    expect(wrapperRow.at(1)).to.have.style('height').equal('175px');
    expect(wrapperRow.at(1)).to.have.style('width').equal('100%');
  });
});
