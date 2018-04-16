import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book.js'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'


class Search extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
  }

  state = {
    searchTerm : '',
    displayBooks : this.props.books,
    emptyResult : true
  }

  handleTextChange(e){
    this.setState({searchTerm: e.target.value})
    if(e.target.value){
      BooksAPI.search(e.target.value)
        .then((newBooks) => {
          if(newBooks.error){
            this.setState({emptyResult: true})
          }else{
            console.log("New Books:" + JSON.stringify(newBooks))
            this.setState({displayBooks: newBooks})
          }
        })
    }
  }

  onShelfChange(book, shelf){
    this.props.onShelfChange(book, shelf)
  }

  render() {

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
            <input
              type="text"
              value={this.state.searchTerm}
              onChange={this.handleTextChange.bind(this)}
              placeholder="Search by title or author" />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.displayBooks &&
              this.state.displayBooks.map((book) => (
                <Book
                  key={book.id}
                  book={book}
                  bookshelf={book.shelf}
                  onShelfChange={
                    (book, shelf) => this.onShelfChange(book, shelf)}/>
              ))
            }
          </ol>
        </div>
      </div>
    )
  }
};

export default Search
