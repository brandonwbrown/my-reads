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
  }

  onShelfChangeHandler = (book, event) => {
     const newShelf = event.target.value;
     /* Check if the shelf is actually changed. If it is pass on the callback to onShelfChanged else ignore */
     if (newShelf !== book.bookshelf) {
       console.log(newShelf)
       this.state.books.filter((b) => (b.book === book)).map((b) =>(
         this.setState({b: newShelf})
       ))
     }
  };

  render() {
    const { book, bookshelf } = this.props

    return (
    <div className="book-shelf-changer">
      <select value={bookshelf} onChange={this.onShelfChangeHandler(book)}>
        <option value="none" disabled>Move to...</option>
        <option value="Currently Reading">Currently Reading</option>
        <option value="Want To Read">Want to Read</option>
        <option value="Read">Read</option>
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
