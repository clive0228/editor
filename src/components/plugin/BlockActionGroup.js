/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import React, {Component, PropTypes} from "react";

import BlockAction from "./BlockAction";


class BlockActionGroup extends Component {
  renderItem(item) {
    return(<BlockAction item={item} key={item.key} />);
  }

  render() {
    return(
      <ul className="block__action-group">
        {this.props.items.map(this.renderItem)}
      </ul>
    );
  }
}

BlockActionGroup.propTypes = {
  items: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      key: PropTypes.string.isRequired,
      icon: PropTypes.func.isRequired,
      action: PropTypes.func.isRequired
    })
  )
}

export default BlockActionGroup;