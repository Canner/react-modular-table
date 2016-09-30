import React, {Component, PropTypes} from 'react';
import warning from 'warning';
import Radium from 'radium';

@Radium
export default class DivRow extends Component {
  constructor(props) {
    super(props);

    this.validColumnChildren = this.validColumnChildren.bind(this);
  }

  static propTypes = {
    outterStyle: PropTypes.object,
    style: PropTypes.object,
    width: PropTypes.number,
    height: PropTypes.number,
    rowHeight: PropTypes.number,
    children: PropTypes.node
  };

  static displayName = 'DivRow';

  validColumnChildren(children) {
    const {
      rowHeight,
      width
    } = this.props;
    let rows = [];
    let i = 0;

    if (!children) {
      return;
    }
    const amountChildren = children.length;

    React.Children.forEach(children, child => {
      if (child === null) {
        return;
      }

      let displayName = React.isValidElement(child) ?
        child.type.displayName : '';

      warning(displayName === 'DivCell',
        "Inside DivRow component should only have 'DivCell' component as children"); // eslint-disable-line max-len

      rows.push(React.cloneElement(child, {
        rowHeight,
        key: ++i,
        cellWidth: width / amountChildren
      }));
    });

    return rows;
  }

  render() {
    const {
      outterStyle,
      style,
      rowHeight,
      children
    } = this.props;

    const defaultOutterStyle = {
      width: '100%',
      height: rowHeight,
      display: 'table-row',
      verticalAlign: 'top',
      boxSizing: 'inherit',
      MozBoxSizing: 'inherit',
      WebkitBoxSizing: 'inherit'
    };

    const defaultInnerStyle = {
      width: 'auto',
      height: 'auto'
    };

    return (
      <div style={[defaultOutterStyle, outterStyle]}>
        <div style={[defaultInnerStyle, style]}>
          {this.validColumnChildren(children)}
        </div>
      </div>
    );
  }
}
