import React from 'react';
import {expect} from 'chai';
import {DivCell} from 'ModularTable';
import {mount} from 'enzyme';

describe('DivCell', function() {
  it('expect render a DivCell', () => {
    const wrapper = mount(<DivCell rowHeight={100} cellWidth={100}/>);
    expect(wrapper).to.have.style('width').equal('100px');
    expect(wrapper).to.have.style('height').equal('100px');
    expect(wrapper).to.have.style('boxSizing').equal('inherit');
    expect(wrapper).to.have.style('MozBoxSizing').equal('inherit');
    expect(wrapper).to.have.style('WebkitBoxSizing').equal('inherit');
    expect(wrapper).to.have.style('display').equal('table-cell');
    expect(wrapper).to.have.style('verticalAlign').equal('top');
    expect(wrapper).to.have.style('wordBreak').equal('break-all');
  });

  it('expect outer div have cusomize style in DivCell', () => {
    const wrapper = mount(<DivCell outerStyle={{border: '1px solid #CCC'}}/>);
    expect(wrapper).to.have.style('border')
      .equal('1px solid rgb(204, 204, 204)');
  });

  it('expect inner div have cusomize style in DivCell', () => {
    const wrapper = mount(<DivCell style={{border: '1px solid #CCC'}}/>);
    expect(wrapper.children()).to.have.style('border')
      .equal('1px solid rgb(204, 204, 204)');
  });

  it('should pass props to outer div in DivCell', () => {
    const wrapper = mount(<DivCell foo={'bar'}/>);
    expect(wrapper).to.have.prop('foo').equal('bar');
  });

  it('should pass data-rowHeight attribute in DivRow', () => {
    const wrapper = mount(<DivCell rowHeight={100}/>);
    expect(wrapper).to.have.attr('data-rowHeight').equal('100');
  });

  it('should pass data-cellWidth attribute in DivRow', () => {
    const wrapper = mount(<DivCell cellWidth={100}/>);
    expect(wrapper).to.have.attr('data-cellWidth').equal('100');
  });
});
