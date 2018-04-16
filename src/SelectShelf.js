import React, { Component } from 'react'
import PropTypes from 'prop-types'
/*
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
*/

class SelectShelf extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    bookshelf: PropTypes.string.isRequired,
    onShelfChange: PropTypes.func.isRequired
  }

  onShelfChange(event){
    this.props.onShelfChange(this.props.book, event.target.value)
  }

  render() {
    const { bookshelf } = this.props

    return (
    <div className="book-shelf-changer">
      <select value={bookshelf} onChange={(e) => this.onShelfChange(e)}>
        <option value="none" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
/*
      <DropDownMenu value={this.state.value} onChange={this.handleChange}>
        <MenuItem value="none" disabled="true" primaryText="Move to..." />
        <MenuItem value="currentlyReading" primaryText="Currently Reading" />
        <MenuItem value="wantToRead" primaryText="Want to Read" />
        <MenuItem value="read" primaryText="Read" />
        <MenuItem value="none" primaryText="None" />
      </DropDownMenu>
*/
    )}
}

export default SelectShelf
