import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SelectShelf from './SelectShelf'

class ListShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    shelfname: PropTypes.string.isRequired,
    bookshelf: PropTypes.string.isRequired,
    onShelfChange: PropTypes.func.isRequired
  }

  render() {
    const { books, bookshelf, shelfname, onShelfChange } = this.props

    return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{shelfname}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books.filter((b) => (b.bookshelf === shelfname))
                .map((book) => (
                <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: book.width, height: book.height, backgroundImage: book.backgroundImage }}></div>
                        <SelectShelf book={book} bookshelf={book.bookshelf} onShelfChange={() => this.onShelfChange(bookshelf)}/>
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
