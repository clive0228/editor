/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import React, {Component, PropTypes} from "react";
import classNames from "classnames";


class DropdownItem extends Component {
  render() {
    const Icon = this.props.item.icon;
    const className = classNames("dropdown__item ", this.props.className);

    return(
      <div
        className={className}
        onClick={this.props.onClick}
        onMouseDown={this.props.onMouseDown}
        onMouseUp={this.props.onMouseDown}>

        <Icon className="dropdown__item__icon" />
        <span className="dropdown__item__text">{this.props.item.label}</span>

        {this.props.children}
      </div>
    );
  }
}

DropdownItem.propTypes = {
  item: PropTypes.object.isRequired,
  style: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  onClick: PropTypes.func
}

export default DropdownItem;