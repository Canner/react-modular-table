/* eslint-disable max-len */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {DivTable, DivRow, DivCell} from '../src/';

class ModularTableDemo extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }

  onClick(data) {
    this.action.innerHTML = 'Click!';
    // data
    this.row.innerHTML = data.row;
    this.column.innerHTML = data.column;
  }

  onMouseOut() {
    this.action.innerHTML = 'On mouse out!';
    // data
    this.row.innerHTML = 'none';
    this.column.innerHTML = 'none';
  }

  onMouseOver(data) {
    this.action.innerHTML = 'On mouse over!';
    // data
    this.row.innerHTML = data.row;
    this.column.innerHTML = data.column;
  }

  render() {
    const style = {width: '50%', float: 'left'};
    const rowStyle = {border: '1px solid #CCC'};
    const cellStyle = {border: '1px solid #aaa'};

    const onClick = (row, column) => this.onClick({row, column});
    const onMouseOver = (row, column) => this.onMouseOver({row, column});
    const onMouseOut = (row, column) => this.onMouseOut({row, column});

    return (
      <div>
        <div style={style}>
          <DivTable>
            <DivRow style={rowStyle}>
              <DivCell style={cellStyle} onClick={() => onClick(1, 1)} onMouseOver={() => onMouseOver(1, 1)} onMouseOut={() => onMouseOut(1, 1)}>row1, col1</DivCell>
              <DivCell style={cellStyle} onClick={() => onClick(1, 2)} onMouseOver={() => onMouseOver(1, 2)} onMouseOut={() => onMouseOut(1, 2)}>row1, col2</DivCell>
            </DivRow>
            <DivRow style={rowStyle}>
              <DivCell style={cellStyle} onClick={() => onClick(2, 1)} onMouseOver={() => onMouseOver(2, 1)} onMouseOut={() => onMouseOut(2, 1)}>row2, col1</DivCell>
              <DivCell style={cellStyle} onClick={() => onClick(2, 2)} onMouseOver={() => onMouseOver(2, 2)} onMouseOut={() => onMouseOut(2, 2)}>row2, col2</DivCell>
            </DivRow>
          </DivTable>
        </div>

        <div style={style}>
          <div>
            <h3>Action: </h3>
            <hr/>
            <div ref={node => {
              this.action = node;
            }}/>
          </div>

          <div>
            <h3>Data: </h3>
            <hr/>
            <h5>row: </h5>
            <div ref={node => {
              this.row = node;
            }}/>
            <h5>column: </h5>
            <div ref={node => {
              this.column = node;
            }}/>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <ModularTableDemo/>
, document.getElementById('root'));
