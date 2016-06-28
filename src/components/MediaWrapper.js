/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import React, {Component} from "react";


export default class MediaWrapper extends Component {

  constructor(props){
    super(props);

    this._handleFocus = this._handleFocus.bind(this);
    this._handleBlur = this._handleBlur.bind(this);
  }

  _handleFocus() {
    this.props.setReadOnly(true);
  }

  _handleBlur() {
    this.props.setReadOnly(false);
  }

  render() {
    return (
      <div onBlur={this._handleBlur} onFocus={this._handleFocus}>
        {this.props.children}
      </div>
    );
  }
}
