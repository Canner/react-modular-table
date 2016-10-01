import React from 'react';
import {expect} from 'chai';
import {DivTable, DivRow, DivCell} from 'ModularTable';
import {mount} from 'enzyme';

describe('ModularTable', function() {
  it('expect render a DivTable', () => {
    const wrapper = mount(<DivTable/>);
    expect(wrapper.find('DivTable')).to.have.length(1);
  });

  it('expect render a DivRow', () => {
    const wrapper = mount(<DivRow/>);
    expect(wrapper.find('DivRow')).to.have.length(1);
  });

  it('expect render a DivCell', () => {
    const wrapper = mount(<DivCell/>);
    expect(wrapper.find('DivCell')).to.have.length(1);
  });
});
