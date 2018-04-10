import React, { Component } from 'react'
import PropTypes from 'prop-types'
import STATICBOOKS from './staticBooks'
import SelectShelf from './SelectShelf'

class ListShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    bookshelf: PropTypes.string.isRequired,
    shelfDisplayName: PropTypes.string.isRequired
  }

  render() {
    const { books, bookshelf, shelfDisplayName } = this.props

    const showingBooks = books.filter((b) => (
      b.bookshelf === bookshelf
    ))


    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfDisplayName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {showingBooks.map((book) => (
              <li key={book.title}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: book.width, height: book.height, backgroundImage: book.backgroundImage }}></div>
                      <SelectShelf book={book} bookshelf={bookshelf} />
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.author}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default ListShelf
