import React, { Component } from 'react'
import './App.css'
import STATICBOOKS from './staticBooks'
import ListShelf from './ListShelf'
//import * as BooksAPI from './BooksAPI'


class App extends Component {
  state = {
      /**
       * TODO: Instead of using this state variable to keep track of which page
       * we're on, use the URL in the browser's address bar. This will ensure that
       * users can use the browser's back and forward buttons to navigate between
       * pages, as well as provide a good URL they can bookmark and share.
       */
      showSearchPage: false,
      books: STATICBOOKS
  }

  onShelfChangeHandler = (book, shelf) => {
    if (shelf !== book.bookshelf) {
      let newState = this.state.books.filter((b) => (b.id !== book.id))
      let updatedBook = book
      updatedBook['bookshelf'] = shelf
      newState.push(updatedBook)
      this.setState({books: newState})
    }
  };

  render() {
    return (
      <div className="App">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books">
          <div className="list-books-content">
            <div>
              <ListShelf
                books={this.state.books}
                bookshelf="Currently Reading"
                onShelfChange={
                  (book, shelf) => this.onShelfChangeHandler(book, shelf)}/>
              <ListShelf
                books={this.state.books}
                bookshelf="Want To Read"
                onShelfChange={
                  (book, shelf) => this.onShelfChangeHandler(book, shelf)}/>
              <ListShelf
                books={this.state.books}
                bookshelf="Read"
                onShelfChange={
                  (book, shelf) => this.onShelfChangeHandler(book, shelf)}/>
          </div>
          </div>
          <div className="open-search">
            <a onClick={() => this.setState({ showSearchPage: true })}>
              Add a book
            </a>
          </div>
        </div>
      </div>
    )
  };
}


export default App;
