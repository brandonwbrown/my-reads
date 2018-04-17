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
    displayBooks : [],
    emptyResult : true
  }

  handleTextChange(e){
    this.setState({searchTerm: e.target.value})
    if(e.target.value){
      BooksAPI.search(e.target.value)
        .then((searchResults) => {
          if(searchResults.error){
            this.setState({emptyResult: true})
          }else{
            searchResults.map(result => {
              const book = this.props.books.find(b => b.id === result.id);
              if (book) result.shelf = book.shelf;
              return result;
            })
            this.setState({displayBooks: searchResults, emptyResult: false})
          }
        })
    }else{
      this.setState({emptyResult: true})
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
            <input
              type="text"
              value={this.state.searchTerm}
              onChange={this.handleTextChange.bind(this)}
              placeholder="Search by title or author" />
          </div>
        </div>
        {this.state.emptyResult ?
          (<div className="search-books-results">
            No Results matching your query...
          </div>)
          :
          (<div className="search-books-results">
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
          </div>)
        }
      </div>
    )
  }
};

export default Search
