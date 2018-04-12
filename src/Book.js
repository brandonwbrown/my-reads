import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SelectShelf from './SelectShelf'

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    bookshelf: PropTypes.string.isRequired
  }

  render() {
    const { book, bookshelf } = this.props

    return (
      <li key={book.id}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: book.width, height: book.height, backgroundImage: book.backgroundImage }}></div>
              <SelectShelf book={book} bookshelf={bookshelf}/>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.author}</div>
        </div>
      </li>
    )
  }
}


export default Book
