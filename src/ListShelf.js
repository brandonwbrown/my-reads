import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book.js'

class ListShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    bookshelf: PropTypes.string.isRequired
  }

  render() {
    const { books, bookshelf } = this.props

    return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{bookshelf}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books.filter((b) => (b.bookshelf === bookshelf))
                .map((book) => (
                <Book book={book} bookshelf={bookshelf}/>
              ))}
            </ol>
          </div>
        </div>
    )
  }
}

export default ListShelf
