import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SelectShelf from './SelectShelf'

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    bookshelf: PropTypes.string.notRequired,
    onShelfChange: PropTypes.func.isRequired
  }

  onShelfChange(book, shelf){
    this.props.onShelfChange(this.props.book, shelf)
  }

  render() {
    const { book, bookshelf } = this.props

    return (
      <li key={book.id}>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={
                {
                  width: 128,
                  height: 192,
                  backgroundImage: 'url('+book.imageLinks.thumbnail+')'
                }}>
              </div>
              <SelectShelf
                book={book}
                bookshelf={bookshelf}
                onShelfChange={
                  (book, shelf) => this.onShelfChange(book, shelf)}/>
          </div>
          <div className="book-title">
            {book.title}
          </div>
          <div className="book-authors">{
              book.authors.map((a, index) => ((index ? ', ':'') + a))}
          </div>
        </div>
      </li>
    )
  }
};


export default Book
