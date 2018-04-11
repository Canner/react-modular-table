import React, {Component} from 'react';
import {DivTable, DivRow, DivCell} from '../src/';

export default class CustomizeDemo extends Component {
  render() {
    const style = {width: '50%', float: 'left'};
    const rowStyle = {border: '1px solid #CCC'};
    const cellStyle = {border: '1px solid #aaa'};
    return (
      <div>
        <h2>Customize rowHeight and cellWidth demo: </h2>
        <div style={style}>
          <DivTable>
            <DivRow style={rowStyle} rowHeight={20}>
              <DivCell style={cellStyle}>row1, col1</DivCell>
              <DivCell cellWidth={100} style={cellStyle}>row1, col2</DivCell>
            </DivRow>
            <DivRow style={rowStyle}>
              <DivCell cellWidth={100} style={cellStyle}>row2, col1</DivCell>
              <DivCell style={cellStyle}>row2, col2</DivCell>
            </DivRow>
            <DivRow style={rowStyle}>
              <DivCell style={cellStyle}>row2, col1</DivCell>
              <DivCell style={cellStyle}>row2, col2</DivCell>
            </DivRow>
          </DivTable>
        </div>
      </div>
    );
  }
}
