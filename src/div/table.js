import React, {Component, PropTypes} from 'react';
import warning from 'warning';
import Radium from 'radium';

@Radium
export default class DivTable extends Component {
  constructor(props) {
    super(props);

    this.validRowChildren = this.validRowChildren.bind(this);
  }

  static propTypes = {
    style: PropTypes.object,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    children: PropTypes.node
  };

  static defaultProps = {
    style: {},
    width: 350,
    height: 350
  };

  validRowChildren(children) {
    const {
      height,
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

      warning(displayName === 'DivRow',
        "Inside DivTable component should only have 'DivRow' component as children"); // eslint-disable-line max-len

      rows.push(React.cloneElement(child, {
        width,
        height,
        key: ++i,
        rowHeight: height / amountChildren
      }));
    });

    return rows;
  }

  render() {
    const {
      style,
      width,
      height,
      children,
      ...rest
    } = this.props;

    const defaultStyle = {
      width: width,
      height: height,
      display: 'table',
      boxSizing: 'border-box',
      MozBoxSizing: 'border-box',
      WebkitBoxSizing: 'border-box'
    };

    return (
      <div style={[defaultStyle]} {...rest}>
        <div style={style}>
          {this.validRowChildren(children)}
        </div>
      </div>
    );
  }
}
