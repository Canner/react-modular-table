import React from 'react';
import {expect} from 'chai';
import {DivRow, DivCell} from 'ModularTable';
import {mount} from 'enzyme';

describe('DivRow', function() {
  it('expect render a DivRow', () => {
    const wrapper = mount(<DivRow height={350} width={350} rowHeight={100}/>);
    expect(wrapper).to.have.style('width').equal('100%');
    expect(wrapper).to.have.style('minHeight').equal('100px');
    expect(wrapper).to.have.style('boxSizing').equal('inherit');
    expect(wrapper).to.have.style('MozBoxSizing').equal('inherit');
    expect(wrapper).to.have.style('WebkitBoxSizing').equal('inherit');
    expect(wrapper).to.have.style('display').equal('table-row');
    expect(wrapper).to.have.style('verticalAlign').equal('top');
  });

  it('expect outer div have cusomize style in DivRow', () => {
    const wrapper = mount(<DivRow outerStyle={{border: '1px solid #CCC'}}/>);
    expect(wrapper).to.have.style('border')
      .equal('1px solid rgb(204, 204, 204)');
  });

  it('expect inner div have cusomize style in DivRow', () => {
    const wrapper = mount(<DivRow style={{border: '1px solid #CCC'}}/>);
    expect(wrapper.children()).to.have.style('border')
      .equal('1px solid rgb(204, 204, 204)');
  });

  it('should pass props to outer div in DivRow', () => {
    const wrapper = mount(<DivRow foo={'bar'}/>);
    expect(wrapper).to.have.prop('foo').equal('bar');
  });

  it('should pass data-rowHeight attribute in DivRow', () => {
    const wrapper = mount(<DivRow rowHeight={100}/>);
    expect(wrapper).to.have.attr('data-rowHeight').equal('100');
  });
});

describe('DivRow: Cell', function() {
  it('expect render a DivCell in DivRow', () => {
    const wrapper = mount(<DivRow height={350} width={350} rowHeight={100}>
      <DivCell/>
    </DivRow>);
    expect(wrapper).to.have.style('width').equal('100%');
    expect(wrapper).to.have.style('minHeight').equal('100px');
    expect(wrapper).to.have.style('boxSizing').equal('inherit');
    expect(wrapper).to.have.style('MozBoxSizing').equal('inherit');
    expect(wrapper).to.have.style('WebkitBoxSizing').equal('inherit');
    expect(wrapper).to.have.style('display').equal('table-row');
    expect(wrapper).to.have.style('verticalAlign').equal('top');
    // find DivRow
    const wrapperCell = wrapper.find('DivCell');
    expect(wrapperCell).to.have.length(1);
    expect(wrapperCell).to.have.prop('rowHeight').equal(100);
    expect(wrapperCell).to.have.prop('cellWidth').equal(350);
    expect(wrapperCell).to.have.style('display').equal('table-cell');
    expect(wrapperCell).to.have.style('boxSizing').equal('inherit');
    expect(wrapperCell).to.have.style('MozBoxSizing').equal('inherit');
    expect(wrapperCell).to.have.style('WebkitBoxSizing').equal('inherit');
    expect(wrapperCell).to.have.style('verticalAlign').equal('top');
    expect(wrapperCell).to.have.style('wordBreak').equal('break-all');
    // find inner div in DivRow
    const wrapperInnerCellDiv = wrapper.find('DivCell').children();
    expect(wrapperInnerCellDiv).to.have.length(1);
    expect(wrapperInnerCellDiv).to.have.style('height').equal('100%');
    expect(wrapperInnerCellDiv).to.have.style('width').equal('100%');
    expect(wrapperInnerCellDiv).to.have.style('boxSizing').equal('border-box');
    expect(wrapperInnerCellDiv).to.have.style('MozBoxSizing')
      .equal('border-box');
    expect(wrapperInnerCellDiv).to.have.style('WebkitBoxSizing')
      .equal('border-box');
  });

  it('expect render multiple DivRow in DivCell', () => {
    const wrapper = mount(<DivRow height={350} width={350} rowHeight={100}>
      <DivCell/><DivCell/>
    </DivRow>);
    const wrapperCell = wrapper.find('DivCell');
    expect(wrapperCell).to.have.length(2);
    expect(wrapperCell.at(0)).to.have.prop('rowHeight').equal(100);
    expect(wrapperCell.at(0)).to.have.prop('cellWidth').equal(175);
    expect(wrapperCell.at(0)).to.have.style('minHeight').equal('100px');
    expect(wrapperCell.at(0)).to.have.style('width').equal('175px');
    expect(wrapperCell.at(1)).to.have.prop('rowHeight').equal(100);
    expect(wrapperCell.at(1)).to.have.prop('cellWidth').equal(175);
    expect(wrapperCell.at(1)).to.have.style('minHeight').equal('100px');
    expect(wrapperCell.at(1)).to.have.style('width').equal('175px');
  });
});
