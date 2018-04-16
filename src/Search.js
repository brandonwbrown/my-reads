import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book.js'
import { Link } from 'react-router-dom'


class Search extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
  }

  state = {
    searchTerm : ''
  }

  onShelfChange(book, shelf){
    this.props.onShelfChange(book, shelf)
  }

  render() {
    const { books } = this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'></Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author"/>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books
              .map((book) => (
                <Book
                  key={book.id}
                  book={book}
                  bookshelf={book.shelf}
                  onShelfChange={
                    (book, shelf) => this.onShelfChange(book, shelf)}/>
            ))}
          </ol>
        </div>
      </div>
    )
  }
};

export default Search
