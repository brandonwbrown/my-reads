import React, { Component } from 'react'
import PropTypes from 'prop-types'


class SelectShelf extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    bookshelf: PropTypes.string,
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
          <option disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="None" selected="selected">None</option>
        </select>
      </div>
    )
  }

}

export default SelectShelf
