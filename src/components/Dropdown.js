/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";

import DropdownItem from "./DropdownItem";
import icons from "../icons";


class Dropdown extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.preventSelection = this.preventSelection.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  onChange(selected) {
    this.props.onChange(selected);
  }

  renderItem(item) {
    return(
      <li key={item.key}>
        <DropdownItem item={item}
          className="dropdown__option"
          onClick={() => this.onChange(item.key)} />
      </li>
    );
  }

  preventSelection(event) {
    event.preventDefault();
  }

  toggleDropDown(event) {
    this.setState({isOpen: !this.state.isOpen});
  }

  handleDocumentClick(event) {
    if (!ReactDOM.findDOMNode(this).contains(event.target)) {
      this.setState({isOpen: false});
    }
  }

  componentDidMount () {
    document.addEventListener("click", this.handleDocumentClick, false);
  }

  componentWillUnmount () {
    document.removeEventListener("click", this.handleDocumentClick, false);
  }

  render() {
    const selectedItem = this.props.items.filter(
      (obj) => {return obj.key === this.props.selected;}
    )[0];

    const {isOpen} = this.state;

    const wrapperClassName = classNames("dropdown__wrapper", {
      "dropdown__wrapper--open": isOpen
    });

    const dropdownClassName = classNames("dropdown", {
      "dropdown--open": isOpen
    });

    const arrowClassName = classNames("dropdown__arrow", {
      "dropdown__arrow--open": isOpen
    });

    return(
      <div className={wrapperClassName} onClick={this.toggleDropDown}>
        <DropdownItem
          item={selectedItem}
          className="dropdown__item--selected"
          onMouseDown={this.preventSelection}>

          <icons.DropdownArrow className={arrowClassName} />
        </DropdownItem>

        <ul className={dropdownClassName}>
          {this.props.items.map(this.renderItem)}
        </ul>
      </div>
    );
  }
}

Dropdown.propTypes = {
  item: React.PropTypes.shape({
    key: PropTypes.string.isRequired,
    icon: PropTypes.func.isRequired,
    action: PropTypes.func.isRequired
  })
}

export default Dropdown;
