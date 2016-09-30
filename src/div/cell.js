import React, {Component, PropTypes} from 'react';
import Radium from 'radium';

@Radium
export default class DivCell extends Component {
  static propTypes = {
    outterStyle: PropTypes.object,
    style: PropTypes.object,
    rowHeight: PropTypes.number,
    cellWidth: PropTypes.number,
    children: PropTypes.node
  };

  static displayName = 'DivCell';

  render() {
    const {
      outterStyle,
      style,
      rowHeight,
      cellWidth,
      children,
      ...rest
    } = this.props;

    const defaultOutterStyle = {
      width: cellWidth,
      height: rowHeight,
      boxSizing: 'inherit',
      MozBoxSizing: 'inherit',
      WebkitBoxSizing: 'inherit',
      display: 'table-cell',
      verticalAlign: 'top',
      wordBreak: 'break-all'
    };

    const defaultInnerStyle = {
      width: '100%',
      height: '100%',
      boxSizing: 'border-box',
      MozBoxSizing: 'border-box',
      WebkitBoxSizing: 'border-box'
    };

    return (
      <div style={[defaultOutterStyle, outterStyle]} {...rest}>
        <div style={[defaultInnerStyle, style]}>
          {children}
        </div>
      </div>
    );
  }
}
