/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import React, {Component, PropTypes} from "react";

class BlockAction extends Component {
  render() {
    const Icon = this.props.item.icon;
    return(
      <li className="block__action" onClick={this.props.item.action}>
        <Icon className="block__action__icon" />
      </li>
    );
  }
}

BlockAction.propTypes = {
  item: React.PropTypes.shape({
    key: PropTypes.string.isRequired,
    icon: PropTypes.func.isRequired,
    action: PropTypes.func.isRequired
  })
}

export default BlockAction;