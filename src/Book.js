import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SelectShelf from './SelectShelf'
import noImage from './img/no-thumbnail-found.jpg';

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    bookshelf: PropTypes.string,
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
                  backgroundImage:
                    (book.imageLinks ?
                    'url('+book.imageLinks.thumbnail+')' :
                    'url('+noImage+')')
              }}>
              </div>
              <SelectShelf
                book={book}
                bookshelf={bookshelf}
                onShelfChange={
                  (book, shelf) => this.onShelfChange(book, shelf)}/>
          </div>
            <div className="book-title">
              {(book.title ? book.title : "Unknown Title")}
            </div>
            <div className="book-authors">
                {(book.authors ?
                    book.authors.map((a, index) => ((index ? ', ':'') + a))
                    : "Unknown Author")}
            </div>
        </div>
      </li>
    )
  }
};


export default Book
