import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book.js'


class ListShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    bookshelf: PropTypes.string.isRequired,
    shelfname: PropTypes.string.isRequired,
    onShelfChange: PropTypes.func.isRequired
  }

  onShelfChange(book, shelf){
    this.props.onShelfChange(book, shelf)
  }

  render() {
    const { books, bookshelf, shelfname } = this.props

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfname}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books
              .filter((b) => (b.shelf === bookshelf))
              .map((book) => (
                <Book
                  key={book.id}
                  book={book}
                  bookshelf={bookshelf}
                  onShelfChange={
                    (book, shelf) => this.onShelfChange(book, shelf)}/>
            ))}
          </ol>
        </div>
      </div>
    )
  }
};

export default ListShelf
