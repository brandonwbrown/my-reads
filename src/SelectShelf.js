import React, { Component } from 'react'
import PropTypes from 'prop-types'
import STATICBOOKS from './staticBooks'
/*
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
*/

class SelectShelf extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    bookshelf: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props)
    //this.setState({value: props.bookshelf})
  }

  handleChange = (event, index, value) => this.setState({value})

  render() {
    const { book, bookshelf } = this.props

    return (
    <div className="book-shelf-changer">
      <select value={bookshelf} onChange={this.handleChange}>
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
